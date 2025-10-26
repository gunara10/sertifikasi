'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, MapPin, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function SertifikatTourLeaderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              Professional Guide Certification
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sertifikat Tour Leader & Guide
            </h1>
            <p className="text-xl mb-8 text-rose-50">
              Dapatkan sertifikasi profesional Tour Leader dan Pemandu Wisata. 
              Tingkatkan kredibilitas dan buka peluang karir di industri pariwisata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Daftar Pelatihan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
                <GraduationCap className="w-5 h-5 mr-2" />
                Lihat Jadwal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-rose-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-rose-600" />
                  </div>
                  <CardTitle>Sertifikasi Resmi</CardTitle>
                  <CardDescription>
                    Diakui Kementerian Pariwisata dan industri travel
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-rose-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-rose-600" />
                  </div>
                  <CardTitle>Instruktur Profesional</CardTitle>
                  <CardDescription>
                    Tim pengajar berpengalaman dari industri travel
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-rose-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-rose-600" />
                  </div>
                  <CardTitle>Standar Internasional</CardTitle>
                  <CardDescription>
                    Kurikulum sesuai standar WTO dan global tourism
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Certification Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Jenis Sertifikasi</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Tour Leader Domestik</CardTitle>
                    <CardDescription>
                      Sertifikasi untuk memimpin tour dalam negeri
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Pengetahuan destinasi Indonesia</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Manajemen grup tour</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Handling emergency</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Durasi 5 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Tour Leader Internasional</CardTitle>
                    <CardDescription>
                      Sertifikasi untuk memimpin tour luar negeri
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Bahasa asing (minimal 1)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Cross-cultural understanding</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">International tourism protocol</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Durasi 7 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Pemandu Wisata</CardTitle>
                    <CardDescription>
                      Sertifikasi untuk pemandu wisata lokal
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Knowledge destinasi spesifik</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Storytelling techniques</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Public speaking</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Durasi 4 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Tour Leader Muslim</CardTitle>
                    <CardDescription>
                      Sertifikasi khusus tour Muslim-friendly
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Islamic tourism knowledge</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Halal travel management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Prayer time management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Durasi 6 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Adventure Guide</CardTitle>
                    <CardDescription>
                      Sertifikasi untuk pemandu wisata adventure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Outdoor skills & safety</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">First aid & emergency</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Environmental awareness</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Durasi 8 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Renewal & Upgrade</CardTitle>
                    <CardDescription>
                      Perpanjangan dan upgrade sertifikasi
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Perpanjangan sertifikat</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Update kompetensi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Workshop lanjutan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                        <span className="text-sm">Durasi 2-3 hari</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Info Lebih Lanjut</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Training Modules */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Modul Pelatihan</CardTitle>
                <CardDescription>
                  Materi komprehensif untuk setiap program sertifikasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Core Competencies</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Tour planning & management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Communication skills</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Problem solving</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Customer service excellence</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Destination Knowledge</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Geography & culture</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>History & heritage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Culinary & local products</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Hidden gems & attractions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Operational Skills</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Group management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Time management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Budget handling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Persyaratan Peserta</CardTitle>
                <CardDescription>
                  Kriteria yang harus dipenuhi untuk mengikuti pelatihan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Persyaratan Umum</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Minimal SMA/SMK sederajat</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Usia 18-45 tahun</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Sehat jasmani & rohani</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Berpenampilan menarik</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>KTP & pas foto</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Persyaratan Khusus</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Bahasa asing (untuk internasional)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Pengalaman (minimal 1 tahun)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Sertifikat dasar (jika ada)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Surat rekomendasi (optional)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-rose-500 mr-2 mt-0.5" />
                        <span>Passport (untuk internasional)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Alur Pelatihan</h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-rose-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pendaftaran</h3>
                  <p className="text-sm text-gray-600">Submit formulir & dokumen</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-rose-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Seleksi</h3>
                  <p className="text-sm text-gray-600">Interview & assessment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-rose-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pelatihan</h3>
                  <p className="text-sm text-gray-600">Teori & praktik lapangan</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-rose-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Ujian</h3>
                  <p className="text-sm text-gray-600">Tes tertulis & praktik</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-rose-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-semibold mb-2">Sertifikasi</h3>
                  <p className="text-sm text-gray-600">Penerbitan sertifikat</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Keuntungan Bersertifikat</CardTitle>
                <CardDescription>
                  Manfaat karir setelah mendapatkan sertifikasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-rose-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Penghasilan Lebih Tinggi</h4>
                    <p className="text-sm text-gray-600">Fee 20-50% lebih tinggi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-rose-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Lebih Banyak Peluang</h4>
                    <p className="text-sm text-gray-600">Akses ke berbagai tour operator</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-rose-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Kepercayaan Klien</h4>
                    <p className="text-sm text-gray-600">Meningkatkan kepercayaan pelanggan</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-rose-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Destinasi Premium</h4>
                    <p className="text-sm text-gray-600">Akses tour high-end & internasional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Investasi Pelatihan</CardTitle>
                <CardDescription>
                  Biaya investasi untuk karir Tour Leader profesional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Pemandu Wisata</h3>
                    <div className="text-3xl font-bold text-rose-600 mb-2">
                      Rp 3-5 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      4 hari pelatihan
                    </p>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Tour Leader Domestik</h3>
                    <div className="text-3xl font-bold text-rose-600 mb-2">
                      Rp 5-7 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      5 hari pelatihan
                    </p>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Tour Leader Internasional</h3>
                    <div className="text-3xl font-bold text-rose-600 mb-2">
                      Rp 8-12 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      7 hari pelatihan
                    </p>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Pertanyaan Umum</CardTitle>
                <CardDescription>
                  Informasi penting seputar sertifikasi Tour Leader
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Apakah sertifikat ini diakui internasional?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, sertifikat kami diakui oleh Kemenparekraf dan berbagai asosiasi 
                      travel internasional seperti IATA dan UFTAA.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama sertifikat berlaku?</h4>
                    <p className="text-sm text-gray-600">
                      Sertifikat berlaku selama 3 tahun dan dapat diperpanjang dengan 
                      mengikuti program renewal atau workshop lanjutan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah ada jaminan kerja setelah lulus?</h4>
                    <p className="text-sm text-gray-600">
                      Kami tidak menjamin 100% namun memiliki jaringan mitra travel yang 
                      sering merekrut alumni kami. Tingkat penyerapan alumni mencapai 80%.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah ada ujian sertifikasi?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, ada ujian tertulis, praktik, dan simulasi tour untuk memastikan 
                      kompetensi peserta sebelum mendapatkan sertifikat.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bagaimana jika tidak lulus ujian?</h4>
                    <p className="text-sm text-gray-600">
                      Peserta dapat mengikuti ujian susun tanpa biaya tambahan dan akan 
                      diberikan bimbingan khusus untuk area yang perlu diperbaiki.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rose-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Menjadi Tour Leader Profesional?
            </h2>
            <p className="text-xl text-rose-50 mb-8">
              Bergabung dengan program sertifikasi kami dan buka peluang karir tak terbatas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50">
                Daftar Pelatihan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
                <FileText className="w-5 h-5 mr-2" />
                Download Kurikulum
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}