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
    description: 'Public endpoint to verify certificate authenticity',
  })
  @ApiResponse({ status: 200, description: 'Certificate verified successfully' })
  @ApiResponse({ status: 404, description: 'Certificate not found' })
  async verifyCertificate(@Param('serialNumber') rawSerialNumber: string) {
    // Normalisasi serial number (hindari spasi/bedaan huruf)
    const serialNumber = (rawSerialNumber ?? '').trim().toUpperCase();
    if (!serialNumber) {
      throw new NotFoundException('Certificate not found');
    }

    // Cari aplikasi yang mengandung serialNumber (search di layer aplikasi)
    const appsResult = await this.applicationsService.findAll(
      /* userId   */ undefined,
      /* page     */ 1,
      /* limit    */ 5, // small batch; cukup untuk match cepat
      /* status   */ undefined,
      /* type     */ undefined,
      /* search   */ serialNumber
    );

    if (!appsResult?.applications?.length) {
      throw new NotFoundException('Certificate not found');
    }

    // Ambil detail lengkap aplikasi pertama (sudah include certificates di service.findOne)
    const appLite = appsResult.applications.find(a =>
      // prioritaskan yang serialNumber-nya exact match bila ada
      a.serialNumber?.toUpperCase() === serialNumber
    ) ?? appsResult.applications[0];

    const application = await this.applicationsService.findOne(appLite.id);

    // Pastikan ada certificate aktif yang serial-nya cocok
    const certificate = application.certificates?.find(
      (cert) => cert.serialNumber?.toUpperCase() === serialNumber && cert.isActive
    );

    if (!certificate) {
      // Bisa jadi sertifikat ada tapi non-aktif (revoked/expired)
      // Tetap beri pesan publik yang netral
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
        // info minimal demi privasi
        type: application.type,
        title: application.title,
        user: {
          firstName: application.user.firstName,
          lastName: application.user.lastName,
        },
      },
    };
  }

  @Get('certificates/:serialNumber')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get certificate details by serial number',
    description: 'Alternative endpoint for certificate verification',
  })
  @ApiResponse({ status: 200, description: 'Certificate details retrieved' })
  @ApiResponse({ status: 404, description: 'Certificate not found' })
  async getCertificateBySerial(@Param('serialNumber') serialNumber: string) {
    return this.verifyCertificate(serialNumber);
  }
}
