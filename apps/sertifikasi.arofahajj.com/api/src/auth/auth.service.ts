import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../config/prisma.service';
import { RedisService } from '../config/redis.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    
    return null;
  }

  async login(loginDto: LoginDto, ipAddress?: string, userAgent?: string) {
    const { email, password } = loginDto;
    
    const user = await this.validateUser(email, password);
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    // Update last login
    await this.usersService.updateLastLogin(user.id);

    // Generate JWT token
    const payload = {
      sub: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      roles: this.getUserRoles(user),
    };

    const token = this.jwtService.sign(payload);

    // Store session in Redis
    const sessionId = `session:${user.id}:${Date.now()}`;
    await this.redis.setSession(sessionId, {
      userId: user.id,
      email: user.email,
      roles: payload.roles,
      ipAddress,
      userAgent,
      loginAt: new Date().toISOString(),
    }, 24 * 60 * 60); // 24 hours

    // Store token in database
    await this.prisma.session.create({
      data: {
        userId: user.id,
        token: sessionId,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      },
    });

    return {
      access_token: token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        avatar: user.avatar,
        emailVerified: user.emailVerified,
        roles: payload.roles,
      },
      sessionId,
    };
  }

  async register(registerDto: RegisterDto, ipAddress?: string, userAgent?: string) {
    const { email, password, firstName, lastName, phone } = registerDto;

    // Check if user already exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Create new user
    const user = await this.usersService.create({
      email,
      password,
      firstName,
      lastName,
      phone,
    });

    // Auto-login after registration
    return this.login({ email, password }, ipAddress, userAgent);
  }

  async logout(sessionId: string) {
    // Remove session from Redis
    await this.redis.deleteSession(sessionId);

    // Remove session from database
    await this.prisma.session.deleteMany({
      where: { token: sessionId },
    });

    return { message: 'Logged out successfully' };
  }

  async refreshToken(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      roles: this.getUserRoles(user),
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateSession(sessionId: string): Promise<any> {
    const session = await this.redis.getSession(sessionId);
    
    if (!session) {
      throw new UnauthorizedException('Session expired or invalid');
    }

    // Check if session exists in database
    const dbSession = await this.prisma.session.findUnique({
      where: { token: sessionId },
      include: { user: true },
    });

    if (!dbSession || dbSession.expiresAt < new Date()) {
      await this.redis.deleteSession(sessionId);
      throw new UnauthorizedException('Session expired');
    }

    return {
      ...session,
      user: dbSession.user,
    };
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    
    await this.prisma.user.update({
      where: { id: userId },
      data: { password: hashedNewPassword },
    });

    // Invalidate all sessions for this user
    await this.prisma.session.deleteMany({
      where: { userId },
    });

    return { message: 'Password changed successfully' };
  }

  private getUserRoles(user: any): string[] {
    // For now, simple role assignment. In production, this could be more complex
    const roles = ['USER'];
    
    // You could add logic here to assign roles based on user properties
    if (user.email?.endsWith('@arofahajj.com')) {
      roles.push('ADMIN');
    }
    
    return roles;
  }

  async getUserSessions(userId: string) {
    return this.prisma.session.findMany({
      where: { userId },
      select: {
        id: true,
        createdAt: true,
        expiresAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async revokeSession(sessionId: string, userId: string) {
    const session = await this.prisma.session.findFirst({
      where: { 
        token: sessionId,
        userId,
      },
    });

    if (!session) {
      throw new UnauthorizedException('Session not found');
    }

    await this.prisma.session.delete({
      where: { id: session.id },
    });

    await this.redis.deleteSession(sessionId);

    return { message: 'Session revoked successfully' };
  }
}