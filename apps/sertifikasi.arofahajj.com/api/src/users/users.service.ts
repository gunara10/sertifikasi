import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../config/prisma.service';
import { Neo4jService } from '../config/neo4j.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { Prisma, ApplicationStatus } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private neo4j: Neo4jService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, ...rest } = createUserDto;

    // Cek user eksis
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user di PostgreSQL
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        ...rest,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        avatar: true,
        emailVerified: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Buat node user di Neo4j
    await this.neo4j.createWorkflowNode('User', {
      id: user.id,
      email: user.email,
      name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
      createdAt: user.createdAt.toISOString(),
    });

    return user;
  }

  async findAll(page = 1, limit = 10, search?: string) {
    const skip = (page - 1) * limit;

    const where: Prisma.UserWhereInput = {};
    if (search) {
      const mode = Prisma.QueryMode.insensitive;
      where.OR = [
        { firstName: { contains: search, mode } },
        { lastName:  { contains: search, mode } },
        { email:     { contains: search, mode } },
      ];
    }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          avatar: true,
          emailVerified: true,
          isActive: true,
          lastLoginAt: true,
          createdAt: true,
          updatedAt: true,
          _count: {
            select: {
              applications: true,
              certificates: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        avatar: true,
        emailVerified: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
        updatedAt: true,
        applications: {
          select: {
            id: true,
            type: true,
            status: true,
            title: true,
            submittedAt: true,
            approvedAt: true,
          },
          orderBy: { createdAt: 'desc' },
        },
        certificates: {
          select: {
            id: true,
            type: true,
            serialNumber: true,
            title: true,
            issuedAt: true,
            expiresAt: true,
            isActive: true,
          },
          orderBy: { issuedAt: 'desc' },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password, email, ...rest } = updateUserDto;

    // Kalau ganti email, pastikan tidak bentrok dengan user lain
    if (email) {
      const dup = await this.prisma.user.findUnique({ where: { email } });
      if (dup && dup.id !== id) {
        throw new ConflictException('Another user already uses this email');
      }
    }

    const updateData: Prisma.UserUpdateInput = {
      ...rest,
    };

    if (email) updateData.email = email;
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        avatar: true,
        emailVerified: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Update node user di Neo4j
    await this.neo4j.runQuery(
      `
      MATCH (u:User {id: $id})
      SET u += $properties, u.updatedAt = datetime()
      RETURN u
      `,
      {
        id,
        properties: {
          email: user.email,
          name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
        },
      }
    );

    return user;
  }

  async remove(id: string) {
    // Cek apakah user punya aplikasi aktif
    const activeApplications = await this.prisma.application.count({
      where: {
        userId: id,
        status: {
          in: [
            ApplicationStatus.SUBMITTED,
            ApplicationStatus.IN_REVIEW,
            ApplicationStatus.APPROVED,
            ApplicationStatus.CERTIFIED,
          ],
        },
      },
    });

    if (activeApplications > 0) {
      throw new ConflictException(
        'Cannot delete user with active applications'
      );
    }

    // Hapus node user dari Neo4j
    await this.neo4j.runQuery(
      `
      MATCH (u:User {id: $id})
      DETACH DELETE u
      `,
      { id }
    );

    // Hapus user dari PostgreSQL (cascade menangani relasi)
    await this.prisma.user.delete({
      where: { id },
    });

    return { message: 'User deleted successfully' };
  }

  async updateLastLogin(id: string) {
    await this.prisma.user.update({
      where: { id },
      data: { lastLoginAt: new Date() },
    });
  }

  async activateUser(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { isActive: true },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isActive: true,
      },
    });
  }

  async deactivateUser(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { isActive: false },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isActive: true,
      },
    });
  }
}
