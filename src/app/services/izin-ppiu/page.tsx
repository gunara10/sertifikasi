'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, Globe, Plane } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { AnimatedCard, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardDescription, AnimatedCardContent } from '@/components/ui/animated-card'
import { FloatingElement } from '@/components/ui/floating-element'
import { GradientText } from '@/components/ui/gradient-text'

export default function IzinPPIUPage() {
  const handleAjukanIzin = () => {
    // Navigasi ke wizard atau form pengajuan
    window.location.href = '/wizard'
  }

  const handlePerpanjangIzin = () => {
    // Navigasi ke halaman perpanjangan
    window.location.href = '/applications/new?type=perpanjangan-ppiu'
  }

  const handleJadwalkanAudit = () => {
    // Navigasi ke halaman audit
    window.location.href = '/applications/new?type=audit-ppiu'
  }

  const handleKonsultasi = () => {
    // Buka WhatsApp atau form konsultasi
    window.open('https://wa.me/628123456789?text=Halo%2C+saya+ingin+konsultasi+mengenai+izin+PPIU', '_blank')
  }

  const handleMulaiPengajuan = () => {
    window.location.href = '/wizard'
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 relative overflow-hidden">
        {/* Background animated elements */}
        <FloatingElement duration={6} delay={0} intensity={15} className="absolute top-10 left-10 opacity-20">
          <div className="w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement duration={8} delay={1} intensity={20} className="absolute top-20 right-20 opacity-20">
          <div className="w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement duration={7} delay={2} intensity={12} className="absolute bottom-10 left-1/4 opacity-20">
          <div className="w-24 h-24 bg-white/15 rounded-full blur-xl"></div>
        </FloatingElement>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Globe className="w-4 h-4 mr-2" />
                Izin Resmi Kemenag RI
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Izin <GradientText colors={['from-white', 'to-blue-100']}>PPIU</GradientText>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-blue-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Penyelenggara Perjalanan Ibadah Umrah. Dapatkan izin resmi dari Kementerian Agama 
              untuk menyelenggarakan ibadah Umrah dengan aman dan terpercaya.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedButton size="lg" className="bg-white text-blue-600 hover:bg-blue-50" onClick={handleKonsultasi}>
                <CheckCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={handleMulaiPengajuan}>
                <Plane className="w-5 h-5 mr-2" />
                Mulai Pengajuan
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Izin Resmi Kemenag</CardTitle>
                  <CardDescription>
                    Terdaftar secara resmi di Kementerian Agama Republik Indonesia
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Jaminan Keamanan</CardTitle>
                  <CardDescription>
                    Memberikan rasa aman dan nyaman bagi jamaah selama ibadah
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Proses Terstandar</CardTitle>
                  <CardDescription>
                    Mengikuti standar operasional prosedur yang ditetapkan pemerintah
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Service Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Jenis Layanan PPIU</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Izin Baru PPIU</CardTitle>
                    <CardDescription>
                      Pengajuan izin pertama kali untuk penyelenggara Umrah
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Verifikasi perusahaan dan SDM</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Audit kelayakan operasional</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Penerbitan izin 5 tahun</span>
                      </li>
                    </ul>
                    <AnimatedButton className="w-full" onClick={handleAjukanIzin}>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Ajukan Izin Baru
                    </AnimatedButton>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Perpanjangan PPIU</CardTitle>
                    <CardDescription>
                      Perpanjangan izin yang akan masa berlakunya berakhir
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Evaluasi kinerja 5 tahunan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Update dokumen persyaratan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Perpanjangan 5 tahun</span>
                      </li>
                    </ul>
                    <AnimatedButton className="w-full" variant="outline" onClick={handlePerpanjangIzin}>
                      <Clock className="w-4 h-4 mr-2" />
                      Perpanjang Izin
                    </AnimatedButton>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Audit Kepatuhan</CardTitle>
                    <CardDescription>
                      Audit rutin untuk memastikan kepatuhan standar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Audit SOP dan layanan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Verifikasi dokumentasi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Rekomendasi perbaikan</span>
                      </li>
                    </ul>
                    <AnimatedButton className="w-full" variant="outline" onClick={handleJadwalkanAudit}>
                      <FileText className="w-4 h-4 mr-2" />
                      Jadwalkan Audit
                    </AnimatedButton>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Requirements */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Persyaratan Dokumen</CardTitle>
                <CardDescription>
                  Dokumen lengkap yang diperlukan untuk pengajuan Izin PPIU
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Legalitas</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Akta Pendirian & Perubahan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>NIB (Nomor Induk Berusaha)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>NPWP Perusahaan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>SIUP/TDP</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Domisili Perusahaan</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Keuangan</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Laporan Keuangan 3 Tahun</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Rekening Koran 6 Bulan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Bukti Modal Minimal</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Jaminan Bank</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Asuransi Penyelenggara</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Operasional</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Struktur Organisasi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Daftar SDM & Sertifikat</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>SOP Pelayanan Umrah</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Kontrak dengan Mitra Saudi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                        <span>Sertifikat Akreditasi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Alur Proses Pengajuan</h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Konsultasi</h3>
                  <p className="text-sm text-gray-600">Analisis kelayakan dan persiapan dokumen</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pengajuan</h3>
                  <p className="text-sm text-gray-600">Submit aplikasi ke sistem Kemenag</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Verifikasi</h3>
                  <p className="text-sm text-gray-600">Proses verifikasi dokumen & administrasi</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Audit</h3>
                  <p className="text-sm text-gray-600">Audit lapangan dan wawancara</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-semibold mb-2">Terbit Izin</h3>
                  <p className="text-sm text-gray-600">Penerbitan izin PPIU resmi</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Keuntungan Menjadi PPIU</CardTitle>
                <CardDescription>
                  Manfaat yang didapatkan setelah memiliki izin PPIU resmi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Kepercayaan Publik</h4>
                    <p className="text-sm text-gray-600">Meningkatkan kepercayaan masyarakat</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Akses Global</h4>
                    <p className="text-sm text-gray-600">Kerjasama dengan mitra internasional</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Perlindungan Hukum</h4>
                    <p className="text-sm text-gray-600">Dasar hukum yang kuat untuk operasional</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Jamaah Lebih Banyak</h4>
                    <p className="text-sm text-gray-600">Akses ke pasar jamaah yang lebih luas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Estimasi Biaya & Waktu</CardTitle>
                <CardDescription>
                  Informasi biaya dan estimasi waktu proses pengajuan Izin PPIU
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Izin Baru PPIU</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      Rp 50-100 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Estimasi waktu: 3-6 bulan
                    </p>
                    <ul className="text-sm text-left space-y-1 mb-4">
                      <li>• Fee pengajuan Kemenag</li>
                      <li>• Biaya audit & verifikasi</li>
                      <li>• Konsultasi & pendampingan</li>
                      <li>• Jaminan bank & asuransi</li>
                    </ul>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Perpanjangan PPIU</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      Rp 30-60 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Estimasi waktu: 2-4 bulan
                    </p>
                    <ul className="text-sm text-left space-y-1 mb-4">
                      <li>• Fee perpanjangan Kemenag</li>
                      <li>• Biaya evaluasi kinerja</li>
                      <li>• Update dokumentasi</li>
                      <li>• Audit kepatuhan</li>
                    </ul>
                    <Button className="w-full" variant="outline">Detail Biaya</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Pertanyaan Umum</CardTitle>
                <CardDescription>
                  Informasi penting seputar Izin PPIU yang sering ditanyakan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Apa itu PPIU dan mengapa penting?</h4>
                    <p className="text-sm text-gray-600">
                      PPIU (Penyelenggara Perjalanan Ibadah Umrah) adalah izin resmi dari Kemenag 
                      yang wajib dimiliki perusahaan yang menyelenggarakan ibadah Umrah. Ini menjamin 
                      keamanan dan kenyamanan jamaah.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berapa modal minimal yang diperlukan?</h4>
                    <p className="text-sm text-gray-600">
                      Berdasarkan regulasi, perusahaan PPIU harus memiliki modal minimal Rp 500 juta 
                      dan jaminan bank sebesar Rp 1 miliar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah perusahaan harus berbentuk PT?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, perusahaan penyelenggara Umrah harus berbentuk badan hukum Perseroan Terbatas (PT) 
                      yang bergerak di bidang jasa perjalanan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bagaimana dengan pembimbing ibadah?</h4>
                    <p className="text-sm text-gray-600">
                      Setiap PPIU wajib memiliki pembimbing ibadah yang bersertifikat dari Kemenag, 
                      minimal 2 orang untuk setiap kelompok jamaah.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama izin PPIU berlaku?</h4>
                    <p className="text-sm text-gray-600">
                      Izin PPIU berlaku selama 5 tahun dan dapat diperpanjang dengan melakukan 
                      evaluasi kinerja dan pemenuhan persyaratan kembali.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Menjadi PPIU Resmi?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Tim ahli kami siap membantu proses pengajuan izin PPIU dari awal hingga selesai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <FileText className="w-5 h-5 mr-2" />
                Cek Kelayakan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}