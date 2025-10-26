import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { User, LoginDto, RegisterDto, ChangePasswordDto, AuthResponse } from '../../../types';

// Auth keys for query cache
export const authKeys = {
  all: ['auth'] as const,
  user: () => [...authKeys.all, 'user'] as const,
  profile: () => [...authKeys.all, 'profile'] as const,
  sessions: () => [...authKeys.all, 'sessions'] as const,
};

// Hook for user login
export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginDto) => apiClient.post<AuthResponse>('/auth/login', data),
    onSuccess: (response) => {
      // Store auth token
      apiClient.setAuthToken(response.access_token);
      
      // Store user data
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_data', JSON.stringify(response.user));
      }

      // Update query cache
      queryClient.setQueryData(authKeys.user(), response.user);
      
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });
}

// Hook for user registration
export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RegisterDto) => apiClient.post<AuthResponse>('/auth/register', data),
    onSuccess: (response) => {
      // Store auth token
      apiClient.setAuthToken(response.access_token);
      
      // Store user data
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_data', JSON.stringify(response.user));
      }

      // Update query cache
      queryClient.setQueryData(authKeys.user(), response.user);
      
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
    onError: (error) => {
      console.error('Registration failed:', error);
    },
  });
}

// Hook for user logout
export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sessionId: string) => apiClient.post('/auth/logout', { sessionId }),
    onSuccess: () => {
      // Clear auth data
      apiClient.clearAuthToken();
      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user_data');
      }

      // Clear query cache
      queryClient.clear();
      
      // Redirect to login
      window.location.href = '/auth/login';
    },
    onError: (error) => {
      console.error('Logout failed:', error);
      // Even if logout fails on server, clear local data
      apiClient.clearAuthToken();
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user_data');
      }
      queryClient.clear();
      window.location.href = '/auth/login';
    },
  });
}

// Hook for getting current user
export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: () => apiClient.get<User>('/auth/me'),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: apiClient.isAuthenticated(),
  });
}

// Hook for refreshing token
export function useRefreshToken() {
  return useMutation({
    mutationFn: () => apiClient.post<{ access_token: string }>('/auth/refresh'),
    onSuccess: (response) => {
      apiClient.setAuthToken(response.access_token);
    },
    onError: (error) => {
      console.error('Token refresh failed:', error);
      // If refresh fails, logout
      window.location.href = '/auth/login';
    },
  });
}

// Hook for changing password
export function useChangePassword() {
  return useMutation({
    mutationFn: (data: ChangePasswordDto) => apiClient.post('/auth/change-password', data),
    onSuccess: () => {
      // Force logout after password change
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
      window.location.href = '/auth/login';
    },
  });
}

// Hook for getting user sessions
export function useUserSessions() {
  return useQuery({
    queryKey: authKeys.sessions(),
    queryFn: () => apiClient.get<any[]>('/auth/sessions'),
    staleTime: 2 * 60 * 1000, // 2 minutes
    enabled: apiClient.isAuthenticated(),
  });
}

// Hook for revoking session
export function useRevokeSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (sessionId: string) => apiClient.delete(`/auth/sessions/${sessionId}`),
    onSuccess: () => {
      // Invalidate sessions query
      queryClient.invalidateQueries({ queryKey: authKeys.sessions() });
    },
  });
}

// Hook for checking authentication status
export function useAuth() {
  const { data: user, isLoading, error } = useCurrentUser();
  
  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    isAdmin: user?.roles?.includes('ADMIN'),
    isReviewer: user?.roles?.includes('REVIEWER'),
  };
}