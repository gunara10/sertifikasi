'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Globe, ArrowRight, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

export default function MerekHakiPage() {
  const [mounted, setMounted] = useState(false)

  useState(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Perlindungan Intelektual Resmi
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Merek & Hak Kekayaan Intelektual
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Lindungi identitas bisnis travel Anda dengan pendaftaran merek dan HAKI resmi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                <Link href="#contact" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
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
                  Mengapa Perlu Lindungi Merek?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Merek adalah aset berharga yang membedakan bisnis travel Anda dari kompetitor. 
                  Dengan perlindungan merek resmi, Anda memiliki hak eksklusif untuk menggunakan 
                  nama dan logo bisnis Anda.
                </p>
                <div className="space-y-4">
                  {[
                    "Perlindungan hukum atas penggunaan merek",
                    "Meningkatkan nilai jual bisnis",
                    "Mencegah peniruan oleh kompetitor",
                    "Dasar untuk ekspansi bisnis"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">10 tahun</div>
                    <div className="text-sm text-gray-600">Masa berlaku merek</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">45 kelas</div>
                    <div className="text-sm text-gray-600">Klasifikasi merek</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">6-12 bulan</div>
                    <div className="text-sm text-gray-600">Proses pendaftaran</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Global</div>
                    <div className="text-sm text-gray-600">Perlindungan internasional</div>
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
              Layanan Merek & HAKI
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Pendaftaran Merek",
                  description: "Pendaftaran merek baru untuk perlindungan hukum",
                  price: "Rp 10-25 juta",
                  features: ["Search merek", "Klasifikasi", "Pengajuan DJKI", "Monitoring proses"]
                },
                {
                  title: "Perpanjangan Merek",
                  description: "Perpanjangan perlindungan merek yang akan habis",
                  price: "Rp 8-15 juta",
                  features: ["Verifikasi data", "Update dokumen", "Proses perpanjangan", "Terbit sertifikat"]
                },
                {
                  title: "Konsultasi Sengketa",
                  description: "Penanganan sengketa merek dan pelanggaran HAKI",
                  price: "Custom",
                  features: ["Analisis kasus", "Somasi", "Mediasi", "Litigasi"]
                }
              ].map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
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
              Persyaratan Pendaftaran Merek
            </h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Formulir pendaftaran merek",
                    "Logo merek (format JPG/PNG)",
                    "Nama pemilik merek (perorangan/badan usaha)",
                    "KTP/KK (untuk perorangan)",
                    "Akta pendirian & NPWP (untuk perusahaan)",
                    "Surat kuasa khusus (jika diwakilkan)",
                    "Daftar barang/jasa yang akan dilindungi",
                    "Bukti penggunaan merek (jika ada)",
                    "Label merek (jika sudah diproduksi)",
                    "Surat pernyataan kepemilikan merek"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
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
              Proses Pendaftaran Merek
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Search Merek",
                  description: "Pencarian merek untuk memastikan tidak ada duplikasi",
                  duration: "1-3 hari"
                },
                {
                  step: "02",
                  title: "Persiapan Dokumen",
                  description: "Pengumpulan dan persiapan semua dokumen yang diperlukan",
                  duration: "3-5 hari"
                },
                {
                  step: "03",
                  title: "Pengajuan DJKI",
                  description: "Pengajuan pendaftaran ke Direktorat Jenderal Kekayaan Intelektual",
                  duration: "1-2 hari"
                },
                {
                  step: "04",
                  title: "Pemeriksaan Formalitas",
                  description: "Proses pemeriksaan kelengkapan dokumen oleh DJKI",
                  duration: "1-2 bulan"
                },
                {
                  step: "05",
                  title: "Publikasi & Terbit",
                  description: "Publikasi merek dan penerbitan sertifikat",
                  duration: "6-9 bulan"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <p className="text-purple-600 font-medium text-sm">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Siap Lindungi Merek Bisnis Anda?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Tim ahli HAKI kami siap membantu Anda melindungi aset intelektual bisnis travel Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                <Link href="https://wa.me/628123456789" target="_blank" className="flex items-center gap-2">
                  Konsultasi via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
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