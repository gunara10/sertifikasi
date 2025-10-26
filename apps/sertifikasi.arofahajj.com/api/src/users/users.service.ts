import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../config/prisma.service';
import { Neo4jService } from '../config/neo4j.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private neo4j: Neo4jService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, ...rest } = createUserDto;

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in PostgreSQL
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

    // Create user node in Neo4j
    await this.neo4j.createWorkflowNode('User', {
      id: user.id,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
      createdAt: user.createdAt.toISOString(),
    });

    return user;
  }

  async findAll(page = 1, limit = 10, search?: string) {
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

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
    const { password, ...rest } = updateUserDto;

    const updateData: any = { ...rest };

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

    // Update user node in Neo4j
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
          name: `${user.firstName} ${user.lastName}`,
        },
      }
    );

    return user;
  }

  async remove(id: string) {
    // Check if user has active applications
    const activeApplications = await this.prisma.application.count({
      where: {
        userId: id,
        status: {
          in: ['SUBMITTED', 'IN_REVIEW', 'APPROVED', 'CERTIFIED'],
        },
      },
    });

    if (activeApplications > 0) {
      throw new ConflictException(
        'Cannot delete user with active applications'
      );
    }

    // Delete user node from Neo4j
    await this.neo4j.runQuery(
      `
      MATCH (u:User {id: $id})
      DETACH DELETE u
      `,
      { id }
    );

    // Delete user from PostgreSQL (cascade will handle related records)
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