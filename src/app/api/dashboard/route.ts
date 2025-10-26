import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Mock data untuk dashboard - nanti bisa diganti dengan database
    const dashboardData = {
      stats: {
        totalApplications: 156,
        pendingApplications: 23,
        approvedApplications: 98,
        rejectedApplications: 35,
        totalCertificates: 89,
        activeUsers: 234
      },
      recentApplications: [
        {
          id: 'APP-001',
          companyName: 'PT Arofah Global Travel',
          type: 'PPIU',
          status: 'PENDING_VERIFICATION',
          submittedAt: '2024-01-15T10:30:00Z',
          applicant: 'Ahmad Wijaya'
        },
        {
          id: 'APP-002', 
          companyName: 'CV Nusantara Wisata',
          type: 'PIHK',
          status: 'UNDER_REVIEW',
          submittedAt: '2024-01-14T14:20:00Z',
          applicant: 'Siti Nurhaliza'
        },
        {
          id: 'APP-003',
          companyName: 'PT Haji Mandiri',
          type: 'IATA',
          status: 'APPROVED',
          submittedAt: '2024-01-13T09:15:00Z',
          applicant: 'Budi Santoso'
        },
        {
          id: 'APP-004',
          companyName: 'PT Safar Umrah',
          type: 'PPIU',
          status: 'REJECTED',
          submittedAt: '2024-01-12T16:45:00Z',
          applicant: 'Diana Putri'
        }
      ],
      certificates: [
        {
          id: 'CERT-001',
          serialNumber: 'ARF-2024-0001',
          companyName: 'PT Haji Mandiri',
          type: 'IATA',
          issuedAt: '2024-01-10T00:00:00Z',
          expiresAt: '2025-01-10T00:00:00Z',
          status: 'ACTIVE'
        },
        {
          id: 'CERT-002',
          serialNumber: 'ARF-2024-0002', 
          companyName: 'PT Travel Berkah',
          type: 'PPIU',
          issuedAt: '2024-01-08T00:00:00Z',
          expiresAt: '2025-01-08T00:00:00Z',
          status: 'ACTIVE'
        }
      ],
      activities: [
        {
          id: 1,
          type: 'APPLICATION_SUBMITTED',
          description: 'Pengajuan baru dari PT Arofah Global Travel',
          timestamp: '2024-01-15T10:30:00Z',
          user: 'Ahmad Wijaya'
        },
        {
          id: 2,
          type: 'APPLICATION_APPROVED',
          description: 'Pengajuan APP-003 telah disetujui',
          timestamp: '2024-01-14T11:20:00Z',
          user: 'Admin Reviewer'
        },
        {
          id: 3,
          type: 'CERTIFICATE_ISSUED',
          description: 'Sertifikat ARF-2024-0001 telah diterbitkan',
          timestamp: '2024-01-10T15:45:00Z',
          user: 'System'
        },
        {
          id: 4,
          type: 'APPLICATION_REJECTED',
          description: 'Pengajuan APP-004 ditolak',
          timestamp: '2024-01-12T17:30:00Z',
          user: 'Admin Reviewer'
        }
      ]
    }

    return NextResponse.json(dashboardData)
  } catch (error) {
    console.error('Dashboard API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}