# 🏛️ Sertifikasi Arofahajj - Platform Sertifikasi Perizinan Terpadu

Platform digital revolusioner untuk pengurusan sertifikasi dan perizinan, khususnya PPIU (Penyelenggara Perjalanan Ibadah Umrah). Dibangun dengan arsitektur modern yang skalabel dan aman untuk masa depan.

## ✨ Fitur Utama

### 🚀 Untuk Pemohon (Applicants)
- **Pengajuan Online**: Formulir aplikasi digital yang intuitif
- **Tracking Real-time**: Monitor status aplikasi secara real-time
- **Upload Dokumen**: Sistem upload dokumen yang aman
- **Notifikasi**: Update otomatis via email dan dashboard
- **Verifikasi Sertifikat**: Halaman publik untuk verifikasi keabsahan sertifikat

### 🛡️ Untuk Admin & Reviewer
- **Dashboard Komprehensif**: Overview semua aplikasi dan statistik
- **Workflow Management**: Sistem alur kerja yang terstruktur
- **Document Review**: Tools untuk verifikasi dokumen
- **Bulk Actions**: Proses multiple aplikasi sekaligus
- **Audit Trail**: Log lengkap semua aktivitas

### 🏗️ Teknologi & Arsitektur
- **Microservices Ready**: Struktur modular untuk skalabilitas
- **Event-Driven**: Message broker dengan BullMQ & Redis
- **Multi-Database**: PostgreSQL untuk transaksional, Neo4j untuk relasi
- **Real-time**: WebSocket untuk update instan
- **Security**: JWT authentication, rate limiting, input validation
- **Observability**: OpenTelemetry, logging, dan monitoring

## 🏛️ Arsitektur "The Arofahajj North Star"

Platform ini dibangun dengan 10 pilar strategis:

1. **Orkestrasi Workflow**: Fondasi untuk Temporal.io integration
2. **Verifiable Credential**: Siap untuk W3C VC 2.0
3. **Polyglot Storage**: PostgreSQL + Neo4j untuk data kompleks
4. **Event-Driven**: BullMQ untuk asynchronous processing
5. **Identity & SSO**: OIDC compliant dengan JWT
6. **Observability**: OpenTelemetry dari hari pertama
7. **Security**: Best practices untuk keamanan data
8. **Feature Flags**: Integrasi GrowthBook ready
9. **Edge & Performance**: Next.js 15 dengan RSC
10. **Compliance & Trust**: Transparansi dan verifikasi publik

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Shadcn/ui
- **State Management**: Zustand + TanStack Query
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Framework**: NestJS 11
- **Language**: TypeScript 5
- **Database**: PostgreSQL 15 + Neo4j 5
- **Cache/Queue**: Redis + BullMQ
- **Authentication**: JWT + Passport.js
- **Documentation**: Swagger/OpenAPI

### Infrastructure
- **Containerization**: Docker + Docker Compose
- **Orchestration**: Ready for Kubernetes
- **Monitoring**: Prometheus + Grafana + Jaeger
- **Storage**: MinIO (S3 compatible)

## 📁 Struktur Proyek

```
arofahajj-super-app/
├── apps/
│   └── sertifikasi.arofahajj.com/
│       ├── api/                 # Backend NestJS
│       │   ├── src/
│       │   │   ├── auth/        # Module Auth
│       │   │   ├── applications/ # Module Applications
│       │   │   ├── users/        # Module Users
│       │   │   ├── common/       # Decorators, Guards, Pipes
│       │   │   └── config/       # Configuration, Database
│       │   ├── prisma/          # Database schema
│       │   └── package.json
│       └── web/                 # Frontend Next.js
│           ├── src/
│           │   ├── app/          # App Router pages
│           │   ├── components/   # UI components
│           │   ├── lib/          # Utilities, API client
│           │   └── types/        # TypeScript types
│           └── package.json
├── packages/
│   └── types/                    # Shared TypeScript types
├── infra/
│   └── docker/
│       └── docker-compose.yml    # Development environment
└── docs/                         # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Docker & Docker Compose
- Git

### 1. Clone Repository
```bash
git clone <repository-url>
cd arofahajj-super-app
```

### 2. Start Infrastructure
```bash
cd infra/docker
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Neo4j on ports 7474 (HTTP) & 7687 (Bolt)
- Redis on port 6379
- MinIO on ports 9000 (API) & 9001 (Console)

### 3. Setup Backend API
```bash
cd apps/sertifikasi.arofahajj.com/api

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate Prisma client
npm run prisma:generate

# Push database schema
npm run prisma:push

# Start development server
npm run start:dev
```

