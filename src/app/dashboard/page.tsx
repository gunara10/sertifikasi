'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Users, 
  Award,
  Activity,
  TrendingUp,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface DashboardStats {
  totalApplications: number
  pendingApplications: number
  approvedApplications: number
  rejectedApplications: number
  totalCertificates: number
  activeUsers: number
}

interface Application {
  id: string
  companyName: string
  type: string
  status: string
  submittedAt: string
  applicant: string
}

interface Certificate {
  id: string
  serialNumber: string
  companyName: string
  type: string
  issuedAt: string
  expiresAt: string
  status: string
}

interface Activity {
  id: number
  type: string
  description: string
  timestamp: string
  user: string
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [applications, setApplications] = useState<Application[]>([])
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    window.location.href = '/auth/login'
  }

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/dashboard')
      if (response.ok) {
        const data = await response.json()
        setStats(data.stats)
        setApplications(data.recentApplications)
        setCertificates(data.certificates)
        setActivities(data.activities)
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      window.location.href = '/auth/login'
      return
    }
    
    fetchDashboardData()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-100 text-green-800'
      case 'PENDING_VERIFICATION':
      case 'UNDER_REVIEW':
        return 'bg-yellow-100 text-yellow-800'
      case 'REJECTED':
        return 'bg-red-100 text-red-800'
      case 'ACTIVE':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'APPROVED':
      case 'ACTIVE':
        return <CheckCircle className="w-4 h-4" />
      case 'PENDING_VERIFICATION':
      case 'UNDER_REVIEW':
        return <Clock className="w-4 h-4" />
      case 'REJECTED':
        return <XCircle className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Memuat dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Arofahajj Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={fetchDashboardData}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Keluar
              </Button>
              <Link href="/">
                <Button variant="outline" size="sm">
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <motion.div {...fadeIn}>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
            <p className="text-gray-600">Monitor dan kelola sertifikasi PPIU & PIHK</p>
          </div>

          {/* Stats Cards */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Pengajuan</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Menunggu Verifikasi</p>
                        <p className="text-2xl font-bold text-yellow-600">{stats.pendingApplications}</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Disetujui</p>
                        <p className="text-2xl font-bold text-green-600">{stats.approvedApplications}</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Ditolak</p>
                        <p className="text-2xl font-bold text-red-600">{stats.rejectedApplications}</p>
                      </div>
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Sertifikat Aktif</p>
                        <p className="text-2xl font-bold text-purple-600">{stats.totalCertificates}</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Pengguna Aktif</p>
                        <p className="text-2xl font-bold text-indigo-600">{stats.activeUsers}</p>
                      </div>
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}

          {/* Main Content */}
          <Tabs defaultValue="applications" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="applications">Pengajuan Terbaru</TabsTrigger>
              <TabsTrigger value="certificates">Sertifikat</TabsTrigger>
              <TabsTrigger value="activities">Aktivitas</TabsTrigger>
            </TabsList>

            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Pengajuan Terbaru
                  </CardTitle>
                  <CardDescription>
                    Daftar pengajuan sertifikasi yang masuk
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applications.map((app, index) => (
                      <motion.div
                        key={app.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{app.companyName}</h4>
                            <Badge variant="outline">{app.type}</Badge>
                            <Badge className={getStatusColor(app.status)}>
                              {getStatusIcon(app.status)}
                              <span className="ml-1">{app.status.replace('_', ' ')}</span>
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600">
                            <p>ID: {app.id} • Pemohon: {app.applicant}</p>
                            <p>Dikirim: {formatDate(app.submittedAt)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Detail
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certificates">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Sertifikat Aktif
                  </CardTitle>
                  <CardDescription>
                    Daftar sertifikat yang telah diterbitkan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certificates.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{cert.companyName}</h4>
                            <Badge variant="outline">{cert.type}</Badge>
                            <Badge className={getStatusColor(cert.status)}>
                              {getStatusIcon(cert.status)}
                              <span className="ml-1">{cert.status}</span>
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600">
                            <p>No. Seri: {cert.serialNumber}</p>
                            <p>Terbit: {formatDate(cert.issuedAt)} • Berlaku: {formatDate(cert.expiresAt)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Lihat
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Aktivitas Terbaru
                  </CardTitle>
                  <CardDescription>
                    Log aktivitas sistem terkini
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Activity className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 mb-1">{activity.description}</p>
                          <div className="text-sm text-gray-600">
                            <span>Oleh: {activity.user}</span>
                            <span className="mx-2">•</span>
                            <span>{formatDate(activity.timestamp)}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}