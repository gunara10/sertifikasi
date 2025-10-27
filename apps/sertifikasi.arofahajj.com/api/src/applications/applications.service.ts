import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../config/prisma.service';
import { Neo4jService } from '../config/neo4j.service';
import { RedisService } from '../config/redis.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { UpdateApplicationStatusDto } from './dto/update-application-status.dto';
import { ApplicationStatus, ActorType, Prisma, $Enums } from '@prisma/client';

@Injectable()
export class ApplicationsService {
  constructor(
    private prisma: PrismaService,
    private neo4j: Neo4jService,
    private redis: RedisService,
  ) {}

  async create(createApplicationDto: CreateApplicationDto, userId: string) {
    const { type, title, description, data } = createApplicationDto;

    // Pastikan type berupa enum Prisma
    const typeEnum = this.toApplicationTypeEnum(type);

    // Generate serial number
    const serialNumber = await this.generateSerialNumber(typeEnum);

    // Create application in PostgreSQL
    const application = await this.prisma.application.create({
      data: {
        userId,
        type: typeEnum,
        title,
        description,
        data,
        serialNumber,
        status: ApplicationStatus.DRAFT,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Create application node in Neo4j
    await this.neo4j.createWorkflowNode('Application', {
      id: application.id,
      serialNumber: application.serialNumber,
      type: application.type,
      title: application.title,
      status: application.status,
      userId: application.userId,
      createdAt: application.createdAt.toISOString(),
    });

    // Create relationship between user and application
    await this.neo4j.createRelationship(
      'User',
      userId,
      'Application',
      application.id,
      'SUBMITTED'
    );

    // Create initial workflow history
    await this.createWorkflowHistory(
      application.id,
      null,
      ApplicationStatus.DRAFT,
      userId,
      ActorType.USER,
      'Application created as draft'
    );

    // Cache the application
    await this.redis.cacheApplication(application.id, application);

    return application;
  }

  async findAll(
    userId?: string,
    page = 1,
    limit = 10,
    status?: ApplicationStatus,
    type?: string,
    search?: string,
  ) {
    const skip = (page - 1) * limit;

    const where: Prisma.ApplicationWhereInput = {};

    if (userId) {
      where.userId = userId;
    }

    if (status) {
      where.status = status;
    }

    if (type) {
      const typeEnum = this.toApplicationTypeEnum(type);
      if (typeEnum) {
        // Prisma 5+: pakai { equals: enum }
        where.type = { equals: typeEnum };
      }
    }

    if (search) {
      const insensitive = Prisma.QueryMode.insensitive;
      where.OR = [
        { title: { contains: search, mode: insensitive } },
        { serialNumber: { contains: search, mode: insensitive } },
        // Nested relation filter ke user HARUS pakai "is"
        { user: { is: { firstName: { contains: search, mode: insensitive } } } },
        { user: { is: { lastName: { contains: search, mode: insensitive } } } },
        { user: { is: { email: { contains: search, mode: insensitive } } } },
      ];
    }

    const [applications, total] = await Promise.all([
      this.prisma.application.findMany({
        where,
        skip,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
            },
          },
          reviewer: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
            },
          },
          documents: {
            select: {
              id: true,
              type: true,
              name: true,
              isRequired: true,
              isVerified: true,
              uploadedAt: true,
            },
          },
          _count: {
            select: {
              documents: true,
              certificates: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.application.count({ where }),
    ]);

    return {
      applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string, userId?: string) {
    // Try to get from cache first
    const cached = await this.redis.getCachedApplication(id);
    if (cached) {
      return cached;
    }

    const application = await this.prisma.application.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
          },
        },
        reviewer: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        documents: {
          orderBy: { uploadedAt: 'desc' },
        },
        certificates: {
          orderBy: { issuedAt: 'desc' },
        },
        workflowHistory: {
          include: {
            // Asumsi: kamu punya relasi actor -> User di model (kalau tidak, hapus block ini)
            actor: {
              select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    // Check access permissions
    if (userId && application.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    // Cache the application
    await this.redis.cacheApplication(id, application);

    return application;
  }

  async update(id: string, updateApplicationDto: UpdateApplicationDto, userId: string) {
    const application = await this.prisma.application.findUnique({
      where: { id },
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    if (application.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    if (application.status !== ApplicationStatus.DRAFT) {
      throw new ForbiddenException('Cannot update submitted application');
    }

    const updatedApplication = await this.prisma.application.update({
      where: { id },
      data: updateApplicationDto,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Update Neo4j node
    await this.neo4j.runQuery(
      `
      MATCH (a:Application {id: $id})
      SET a += $properties, a.updatedAt = datetime()
      RETURN a
      `,
      {
        id,
        properties: {
          title: updatedApplication.title,
          description: updatedApplication.description,
          data: updatedApplication.data,
        },
      }
    );

    // Invalidate cache
    await this.redis.invalidateApplicationCache(id);

    return updatedApplication;
  }

  async submit(id: string, userId: string) {
    const application = await this.prisma.application.findUnique({
      where: { id },
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    if (application.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    if (application.status !== ApplicationStatus.DRAFT) {
      throw new ForbiddenException('Application is already submitted');
    }

    const updatedApplication = await this.prisma.application.update({
      where: { id },
      data: {
        status: ApplicationStatus.SUBMITTED,
        submittedAt: new Date(),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Update workflow state in Neo4j
    await this.neo4j.updateWorkflowState(id, ApplicationStatus.SUBMITTED);

    // Create workflow history
    await this.createWorkflowHistory(
      id,
      ApplicationStatus.DRAFT,
      ApplicationStatus.SUBMITTED,
      userId,
      ActorType.USER,
      'Application submitted for review'
    );

    // Invalidate cache
    await this.redis.invalidateApplicationCache(id);

    return updatedApplication;
  }

  async updateStatus(
    id: string,
    updateStatusDto: UpdateApplicationStatusDto,
    reviewerId: string,
  ) {
    const { status, reason, notes } = updateStatusDto;

    const application = await this.prisma.application.findUnique({
      where: { id },
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    const oldStatus = application.status;

    // Update application
    const updatedApplication = await this.prisma.application.update({
      where: { id },
      data: {
        status,
        reviewerId,
        rejectionReason: reason,
        notes,
        reviewedAt: new Date(),
        ...(status === ApplicationStatus.APPROVED && { approvedAt: new Date() }),
        ...(status === ApplicationStatus.REJECTED && { rejectedAt: new Date() }),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        reviewer: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    // Update workflow state in Neo4j
    await this.neo4j.updateWorkflowState(id, status);

    // Create workflow history
    await this.createWorkflowHistory(
      id,
      oldStatus,
      status,
      reviewerId,
      ActorType.REVIEWER,
      reason || notes || `Status changed to ${status}`
    );

    // If approved, create certificate (placeholder)
    if (status === ApplicationStatus.APPROVED) {
      // Trigger certificate creation job di tempat lain jika sudah ada
      console.log(`Certificate creation triggered for application ${id}`);
    }

    // Invalidate cache
    await this.redis.invalidateApplicationCache(id);

    return updatedApplication;
  }

  async remove(id: string, userId: string) {
    const application = await this.prisma.application.findUnique({
      where: { id },
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    if (application.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    if (application.status !== ApplicationStatus.DRAFT) {
      throw new ForbiddenException('Cannot delete submitted application');
    }

    // Delete from Neo4j
    await this.neo4j.runQuery(
      `
      MATCH (a:Application {id: $id})
      DETACH DELETE a
      `,
      { id }
    );

    // Delete from PostgreSQL (cascade will handle related records)
    await this.prisma.application.delete({
      where: { id },
    });

    // Invalidate cache
    await this.redis.invalidateApplicationCache(id);

    return { message: 'Application deleted successfully' };
  }

  private async generateSerialNumber(type: $Enums.ApplicationType): Promise<string> {
    const year = new Date().getFullYear();
    const prefix = `${type.toUpperCase?.() ?? String(type)}-${year}`;

    const count = await this.prisma.application.count({
      where: {
        type: { equals: type },
        serialNumber: { startsWith: prefix },
      },
    });

    const sequence = String(count + 1).padStart(4, '0');
    return `${prefix}-${sequence}`;
  }

  private async createWorkflowHistory(
    applicationId: string,
    fromStatus: ApplicationStatus | null,
    toStatus: ApplicationStatus,
    actorId: string | null,
    actorType: ActorType,
    reason?: string,
  ) {
    return this.prisma.workflowHistory.create({
      data: {
        applicationId,
        fromStatus,
        toStatus,
        actorId,
        actorType,
        reason,
      },
    });
  }

  async getStatistics(userId?: string) {
    const where: Prisma.ApplicationWhereInput = userId ? { userId } : {};

    const [
      total,
      draft,
      submitted,
      inReview,
      approved,
      rejected,
      certified,
    ] = await Promise.all([
      this.prisma.application.count({ where }),
      this.prisma.application.count({ where: { ...where, status: ApplicationStatus.DRAFT } }),
      this.prisma.application.count({ where: { ...where, status: ApplicationStatus.SUBMITTED } }),
      this.prisma.application.count({ where: { ...where, status: ApplicationStatus.IN_REVIEW } }),
      this.prisma.application.count({ where: { ...where, status: ApplicationStatus.APPROVED } }),
      this.prisma.application.count({ where: { ...where, status: ApplicationStatus.REJECTED } }),
      this.prisma.application.count({ where: { ...where, status: ApplicationStatus.CERTIFIED } }),
    ]);

    return {
      total,
      draft,
      submitted,
      inReview,
      approved,
      rejected,
      certified,
    };
  }

  // Helper untuk konversi string → enum ApplicationType yang valid
  private toApplicationTypeEnum(type?: string | $Enums.ApplicationType): $Enums.ApplicationType | undefined {
    if (!type) return undefined;
    // Jika sudah enum, kembalikan apa adanya
    if (Object.values($Enums.ApplicationType).includes(type as $Enums.ApplicationType)) {
      return type as $Enums.ApplicationType;
    }
    // Normalisasi dari string bebas ke enum (UPPERCASE)
    const c = String(type).toUpperCase() as $Enums.ApplicationType;
    return Object.values($Enums.ApplicationType).includes(c) ? c : undefined;
  }
}
