import { IsString, IsOptional, IsEnum, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApplicationType } from '@prisma/client';

export class CreateApplicationDto {
  @ApiProperty({ 
    enum: ApplicationType, 
    description: 'Type of application',
    example: ApplicationType.PPIU
  })
  @IsEnum(ApplicationType)
  type: ApplicationType;

  @ApiProperty({ 
    description: 'Application title',
    example: 'PPIU Certification for PT. Hajj Umrah Travel'
  })
  @IsString()
  title: string;

  @ApiProperty({ 
    description: 'Application description',
    example: 'Application for PPIU certification for the 2024 season',
    required: false
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ 
    description: 'Application data as JSON object',
    example: {
      companyName: 'PT. Hajj Umrah Travel',
      address: 'Jakarta, Indonesia',
      contactPerson: 'John Doe',
      phone: '+628123456789'
    },
    required: false
  })
  @IsOptional()
  @IsObject()
  data?: any;
}