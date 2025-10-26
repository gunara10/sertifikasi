'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Globe, ArrowRight, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

export default function PerpajakanPage() {
  const [mounted, setMounted] = useState(false)

  useState(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              Layanan Konsultasi Pajak Profesional
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Perpajakan & Kepatuhan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Layanan perpajakan lengkap untuk memastikan kepatuhan dan optimalisasi pajak bisnis travel Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
                <Link href="#contact" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-700">
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
                  Mengapa Perlu Konsultasi Pajak?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Kepatuhan pajak adalah kewajiban setiap wajib pajak. Dengan bantuan konsultan pajak profesional, 
                  bisnis travel Anda akan terhindar dari sanksi dan dapat mengoptimalkan beban pajak secara legal.
                </p>
                <div className="space-y-4">
                  {[
                    "Menghindari sanksi dan denda pajak",
                    "Optimalisasi beban pajak secara legal",
                    "Kepatuhan terhadap regulasi terbaru",
                    "Fokus pada pengembangan bisnis"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-orange-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">Bulanan</div>
                    <div className="text-sm text-gray-600">Laporan pajak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">Tahunan</div>
                    <div className="text-sm text-gray-600">SPT pajak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Kepatuhan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
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
              Layanan Perpajakan
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Pajak Bulanan",
                  description: "Penghitungan dan pelaporan pajak bulanan",
                  price: "Rp 2-5 juta/bulan",
                  features: ["PPN", "PPh 21", "PPh 23", "PPh 4(2)"]
                },
                {
                  title: "SPT Tahunan",
                  description: "Penyusunan dan pelaporan SPT tahunan",
                  price: "Rp 5-15 juta/tahun",
                  features: ["SPT Badan", "SPT Orang", "E-filing", "Koreksi"]
                },
                {
                  title: "PKP",
                  description: "Pengurusan Pengusaha Kena Pajak",
                  price: "Rp 3-8 juta",
                  features: ["Persiapan dokumen", "Pengajuan PKP", "Verifikasi", "Terbit NPWP"]
                },
                {
                  title: "Konsultasi",
                  description: "Konsultasi perpajakan berkala",
                  price: "Rp 1-3 juta/sesi",
                  features: ["Tax planning", "Review", "Advisory", "Support"]
                }
              ].map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg text-gray-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-orange-600 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
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
                    "NPWP Perusahaan",
                    "Akta Pendirian & Perubahan",
                    "Surat Keterangan Domisili",
                    "Laporan Keuangan",
                    "Buku Besar & Jurnal",
                    "Faktur Pajak Masukan & Keluaran",
                    "Daftar Piutang & Utang",
                    "Bukti Potong PPh 21/23",
                    "Rekening Koran",
                    "Kwitansi Transaksi",
                    "Kontrak Kerja Karyawan",
                    "Dokumen Aset Perusahaan"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
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
              Proses Layanan Perpajakan
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Analisis Data",
                  description: "Review dokumen dan identifikasi kewajiban pajak",
                  duration: "1-3 hari"
                },
                {
                  step: "02",
                  title: "Perhitungan Pajak",
                  description: "Hitung semua jenis pajak yang terutang",
                  duration: "2-5 hari"
                },
                {
                  step: "03",
                  title: "Pelaporan",
                  description: "Siapkan dan laporkan ke DJP",
                  duration: "1-2 hari"
                },
                {
                  step: "04",
                  title: "Monitoring",
                  description: "Monitor dan follow up pembayaran",
                  duration: "Ongoing"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <p className="text-orange-600 font-medium text-sm">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Siap Tertib Pajak?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Tim konsultan pajak kami siap membantu bisnis travel Anda tertib administrasi perpajakan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
                <Link href="https://wa.me/628123456789" target="_blank" className="flex items-center gap-2">
                  Konsultasi via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-700">
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