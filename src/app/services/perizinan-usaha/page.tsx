'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Globe, ArrowRight, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

export default function PerizinanUsahaPage() {
  const [mounted, setMounted] = useState(false)

  useState(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Layanan Terintegrasi OSS
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Perizinan Usaha Umum
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Pendampingan lengkap perizinan usaha untuk mendukung operasional travel Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="#contact" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
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
                  Mengapa Perlu Perizinan Usaha?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Perizinan usaha adalah fondasi legalitas operasional perusahaan travel Anda. 
                  Dengan perizinan yang lengkap, perusahaan Anda akan memiliki dasar hukum yang kuat 
                  dan kepercayaan dari mitra bisnis.
                </p>
                <div className="space-y-4">
                  {[
                    "Legalitas operasional yang lengkap",
                    "Akses ke berbagai program pemerintah",
                    "Kepercayaan mitra bisnis dan customer",
                    "Persyaratan untuk kerjasama dengan pihak ketiga"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Jenis Izin Usaha</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1-2 minggu</div>
                    <div className="text-sm text-gray-600">Estimasi proses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Online</div>
                    <div className="text-sm text-gray-600">Proses OSS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5 tahun</div>
                    <div className="text-sm text-gray-600">Masa berlaku</div>
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
              Jenis Perizinan Usaha
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "NIB/OSS",
                  description: "Nomor Induk Berusaha melalui sistem OSS",
                  price: "Rp 5-15 juta",
                  features: ["Registrasi OSS", "Verifikasi data", "Terbit NIB", "Integrasi izin"]
                },
                {
                  title: "Perizinan Pariwisata",
                  description: "Izin khusus usaha di sektor pariwisata",
                  price: "Rp 10-25 juta",
                  features: ["Bid usaha pariwisata", "Standar kelayakan", "Inspeksi lapangan", "Terbit izin"]
                },
                {
                  title: "PSE",
                  description: "Penyelenggara Sistem Elektronik",
                  price: "Rp 15-30 juta",
                  features: ["Registrasi PSE", "Audit sistem", "Kepatuhan data", "Sertifikasi"]
                },
                {
                  title: "Domisili",
                  description: "Surat keterangan domisili perusahaan",
                  price: "Rp 2-5 juta",
                  features: ["Verifikasi alamat", "Survey lokasi", "Terbit domisili", "Legalisir"]
                }
              ].map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg text-gray-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-blue-600 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
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
              Persyaratan Umum
            </h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Akta Pendirian Perusahaan",
                    "NPWP Perusahaan",
                    "KTP Direktur/Penanggung Jawab",
                    "Surat Keterangan Domisili",
                    "Struktur Organisasi",
                    "Daftar Pemegang Saham",
                    "Rekening Koran Perusahaan",
                    "Surat Keterangan Usaha (SKU)",
                    "Foto Lokasi Usaha",
                    "Dokumen Kepemilikan/Sewa Tempat",
                    "Surat Izin Gangguan (HO)",
                    "Sertifikat Kompetensi (jika ada)"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
              Proses Pengajuan Perizinan
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Konsultasi & Analisis",
                  description: "Identifikasi kebutuhan perizinan sesuai jenis usaha",
                  duration: "1-3 hari"
                },
                {
                  step: "02",
                  title: "Persiapan Dokumen",
                  description: "Pengumpulan dan verifikasi kelengkapan dokumen",
                  duration: "3-5 hari"
                },
                {
                  step: "03",
                  title: "Pengajuan Online",
                  description: "Registrasi dan pengajuan melalui sistem OSS",
                  duration: "5-7 hari"
                },
                {
                  step: "04",
                  title: "Verifikasi & Terbit",
                  description: "Proses verifikasi oleh instansi terkait",
                  duration: "3-5 hari"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <p className="text-blue-600 font-medium text-sm">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Siap Lengkapi Perizinan Usaha Anda?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Tim ahli kami siap membantu Anda mengurus semua jenis perizinan usaha yang diperlukan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="https://wa.me/628123456789" target="_blank" className="flex items-center gap-2">
                  Konsultasi via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
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