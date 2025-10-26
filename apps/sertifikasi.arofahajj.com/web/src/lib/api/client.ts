import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';

// API response interface
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  timestamp: string;
}

// API error interface
interface ApiError {
  statusCode: number;
  message: string | string[];
  timestamp: string;
  path: string;
  method: string;
}

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Add request timestamp
        config.metadata = { startTime: new Date() };

        console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse<ApiResponse<any>>) => {
        const endTime = new Date();
        const startTime = response.config.metadata?.startTime;
        const duration = startTime ? endTime.getTime() - startTime.getTime() : 0;

        console.log(
          `✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url} (${duration}ms)`
        );

        // Show success toast for successful operations
        if (
          response.config.method !== 'get' &&
          response.data.success &&
          response.data.message
        ) {
          toast.success(response.data.message);
        }

        return response;
      },
      (error) => {
        const endTime = new Date();
        const startTime = error.config?.metadata?.startTime;
        const duration = startTime ? endTime.getTime() - startTime.getTime() : 0;

        console.error(
          `❌ API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url} (${duration}ms)`,
          error.response?.data || error.message
        );

        // Handle different error types
        if (error.response) {
          const { status, data } = error.response;
          const apiError = data as ApiError;

          switch (status) {
            case 401:
              // Unauthorized - redirect to login
              this.handleUnauthorized();
              break;
            case 403:
              // Forbidden
              toast.error('You do not have permission to perform this action');
              break;
            case 404:
              // Not found
              toast.error('The requested resource was not found');
              break;
            case 422:
              // Validation error
              this.handleValidationError(apiError);
              break;
            case 429:
              // Rate limit exceeded
              toast.error('Too many requests. Please try again later');
              break;
            case 500:
              // Server error
              toast.error('Server error. Please try again later');
              break;
            default:
              // Other errors
              const message = Array.isArray(apiError.message)
                ? apiError.message.join(', ')
                : apiError.message || 'An error occurred';
              toast.error(message);
          }
        } else if (error.request) {
          // Network error
          toast.error('Network error. Please check your connection');
        } else {
          // Other errors
          toast.error('An unexpected error occurred');
        }

        return Promise.reject(error);
      }
    );
  }

  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  }

  private handleUnauthorized() {
    if (typeof window !== 'undefined') {
      // Clear auth data
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      
      // Redirect to login
      window.location.href = '/auth/login';
      
      toast.error('Session expired. Please login again');
    }
  }

  private handleValidationError(error: ApiError) {
    const message = error.message;
    if (Array.isArray(message)) {
      message.forEach((msg) => toast.error(msg));
    } else {
      toast.error(message);
    }
  }

  // HTTP methods
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<ApiResponse<T>>(url, config);
    return response.data.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<ApiResponse<T>>(url, data, config);
    return response.data.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<ApiResponse<T>>(url, data, config);
    return response.data.data;
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.patch<ApiResponse<T>>(url, data, config);
    return response.data.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<ApiResponse<T>>(url, config);
    return response.data.data;
  }

  // File upload
  async uploadFile<T>(url: string, file: File, onProgress?: (progress: number) => void): Promise<T> {
    const formData = new FormData();
    formData.append('file', file);

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(progress);
        }
      },
    };

    const response = await this.client.post<ApiResponse<T>>(url, formData, config);
    return response.data.data;
  }

  // Download file
  async downloadFile(url: string, filename?: string): Promise<void> {
    const response = await this.client.get(url, {
      responseType: 'blob',
    });

    const blob = new Blob([response.data]);
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  }

  // Set auth token
  setAuthToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  }

  // Clear auth token
  clearAuthToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  }

  // Check if authenticated
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('auth_token');
    }
    return false;
  }
}

// Create singleton instance
export const apiClient = new ApiClient();

// Export types
export type { ApiResponse, ApiError };