import {
  Controller,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';

@ApiTags('verification')
@Controller('public')
export class VerificationController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get('verify/:serialNumber')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Verify certificate by serial number',
    description: 'Public endpoint to verify certificate authenticity'
  })
  @ApiResponse({ status: 200, description: 'Certificate verified successfully' })
  @ApiResponse({ status: 404, description: 'Certificate not found' })
  async verifyCertificate(@Param('serialNumber') serialNumber: string) {
    try {
      // This would typically query the certificate directly
      // For now, we'll search through applications
      const applications = await this.applicationsService.findAll(
        undefined,
        1,
        1,
        undefined,
        undefined,
        serialNumber
      );

      if (applications.applications.length === 0) {
        throw new NotFoundException('Certificate not found');
      }

      const application = applications.applications[0];

      // Find certificate for this application
      const certificate = application.certificates?.find(cert => 
        cert.serialNumber === serialNumber && cert.isActive
      );

      if (!certificate) {
        throw new NotFoundException('Certificate not found or inactive');
      }

      return {
        id: certificate.id,
        serialNumber: certificate.serialNumber,
        title: certificate.title,
        description: certificate.description,
        type: certificate.type,
        issuedAt: certificate.issuedAt,
        expiresAt: certificate.expiresAt,
        issuer: certificate.issuer,
        isActive: certificate.isActive,
        application: {
          user: {
            firstName: application.user.firstName,
            lastName: application.user.lastName,
            // Don't expose email in public verification for privacy
          },
          type: application.type,
          title: application.title,
        },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException('Certificate verification failed');
    }
  }

  @Get('certificates/:serialNumber')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Get certificate details by serial number',
    description: 'Alternative endpoint for certificate verification'
  })
  @ApiResponse({ status: 200, description: 'Certificate details retrieved' })
  @ApiResponse({ status: 404, description: 'Certificate not found' })
  async getCertificateBySerial(@Param('serialNumber') serialNumber: string) {
    return this.verifyCertificate(serialNumber);
  }
}