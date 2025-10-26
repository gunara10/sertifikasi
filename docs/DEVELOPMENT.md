# 📖 Panduan Pengembangan - Sertifikasi Arofahajj

Panduan komprehensif untuk pengembangan fitur, best practices, dan kontribusi ke Sertifikasi Arofahajj Platform.

## 🏗️ Arsitektur Overview

### High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │  Infrastructure │
│   (Next.js)     │◄──►│   (NestJS)      │◄──►│  (Docker/K8s)   │
│                 │    │                 │    │                 │
│ - React 18      │    │ - TypeScript    │    │ - PostgreSQL    │
│ - Tailwind CSS  │    │ - Prisma ORM    │    │ - Neo4j         │
│ - Framer Motion │    │ - BullMQ        │    │ - Redis         │
│ - TanStack Query│    │ - JWT Auth      │    │ - MinIO         │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Data Flow
```
User Request → Frontend → API Gateway → Backend Services → Databases
     ↑                                                          ↓
     └────────────────── Real-time Updates ← WebSocket ────────┘
```

## 🎯 Development Principles

### 1. Code Quality Standards
- **TypeScript**: Strict typing untuk semua kode
- **ESLint**: Consistent code formatting
- **Prettier**: Automated code formatting
- **Husky**: Pre-commit hooks
- **Conventional Commits**: Standardized commit messages

### 2. Architecture Patterns
- **Clean Architecture**: Separation of concerns
- **Domain-Driven Design**: Business logic focused
- **Microservices Ready**: Modular design
- **Event-Driven**: Asynchronous processing
- **CQRS**: Command Query Responsibility Segregation

### 3. Security Best Practices
- **Input Validation**: Sanitize all inputs
- **Authentication**: JWT with refresh tokens
- **Authorization**: Role-based access control
- **Data Encryption**: Sensitive data protection
- **Rate Limiting**: Prevent abuse
- **Audit Logging**: Track all actions

## 📁 Project Structure Deep Dive

### Backend Structure
```
apps/sertifikasi.arofahajj.com/api/src/
├── auth/                    # Authentication module
│   ├── auth.controller.ts   # Auth endpoints
│   ├── auth.service.ts      # Business logic
│   ├── strategies/          # Passport strategies
│   └── dto/                 # Data transfer objects
├── applications/            # Application management
│   ├── applications.controller.ts
│   ├── applications.service.ts
│   ├── processors/          # Background jobs
│   └── dto/
├── users/                   # User management
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── dto/
├── common/                  # Shared utilities
│   ├── decorators/          # Custom decorators
│   ├── guards/              # Auth guards
│   ├── pipes/               # Data transformation
│   ├── interceptors/        # Request/response handling
│   └── filters/             # Error handling
└── config/                  # Configuration
    ├── database.module.ts   # Database setup
    ├── redis.module.ts      # Redis setup
    └── prisma.service.ts    # Prisma client
```

### Frontend Structure
```
apps/sertifikasi.arofahajj.com/web/src/
├── app/                     # Next.js App Router
│   ├── auth/               # Authentication pages
│   ├── dashboard/          # Dashboard pages
│   ├── applications/       # Application pages
│   ├── admin/              # Admin pages
│   └── verify/             # Public verification
├── components/             # Reusable components
│   ├── ui/                 # Shadcn/ui components
│   ├── forms/              # Form components
│   ├── layout/             # Layout components
│   └── charts/             # Chart components
├── lib/                    # Utilities and hooks
│   ├── api/                # API client
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Helper functions
│   └── validations/        # Form validations
├── types/                  # TypeScript types
├── store/                  # State management
└── providers/              # React providers
```

## 🚀 Feature Development Guide

### Step 1: Planning & Design
1. **Requirements Analysis**
   - User stories dan acceptance criteria
   - Technical requirements
   - UI/UX design mockups

2. **API Design**
   - Endpoint definitions
   - Request/response schemas
   - Error handling strategy

3. **Database Design**
   - Schema modifications (Prisma)
   - Migration planning
   - Index optimization

### Step 2: Backend Development

#### Create New Module
```bash
# Generate module structure
mkdir -p src/new-feature/{dto,interfaces}
touch src/new-feature/new-feature.module.ts
touch src/new-feature/new-feature.controller.ts
touch src/new-feature/new-feature.service.ts
```

#### Module Template
```typescript
// new-feature.module.ts
import { Module } from '@nestjs/common';
import { NewFeatureController } from './new-feature.controller';
import { NewFeatureService } from './new-feature.service';

@Module({
  controllers: [NewFeatureController],
  providers: [NewFeatureService],
  exports: [NewFeatureService],
})
export class NewFeatureModule {}
```

#### Service Template
```typescript
// new-feature.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../config/prisma.service';
import { CreateNewFeatureDto } from './dto/create-new-feature.dto';

@Injectable()
export class NewFeatureService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateNewFeatureDto) {
    // Business logic here
  }

  async findAll() {
    // Retrieve all records
  }

  async findOne(id: string) {
    // Retrieve single record
  }

  async update(id: string, updateDto: any) {
    // Update record
  }

  async remove(id: string) {
    // Delete record
  }
}
```

#### Controller Template
```typescript
// new-feature.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { NewFeatureService } from './new-feature.service';
import { CreateNewFeatureDto } from './dto/create-new-feature.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('new-feature')
@Controller('new-feature')
export class NewFeatureController {
  constructor(private readonly newFeatureService: NewFeatureService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create new feature' })
  create(@Body() createDto: CreateNewFeatureDto) {
    return this.newFeatureService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all features' })
  findAll() {
    return this.newFeatureService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get feature by ID' })
  findOne(@Param('id') id: string) {
    return this.newFeatureService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update feature' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.newFeatureService.update(id, updateDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete feature' })
  remove(@Param('id') id: string) {
    return this.newFeatureService.remove(id);
  }
}
```

### Step 3: Frontend Development

#### Create New Page
```typescript
// app/new-feature/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNewFeature } from '@/lib/hooks/use-new-feature';

export default function NewFeaturePage() {
  const { data, isLoading, error } = useNewFeature();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <Card>
        <CardHeader>
          <CardTitle>New Feature</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Feature content */}
        </CardContent>
      </Card>
    </motion.div>
  );
}
```

#### Create Custom Hook
```typescript
// lib/hooks/use-new-feature.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../api/client';

export function useNewFeature() {
  return useQuery({
    queryKey: ['new-feature'],
    queryFn: () => apiClient.get('/new-feature'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useCreateNewFeature() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => apiClient.post('/new-feature', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['new-feature'] });
    },
  });
}
```

### Step 4: Testing

#### Backend Tests
```typescript
// new-feature.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { NewFeatureService } from './new-feature.service';
import { PrismaService } from '../config/prisma.service';

describe('NewFeatureService', () => {
  let service: NewFeatureService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewFeatureService,
        {
          provide: PrismaService,
          useValue: {
            newFeature: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<NewFeatureService>(NewFeatureService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new feature', async () => {
      const createDto = { name: 'Test Feature' };
      const expectedResult = { id: '1', ...createDto };

      jest.spyOn(prisma.newFeature, 'create').mockResolvedValue(expectedResult);

      const result = await service.create(createDto);

      expect(result).toEqual(expectedResult);
      expect(prisma.newFeature.create).toHaveBeenCalledWith({
        data: createDto,
      });
    });
  });
});
```

#### Frontend Tests
```typescript
// __tests__/new-feature.test.tsx
import { render, screen } from '@testing-library/react';
import { NewFeaturePage } from '../app/new-feature/page';

// Mock the hook
jest.mock('../lib/hooks/use-new-feature', () => ({
  useNewFeature: () => ({
    data: { id: '1', name: 'Test Feature' },
    isLoading: false,
    error: null,
  }),
}));

describe('NewFeaturePage', () => {
  it('renders feature data', () => {
    render(<NewFeaturePage />);
    
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
  });
});
```

## 🔧 Development Tools & Commands

### Backend Development
```bash
# Development server with hot reload
npm run start:dev

# Debug mode
npm run start:debug

# Build for production
npm run build

# Start production server
npm run start:prod

# Database operations
npm run prisma:studio      # Database GUI
npm run prisma:generate    # Generate client
npm run prisma:push        # Push schema
npm run prisma:migrate     # Run migrations

# Testing
npm run test              # Unit tests
npm run test:e2e          # End-to-end tests
npm run test:cov          # Coverage report

# Code quality
npm run lint              # ESLint
npm run format            # Prettier
```

### Frontend Development
```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Code quality
npm run lint              # ESLint
npm run type-check        # TypeScript check
npm run format            # Prettier

# Testing
npm run test              # Unit tests
npm run test:e2e          # Playwright tests
```

### Database Management
```bash
# PostgreSQL
docker exec -it arofahajj-postgres psql -U postgres -d arofahajj_sertifikasi

# Neo4j
# Browser: http://localhost:7474
# Cypher Shell: docker exec -it arofahajj-neo4j cypher-shell -u neo4j -p password

# Redis
docker exec -it arofahajj-redis redis-cli
```

