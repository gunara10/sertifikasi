'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, Plane, Globe } from 'lucide-react'
import Link from 'next/link'

export default function IATAAccreditationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Plane className="w-4 h-4 mr-2" />
              IATA Accredited Agency
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IATA Accreditation
            </h1>
            <p className="text-xl mb-8 text-sky-50">
              Dapatkan akreditasi resmi dari International Air Transport Association. 
              Akses global distribution system dan tingkatkan kredibilitas bisnis travel Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600">
                <Globe className="w-5 h-5 mr-2" />
                Mulai Pengajuan
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
              <Card className="border-sky-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-sky-600" />
                  </div>
                  <CardTitle>Akses Global</CardTitle>
                  <CardDescription>
                    Akses ke Global Distribution System (GDS) dan maskapai worldwide
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-sky-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-sky-600" />
                  </div>
                  <CardTitle>Kredibilitas Internasional</CardTitle>
                  <CardDescription>
                    Pengakuan global sebagai agen travel terpercaya dan profesional
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-sky-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-sky-600" />
                  </div>
                  <CardTitle>Keamanan Transaksi</CardTitle>
                  <CardDescription>
                    Sistem Billing and Settlement Plan (BSP) yang aman dan terpercaya
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Service Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Jenis Layanan IATA</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">IATA Accreditation</CardTitle>
                    <CardDescription>
                      Akreditasi penuh sebagai agen travel IATA
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">Akses GDS penuh</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">IATA Numeric Code</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">BSP participation</span>
                      </li>
                    </ul>
                    <Button className="w-full">Ajukan Akreditasi</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">TIDS Registration</CardTitle>
                    <CardDescription>
                      Travel Industry Designator Service untuk identifikasi unik
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">Kode identifikasi unik</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">Recognized industry-wide</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">Faster processing</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Daftar TIDS</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Pre-Audit Consultation</CardTitle>
                    <CardDescription>
                      Konsultasi persiapan sebelum audit IATA
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">Gap analysis</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">Document preparation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2" />
                        <span className="text-sm">Mock audit session</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Jadwalkan Konsultasi</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Requirements */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Persyaratan Akreditasi</CardTitle>
                <CardDescription>
                  Dokumen dan kriteria yang harus dipenuhi untuk mendapatkan akreditasi IATA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Legal & Financial</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Business registration certificate</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Financial statements (2 years)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Bank guarantee or insurance</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Minimum capital requirements</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Tax compliance certificate</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Operational Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Qualified staff with IATA certification</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Office infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>GDS access capability</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Accounting system</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Quality management system</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Experience & Track Record</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Minimum 2 years in business</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Sales volume reports</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Airline agreements</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Customer references</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-sky-500 mr-2 mt-0.5" />
                        <span>Industry certifications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Alur Proses Akreditasi</h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Eligibility Check</h3>
                  <p className="text-sm text-gray-600">Verifikasi kelayakan awal perusahaan</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Document Prep</h3>
                  <p className="text-sm text-gray-600">Persiapan dan kompilasi dokumen</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Application</h3>
                  <p className="text-sm text-gray-600">Submit aplikasi ke IATA</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Audit & Review</h3>
                  <p className="text-sm text-gray-600">Proses audit oleh IATA</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sky-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-semibold mb-2">Accreditation</h3>
                  <p className="text-sm text-gray-600">Penerbitan sertifikat IATA</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Keuntungan IATA Accreditation</CardTitle>
                <CardDescription>
                  Manfaat strategis setelah mendapatkan akreditasi IATA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-sky-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Global Access</h4>
                    <p className="text-sm text-gray-600">Akses ke 290+ maskapai worldwide</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-sky-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Credibility</h4>
                    <p className="text-sm text-gray-600">Kepercayaan global dari pelanggan</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Plane className="w-6 h-6 text-sky-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Better Rates</h4>
                    <p className="text-sm text-gray-600">Akses tarif komisi dan diskon</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-sky-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Financial Security</h4>
                    <p className="text-sm text-gray-600">Sistem BSP yang terjamin</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Estimasi Biaya & Waktu</CardTitle>
                <CardDescription>
                  Informasi biaya dan estimasi waktu proses akreditasi IATA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Full IATA Accreditation</h3>
                    <div className="text-3xl font-bold text-sky-600 mb-2">
                      $1,500 - $3,000
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Estimasi waktu: 3-6 bulan
                    </p>
                    <ul className="text-sm text-left space-y-1 mb-4">
                      <li>• IATA registration fee</li>
                      <li>• Processing charges</li>
                      <li>• Document verification</li>
                      <li>• Audit coordination</li>
                      <li>• GDS setup assistance</li>
                    </ul>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">TIDS Registration Only</h3>
                    <div className="text-3xl font-bold text-sky-600 mb-2">
                      $200 - $500
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Estimasi waktu: 2-4 minggu
                    </p>
                    <ul className="text-sm text-left space-y-1 mb-4">
                      <li>• TIDS registration fee</li>
                      <li>• Basic verification</li>
                      <li>• Code assignment</li>
                      <li>• Certificate issuance</li>
                      <li>• Basic support</li>
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
                  Informasi penting seputar akreditasi IATA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Apa itu IATA dan mengapa penting?</h4>
                    <p className="text-sm text-gray-600">
                      IATA (International Air Transport Association) adalah asosiasi global maskapai penerbangan. 
                      Akreditasi IATA memberikan akses ke sistem distribusi global dan meningkatkan kredibilitas 
                      bisnis travel Anda di mata pelanggan dan mitra industri.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah perusahaan harus berpengalaman?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, IATA mensyaratkan minimal 2 tahun pengalaman bisnis dengan track record 
                      penjualan tiket yang baik dan reputasi industri yang solid.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama proses akreditasi?</h4>
                    <p className="text-sm text-gray-600">
                      Proses akreditasi IATA memakan waktu 3-6 bulan tergantung kelengkapan dokumen 
                      dan jadwal audit. Proses bisa lebih cepat jika semua persyaratan terpenuhi.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apa itu BSP dan bagaimana cara kerjanya?</h4>
                    <p className="text-sm text-gray-600">
                      BSP (Billing and Settlement Plan) adalah sistem penagihan dan penyelesaian IATA 
                      yang memungkinkan agen travel melakukan transaksi dengan maskapai secara aman 
                      dan efisien melalui satu report mingguan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah akreditasi perlu diperpanjang?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, akreditasi IATA perlu diperpanjang setiap tahun dengan membayar annual fee 
                      dan memenuhi kriteria compliance yang ditetapkan IATA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Mendapatkan Akreditasi IATA?
            </h2>
            <p className="text-xl text-sky-50 mb-8">
              Tingkatkan kredibilitas bisnis travel Anda dengan akreditasi global
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600">
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