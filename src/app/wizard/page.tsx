'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ArrowRight, ArrowLeft, CheckCircle, Users, Building, FileText, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface WizardAnswer {
  businessType: string
  hasLegalEntity: boolean
  hasNIB: boolean
  goals: string[]
  showChecklist: boolean
}

interface Recommendation {
  slug: string
  title: string
  reason: string
  priority: number
}

export default function WizardPage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<WizardAnswer>({
    businessType: '',
    hasLegalEntity: false,
    hasNIB: false,
    goals: [],
    showChecklist: false
  })
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  const businessTypes = [
    { value: 'TRAVEL', label: 'Travel Agent', icon: Users },
    { value: 'CONSULTANT', label: 'Konsultan', icon: Building },
    { value: 'SUPPLIER', label: 'Supplier/Penyedia Jasa', icon: FileText },
    { value: 'OTHER', label: 'Lainnya', icon: Building }
  ]

  const goalOptions = [
    { value: 'PPIU', label: 'Izin PPIU (Penyelenggara Umrah)', description: 'Wajib untuk penyelenggara Umrah' },
    { value: 'PIHK', label: 'Izin PIHK (Penyelenggara Haji Khusus)', description: 'Akses kuota Haji Khusus' },
    { value: 'IATA', label: 'IATA Accreditation', description: 'Akses GDS & ticketing internasional' },
    { value: 'ISO', label: 'ISO Certification', description: 'Standar kualitas internasional' },
    { value: 'VISA_SA', label: 'Visa Saudi', description: 'Pengurusan visa Saudi Arabia' },
    { value: 'FOUND_COMP', label: 'Pendirian Perusahaan', description: 'Pendirian badan usaha baru' },
    { value: 'LEGAL_TAX', label: 'Legal & Tax Compliance', description: 'Kepatuhan hukum & pajak' },
    { value: 'MINING', label: 'Izin Pertambangan', description: 'Perizinan sektor pertambangan' }
  ]

  const generateRecommendations = () => {
    const recs: Recommendation[] = []

    if (answers.businessType === 'TRAVEL' && !answers.hasLegalEntity) {
      recs.push({
        slug: '/pendirian-badan-usaha',
        title: 'Pendirian PT Travel',
        reason: 'Legal entity wajib sebelum izin PPIU/PIHK',
        priority: 1
      })
    }

    if (answers.goals.includes('PPIU')) {
      recs.push({
        slug: '/izin-ppiu',
        title: 'Izin PPIU',
        reason: 'Wajib untuk penyelenggara Umrah',
        priority: 2
      })
    }

    if (answers.goals.includes('PIHK')) {
      recs.push({
        slug: '/izin-pihk',
        title: 'Izin PIHK',
        reason: 'Akses kuota Haji Khusus',
        priority: 3
      })
    }

    if (answers.goals.includes('IATA')) {
      recs.push({
        slug: '/iata-accreditation',
        title: 'IATA Accreditation',
        reason: 'Akses GDS & ticketing internasional',
        priority: 4
      })
    }

    if (answers.goals.includes('MINING')) {
      recs.push({
        slug: '/izin-pertambangan/iujp',
        title: 'IUJP',
        reason: 'Jika konsultan/penunjang tambang',
        priority: 5
      })
      recs.push({
        slug: '/izin-pertambangan/iup-eksplorasi',
        title: 'IUP Eksplorasi',
        reason: 'Untuk kegiatan inti penambangan',
        priority: 6
      })
    }

    recs.sort((a, b) => a.priority - b.priority)
    setRecommendations(recs)
  }

  const handleNext = () => {
    if (step === 3) {
      generateRecommendations()
    }
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleGoalToggle = (goal: string) => {
    setAnswers(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Arofahajj</span>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-Adviser Sertifikasi
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Temukan sertifikasi yang tepat untuk bisnis Anda
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

          {/* Step Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">{step}</span>
                </div>
                {step === 1 && "Jenis Bisnis"}
                {step === 2 && "Status Legal Perusahaan"}
                {step === 3 && "Tujuan Sertifikasi"}
                {step === 4 && "Rekomendasi"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Pilih jenis bisnis yang Anda jalankan saat ini"}
                {step === 2 && "Informasikan status legal perusahaan Anda"}
                {step === 3 && "Pilih tujuan sertifikasi yang Anda butuhkan"}
                {step === 4 && "Berdasarkan jawaban Anda, berikut rekomendasi kami"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <motion.div {...fadeIn}>
                  <RadioGroup
                    value={answers.businessType}
                    onValueChange={(value) => setAnswers(prev => ({ ...prev, businessType: value }))}
                    className="space-y-4"
                  >
                    {businessTypes.map((type) => (
                      <div key={type.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value={type.value} id={type.value} />
                        <type.icon className="w-5 h-5 text-gray-600" />
                        <Label htmlFor={type.value} className="flex-1 cursor-pointer">
                          <div className="font-medium">{type.label}</div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <Checkbox
                        id="hasLegalEntity"
                        checked={answers.hasLegalEntity}
                        onCheckedChange={(checked) => setAnswers(prev => ({ ...prev, hasLegalEntity: !!checked }))}
                      />
                      <Label htmlFor="hasLegalEntity" className="flex-1 cursor-pointer">
                        <div className="font-medium">Sudah memiliki Badan Usaha (PT/CV/Yayasan)</div>
                        <div className="text-sm text-gray-600">Perusahaan sudah terdaftar secara resmi</div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <Checkbox
                        id="hasNIB"
                        checked={answers.hasNIB}
                        onCheckedChange={(checked) => setAnswers(prev => ({ ...prev, hasNIB: !!checked }))}
                      />
                      <Label htmlFor="hasNIB" className="flex-1 cursor-pointer">
                        <div className="font-medium">Sudah memiliki NIB (Nomor Induk Berusaha)</div>
                        <div className="text-sm text-gray-600">Sudah terdaftar di OSS</div>
                      </Label>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div {...fadeIn} className="space-y-4">
                  <div className="text-sm text-gray-600 mb-4">
                    Pilih semua tujuan yang sesuai dengan kebutuhan Anda:
                  </div>
                  {goalOptions.map((goal) => (
                    <div key={goal.value} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                      <Checkbox
                        id={goal.value}
                        checked={answers.goals.includes(goal.value)}
                        onCheckedChange={() => handleGoalToggle(goal.value)}
                      />
                      <Label htmlFor={goal.value} className="flex-1 cursor-pointer">
                        <div className="font-medium">{goal.label}</div>
                        <div className="text-sm text-gray-600">{goal.description}</div>
                      </Label>
                    </div>
                  ))}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div {...fadeIn} className="space-y-6">
                  <div className="text-center mb-6">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Rekomendasi Sertifikasi untuk Anda
                    </h3>
                    <p className="text-gray-600">
                      Berdasarkan jawaban Anda, kami merekomendasikan {recommendations.length} layanan:
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-semibold text-sm">{rec.priority}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{rec.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{rec.reason}</p>
                          <Badge variant="secondary">Prioritas {rec.priority}</Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          Pelajari
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-6">
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Siap untuk memulai pengajuan?
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                          <Link href="/applications/new">
                            Buat Pengajuan Sekarang
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <Link href="/auth/login">
                            Masuk ke Dashboard
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          {step < 4 && (
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Sebelumnya
              </Button>
              <Button
                onClick={handleNext}
                disabled={step === 1 && !answers.businessType}
              >
                {step === 3 ? 'Lihat Rekomendasi' : 'Selanjutnya'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}