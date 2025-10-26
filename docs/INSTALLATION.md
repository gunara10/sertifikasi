# 📖 Panduan Instalasi Lengkap - Sertifikasi Arofahajj

Panduan lengkap untuk menginstal dan menjalankan platform Sertifikasi Arofahajj di lingkungan development dan production.

## 📋 Prerequisites

### System Requirements
- **OS**: Linux, macOS, atau Windows 10/11
- **Node.js**: 18.x atau lebih tinggi
- **npm**: 9.x atau lebih tinggi
- **Docker**: 20.x atau lebih tinggi
- **Docker Compose**: 2.x atau lebih tinggi
- **Git**: 2.x atau lebih tinggi
- **RAM**: Minimum 8GB (recommended 16GB)
- **Storage**: Minimum 20GB free space

### Software yang Diperlukan

#### 1. Node.js & npm
```bash
# Install Node.js menggunakan nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Verifikasi instalasi
node --version
npm --version
```

#### 2. Docker & Docker Compose
```bash
# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install docker.io docker-compose
sudo usermod -aG docker $USER
newgrp docker

# macOS (gunakan Homebrew)
brew install --cask docker

# Windows (Download dari docker.com)
# Download dan install Docker Desktop for Windows
```

#### 3. Git
```bash
# Linux
sudo apt install git

# macOS
brew install git

# Windows
# Download dari git-scm.com
```

## 🚀 Instalasi Development Environment

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd arofahajj-super-app
```

### Step 2: Start Infrastructure Services
```bash
cd infra/docker
docker-compose up -d

# Verifikasi semua services berjalan
docker-compose ps
```

Services yang akan berjalan:
- **PostgreSQL**: Database utama (port 5432)
- **Neo4j**: Graph database (port 7474, 7687)
- **Redis**: Cache & message broker (port 6379)
- **MinIO**: Object storage (port 9000, 9001)
- **Prometheus**: Monitoring (port 9090)
- **Grafana**: Visualization (port 3000)
- **Jaeger**: Tracing (port 16686)

### Step 3: Setup Backend API
```bash
cd apps/sertifikasi.arofahajj.com/api

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Edit .env file sesuai kebutuhan
nano .env
```

**Environment Variables (.env):**
```bash
# Database Configuration
DATABASE_URL="postgresql://postgres:password@localhost:5432/arofahajj_sertifikasi"
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="password"

# Redis Configuration
REDIS_HOST="localhost"
REDIS_PORT="6379"
REDIS_PASSWORD=""

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="24h"

# Application Configuration
PORT="3001"
NODE_ENV="development"
FRONTEND_URL="http://localhost:3000"
```

```bash
# Generate Prisma client
npm run prisma:generate

# Push database schema
npm run prisma:push

# Start development server
npm run start:dev
```

Backend akan berjalan di http://localhost:3001
Swagger documentation di http://localhost:3001/api/docs

### Step 4: Setup Frontend Web
```bash
cd apps/sertifikasi.arofahajj.com/web

# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local

# Edit .env.local file
nano .env.local
```

**Environment Variables (.env.local):**
```bash
# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:3001/api"

# Application Configuration
NEXT_PUBLIC_APP_NAME="Sertifikasi Arofahajj"
NEXT_PUBLIC_APP_DESCRIPTION="Platform Sertifikasi Perizinan Terpadu"

# Feature Flags
NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN="true"
NEXT_PUBLIC_ENABLE_ANALYTICS="false"
```

```bash
# Start development server
npm run dev
```

Frontend akan berjalan di http://localhost:3000

## 🔧 Verifikasi Instalasi

### 1. Cek Database Connection
```bash
# PostgreSQL
docker exec -it arofahajj-postgres psql -U postgres -d arofahajj_sertifikasi -c "\dt"

# Neo4j
curl -u neo4j:password http://localhost:7474/db/data/

# Redis
docker exec -it arofahajj-redis redis-cli ping
```

### 2. Test API Endpoints
```bash
# Health check
curl http://localhost:3001/api/health

