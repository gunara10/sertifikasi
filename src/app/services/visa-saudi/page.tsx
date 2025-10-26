'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, Plane, Passport } from 'lucide-react'
import Link from 'next/link'

export default function VisaSaudiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Passport className="w-4 h-4 mr-2" />
              Visa Services Saudi Arabia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Visa & Izin Tinggal Saudi
            </h1>
            <p className="text-xl mb-8 text-teal-50">
              Solusi lengkap visa kerja, umrah, haji, dan izin tinggal Saudi Arabia. 
              Proses cepat dengan pendampingan profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                <Plane className="w-5 h-5 mr-2" />
                Ajukan Visa
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
              <Card className="border-teal-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle>Proses Resmi</CardTitle>
                  <CardDescription>
                    Melalui kedutaan dan channels resmi Saudi Arabia
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-teal-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle>Proses Cepat</CardTitle>
                  <CardDescription>
                    Estimasi 7-14 hari kerja untuk visa standard
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-teal-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle>Success Rate Tinggi</CardTitle>
                  <CardDescription>
                    Tingkat persetujuan visa di atas 95%
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Visa Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Jenis Visa Tersedia</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Visa Umrah</CardTitle>
                    <CardDescription>
                      Visa khusus untuk ibadah Umrah
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Berlaku 30 hari</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Multiple entry</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Group & individual</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Proses 7-10 hari</span>
                      </li>
                    </ul>
                    <Button className="w-full">Ajukan Visa Umrah</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Visa Haji</CardTitle>
                    <CardDescription>
                      Visa resmi untuk ibadah Haji
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Berlaku sesuai jadwal Haji</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Kuota resmi Kemenag</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Melalui PPIU resmi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Proses 30-45 hari</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan Visa Haji</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Visa Kerja</CardTitle>
                    <CardDescription>
                      Visa kerja untuk ekspatriat
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Berlaku 1-2 tahun</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Iqama (residence permit)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Sponsor perusahaan Saudi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Proses 30-60 hari</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan Visa Kerja</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Visa Turis</CardTitle>
                    <CardDescription>
                      Visa turis baru untuk Saudi Arabia
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Berlaku 1 tahun</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Multiple entry</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Maksimal 90 hari per kunjungan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Proses 3-5 hari</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan Visa Turis</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Visa Bisnis</CardTitle>
                    <CardDescription>
                      Visa untuk keperluan bisnis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Berlaku 3-6 bulan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Single/multiple entry</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Undangan perusahaan Saudi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Proses 5-7 hari</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan Visa Bisnis</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Family Visit Visa</CardTitle>
                    <CardDescription>
                      Visa kunjungan keluarga
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Berlaku 3-6 bulan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Multiple entry</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Untuk istri/anak</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-sm">Proses 5-10 hari</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan Family Visa</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Document Requirements */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Persyaratan Umum</CardTitle>
                <CardDescription>
                  Dokumen yang perlu disiapkan untuk pengajuan visa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Pribadi</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Paspor (minimal 6 bulan)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>KTP & KK</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Akte kelahiran</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Foto 4x6 (latar putih)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Buku nikah (jika ada)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Pendukung</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Rekening koran 3 bulan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Surat keterangan kerja</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Slip gaji 3 bulan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Sertifikat vaksin</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Asuransi perjalanan</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Khusus</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Undangan (visa bisnis)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Sponsor letter (visa kerja)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Booking hotel & tiket</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Itinerary perjalanan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Permohonan resmi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Alur Proses Visa</h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Konsultasi</h3>
                  <p className="text-sm text-gray-600">Analisis kebutuhan & jenis visa</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Persiapan Dokumen</h3>
                  <p className="text-sm text-gray-600">Kompilasi & verifikasi dokumen</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pengajuan</h3>
                  <p className="text-sm text-gray-600">Submit aplikasi visa online/offline</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Proses</h3>
                  <p className="text-sm text-gray-600">Review oleh kedutaan Saudi</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-semibold mb-2">Terbit Visa</h3>
                  <p className="text-sm text-gray-600">Penerbitan visa & paspor</p>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Layanan Tambahan</CardTitle>
                <CardDescription>
                  Layanan pendukung untuk kemudahan perjalanan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Passport className="w-6 h-6 text-teal-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Paspor Assistance</h4>
                    <p className="text-sm text-gray-600">Buat & perpanjang paspor</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-teal-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Asuransi Perjalanan</h4>
                    <p className="text-sm text-gray-600">Coverage internasional</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Plane className="w-6 h-6 text-teal-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Tiket Pesawat</h4>
                    <p className="text-sm text-gray-600">Booking & issuance</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Pickup Service</h4>
                    <p className="text-sm text-gray-600">Airport transfer di Saudi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Estimasi Biaya</CardTitle>
                <CardDescription>
                  Biaya layanan visa (belum termasuk fee pemerintah)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Visa Turis/Umrah</h3>
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      Rp 1.5-3 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 3-10 hari
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Visa Bisnis</h3>
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      Rp 3-5 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 5-7 hari
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Visa Kerja</h3>
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      Rp 8-15 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 30-60 hari
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Pertanyaan Umum</CardTitle>
                <CardDescription>
                  Informasi penting seputar visa Saudi Arabia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama proses visa Saudi?</h4>
                    <p className="text-sm text-gray-600">
                      Proses visa bervariasi: visa turis 3-5 hari, visa umrah 7-10 hari, 
                      visa bisnis 5-7 hari, dan visa kerja 30-60 hari tergantung kelengkapan dokumen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah visa turis Saudi bisa untuk Umrah?</h4>
                    <p className="text-sm text-gray-600">
                      Visa turis Saudi bisa digunakan untuk Umrah di luar musim haji, 
                      namun tidak termasuk layanan haji dan harus mengikuti aturan yang berlaku.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah perlu vaksin khusus?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, untuk visa Umrah dan Haji diperlukan vaksin meningitis dan influenza. 
                      Untuk visa lainnya, ikuti ketentuan kesehatan yang berlaku saat itu.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bagaimana jika visa ditolak?</h4>
                    <p className="text-sm text-gray-600">
                      Jika visa ditolak, kami akan membantu mengidentifikasi penyebabnya 
                      dan memberikan solusi untuk pengajuan ulang jika memungkinkan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah ada jaminan visa approved?</h4>
                    <p className="text-sm text-gray-600">
                      Tidak ada jaminan 100% approval karena keputusan mutlak dari pihak 
                      imigrasi Saudi, namun dengan dokumen lengkap peluang sangat tinggi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Mengajukan Visa Saudi?
            </h2>
            <p className="text-xl text-teal-50 mb-8">
              Tim ahli visa kami siap membantu proses aplikasi Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                <FileText className="w-5 h-5 mr-2" />
                Cek Kelengkapan Dokumen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}