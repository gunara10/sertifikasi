import { IsEmail, IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john.doe@example.com', description: 'User email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!', description: 'User password (min 8 characters)' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: 'John', description: 'User first name' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'User last name' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: '+628123456789', description: 'User phone number', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'https://example.com/avatar.jpg', description: 'Avatar URL', required: false })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ example: true, description: 'Email verification status', required: false })
  @IsOptional()
  @IsBoolean()
  emailVerified?: boolean;

  @ApiProperty({ example: true, description: 'User active status', required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}