# Swagger docs
# Buka http://localhost:3001/api/docs di browser
```

### 3. Test Frontend
```bash
# Buka http://localhost:3000 di browser
# Test registration dan login
```

## 🏗️ Struktur Development

### Development Workflow
1. **Backend Development**: `npm run start:dev` di folder API
2. **Frontend Development**: `npm run dev` di folder Web
3. **Database Management**: Gunakan Prisma Studio `npm run prisma:studio`
4. **Neo4j Browser**: http://localhost:7474
5. **Redis Commander**: http://localhost:8081

### Code Quality
```bash
# Backend linting
cd apps/sertifikasi.arofahajj.com/api
npm run lint

# Frontend linting
cd apps/sertifikasi.arofahajj.com/web
npm run lint

# Type checking
npm run type-check
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Port Conflict
```bash
# Cek port yang digunakan
netstat -tulpn | grep :3000
netstat -tulpn | grep :3001

# Kill process yang menggunakan port
sudo kill -9 <PID>
```

#### 2. Docker Issues
```bash
# Reset Docker environment
docker-compose down -v
docker system prune -f
docker-compose up -d
```

#### 3. Database Connection Issues
```bash
# Restart database services
docker-compose restart postgres neo4j redis

# Cek logs
docker-compose logs postgres
docker-compose logs neo4j
docker-compose logs redis
```

#### 4. Node Modules Issues
```bash
# Clean node modules
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
```

#### 5. Permission Issues (Linux)
```bash
# Fix Docker permissions
sudo chown -R $USER:$USER ~/.docker
sudo chmod -R 755 ~/.docker

# Fix file permissions
sudo chown -R $USER:$USER ./apps
```

### Performance Issues

#### 1. Memory Usage
```bash
# Monitor memory usage
docker stats

# Increase Docker memory limit
# Docker Desktop > Settings > Resources > Memory
```

#### 2. Database Performance
```bash
# Optimize PostgreSQL
docker exec -it arofahajj-postgres psql -U postgres -d arofahajj_sertifikasi -c "VACUUM ANALYZE;"

# Monitor Neo4j
curl http://localhost:7474/db/manage/server/jmx/domain/org.neo4j/
```

## 📚 Development Tips

### 1. Hot Reload Configuration
- Backend: Otomatis dengan `npm run start:dev`
- Frontend: Otomatis dengan `npm run dev`
- Database: Gunakan Prisma untuk schema changes

### 2. Debugging
```bash
# Backend debugging
cd apps/sertifikasi.arofahajj.com/api
npm run start:debug

# Frontend debugging
# Buka Chrome DevTools
# Gunakan React Developer Tools
```

### 3. Testing
```bash
# Backend tests
cd apps/sertifikasi.arofahajj.com/api
npm run test
npm run test:watch
npm run test:cov

# Frontend tests
cd apps/sertifikasi.arofahajj.com/web
npm run test
```

### 4. Database Migrations
```bash
# Create new migration
npx prisma migrate dev --name <migration-name>

# Reset database
npx prisma migrate reset

# Deploy migrations
npx prisma migrate deploy
```

## 🚀 Production Deployment

### 1. Build Applications
```bash
# Build backend
cd apps/sertifikasi.arofahajj.com/api
npm run build

# Build frontend
cd apps/sertifikasi.arofahajj.com/web
npm run build
```

### 2. Production Docker Compose
```bash
# Use production compose file
docker-compose -f docker-compose.prod.yml up -d
```

### 3. Environment Setup
```bash
# Production environment variables
NODE_ENV=production
JWT_SECRET=<strong-secret-key>
DATABASE_URL=<production-db-url>
```

### 4. SSL Certificate
```bash
# Use Let's Encrypt atau SSL certificate
# Configure nginx untuk HTTPS
```

## 📞 Support

Jika mengalami masalah selama instalasi:

1. **Cek Logs**: `docker-compose logs -f`
2. **Documentation**: Baca README.md dan file dokumentasi lainnya
3. **Issues**: Create issue di repository
4. **Community**: Join Discord/Slack channel

## 🎉 Selamat!

Anda telah berhasil menginstal Sertifikasi Arofahajj Platform! Sekarang Anda bisa:

- 🏠 Akses aplikasi di http://localhost:3000
- 📚 Lihat API docs di http://localhost:3001/api/docs
- 🔍 Monitor database di Prisma Studio
- 📊 Monitoring di Grafana (http://localhost:3000)
- 🕵️ Tracing di Jaeger (http://localhost:16686)

Happy coding! 🚀