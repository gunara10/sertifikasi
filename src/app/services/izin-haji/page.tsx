'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Globe, ArrowRight, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

export default function IzinHajiPage() {
  const [mounted, setMounted] = useState(false)

  useState(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Layanan Resmi Kemenag RI
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Izin Penyelenggaraan Ibadah Haji Khusus
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Pendampingan lengkap perizinan PIHK untuk penyelenggaraan haji khusus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Link href="#contact" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
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
                  Mengapa Perlu Izin PIHK?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  PIHK (Penyelenggara Ibadah Haji Khusus) adalah izin resmi dari Kementerian Agama 
                  untuk menyelenggarakan ibadah haji khusus. Izin ini wajib dimiliki oleh travel yang 
                  ingin melayani jamaah haji khusus.
                </p>
                <div className="space-y-4">
                  {[
                    "Akses kuota haji khusus resmi",
                    "Legalitas operasional yang jelas",
                    "Kepercayaan jamaah yang lebih tinggi",
                    "Dukungan pemerintah dalam operasional"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">20.000</div>
                    <div className="text-sm text-gray-600">Kuota per tahun</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5 tahun</div>
                    <div className="text-sm text-gray-600">Masa berlaku izin</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                    <div className="text-sm text-gray-600">PIHK aktif</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">6 bulan</div>
                    <div className="text-sm text-gray-600">Estimasi proses</div>
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
              Jenis Layanan PIHK
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Izin Baru PIHK",
                  description: "Pengajuan izin baru untuk penyelenggaraan haji khusus",
                  price: "Rp 150-300 juta",
                  features: ["Persiapan dokumen", "Audit kelayakan", "Presentasi ke Kemenag", "Pendampingan penuh"]
                },
                {
                  title: "Perpanjangan Izin",
                  description: "Perpanjangan izin PIHK yang akan masa berlakunya habis",
                  price: "Rp 50-100 juta",
                  features: ["Evaluasi kinerja", "Update dokumen", "Audit compliance", "Proses perpanjangan"]
                },
                {
                  title: "Audit Kepatuhan",
                  description: "Audit rutin untuk memastikan kepatuhan operasional",
                  price: "Rp 25-50 juta",
                  features: ["Audit dokumen", "Verifikasi operasional", "Laporan kepatuhan", "Rekomendasi perbaikan"]
                }
              ].map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
              Persyaratan Dokumen
            </h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Akta Pendirian Perusahaan",
                    "NPWP Perusahaan",
                    "NIB/OSS",
                    "Surat Izin Usaha Pariwisata (SIUP)",
                    "Struktur Organisasi",
                    "Daftar Tenaga Kerja",
                    "Sertifikat SDM Pembimbing Ibadah",
                    "Rekening Koran 6 bulan terakhir",
                    "Jaminan Bank (Surety Bond)",
                    "Rencana Operasional Haji",
                    "Dokumen Kerjasama di Arab Saudi",
                    "Sertifikat Akreditasi (jika ada)"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
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
              Proses Pengajuan PIHK
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Konsultasi Awal",
                  description: "Analisis kelayakan dan persiapan dokumen",
                  duration: "1-2 minggu"
                },
                {
                  step: "02",
                  title: "Persiapan Dokumen",
                  description: "Pengumpulan dan verifikasi kelengkapan dokumen",
                  duration: "2-4 minggu"
                },
                {
                  step: "03",
                  title: "Audit Kelayakan",
                  description: "Evaluasi oleh tim audit Kemenag",
                  duration: "4-6 minggu"
                },
                {
                  step: "04",
                  title: "Presentasi",
                  description: "Presentasi rencana operasional ke Kemenag",
                  duration: "1-2 minggu"
                },
                {
                  step: "05",
                  title: "Terbit Izin",
                  description: "Penerbitan izin resmi PIHK",
                  duration: "1-2 minggu"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <p className="text-green-600 font-medium text-sm">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Siap Menjadi PIHK Resmi?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Tim ahli kami siap membantu Anda melalui setiap tahap proses pengajuan izin PIHK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Link href="https://wa.me/628123456789" target="_blank" className="flex items-center gap-2">
                  Konsultasi via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
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