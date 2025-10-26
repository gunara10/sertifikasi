'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, Plane, Ticket } from 'lucide-react'
import Link from 'next/link'

export default function SertifikatTicketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Ticket className="w-4 h-4 mr-2" />
              Travel Ticketing Certification
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sertifikat Ticketing
            </h1>
            <p className="text-xl mb-8 text-indigo-50">
              Sertifikasi profesional untuk agen tiket pesawat. Kuasai GDS, 
              sistem reservasi, dan tingkatkan karir di industri travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Daftar Pelatihan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                <Plane className="w-5 h-5 mr-2" />
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
              <Card className="border-indigo-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle>Sertifikasi Resmi</CardTitle>
                  <CardDescription>
                    Diakui IATA dan industri penerbangan global
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-indigo-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Plane className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle>Master GDS</CardTitle>
                  <CardDescription>
                    Kuasai Amadeus, Sabre, dan Galileo systems
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-indigo-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle>Praktik Langsung</CardTitle>
                  <CardDescription>
                      Hands-on training dengan sistem real
                    </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Certification Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Program Sertifikasi</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Basic Ticketing</CardTitle>
                    <CardDescription>
                      Dasar-dasar penerbitan tiket pesawat
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Introduction to GDS</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Flight search & booking</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Fare calculation basic</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Durasi 5 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Advanced Ticketing</CardTitle>
                    <CardDescription>
                      Teknik ticketing tingkat lanjut
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Complex fare construction</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Multi-city & RTW bookings</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Reissue & refund procedures</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Durasi 7 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">GDS Certification</CardTitle>
                    <CardDescription>
                      Sertifikasi khusus untuk GDS
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Amadeus Expert</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Sabre Professional</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Galileo Specialist</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Durasi 10 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">E-Ticketing Specialist</CardTitle>
                    <CardDescription>
                      Spesialis sistem e-ticketing modern
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Online booking systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">API integration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Mobile ticketing solutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Durasi 4 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Cargo Ticketing</CardTitle>
                    <CardDescription>
                      Sertifikasi untuk kargo udara
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Air waybill processing</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Cargo pricing & rating</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Dangerous goods handling</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Durasi 6 hari pelatihan</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Daftar Sekarang</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Refresher Course</CardTitle>
                    <CardDescription>
                      Update kompetensi & teknologi baru
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Latest GDS updates</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">New airline policies</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        <span className="text-sm">Industry trends</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
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
                  Materi komprehensif untuk master ticketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">GDS Fundamentals</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>System navigation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Command structures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Availability display</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Schedule information</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Booking & Pricing</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Flight booking procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Fare quote & calculation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Currency & tax handling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Commission calculation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ticketing Operations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Manual & e-ticketing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Itinerary management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Reissue & exchange</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Refund processing</span>
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
                  Kriteria untuk mengikuti program sertifikasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Persyaratan Umum</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Minimal SMA/SMK sederajat</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Usia 18-40 tahun</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Bahasa Inggris pasif</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Basic computer skills</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>KTP & pas foto</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Persyaratan Khusus</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Matematika dasar (untuk advanced)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Pengalaman di travel (optional)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Sertifikat dasar (jika ada)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Laptop/tablet untuk praktik</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" />
                        <span>Koneksi internet stabil</span>
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
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pendaftaran</h3>
                  <p className="text-sm text-gray-600">Online registration & payment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Preparation</h3>
                  <p className="text-sm text-gray-600">Material & system setup</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Training</h3>
                  <p className="text-sm text-gray-600">Theory & hands-on practice</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Examination</h3>
                  <p className="text-sm text-gray-600">Written & practical test</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-semibold mb-2">Certification</h3>
                  <p className="text-sm text-gray-600">Certificate issuance</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Keuntungan Bersertifikat</CardTitle>
                <CardDescription>
                  Manfaat karir setelah mendapatkan sertifikasi ticketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Career Advancement</h4>
                    <p className="text-sm text-gray-600">Promosi & posisi senior</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Plane className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Global Opportunities</h4>
                    <p className="text-sm text-gray-600">Kerja di luar negeri</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Industry Recognition</h4>
                    <p className="text-sm text-gray-600">Diakui maskapai global</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Ticket className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Higher Income</h4>
                    <p className="text-sm text-gray-600">Komisi & bonus lebih besar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Investasi Pelatihan</CardTitle>
                <CardDescription>
                  Biaya investasi untuk karir ticketing profesional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Basic Ticketing</h3>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      Rp 4-6 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      5 hari pelatihan
                    </p>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Advanced Ticketing</h3>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      Rp 7-10 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      7 hari pelatihan
                    </p>
                    <Button className="w-full">Daftar Sekarang</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">GDS Certification</h3>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      Rp 12-18 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      10 hari pelatihan
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
                  Informasi penting seputar sertifikasi ticketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Apakah sertifikat ini diakui maskapai?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, sertifikat kami diakui oleh maskapai penerbangan besar dan 
                      travel agent worldwide karena mengikuti standar IATA.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah perlu memiliki laptop sendiri?</h4>
                    <p className="text-sm text-gray-600">
                      Sangat disarankan karena praktik akan lebih efektif dengan perangkat 
                      sendiri. Kami juga menyediakan komputer di kelas untuk yang tidak membawa.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama sertifikat berlaku?</h4>
                    <p className="text-sm text-gray-600">
                      Sertifikat berlaku selama 2 tahun dan dapat diperpanjang dengan 
                      mengikuti refresher course untuk update teknologi terbaru.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah ada jaminan kerja?</h4>
                    <p className="text-sm text-gray-600">
                      Kami memiliki mitra travel agent yang sering merekrut alumni. 
                      Tingkat penyerapan alumni mencapai 85% dalam 3 bulan setelah lulus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bagaimana jika gagal ujian?</h4>
                    <p className="text-sm text-gray-600">
                      Peserta dapat mengikuti ujian susun tanpa biaya tambahan maksimal 
                      2 kali dengan bimbingan intensif dari instruktur.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Menjadi Ahli Ticketing?
            </h2>
            <p className="text-xl text-indigo-50 mb-8">
              Bergabung dengan program sertifikasi kami dan buka peluang karir global
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                Daftar Pelatihan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                <FileText className="w-5 h-5 mr-2" />
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}