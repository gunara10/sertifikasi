import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { UpdateApplicationStatusDto } from './dto/update-application-status.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/user.decorator';
import { ApplicationStatus } from '@prisma/client';

@ApiTags('applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new application' })
  @ApiResponse({ status: 201, description: 'Application created successfully' })
  create(
    @Body() createApplicationDto: CreateApplicationDto,
    @CurrentUser() user: any,
  ) {
    return this.applicationsService.create(createApplicationDto, user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all applications (user filtered or admin all)' })
  @ApiResponse({ status: 200, description: 'Applications retrieved successfully' })
  findAll(
    @CurrentUser() user: any,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('status') status?: ApplicationStatus,
    @Query('type') type?: string,
    @Query('search') search?: string,
  ) {
    const userId = user.roles.includes('ADMIN') ? undefined : user.id;
    return this.applicationsService.findAll(
      userId,
      parseInt(page) || 1,
      parseInt(limit) || 10,
      status,
      type,
      search,
    );
  }

  @Get('statistics')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get application statistics' })
  @ApiResponse({ status: 200, description: 'Statistics retrieved successfully' })
  getStatistics(@CurrentUser() user: any) {
    const userId = user.roles.includes('ADMIN') ? undefined : user.id;
    return this.applicationsService.getStatistics(userId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get application by ID' })
  @ApiResponse({ status: 200, description: 'Application retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Application not found' })
  findOne(@Param('id') id: string, @CurrentUser() user: any) {
    const userId = user.roles.includes('ADMIN') ? undefined : user.id;
    return this.applicationsService.findOne(id, userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update application' })
  @ApiResponse({ status: 200, description: 'Application updated successfully' })
  update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
    @CurrentUser() user: any,
  ) {
    return this.applicationsService.update(id, updateApplicationDto, user.id);
  }

  @Post(':id/submit')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit application for review' })
  @ApiResponse({ status: 200, description: 'Application submitted successfully' })
  submit(@Param('id') id: string, @CurrentUser() user: any) {
    return this.applicationsService.submit(id, user.id);
  }

  @Patch(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'REVIEWER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update application status (Admin/Reviewer only)' })
  @ApiResponse({ status: 200, description: 'Application status updated successfully' })
  updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateApplicationStatusDto,
    @CurrentUser() user: any,
  ) {
    return this.applicationsService.updateStatus(id, updateStatusDto, user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete application' })
  @ApiResponse({ status: 200, description: 'Application deleted successfully' })
  remove(@Param('id') id: string, @CurrentUser() user: any) {
    return this.applicationsService.remove(id, user.id);
  }
}