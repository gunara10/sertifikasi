'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, ArrowRight, FileText, Upload, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function NewApplicationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companyType: '',
    npwp: '',
    address: '',
    phone: '',
    email: '',
    
    // Application Details
    applicationType: '',
    description: '',
    
    // Documents
    documents: [] as File[],
    
    // Agreement
    agreedToTerms: false
  })
  
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  const applicationTypes = [
    { value: 'PPIU', label: 'PPIU - Penyelenggara Perjalanan Ibadah Umrah', description: 'Izin untuk penyelenggaraan ibadah umrah' },
    { value: 'PIHK', label: 'PIHK - Penyelenggara Ibadah Haji Khusus', description: 'Izin untuk penyelenggaraan haji khusus' },
    { value: 'IATA', label: 'IATA Accreditation', description: 'Akreditasi IATA untuk travel agent' },
    { value: 'ISO9001', label: 'ISO 9001', description: 'Sertifikasi manajemen mutu' },
    { value: 'ISO27001', label: 'ISO 27001', description: 'Sertifikasi keamanan informasi' }
  ]

  const companyTypes = [
    { value: 'PT', label: 'Perseroan Terbatas (PT)' },
    { value: 'CV', label: 'Commanditaire Vennootschap (CV)' },
    { value: 'FA', label: 'Firma' },
    { value: 'UD', label: 'Usaha Dagang (UD)' },
    { value: 'YAYASAN', label: 'Yayasan' }
  ]

  const requiredDocuments = {
    PPIU: ['Akta Pendirian', 'NIB', 'NPWP', 'SIUP', 'TDP', 'Rekening Koran', 'Struktur Organisasi'],
    PIHK: ['Akta Pendirian', 'NIB', 'NPWP', 'SIUP', 'TDP', 'Rekening Koran', 'Struktur Organisasi', 'Sertifikat Kompetensi'],
    IATA: ['Akta Pendirian', 'NIB', 'NPWP', 'IATA Registration', 'Financial Statement', 'Insurance'],
    ISO9001: ['Akta Pendirian', 'NIB', 'NPWP', 'Prosedur Mutu', 'Manual Mutu', 'Sertifikat Training'],
    ISO27001: ['Akta Pendirian', 'NIB', 'NPWP', 'Dokumen Kebijakan Keamanan', 'Risk Assessment', 'Sertifikat Training']
  }

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      // Simulasi submit aplikasi
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Redirect ke dashboard atau halaman sukses
      router.push('/dashboard?application_submitted=true')
    } catch (error) {
      console.error('Error submitting application:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files]
    }))
  }

  const removeDocument = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }))
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.companyName && formData.companyType && formData.npwp && formData.address
      case 2:
        return formData.applicationType && formData.description
      case 3:
        return formData.documents.length > 0
      case 4:
        return formData.agreedToTerms
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Arofahajj - Pengajuan Baru</span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Buat Pengajuan Sertifikasi
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Isi formulir berikut untuk mengajukan sertifikasi baru
            </p>
            
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Langkah {step} dari {totalSteps}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {Math.round(progress)}% Selesai
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Form Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">{step}</span>
                </div>
                {step === 1 && "Informasi Perusahaan"}
                {step === 2 && "Detail Pengajuan"}
                {step === 3 && "Upload Dokumen"}
                {step === 4 && "Konfirmasi & Submit"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Masukkan informasi lengkap perusahaan Anda"}
                {step === 2 && "Pilih jenis sertifikasi dan berikan deskripsi"}
                {step === 3 && "Upload dokumen persyaratan yang diperlukan"}
                {step === 4 && "Periksa kembali data dan submit pengajuan"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Nama Perusahaan *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        placeholder="PT Contoh Perusahaan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyType">Jenis Perusahaan *</Label>
                      <Select value={formData.companyType} onValueChange={(value) => setFormData(prev => ({ ...prev, companyType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis perusahaan" />
                        </SelectTrigger>
                        <SelectContent>
                          {companyTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="npwp">NPWP *</Label>
                      <Input
                        id="npwp"
                        value={formData.npwp}
                        onChange={(e) => setFormData(prev => ({ ...prev, npwp: e.target.value }))}
                        placeholder="12.345.678.9-012.345"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telepon *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+62 21 1234 5678"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="info@perusahaan.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Alamat Lengkap *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Jl. Contoh No. 123, Jakarta Selatan"
                      rows={3}
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="applicationType">Jenis Sertifikasi *</Label>
                    <Select value={formData.applicationType} onValueChange={(value) => setFormData(prev => ({ ...prev, applicationType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis sertifikasi" />
                      </SelectTrigger>
                      <SelectContent>
                        {applicationTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-sm text-gray-600">{type.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi Pengajuan *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Jelaskan tujuan dan kebutuhan sertifikasi Anda..."
                      rows={4}
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Dokumen yang Diperlukan:</h4>
                      {formData.applicationType && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {requiredDocuments[formData.applicationType as keyof typeof requiredDocuments]?.map((doc, index) => (
                            <Badge key={index} variant="outline" className="flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {doc}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Upload dokumen persyaratan</p>
                      <p className="text-sm text-gray-500 mb-4">PDF, JPG, atau PNG (Max 10MB per file)</p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <Button asChild>
                        <label htmlFor="file-upload" className="cursor-pointer">
                          Pilih File
                        </label>
                      </Button>
                    </div>

                    {formData.documents.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Dokumen yang Diupload:</h4>
                        {formData.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">{doc.name}</span>
                              <span className="text-xs text-gray-500">({(doc.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeDocument(index)}
                            >
                              Hapus
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Ringkasan Pengajuan:</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nama Perusahaan:</span>
                        <span className="font-medium">{formData.companyName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Jenis Perusahaan:</span>
                        <span className="font-medium">{formData.companyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">NPWP:</span>
                        <span className="font-medium">{formData.npwp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Jenis Sertifikasi:</span>
                        <span className="font-medium">{formData.applicationType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Jumlah Dokumen:</span>
                        <span className="font-medium">{formData.documents.length} file</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }))}
                      className="rounded"
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Saya menyetujui syarat dan ketentuan yang berlaku dan menyatakan bahwa data yang saya berikan adalah benar.
                    </Label>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Sebelumnya
            </Button>
            
            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                Selanjutnya
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || loading}
              >
                {loading ? 'Mengirim...' : 'Submit Pengajuan'}
                <CheckCircle className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}