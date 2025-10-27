import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';
import { ApplicationsService } from '../applications.service';
import { PrismaService } from '../../config/prisma.service';
import { ApplicationStatus, $Enums, Prisma } from '@prisma/client';

type SendNotificationPayload = {
  applicationId: string;
  type: string;
  recipient: string;
  data?: Record<string, any>;
};

type GenerateCertificatePayload = {
  applicationId: string;
  certificateType: $Enums.CertificateType | string; // string diterima, nanti dinormalisasi
};

type ProcessDocumentVerificationPayload = {
  documentId: string;
  verificationType?: string;
};

@Processor('application-queue')
export class ApplicationProcessor {
  private readonly logger = new Logger(ApplicationProcessor.name);

  constructor(
    private readonly applicationsService: ApplicationsService,
    private readonly prisma: PrismaService,
  ) {}

  // ============================
  // Notifications
  // ============================
  @Process('send-notification')
  async handleSendNotification(job: Job<SendNotificationPayload>) {
    const { applicationId, type, recipient, data } = job.data;

    this.logger.log(`Processing notification for application ${applicationId}: ${type}`);

    try {
      // TODO: Integrasi ke email/SMS/push provider
      this.logger.log(
        `Sending ${type} notification to ${recipient}: ${JSON.stringify(data ?? {})}`
      );

      // Contoh:
      // await this.emailService.send({ to: recipient, subject: data?.subject, ... })

      return { success: true, message: 'Notification sent successfully' };
    } catch (error: any) {
      this.logger.error(
        `Failed to send notification for application ${applicationId}: ${error?.message}`,
        error?.stack,
      );
      throw error;
    }
  }

  // ============================
  // Certificate Generation
  // ============================
  @Process('generate-certificate')
  async handleGenerateCertificate(job: Job<GenerateCertificatePayload>) {
    const { applicationId, certificateType } = job.data;

    // Normalisasi certificateType -> enum Prisma
    const typeEnum = this.toCertificateEnum(certificateType);
    if (!typeEnum) {
      this.logger.warn(`Unknown certificate type "${certificateType}" for application ${applicationId}`);
      throw new Error('Invalid certificate type');
    }

    this.logger.log(`Generating certificate for application ${applicationId}: ${typeEnum}`);

    try {
      // Get application details
      const application = await this.prisma.application.findUnique({
        where: { id: applicationId },
        include: {
          user: true,
        },
      });

      if (!application) {
        throw new Error('Application not found');
      }

      // Generate serial ONCE (hindari dipanggil dua kali)
      const serial = await this.generateCertificateSerial(typeEnum);

      // FRONTEND_URL aman
      const frontendUrlBase = (process.env.FRONTEND_URL || '').replace(/\/+$/, '');
      const verificationUrl = `${frontendUrlBase || 'http://localhost:3000'}/verify/${serial}`;

      // Create certificate
      const certificate = await this.prisma.certificate.create({
        data: {
          applicationId,
          userId: application.userId,
          type: typeEnum,
          serialNumber: serial,
          title: `${typeEnum} - ${application.title}`,
          description: `Certificate issued for ${application.title}`,
          issuer: 'Kementerian Agama Republik Indonesia',
          verificationUrl,
        },
      });

      this.logger.log(`Certificate generated successfully: ${certificate.serialNumber}`);

      // Update application status -> CERTIFIED
      await this.prisma.application.update({
        where: { id: applicationId },
        data: {
          status: ApplicationStatus.CERTIFIED,
        },
      });

      // (Opsional) Tambah workflow history
      await this.applicationsService['createWorkflowHistory']?.(
        applicationId,
        application.status,
        ApplicationStatus.CERTIFIED,
        null,
        'SYSTEM' as any, // jika ActorType.SYSTEM tersedia di service, bisa impor langsung
        'Certificate generated'
      ).catch(() => void 0);

      // (Opsional) Queue notification ke user
      // await this.queueService.add('send-notification', {
      //   applicationId,
      //   type: 'certificate_issued',
      //   recipient: application.user.email,
      //   data: {
      //     subject: 'Certificate Issued',
      //     template: 'certificate-issued',
      //     context: {
      //       userName: application.user.firstName,
      //       certificateSerial: certificate.serialNumber,
      //       verificationUrl: certificate.verificationUrl,
      //     },
      //   },
      // });

      return { success: true, certificate };
    } catch (error: any) {
      this.logger.error(
        `Failed to generate certificate for application ${applicationId}: ${error?.message}`,
        error?.stack,
      );
      throw error;
    }
  }

  // ============================
  // Document Verification
  // ============================
  @Process('process-document-verification')
  async handleDocumentVerification(job: Job<ProcessDocumentVerificationPayload>) {
    const { documentId, verificationType } = job.data;

    this.logger.log(
      `Processing document verification for document ${documentId}${verificationType ? `: ${verificationType}` : ''}`
    );

    try {
      // Get document details
      const document = await this.prisma.document.findUnique({
        where: { id: documentId },
        include: {
          application: {
            include: { user: true },
          },
        },
      });

      if (!document) {
        throw new Error('Document not found');
      }

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Demo: 80% success rate
      const isVerified = Math.random() > 0.2;

      await this.prisma.document.update({
        where: { id: documentId },
        data: {
          isVerified,
          verifiedAt: new Date(),
          verifiedBy: 'SYSTEM', // TODO: set reviewerId nyata jika ada
        },
      });

      this.logger.log(
        `Document ${documentId} verification ${isVerified ? 'passed' : 'failed'}`
      );

      if (!isVerified) {
        await this.prisma.application.update({
          where: { id: document.applicationId },
          data: {
            status: ApplicationStatus.ADDITIONAL_INFO_REQUIRED,
            notes: `Document verification failed: ${document.name}`,
          },
        });
      }

      return { success: true, isVerified };
    } catch (error: any) {
      this.logger.error(
        `Failed to verify document ${documentId}: ${error?.message}`,
        error?.stack,
      );
      throw error;
    }
  }

  // ============================
  // Helpers
  // ============================
  private toCertificateEnum(
    t?: $Enums.CertificateType | string
  ): $Enums.CertificateType | undefined {
    if (!t) return undefined;
    if (Object.values($Enums.CertificateType).includes(t as $Enums.CertificateType)) {
      return t as $Enums.CertificateType;
    }
    const upper = String(t).toUpperCase() as $Enums.CertificateType;
    return Object.values($Enums.CertificateType).includes(upper) ? upper : undefined;
  }

  private async generateCertificateSerial(
    type: $Enums.CertificateType
  ): Promise<string> {
    const year = new Date().getFullYear();
    const prefix = `CERT-${String(type).toUpperCase()}-${year}`;

    const where: Prisma.CertificateWhereInput = {
      type: { equals: type },
      serialNumber: { startsWith: prefix },
    };

    const count = await this.prisma.certificate.count({ where });
    const sequence = String(count + 1).padStart(6, '0');

    return `${prefix}-${sequence}`;
  }
}
