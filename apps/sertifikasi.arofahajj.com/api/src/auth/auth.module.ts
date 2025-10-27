import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

import { UsersModule } from '../users/users.module';
import { RedisModule } from '../config/redis.module';
import { DatabaseModule } from '../config/database.module';

@Module({
  imports: [
    ConfigModule,        // diperlukan oleh JwtModule.registerAsync
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET') || 'your-secret-key',
        signOptions: { expiresIn: config.get<string>('JWT_EXPIRES_IN') || '24h' },
      }),
      inject: [ConfigService],
    }),
    UsersModule,         // <-- supaya UsersService tersedia
    RedisModule,         // <-- supaya RedisService tersedia
    DatabaseModule,      // opsional (global), eksplisitkan saja
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
