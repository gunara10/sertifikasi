// User types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  emailVerified: boolean;
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
  roles?: string[];
}

export interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  emailVerified?: boolean;
  isActive?: boolean;
}

export interface UpdateUserDto {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatar?: string;
  emailVerified?: boolean;
  isActive?: boolean;
}

// Auth types
export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
  sessionId: string;
}

// Application types
export enum ApplicationType {
  PPIU = 'PPIU',
  PIHK = 'PIHK',
  KBIHU = 'KBIHU',
  TRAVEL = 'TRAVEL',
  HOTEL = 'HOTEL',
  TRANSPORT = 'TRANSPORT',
}

export enum ApplicationStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  IN_REVIEW = 'IN_REVIEW',
  ADDITIONAL_INFO_REQUIRED = 'ADDITIONAL_INFO_REQUIRED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CERTIFIED = 'CERTIFIED',
  EXPIRED = 'EXPIRED',
}

export enum DocumentType {
  ID_CARD = 'ID_CARD',
  PASSPORT = 'PASSPORT',
  COMPANY_REGISTRATION = 'COMPANY_REGISTRATION',
  TAX_ID = 'TAX_ID',
  BANK_ACCOUNT = 'BANK_ACCOUNT',
  INSURANCE = 'INSURANCE',
  LEGAL_DOCUMENT = 'LEGAL_DOCUMENT',
  FINANCIAL_STATEMENT = 'FINANCIAL_STATEMENT',
  EXPERIENCE_CERTIFICATE = 'EXPERIENCE_CERTIFICATE',
  OTHER = 'OTHER',
}

export enum CertificateType {
  PPIU_CERTIFICATE = 'PPIU_CERTIFICATE',
  PIHK_CERTIFICATE = 'PIHK_CERTIFICATE',
  KBIHU_CERTIFICATE = 'KBIHU_CERTIFICATE',
  TEMPORARY_CERTIFICATE = 'TEMPORARY_CERTIFICATE',
  REVOCATION_CERTIFICATE = 'REVOCATION_CERTIFICATE',
}

export interface Application {
  id: string;
  userId: string;
  type: ApplicationType;
  status: ApplicationStatus;
  serialNumber?: string;
  title: string;
  description?: string;
  data?: any;
  submittedAt?: string;
  reviewedAt?: string;
  approvedAt?: string;
  rejectedAt?: string;
  reviewerId?: string;
  rejectionReason?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  reviewer?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  documents?: Document[];
  certificates?: Certificate[];
  workflowHistory?: WorkflowHistory[];
  _count?: {
    documents: number;
    certificates: number;
  };
}

export interface CreateApplicationDto {
  type: ApplicationType;
  title: string;
  description?: string;
  data?: any;
}

export interface UpdateApplicationDto {
  title?: string;
  description?: string;
  data?: any;
}

export interface UpdateApplicationStatusDto {
  status: ApplicationStatus;
  reason?: string;
  notes?: string;
}

// Document types
export interface Document {
  id: string;
  applicationId: string;
  type: DocumentType;
  name: string;
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
  url?: string;
  isRequired: boolean;
  isVerified: boolean;
  uploadedAt: string;
  verifiedAt?: string;
  verifiedBy?: string;
}

// Certificate types
export interface Certificate {
  id: string;
  applicationId: string;
  userId: string;
  type: CertificateType;
  serialNumber: string;
  title: string;
  description?: string;
  issuedAt: string;
  expiresAt?: string;
  issuer: string;
  issuerSignature?: string;
  qrCodeUrl?: string;
  verificationUrl: string;
  pdfUrl?: string;
  isActive: boolean;
  revokedAt?: string;
  revokedReason?: string;
  createdAt: string;
  updatedAt: string;
}

// Workflow types
export interface WorkflowHistory {
  id: string;
  applicationId: string;
  fromStatus?: ApplicationStatus;
  toStatus: ApplicationStatus;
  actorId?: string;
  actorType: ActorType;
  reason?: string;
  metadata?: any;
  createdAt: string;
  actor?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

export enum ActorType {
  USER = 'USER',
  ADMIN = 'ADMIN',
  REVIEWER = 'REVIEWER',
  SYSTEM = 'SYSTEM',
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Statistics types
export interface ApplicationStatistics {
  total: number;
  draft: number;
  submitted: number;
  inReview: number;
  approved: number;
  rejected: number;
  certified: number;
}

// Form types for PPIU application
export interface PPIUApplicationData {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  npwpNumber: string;
  siupNumber: string;
  notaryActNumber: string;
  notaryActDate: string;
  directorName: string;
  directorIdNumber: string;
  directorPhone: string;
  directorEmail: string;
  bankName: string;
  bankAccountNumber: string;
  bankAccountName: string;
  officeArea: number;
  employeeCount: number;
  experienceYears: number;
  previousUmrahCount: number;
  website?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

// UI State types
export interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark' | 'system';
  loading: boolean;
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// Navigation types
export interface NavItem {
  title: string;
  href?: string;
  icon?: any;
  badge?: string;
  children?: NavItem[];
  roles?: string[];
}

// Form validation types
export interface FormErrors {
  [key: string]: string | undefined;
}

export interface FormState {
  isSubmitting: boolean;
  errors: FormErrors;
  touched: { [key: string]: boolean };
}

// File upload types
export interface FileUpload {
  file: File;
  preview: string;
  progress: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
}

// Chart data types
export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface TimeSeriesData {
  date: string;
  [key: string]: string | number;
}