API will be available at http://localhost:3001
Swagger docs at http://localhost:3001/api/docs

### 4. Setup Frontend Web
```bash
cd apps/sertifikasi.arofahajj.com/web

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Start development server
npm run dev
```

Frontend will be available at http://localhost:3000

## 📖 Panduan Pengembangan

### Environment Variables

#### Backend (.env)
```bash
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/arofahajj_sertifikasi"
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="password"

# Redis
REDIS_HOST="localhost"
REDIS_PORT="6379"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="24h"

# Application
PORT="3001"
FRONTEND_URL="http://localhost:3000"
```

#### Frontend (.env.local)
```bash
# API
NEXT_PUBLIC_API_URL="http://localhost:3001/api"

# Application
NEXT_PUBLIC_APP_NAME="Sertifikasi Arofahajj"
```

### Database Schema

#### PostgreSQL (Transactional Data)
- Users & Authentication
- Applications & Documents
- Certificates & Audit Logs
- Sessions & Workflow History

#### Neo4j (Relationships & Workflow)
- User-Application relationships
- Workflow state transitions
- Document verification flows
- Complex graph queries

### API Documentation

Setelah menjalankan backend, buka http://localhost:3001/api/docs untuk melihat dokumentasi API interaktif.

### Testing

```bash
# Backend tests
cd apps/sertifikasi.arofahajj.com/api
npm run test

# Frontend tests
cd apps/sertifikasi.arofahajj.com/web
npm run test
```

## 🎯 Fitur MVP (Phase 1)

### ✅ Selesai
- [x] Authentication system (Login/Register)
- [x] User management dengan roles
- [x] Application CRUD operations
- [x] Dashboard dengan statistik
- [x] Responsive UI dengan Shadcn/ui
- [x] Real-time updates dengan WebSocket
- [x] File upload system
- [x] Public verification page

### 🚧 In Progress
- [ ] Document verification workflow
- [ ] Certificate generation dengan QR code
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Advanced search & filtering

### 📋 Planned
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Integration dengan payment gateway
- [ ] AI-powered document validation

## 🔧 Development Commands

### Backend
```bash
npm run start:dev    # Development mode
npm run build        # Build for production
npm run start:prod   # Production mode
npm run lint         # ESLint
npm run test         # Run tests
npm run test:e2e     # E2E tests
npm run prisma:studio # Database GUI
```

### Frontend
```bash
npm run dev          # Development mode
npm run build        # Build for production
npm run start        # Production mode
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

### Infrastructure
```bash
docker-compose up -d           # Start all services
docker-compose down            # Stop all services
docker-compose logs -f         # View logs
docker-compose exec neo4j cypher-shell -u neo4j -p password  # Neo4j shell
```

## 🏗️ Deployment

### Development
```bash
# Start complete development environment
docker-compose -f infra/docker/docker-compose.yml up -d
cd apps/sertifikasi.arofahajj.com/api && npm run start:dev
cd apps/sertifikasi.arofahajj.com/web && npm run dev
```

### Production
```bash
# Build applications
cd apps/sertifikasi.arofahajj.com/api && npm run build
cd apps/sertifikasi.arofahajj.com/web && npm run build

# Use production docker-compose
docker-compose -f docker-compose.prod.yml up -d
```

## 🔒 Security Considerations

- ✅ Input validation dengan class-validator
- ✅ SQL injection prevention dengan Prisma ORM
- ✅ XSS protection dengan content security policy
- ✅ Rate limiting dengan @nestjs/throttler
- ✅ Password hashing dengan bcrypt
- ✅ JWT token dengan expiration
- ✅ CORS configuration
- ✅ Environment variable protection

## 📊 Monitoring & Observability

### Available Services
- **Grafana**: http://localhost:3000 (admin/admin)
- **Prometheus**: http://localhost:9090
- **Jaeger**: http://localhost:16686
- **Redis Commander**: http://localhost:8081
- **MinIO Console**: http://localhost:9001 (minioadmin/minioadmin123)

### Metrics Collection
- Application performance metrics
- Database query performance
- Redis operations
- Custom business metrics

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary software owned by Arofahajj. All rights reserved.

## 🆘 Support

For support and questions:
- Email: support@arofahajj.com
- Documentation: [docs folder](./docs)
- Issues: Create issue in repository

## 🙏 Acknowledgments

- Built with ❤️ by Arofahajj Development Team
- Special thanks to the open-source community
- Inspired by modern certification platforms worldwide

---

**🚀 Arofahajj - Membangun masa depan sertifikasi digital Indonesia**"# sertifikasi" 
