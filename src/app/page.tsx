'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Users, FileText, Shield, Globe, Clock, ArrowRight, Star, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services, secondaryServices } from '@/lib/services'
import { AnimatedButton } from '@/components/ui/animated-button'
import { AnimatedCard, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardDescription, AnimatedCardContent } from '@/components/ui/animated-card'
import { FloatingElement } from '@/components/ui/floating-element'
import { Counter } from '@/components/ui/counter'
import { SparkleCounter } from '@/components/ui/sparkle-counter'
import { CelebrationCounter } from '@/components/ui/celebration-counter'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900">Arofahajj</span>
            </motion.div>
            <motion.div 
              className="hidden md:flex items-center space-x-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { href: "#layanan", text: "Layanan" },
                { href: "#proses", text: "Proses" },
                { href: "#sertifikasi", text: "Sertifikasi" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors relative group"
                  >
                    {item.text}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              {/* Bantuan Dropdown */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                  Bantuan
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  initial={{ y: -10 }}
                  whileHover={{ y: 0 }}
                >
                  <Link href="/bantuan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg">
                    Panduan
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FAQ
                  </Link>
                  <Link href="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Support
                  </Link>
                  <Link href="/kontak" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg">
                    Kontak
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Dashboard
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <AnimatedButton variant="outline" size="sm" asChild>
                <Link href="/auth/login">Masuk</Link>
              </AnimatedButton>
              <AnimatedButton size="sm" asChild>
                <Link href="/wizard">Mulai Pengajuan</Link>
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background animated elements */}
        <FloatingElement duration={6} delay={0} intensity={15} className="absolute top-10 left-10 opacity-20">
          <div className="w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement duration={8} delay={1} intensity={20} className="absolute top-20 right-20 opacity-20">
          <div className="w-32 h-32 bg-purple-200 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement duration={7} delay={2} intensity={12} className="absolute bottom-10 left-1/4 opacity-20">
          <div className="w-24 h-24 bg-green-200 rounded-full blur-xl"></div>
        </FloatingElement>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer">
                Platform Sertifikasi Digital Terpercaya
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sertifikasi PPIU & PIHK
              <motion.span 
                className="text-blue-600 block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Mudah & Terpercaya
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Platform digital terintegrasi untuk pengajuan dan manajemen sertifikasi 
              Penyelenggara Perjalanan Ibadah Umrah (PPIU) dan Penyelenggara Ibadah Haji Khusus (PIHK)
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <AnimatedButton size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/wizard">
                  Mulai Pengajuan Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </AnimatedButton>
              
              <AnimatedButton size="lg" variant="outline" asChild>
                <Link href="#layanan">
                  Lihat Layanan Lengkap
                </Link>
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {[
              { number: 500, suffix: "+", label: "Sertifikasi Aktif", icon: Award, color: "text-blue-600", sparkle: true },
              { number: 50, suffix: "+", label: "Perusahaan Terpercaya", icon: Users, color: "text-green-600", sparkle: false },
              { number: 99, suffix: "%", label: "Tingkat Kepuasan", icon: Star, color: "text-yellow-600", sparkle: false },
              { number: 24, suffix: "/7", label: "Support Online", icon: Clock, color: "text-purple-600", sparkle: false }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <motion.span
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {stat.sparkle ? (
                      <CelebrationCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2500}
                        delay={index * 100}
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-4xl"
                      />
                    ) : (
                      <Counter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2000 + index * 200}
                        delay={index * 100}
                        className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-bold"
                      />
                    )}
                  </motion.span>
                </motion.div>
                <motion.div 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Sertifikasi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan sertifikasi travel haji dan umrah
            </p>
          </motion.div>

          <Tabs defaultValue="primer" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="primer" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Layanan Primer
              </TabsTrigger>
              <TabsTrigger value="sekunder" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Layanan Pendukung
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="primer" className="mt-8">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {services.map((service, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <AnimatedCardHeader>
                      <motion.div 
                        className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <FileText className={`w-6 h-6 text-${service.color}-600`} />
                      </motion.div>
                      <AnimatedCardTitle className="text-xl">{service.title}</AnimatedCardTitle>
                      <AnimatedCardDescription>{service.description}</AnimatedCardDescription>
                    </AnimatedCardHeader>
                    <AnimatedCardContent>
                      <motion.ul 
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center text-sm text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + idx * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            </motion.div>
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <AnimatedButton className="w-full mt-4" variant="outline" asChild>
                          <Link href={`/services/${service.slug}`}>
                            Pelajari Lebih Lanjut
                          </Link>
                        </AnimatedButton>
                      </motion.div>
                    </AnimatedCardContent>
                  </AnimatedCard>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="sekunder" className="mt-8">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {secondaryServices.map((service, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <AnimatedCardHeader>
                      <motion.div 
                        className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <FileText className="w-6 h-6 text-gray-600" />
                      </motion.div>
                      <AnimatedCardTitle className="text-xl">{service.title}</AnimatedCardTitle>
                      <AnimatedCardDescription>{service.description}</AnimatedCardDescription>
                    </AnimatedCardHeader>
                    <AnimatedCardContent>
                      <motion.ul 
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center text-sm text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + idx * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            </motion.div>
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <AnimatedButton className="w-full mt-4" variant="outline" asChild>
                          <Link href={`/services/${service.slug}`}>
                            Pelajari Lebih Lanjut
                          </Link>
                        </AnimatedButton>
                      </motion.div>
                    </AnimatedCardContent>
                  </AnimatedCard>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section id="proses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proses Sertifikasi Mudah & Cepat
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ikuti 4 langkah sederhana untuk mendapatkan sertifikasi resmi
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                step: "01",
                title: "Konsultasi & Pendaftaran",
                description: "Isi formulir pengajuan dan konsultasi dengan tim ahli kami",
                icon: Users
              },
              {
                step: "02", 
                title: "Persiapan Dokumen",
                description: "Upload dokumen persyaratan yang diperlukan",
                icon: FileText
              },
              {
                step: "03",
                title: "Proses Verifikasi",
                description: "Tim kami akan memverifikasi dan mengaudit dokumen Anda",
                icon: Shield
              },
              {
                step: "04",
                title: "Sertifikasi Terbit",
                description: "Terbitkan sertifikat resmi dengan QR code verifikasi",
                icon: Award
              }
            ].map((process, index) => (
              <motion.div key={index} variants={fadeIn} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{process.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-blue-300" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Platform Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Platform modern dengan teknologi terdepan untuk kemudahan sertifikasi
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: Globe,
                title: "Verifikasi Global",
                description: "Sertifikasi dapat diverifikasi secara global melalui QR code"
              },
              {
                icon: Shield,
                title: "Keamanan Terjamin",
                description: "Enkripsi data dan sistem keamanan berlapis"
              },
              {
                icon: Clock,
                title: "Proses Cepat",
                description: "Waktu proses lebih cepat dengan sistem digital"
              },
              {
                icon: Users,
                title: "Support 24/7",
                description: "Tim support siap membantu kapan saja"
              },
              {
                icon: TrendingUp,
                title: "Tracking Real-time",
                description: "Monitor status pengajuan secara real-time"
              },
              {
                icon: Award,
                title: "Sertifikasi Resmi",
                description: "Terintegrasi dengan sistem pemerintah"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Memulai Sertifikasi Anda?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan perusahaan yang telah mempercayakan sertifikasi kepada kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/wizard">
                  Mulai Pengajuan Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/auth/login">
                  Masuk ke Dashboard
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <motion.div 
                  className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-xl font-bold">Arofahajj</span>
              </div>
              <p className="text-gray-400 text-sm">
                Platform sertifikasi digital terpercaya untuk travel haji dan umrah
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/izin-ppiu" className="hover:text-white transition-colors inline-block">Sertifikasi PPIU</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/izin-pihk" className="hover:text-white transition-colors inline-block">Sertifikasi PIHK</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/iata-accreditation" className="hover:text-white transition-colors inline-block">IATA Accreditation</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/legal-tax" className="hover:text-white transition-colors inline-block">Konsultasi</Link>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Bantuan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/bantuan" className="hover:text-white transition-colors inline-block">Panduan</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/faq" className="hover:text-white transition-colors inline-block">FAQ</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/support" className="hover:text-white transition-colors inline-block">Support</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/kontak" className="hover:text-white transition-colors inline-block">Kontak</Link>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/legal/kebijakan-privasi" className="hover:text-white transition-colors inline-block">Kebijakan Privasi</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/legal/syarat-ketentuan" className="hover:text-white transition-colors inline-block">Syarat & Ketentuan</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/legal/kebijakan-refund" className="hover:text-white transition-colors inline-block">Kebijakan Refund</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/legal/kepatuhan" className="hover:text-white transition-colors inline-block">Kepatuhan</Link>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div 
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 Arofahajj. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}