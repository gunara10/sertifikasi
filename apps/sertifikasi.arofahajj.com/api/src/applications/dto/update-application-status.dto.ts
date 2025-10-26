import { IsEnum, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApplicationStatus } from '@prisma/client';

export class UpdateApplicationStatusDto {
  @ApiProperty({ 
    enum: ApplicationStatus, 
    description: 'New application status',
    example: ApplicationStatus.APPROVED
  })
  @IsEnum(ApplicationStatus)
  status: ApplicationStatus;

  @ApiProperty({ 
    description: 'Reason for status change (required for rejection)',
    example: 'Application approved after review',
    required: false
  })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiProperty({ 
    description: 'Additional notes',
    example: 'All documents verified and requirements met',
    required: false
  })
  @IsOptional()
  @IsString()
  notes?: string;
}