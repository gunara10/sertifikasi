#!/bin/bash

# Development Script for Arofahajj Platform
# This script sets up and starts the complete development environment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed. Please install Node.js 18+"
        exit 1
    fi
    
    # Check Docker
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed. Please install Docker"
        exit 1
    fi
    
    # Check Docker Compose
    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose is not installed. Please install Docker Compose"
        exit 1
    fi
    
    log_success "All prerequisites are installed"
}

# Start infrastructure services
start_infrastructure() {
    log_info "Starting infrastructure services..."
    
    cd infra/docker
    
    # Check if services are already running
    if docker-compose ps | grep -q "Up"; then
        log_warning "Some services are already running. Stopping them first..."
        docker-compose down
    fi
    
    # Start services
    docker-compose up -d
    
    # Wait for services to be ready
    log_info "Waiting for services to be ready..."
    sleep 10
    
    # Check if services are running
    if docker-compose ps | grep -q "Up"; then
        log_success "Infrastructure services are running"
    else
        log_error "Failed to start infrastructure services"
        exit 1
    fi
    
    cd - > /dev/null
}

# Setup backend
setup_backend() {
    log_info "Setting up backend..."
    
    cd apps/sertifikasi.arofahajj.com/api
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        log_info "Installing backend dependencies..."
        npm install
    fi
    
    # Check if .env exists
    if [ ! -f ".env" ]; then
        log_info "Creating .env file..."
        cp .env.example .env
        log_warning "Please update .env file with your configuration"
    fi
    
    # Generate Prisma client
    log_info "Generating Prisma client..."
    npm run prisma:generate
    
    # Push database schema
    log_info "Setting up database..."
    npm run prisma:push
    
    cd - > /dev/null
    log_success "Backend is ready"
}

# Setup frontend
setup_frontend() {
    log_info "Setting up frontend..."
    
    cd apps/sertifikasi.arofahajj.com/web
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        log_info "Installing frontend dependencies..."
        npm install
    fi
    
    # Check if .env.local exists
    if [ ! -f ".env.local" ]; then
        log_info "Creating .env.local file..."
        cp .env.local.example .env.local
        log_warning "Please update .env.local file with your configuration"
    fi
    
    cd - > /dev/null
    log_success "Frontend is ready"
}

# Start development servers
start_dev_servers() {
    log_info "Starting development servers..."
    
    # Start backend in background
    cd apps/sertifikasi.arofahajj.com/api
    npm run start:dev &
    BACKEND_PID=$!
    cd - > /dev/null
    
    # Wait a bit for backend to start
    sleep 5
    
    # Start frontend in background
    cd apps/sertifikasi.arofahajj.com/web
    npm run dev &
    FRONTEND_PID=$!
    cd - > /dev/null
    
    # Save PIDs for cleanup
    echo $BACKEND_PID > .backend.pid
    echo $FRONTEND_PID > .frontend.pid
    
    log_success "Development servers are starting..."
    log_info "Backend: http://localhost:3001"
    log_info "Frontend: http://localhost:3000"
    log_info "API Docs: http://localhost:3001/api/docs"
}

# Show status
show_status() {
    log_info "Checking status..."
    
    # Check infrastructure
    cd infra/docker
    if docker-compose ps | grep -q "Up"; then
        log_success "Infrastructure services are running"
        docker-compose ps
    else
        log_warning "Infrastructure services are not running"
    fi
    cd - > /dev/null
    
    # Check backend
    if curl -s http://localhost:3001/api/health > /dev/null; then
        log_success "Backend is running (http://localhost:3001)"
    else
        log_warning "Backend is not responding"
    fi
    
    # Check frontend
    if curl -s http://localhost:3000 > /dev/null; then
        log_success "Frontend is running (http://localhost:3000)"
    else
        log_warning "Frontend is not responding"
    fi
}

# Stop services
stop_services() {
    log_info "Stopping development services..."
    
    # Stop development servers
    if [ -f ".backend.pid" ]; then
        BACKEND_PID=$(cat .backend.pid)
        if kill -0 $BACKEND_PID 2>/dev/null; then
            kill $BACKEND_PID
            log_info "Stopped backend server"
        fi
        rm .backend.pid
    fi
    
    if [ -f ".frontend.pid" ]; then
        FRONTEND_PID=$(cat .frontend.pid)
        if kill -0 $FRONTEND_PID 2>/dev/null; then
            kill $FRONTEND_PID
            log_info "Stopped frontend server"
        fi
        rm .frontend.pid
    fi
    
    # Stop infrastructure
    cd infra/docker
    docker-compose down
    cd - > /dev/null
    
    log_success "All services stopped"
}

# Show logs
show_logs() {
    log_info "Showing logs..."
    
    if [ "$1" = "backend" ]; then
        cd apps/sertifikasi.arofahajj.com/api
        npm run start:dev
    elif [ "$1" = "frontend" ]; then
        cd apps/sertifikasi.arofahajj.com/web
        npm run dev
    elif [ "$1" = "infra" ]; then
        cd infra/docker
        docker-compose logs -f
    else
        log_info "Available log options:"
        echo "  backend  - Show backend logs"
        echo "  frontend - Show frontend logs"
        echo "  infra    - Show infrastructure logs"
    fi
}

# Database operations
database() {
    case $1 in
        "reset")
            log_info "Resetting database..."
            cd apps/sertifikasi.arofahajj.com/api
            npm run prisma:migrate reset
            cd - > /dev/null
            log_success "Database reset"
            ;;
        "studio")
            log_info "Opening Prisma Studio..."
            cd apps/sertifikasi.arofahajj.com/api
            npm run prisma:studio
            ;;
        "migrate")
            log_info "Running database migrations..."
            cd apps/sertifikasi.arofahajj.com/api
            npm run prisma:migrate dev
            cd - > /dev/null
            log_success "Migrations completed"
            ;;
        *)
            log_info "Available database options:"
            echo "  reset   - Reset database (destructive)"
            echo "  studio  - Open Prisma Studio"
            echo "  migrate - Run migrations"
            ;;
    esac
}

# Show help
show_help() {
    echo "Arofahajj Development Script"
    echo ""
    echo "Usage: $0 [command] [options]"
    echo ""
    echo "Commands:"
    echo "  start     - Start complete development environment"
    echo "  stop      - Stop all services"
    echo "  status    - Show status of all services"
    echo "  logs      - Show logs (backend|frontend|infra)"
    echo "  db        - Database operations (reset|studio|migrate)"
    echo "  setup     - Setup environment only"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start              # Start everything"
    echo "  $0 logs backend       # Show backend logs"
    echo "  $0 db studio          # Open Prisma Studio"
    echo "  $0 stop               # Stop everything"
}

# Main script logic
case $1 in
    "start")
        check_prerequisites
        start_infrastructure
        setup_backend
        setup_frontend
        start_dev_servers
        show_status
        ;;
    "stop")
        stop_services
        ;;
    "status")
        show_status
        ;;
    "logs")
        show_logs $2
        ;;
    "db")
        database $2
        ;;
    "setup")
        check_prerequisites
        start_infrastructure
        setup_backend
        setup_frontend
        ;;
    "help"|"--help"|"-h")
        show_help
        ;;
    *)
        log_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac