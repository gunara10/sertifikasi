'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Globe, ArrowRight, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

export default function LegalTaxPage() {
  const [mounted, setMounted] = useState(false)

  useState(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              Paket Terpadu Legal & Pajak
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Konsultasi Legal & Tax
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Solusi terpadu untuk kebutuhan hukum dan perpajakan bisnis travel Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
                <Link href="#contact" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700">
                <Link href="#process">
                  Lihat Proses
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Mengapa Perlu Konsultasi Legal & Tax?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Bisnis travel menghadapi berbagai tantangan hukum dan perpajakan. Dengan pendampingan 
                  terpadu, Anda dapat fokus pada pengembangan bisnis sambil kami menangani kompleksitas 
                  regulasi dan kepatuhan.
                </p>
                <div className="space-y-4">
                  {[
                    "Solusi one-stop untuk legal & pajak",
                    "Menghindari risiko hukum dan sanksi",
                    "Struktur bisnis yang optimal",
                    "Efisiensi biaya konsultasi"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-indigo-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">360°</div>
                    <div className="text-sm text-gray-600">Layanan terpadu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">30%</div>
                    <div className="text-sm text-gray-600">Hemat biaya</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support darurat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Kepatuhan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Paket Layanan Terpadu
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Audit Legal",
                  description: "Audit komprehensif aspek hukum bisnis travel",
                  price: "Rp 25-50 juta",
                  features: ["Review dokumen legal", "Identifikasi risiko", "Rekomendasi perbaikan", "Implementasi"]
                },
                {
                  title: "Risk & Compliance",
                  description: "Manajemen risiko dan kepatuhan berkelanjutan",
                  price: "Rp 15-35 juta/tahun",
                  features: ["Risk assessment", "Compliance check", "Monitoring berkala", "Laporan bulanan"]
                },
                {
                  title: "Restrukturisasi",
                  description: "Restrukturisasi perusahaan untuk optimalisasi",
                  price: "Custom",
                  features: ["Analisis struktur", "Perubahan legal", "Optimasi pajak", "Implementasi"]
                }
              ].map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-indigo-600 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="#contact">
                        Konsultasi Sekarang
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Dokumen yang Diperlukan
            </h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Akta Pendirian & Perubahan",
                    "NPWP Perusahaan & Pemilik",
                    "Surat Izin Usaha",
                    "Struktur Organisasi",
                    "Kontrak Karyawan",
                    "Perjanjian dengan Mitra",
                    "Laporan Keuangan 3 tahun",
                    "SPT Pajak Terakhir",
                    "Dokumen Perizinan Khusus",
                    "Sertifikat & Lisensi",
                    "Profil Perusahaan",
                    "Bisnis Plan & Proyeksi"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Proses Konsultasi Terpadu
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Analisis mendalam kebutuhan bisnis Anda",
                  duration: "3-5 hari"
                },
                {
                  step: "02",
                  title: "Assessment",
                  description: "Evaluasi komprehensif aspek legal & pajak",
                  duration: "1-2 minggu"
                },
                {
                  step: "03",
                  title: "Recommendation",
                  description: "Usulan solusi dan strategi terbaik",
                  duration: "3-5 hari"
                },
                {
                  step: "04",
                  title: "Implementation",
                  description: "Implementasi rekomendasi yang disepakati",
                  duration: "2-4 minggu"
                },
                {
                  step: "05",
                  title: "Monitoring",
                  description: "Monitoring dan evaluasi berkala",
                  duration: "Ongoing"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <p className="text-indigo-600 font-medium text-sm">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Siap Optimalkan Legal & Tax Bisnis Anda?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Tim ahli multidisiplin kami siap memberikan solusi terpadu untuk kebutuhan hukum dan perpajakan bisnis travel Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
                <Link href="https://wa.me/628123456789" target="_blank" className="flex items-center gap-2">
                  Konsultasi via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700">
                <Link href="tel:+628123456789">
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}