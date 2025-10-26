'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, Target, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ISOTravelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Award className="w-4 h-4 mr-2" />
              International Standards
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ISO Certification
            </h1>
            <p className="text-xl mb-8 text-purple-50">
              Sertifikasi ISO 9001, 27001, dan 22301 untuk industri travel & pariwisata. 
              Tingkatkan kualitas, keamanan, dan ketahanan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Target className="w-5 h-5 mr-2" />
                Mulai Sertifikasi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Standards Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Standar ISO Tersedia</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>ISO 9001</CardTitle>
                  <CardDescription>
                    Quality Management System - Manajemen Mutu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Standar internasional untuk sistem manajemen mutu, memastikan konsistensi 
                    pelayanan dan kepuasan pelanggan.
                  </p>
                  <Button className="w-full" variant="outline">Pelajari Lebih Lanjut</Button>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>ISO 27001</CardTitle>
                  <CardDescription>
                    Information Security Management - Keamanan Informasi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Standar untuk sistem manajemen keamanan informasi, melindungi data 
                    pelanggan dan informasi bisnis sensitif.
                  </p>
                  <Button className="w-full" variant="outline">Pelajari Lebih Lanjut</Button>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>ISO 22301</CardTitle>
                  <CardDescription>
                    Business Continuity Management - Kelangsungan Bisnis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Standar untuk sistem manajemen kelangsungan bisnis, memastikan operasional 
                    tetap berjalan saat terjadi gangguan.
                  </p>
                  <Button className="w-full" variant="outline">Pelajari Lebih Lanjut</Button>
                </CardContent>
              </Card>
            </div>

            {/* Service Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Layanan Sertifikasi ISO</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Sertifikasi Baru</CardTitle>
                    <CardDescription>
                      Proses sertifikasi ISO pertama kali untuk perusahaan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Gap analysis & assessment</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Documentation development</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Implementation support</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Certification audit</span>
                      </li>
                    </ul>
                    <Button className="w-full">Mulai Sertifikasi</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Surveillance Audit</CardTitle>
                    <CardDescription>
                      Audit tahunan untuk mempertahankan sertifikasi
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Annual compliance check</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Performance evaluation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Improvement recommendations</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Certificate maintenance</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Jadwalkan Audit</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Resertifikasi</CardTitle>
                    <CardDescription>
                      Proses resertifikasi setiap 3 tahun
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Comprehensive reassessment</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">System updates</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">New requirements integration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                        <span className="text-sm">Certificate renewal</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Resertifikasi</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* ISO 9001 Details */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">ISO 9001:2015 - Quality Management</CardTitle>
                <CardDescription>
                  Standar manajemen mutu untuk industri travel dan pariwisata
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Key Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Quality policy and objectives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Process approach and risk-based thinking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Customer focus and satisfaction</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Leadership commitment and engagement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Continual improvement framework</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Benefits for Travel Industry</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Award className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Consistent service quality</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Improved customer satisfaction</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Enhanced operational efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Competitive advantage</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>International recognition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ISO 27001 Details */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">ISO 27001:2022 - Information Security</CardTitle>
                <CardDescription>
                  Standar manajemen keamanan informasi untuk perlindungan data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Security Controls</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Information security policies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Access control management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Cryptography and data protection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Incident management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Business continuity planning</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Travel Industry Focus</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Customer data protection</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Payment security (PCI DSS)</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Passport and visa information</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Booking system security</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>GDPR and privacy compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ISO 22301 Details */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">ISO 22301:2019 - Business Continuity</CardTitle>
                <CardDescription>
                  Standar manajemen kelangsungan bisnis untuk ketahanan operasional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">BCMS Framework</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Business impact analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Risk assessment and treatment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Business continuity strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Emergency response procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Testing and exercising</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Travel Industry Scenarios</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Natural disasters response</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Pandemic preparedness</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>System outage recovery</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Travel disruption management</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-purple-500 mr-2 mt-0.5" />
                        <span>Crisis communication</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Alur Proses Sertifikasi</h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Assessment</h3>
                  <p className="text-sm text-gray-600">Analisis gap dan kelayakan</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-gray-600">Perencanaan implementasi</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Implementation</h3>
                  <p className="text-sm text-gray-600">Implementasi sistem</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Audit</h3>
                  <p className="text-sm text-gray-600">Audit sertifikasi</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-semibold mb-2">Certification</h3>
                  <p className="text-sm text-gray-600">Penerbitan sertifikat</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Estimasi Biaya Sertifikasi</CardTitle>
                <CardDescription>
                  Investasi untuk standar kualitas dan keamanan bisnis Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">ISO 9001</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      Rp 25-50 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Untuk perusahaan menengah
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">ISO 27001</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      Rp 35-70 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Tergantung kompleksitas sistem
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">ISO 22301</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      Rp 30-60 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Sesuai skala operasional
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
                  Informasi penting seputar sertifikasi ISO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama proses sertifikasi ISO?</h4>
                    <p className="text-sm text-gray-600">
                      Proses sertifikasi ISO memakan waktu 6-12 bulan tergantung kesiapan perusahaan 
                      dan kompleksitas implementasi sistem yang dibutuhkan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah sertifikasi ISO wajib?</h4>
                    <p className="text-sm text-gray-600">
                      Tidak wajib secara hukum, namun banyak mitra bisnis dan pelanggan yang 
                      mensyaratkan sertifikasi ISO sebagai bukti komitmen kualitas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bagaimana memilih sertifikasi ISO yang tepat?</h4>
                    <p className="text-sm text-gray-600">
                      ISO 9001 untuk kualitas layanan, ISO 27001 untuk keamanan data, 
                      ISO 22301 untuk kelangsungan bisnis. Bisa juga menggabungkan beberapa standar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah perlu resertifikasi berkala?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, sertifikasi ISO berlaku 3 tahun dan memerlukan surveillance audit tahunan 
                      serta resertifikasi lengkap setiap 3 tahun.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apa bedanya ISO 9001:2015 vs 2008?</h4>
                    <p className="text-sm text-gray-600">
                      ISO 9001:2015 lebih fokus pada risk-based thinking, leadership commitment, 
                      dan process approach dibandingkan versi 2008 yang lebih prescriptive.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Meningkatkan Standar Bisnis Anda?
            </h2>
            <p className="text-xl text-purple-50 mb-8">
              Dapatkan sertifikasi ISO dan tingkatkan kepercayaan pelanggan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                <FileText className="w-5 h-5 mr-2" />
                Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}