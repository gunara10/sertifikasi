'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Users,
  FileText,
  Video,
  Download,
  ChevronRight,
  Search,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Award,
  Headphones,
  Send,
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const helpCategories = [
  {
    id: 'panduan',
    title: 'Panduan Lengkap',
    description: 'Tutorial langkah demi langkah untuk semua layanan',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    items: [
      { title: 'Panduan Pendaftaran PPIU', level: 'Pemula', duration: '5 menit', popular: true },
      { title: 'Proses Sertifikasi PIHK', level: 'Menengah', duration: '10 menit', popular: false },
      { title: 'Akreasi IATA Step-by-Step', level: 'Lanjutan', duration: '15 menit', popular: true },
      { title: 'Panduan Visa Saudi', level: 'Pemula', duration: '7 menit', popular: false },
      { title: 'Tutorial ISO 9001', level: 'Menengah', duration: '12 menit', popular: false }
    ]
  },
  {
    id: 'video',
    title: 'Video Tutorial',
    description: 'Panduan visual untuk kemudahan pemahaman',
    icon: Video,
    color: 'from-purple-500 to-pink-500',
    items: [
      { title: 'Demo Platform Sertifikasi', level: 'Pemula', duration: '3 menit', popular: true },
      { title: 'Cara Upload Dokumen', level: 'Pemula', duration: '2 menit', popular: false },
      { title: 'Tracking Aplikasi', level: 'Pemula', duration: '4 menit', popular: true },
      { title: 'Webinar Onboarding', level: 'Pemula', duration: '45 menit', popular: false }
    ]
  },
  {
    id: 'dokumen',
    title: 'Dokumen & Template',
    description: 'Download formulir dan template yang dibutuhkan',
    icon: FileText,
    color: 'from-green-500 to-emerald-500',
    items: [
      { title: 'Formulir Pendaftaran PPIU', level: 'Semua', duration: '1 menit', popular: true },
      { title: 'Checklist Dokumen PIHK', level: 'Semua', duration: '1 menit', popular: true },
      { title: 'Template SOP Travel', level: 'Semua', duration: '1 menit', popular: false },
      { title: 'Contoh Kontrak Kerja', level: 'Semua', duration: '1 menit', popular: false }
    ]
  }
]

const quickActions = [
  { title: 'Chat dengan Assistant', icon: MessageCircle, color: 'bg-blue-500', delay: 0 },
  { title: 'Jadwalkan Konsultasi', icon: Calendar, color: 'bg-green-500', delay: 0.1 },
  { title: 'Call Support', icon: Phone, color: 'bg-purple-500', delay: 0.2 },
  { title: 'Email Bantuan', icon: Mail, color: 'bg-orange-500', delay: 0.3 }
]

const popularTopics = [
  'Bagaimana cara mendaftar PPIU?',
  'Dokumen yang dibutuhkan untuk PIHK',
  'Proses verifikasi IATA',
  'Estimasi waktu sertifikasi',
  'Biaya layanan sertifikasi'
]

const stats = [
  { label: 'Artikel Bantuan', value: '500+', icon: FileText },
  { label: 'Video Tutorial', value: '100+', icon: Video },
  { label: 'User Terbantu', value: '10,000+', icon: Users },
  { label: 'Rating Kepuasan', value: '4.9/5', icon: Star }
]

export default function BantuanPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats([500, 100, 10000, 4.9])
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <HelpCircle className="w-10 h-10" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Pusat Bantuan Arofah
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Solusi lengkap untuk semua kebutuhan sertifikasi travel Anda. 
              Kami siap membantu 24/7 dengan tim ahli berpengalaman.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari panduan, tutorial, atau jawaban..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-2xl focus:ring-4 focus:ring-blue-300"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                  Cari
                </Button>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-16 bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-20 text-white rounded-xl backdrop-blur-sm"
                  >
                    <action.icon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">{action.title}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {animatedStats[index].toLocaleString()}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kategori Bantuan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban yang Anda butuhkan dari kategori bantuan yang tersedia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10`}></div>
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4 text-white relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-gray-900 relative z-10">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 relative z-10">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.1 }}
                          whileHover={{ x: 10 }}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer group/item"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                                {item.title}
                              </h4>
                              {item.popular && (
                                <Badge variant="secondary" className="bg-orange-100 text-orange-600 text-xs">
                                  Populer
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {item.level}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {item.duration}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-blue-600 transition-colors" />
                        </motion.div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                      Lihat Semua {category.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Topik Populer
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering diajukan oleh pengguna kami
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {popularTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </motion.div>
                      <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {topic}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Headphones className="w-10 h-10" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6">
              Masih Butuh Bantuan?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim support kami siap membantu Anda 24/7. 
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat Sekarang
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Support
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}