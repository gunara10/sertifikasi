import { useMutation, useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { 
  Application, 
  CreateApplicationDto, 
  UpdateApplicationDto, 
  UpdateApplicationStatusDto,
  ApplicationStatistics,
  ApplicationStatus,
  PaginatedResponse 
} from '../../../types';

// Application keys for query cache
export const applicationKeys = {
  all: ['applications'] as const,
  lists: () => [...applicationKeys.all, 'list'] as const,
  list: (filters: any) => [...applicationKeys.lists(), filters] as const,
  details: () => [...applicationKeys.all, 'detail'] as const,
  detail: (id: string) => [...applicationKeys.details(), id] as const,
  statistics: () => [...applicationKeys.all, 'statistics'] as const,
};

// Hook for getting applications list
export function useApplications(
  filters: {
    page?: number;
    limit?: number;
    status?: ApplicationStatus;
    type?: string;
    search?: string;
  } = {},
  options?: UseQueryOptions<PaginatedResponse<Application>>
) {
  const queryParams = new URLSearchParams();
  
  if (filters.page) queryParams.append('page', filters.page.toString());
  if (filters.limit) queryParams.append('limit', filters.limit.toString());
  if (filters.status) queryParams.append('status', filters.status);
  if (filters.type) queryParams.append('type', filters.type);
  if (filters.search) queryParams.append('search', filters.search);

  return useQuery({
    queryKey: applicationKeys.list(filters),
    queryFn: () => apiClient.get<PaginatedResponse<Application>>(`/applications?${queryParams}`),
    staleTime: 2 * 60 * 1000, // 2 minutes
    ...options,
  });
}

// Hook for getting application details
export function useApplication(id: string, options?: UseQueryOptions<Application>) {
  return useQuery({
    queryKey: applicationKeys.detail(id),
    queryFn: () => apiClient.get<Application>(`/applications/${id}`),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!id,
    ...options,
  });
}

// Hook for getting application statistics
export function useApplicationStatistics(options?: UseQueryOptions<ApplicationStatistics>) {
  return useQuery({
    queryKey: applicationKeys.statistics(),
    queryFn: () => apiClient.get<ApplicationStatistics>('/applications/statistics'),
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
}

// Hook for creating application
export function useCreateApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateApplicationDto) => apiClient.post<Application>('/applications', data),
    onSuccess: (newApplication) => {
      // Invalidate applications list
      queryClient.invalidateQueries({ queryKey: applicationKeys.lists() });
      
      // Add new application to cache
      queryClient.setQueryData(
        applicationKeys.detail(newApplication.id),
        newApplication
      );

      // Invalidate statistics
      queryClient.invalidateQueries({ queryKey: applicationKeys.statistics() });
    },
    onError: (error) => {
      console.error('Failed to create application:', error);
    },
  });
}

// Hook for updating application
export function useUpdateApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateApplicationDto }) =>
      apiClient.patch<Application>(`/applications/${id}`, data),
    onSuccess: (updatedApplication) => {
      // Update application in cache
      queryClient.setQueryData(
        applicationKeys.detail(updatedApplication.id),
        updatedApplication
      );

      // Invalidate applications list
      queryClient.invalidateQueries({ queryKey: applicationKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to update application:', error);
    },
  });
}

// Hook for submitting application
export function useSubmitApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.post<Application>(`/applications/${id}/submit`),
    onSuccess: (updatedApplication) => {
      // Update application in cache
      queryClient.setQueryData(
        applicationKeys.detail(updatedApplication.id),
        updatedApplication
      );

      // Invalidate applications list
      queryClient.invalidateQueries({ queryKey: applicationKeys.lists() });

      // Invalidate statistics
      queryClient.invalidateQueries({ queryKey: applicationKeys.statistics() });
    },
    onError: (error) => {
      console.error('Failed to submit application:', error);
    },
  });
}

// Hook for updating application status (admin/reviewer only)
export function useUpdateApplicationStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateApplicationStatusDto }) =>
      apiClient.patch<Application>(`/applications/${id}/status`, data),
    onSuccess: (updatedApplication) => {
      // Update application in cache
      queryClient.setQueryData(
        applicationKeys.detail(updatedApplication.id),
        updatedApplication
      );

      // Invalidate applications list
      queryClient.invalidateQueries({ queryKey: applicationKeys.lists() });

      // Invalidate statistics
      queryClient.invalidateQueries({ queryKey: applicationKeys.statistics() });
    },
    onError: (error) => {
      console.error('Failed to update application status:', error);
    },
  });
}

// Hook for deleting application
export function useDeleteApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete<Application>(`/applications/${id}`),
    onSuccess: (_, deletedId) => {
      // Remove application from cache
      queryClient.removeQueries({ queryKey: applicationKeys.detail(deletedId) });

      // Invalidate applications list
      queryClient.invalidateQueries({ queryKey: applicationKeys.lists() });

      // Invalidate statistics
      queryClient.invalidateQueries({ queryKey: applicationKeys.statistics() });
    },
    onError: (error) => {
      console.error('Failed to delete application:', error);
    },
  });
}

// Hook for file upload
export function useUploadFile() {
  return useMutation({
    mutationFn: ({ file, onProgress }: { file: File; onProgress?: (progress: number) => void }) =>
      apiClient.uploadFile<any>('/upload', file, onProgress),
    onError: (error) => {
      console.error('Failed to upload file:', error);
    },
  });
}

// Hook for downloading file
export function useDownloadFile() {
  return useMutation({
    mutationFn: ({ url, filename }: { url: string; filename?: string }) =>
      apiClient.downloadFile(url, filename),
    onError: (error) => {
      console.error('Failed to download file:', error);
    },
  });
}