## 🎨 UI/UX Development Guidelines

### Design System
- **Colors**: Use Tailwind CSS color palette
- **Typography**: Consistent font hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Shadcn/ui component library
- **Animations**: Framer Motion for micro-interactions

### Responsive Design
```typescript
// Use Tailwind responsive prefixes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>

// Mobile-first approach
<div className="p-4 sm:p-6 lg:p-8">
  {/* Content */}
</div>
```

### Animation Best Practices
```typescript
// Use Framer Motion for animations
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {/* Content */}
</motion.div>
```

## 📊 Performance Optimization

### Backend Optimization
1. **Database Indexing**
   ```prisma
   model Application {
     id    String @id @default(cuid())
     userId String
     status String
   
     @@index([userId])
     @@index([status])
     @@index([createdAt])
   }
   ```

2. **Query Optimization**
   ```typescript
   // Use select for specific fields
   const user = await this.prisma.user.findUnique({
     where: { id },
     select: {
       id: true,
       email: true,
       firstName: true,
       lastName: true,
     },
   });
   ```

3. **Caching Strategy**
   ```typescript
   // Cache frequently accessed data
   await this.redis.set(`user:${id}`, userData, 3600);
   ```

### Frontend Optimization
1. **Code Splitting**
   ```typescript
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <p>Loading...</p>,
   });
   ```

2. **Image Optimization**
   ```typescript
   import Image from 'next/image';
   
   <Image
     src="/image.jpg"
     alt="Description"
     width={500}
     height={300}
     priority
   />
   ```

3. **State Management**
   ```typescript
   // Use React Query for server state
   const { data, isLoading } = useQuery({
     queryKey: ['users'],
     queryFn: fetchUsers,
     staleTime: 5 * 60 * 1000, // 5 minutes
   });
   ```

## 🔒 Security Implementation

### Authentication & Authorization
```typescript
// JWT Guard
@UseGuards(JwtAuthGuard)
@Roles('ADMIN')
@Controller('admin')
export class AdminController {}

// Role-based access
@RolesGuard()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some(role => user.roles?.includes(role));
  }
}
```

### Input Validation
```typescript
// DTO with validation
export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
```

### Rate Limiting
```typescript
// Throttler configuration
@Throttle(10, 60) // 10 requests per minute
@Post('sensitive-endpoint')
sensitiveOperation() {
  // Implementation
}
```

## 📝 Documentation Standards

### Code Documentation
```typescript
/**
 * Creates a new application
 * @param createApplicationDto - Application data
 * @param userId - User ID creating the application
 * @returns Created application with generated serial number
 * @throws ConflictException if application already exists
 * @example
 * ```typescript
 * const app = await service.create({
 *   title: 'PPIU Certification',
 *   type: 'PPIU'
 * }, 'user-123');
 * ```
 */
async create(createApplicationDto: CreateApplicationDto, userId: string) {
  // Implementation
}
```

### API Documentation
```typescript
@ApiOperation({ summary: 'Create new application' })
@ApiResponse({ status: 201, description: 'Application created successfully' })
@ApiResponse({ status: 409, description: 'Application already exists' })
@Post()
create(@Body() createDto: CreateApplicationDto) {
  return this.service.create(createDto);
}
```

## 🚀 Deployment Best Practices

### Environment Configuration
```typescript
// Use environment variables
const config = {
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
};
```

### Docker Configuration
```dockerfile
# Multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3001
CMD ["npm", "run", "start:prod"]
```

### Health Checks
```typescript
@Get('health')
healthCheck() {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  };
}
```

## 🤝 Contributing Guidelines

### Git Workflow
1. **Branch Naming**
   - `feature/description` - New features
   - `bugfix/description` - Bug fixes
   - `hotfix/description` - Critical fixes

2. **Commit Messages**
   ```
   type(scope): description
   
   feat(auth): add JWT refresh token support
   fix(api): resolve user creation validation error
   docs(readme): update installation instructions
   ```

3. **Pull Request Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   
   ## Testing
   - [ ] Unit tests pass
   - [ ] Integration tests pass
   - [ ] Manual testing completed
   
   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-review completed
   - [ ] Documentation updated
   ```

## 📚 Learning Resources

### Documentation
- [NestJS Documentation](https://docs.nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Best Practices
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)
- [React Best Practices](https://react.dev/learn)

### Tools & Resources
- [Framer Motion](https://www.framer.com/motion/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Shadcn/ui](https://ui.shadcn.com/)

Happy coding! 🚀