import { IsString, IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApplicationDto {
  @ApiProperty({ 
    description: 'Application title',
    example: 'PPIU Certification for PT. Hajj Umrah Travel - Updated',
    required: false
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ 
    description: 'Application description',
    example: 'Updated application for PPIU certification for the 2024 season',
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
      phone: '+628123456789',
      updatedInfo: 'Additional information'
    },
    required: false
  })
  @IsOptional()
  @IsObject()
  data?: any;
}