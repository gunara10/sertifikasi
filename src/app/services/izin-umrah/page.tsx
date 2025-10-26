'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Globe, ArrowRight, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

export default function IzinUmrahPage() {
  const [mounted, setMounted] = useState(false)

  useState(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
              Layanan Resmi Kemenag RI
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Izin Penyelenggaraan Ibadah Umrah
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Pendampingan lengkap perizinan PPIU untuk penyelenggaraan ibadah umrah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                <Link href="#contact" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-700">
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
                  Mengapa Perlu Izin PPIU?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  PPIU (Penyelenggara Perjalanan Ibadah Umrah) adalah izin resmi dari Kementerian Agama 
                  untuk menyelenggarakan perjalanan ibadah umrah. Izin ini wajib dimiliki oleh travel yang 
                  ingin melayani jamaah umrah.
                </p>
                <div className="space-y-4">
                  {[
                    "Legalitas operasional yang jelas",
                    "Kepercayaan jamaah yang lebih tinggi",
                    "Akses fasilitas di Arab Saudi",
                    "Dukungan pemerintah dalam operasional"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-teal-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">PPIU aktif</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">5 tahun</div>
                    <div className="text-sm text-gray-600">Masa berlaku izin</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">1jt+</div>
                    <div className="text-sm text-gray-600">Jamaah per tahun</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">3 bulan</div>
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
              Jenis Layanan PPIU
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Izin Baru PPIU",
                  description: "Pengajuan izin baru untuk penyelenggaraan ibadah umrah",
                  price: "Rp 50-100 juta",
                  features: ["Persiapan dokumen", "Audit kelayakan", "Verifikasi Kemenag", "Pendampingan penuh"]
                },
                {
                  title: "Perpanjangan Izin",
                  description: "Perpanjangan izin PPIU yang akan masa berlakunya habis",
                  price: "Rp 25-50 juta",
                  features: ["Evaluasi kinerja", "Update dokumen", "Audit compliance", "Proses perpanjangan"]
                },
                {
                  title: "Bundle Visa & Akomodasi",
                  description: "Paket lengkap visa dan akomodasi untuk jamaah",
                  price: "Custom",
                  features: ["Visa umrah", "Hotel di Mekah/Medinah", "Transportasi", "Monitoring jamaah"]
                }
              ].map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-teal-600 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
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
                    "Rencana Operasional Umrah",
                    "Dokumen Kerjasama di Arab Saudi",
                    "Sertifikat Akreditasi (jika ada)"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
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
              Proses Pengajuan PPIU
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
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
                  title: "Verifikasi Kemenag",
                  description: "Evaluasi oleh tim verifikasi Kemenag",
                  duration: "4-8 minggu"
                },
                {
                  step: "04",
                  title: "Terbit Izin",
                  description: "Penerbitan izin resmi PPIU",
                  duration: "1-2 minggu"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <p className="text-teal-600 font-medium text-sm">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Siap Menjadi PPIU Resmi?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Tim ahli kami siap membantu Anda melalui setiap tahap proses pengajuan izin PPIU
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                <Link href="https://wa.me/628123456789" target="_blank" className="flex items-center gap-2">
                  Konsultasi via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-700">
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