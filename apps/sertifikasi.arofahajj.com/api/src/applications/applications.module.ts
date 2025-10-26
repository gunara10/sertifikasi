import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { VerificationController } from './verification.controller';
import { BullModule } from '@nestjs/bull';
import { ApplicationProcessor } from './processors/application.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'application-queue',
    }),
  ],
  controllers: [ApplicationsController, VerificationController],
  providers: [ApplicationsService, ApplicationProcessor],
  exports: [ApplicationsService],
})
export class ApplicationsModule {}