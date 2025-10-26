'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-button'
import { AnimatedCard, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardDescription, AnimatedCardContent } from '@/components/ui/animated-card'
import { FloatingElement } from '@/components/ui/floating-element'

export default function SertifikasiBiroPerjalananPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20 relative overflow-hidden">
        {/* Background animated elements */}
        <FloatingElement duration={6} delay={0} intensity={15} className="absolute top-10 left-10 opacity-20">
          <div className="w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement duration={8} delay={1} intensity={20} className="absolute top-20 right-20 opacity-20">
          <div className="w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement duration={7} delay={2} intensity={12} className="absolute bottom-10 left-1/4 opacity-20">
          <div className="w-24 h-24 bg-white/15 rounded-full blur-xl"></div>
        </FloatingElement>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Award className="w-4 h-4 mr-2" />
                Sertifikasi Resmi Kemenparekraf
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sertifikasi Biro Perjalanan Wisata
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-emerald-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dapatkan sertifikasi resmi untuk biro perjalanan wisata Anda. 
              Tingkatkan kepercayaan pelanggan dan akses pasar yang lebih luas.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedButton size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </AnimatedButton>
              <AnimatedButton size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Mulai Wizard Sertifikasi
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {[
                {
                  icon: Shield,
                  title: "Sertifikasi Resmi",
                  description: "Sertifikasi yang diakui Kementerian Pariwisata dan Ekonomi Kreatif"
                },
                {
                  icon: Users,
                  title: "Jangkauan Nasional",
                  description: "Berlaku di seluruh Indonesia untuk operasional biro perjalanan"
                },
                {
                  icon: Clock,
                  title: "Proses Cepat",
                  description: "Estimasi proses 30-45 hari dengan pendampingan penuh"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <AnimatedCard delay={index * 0.1}>
                    <AnimatedCardHeader>
                      <motion.div 
                        className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <item.icon className="w-6 h-6 text-emerald-600" />
                      </motion.div>
                      <AnimatedCardTitle>{item.title}</AnimatedCardTitle>
                      <AnimatedCardDescription>{item.description}</AnimatedCardDescription>
                    </AnimatedCardHeader>
                  </AnimatedCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Service Types */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">Jenis Layanan Sertifikasi</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Sertifikasi Baru",
                    description: "Untuk biro perjalanan yang belum memiliki sertifikasi",
                    features: [
                      "Pendaftaran awal dan verifikasi dokumen",
                      "Asistensi proses audit kelayakan",
                      "Penerbitan sertifikat resmi"
                    ],
                    button: "Ajukan Sertifikasi Baru",
                    variant: "default"
                  },
                  {
                    title: "Perpanjangan Sertifikasi",
                    description: "Perpanjangan sertifikat yang akan masa berlakunya",
                    features: [
                      "Evaluasi compliance periode lalu",
                      "Update dokumen persyaratan",
                      "Perpanjangan masa berlaku 5 tahun"
                    ],
                    button: "Perpanjang Sertifikasi",
                    variant: "outline"
                  }
                ].map((service, index) => (
                  <AnimatedCard key={index} delay={index * 0.2}>
                    <AnimatedCardHeader className="pb-4">
                      <AnimatedCardTitle className="text-xl">{service.title}</AnimatedCardTitle>
                      <AnimatedCardDescription>{service.description}</AnimatedCardDescription>
                    </AnimatedCardHeader>
                    <AnimatedCardContent>
                      <motion.ul 
                        className="space-y-2 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * idx }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                            </motion.div>
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                      <AnimatedButton className="w-full" variant={service.variant as any}>
                        {service.button}
                      </AnimatedButton>
                    </AnimatedCardContent>
                  </AnimatedCard>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Persyaratan Dokumen</CardTitle>
                <CardDescription>
                  Dokumen yang perlu disiapkan untuk proses sertifikasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Perusahaan</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>Akta Pendirian dan Perubahan (jika ada)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>NIB (Nomor Induk Berusaha)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>NPWP Perusahaan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>SIUP (Surat Izin Usaha Perdagangan)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>TDP (Tanda Daftar Perusahaan)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Operasional</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>Struktur Organisasi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>Daftar Tenaga Kerja Tetap</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>Sertifikat Kompetensi SDM</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>Standar Operasional Prosedur (SOP)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>Bukti Kepemilikan/Sewa Kantor</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Alur Proses Sertifikasi</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Konsultasi Awal</h3>
                  <p className="text-sm text-gray-600">Analisis kebutuhan dan persiapan dokumen</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pengajuan</h3>
                  <p className="text-sm text-gray-600">Submit dokumen ke sistem Kemenparekraf</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Verifikasi & Audit</h3>
                  <p className="text-sm text-gray-600">Proses verifikasi dokumen dan audit lapangan</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Terbit Sertifikat</h3>
                  <p className="text-sm text-gray-600">Penerbitan sertifikat resmi berlaku 5 tahun</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Estimasi Biaya</CardTitle>
                <CardDescription>
                  Biaya estimasi untuk layanan sertifikasi biro perjalanan wisata
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Sertifikasi Baru</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-4">
                      Mulai dari Rp 15 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Termasuk fee pemerintah, konsultasi, dan pendampingan penuh
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Perpanjangan</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-4">
                      Mulai dari Rp 10 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Termasuk evaluasi compliance dan perpanjangan sertifikat
                    </p>
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
                  Informasi yang sering ditanyakan tentang sertifikasi biro perjalanan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama proses sertifikasi?</h4>
                    <p className="text-sm text-gray-600">
                      Proses sertifikasi memakan waktu 30-45 hari tergantung kelengkapan dokumen 
                      dan jadwal audit dari Kemenparekraf.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah sertifikasi wajib?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, sertifikasi biro perjalanan wisata wajib dimiliki untuk operasional 
                      yang legal di Indonesia sesuai regulasi pemerintah.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bagaimana jika dokumen tidak lengkap?</h4>
                    <p className="text-sm text-gray-600">
                      Tim kami akan membantu melengkapi dokumen yang kurang dan memberikan 
                      panduan untuk pengurusannya.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah ada jaminan lolos sertifikasi?</h4>
                    <p className="text-sm text-gray-600">
                      Kami tidak bisa menjamin 100% lolos, namun dengan pengalaman kami, 
                      tingkat keberhasilan klien mencapai 95%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Memulai Proses Sertifikasi?
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Konsultasi gratis dengan tim ahli kami untuk persiapan dokumen Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Booking Konsultasi
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                <FileText className="w-5 h-5 mr-2" />
                Kirim Berkas
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}