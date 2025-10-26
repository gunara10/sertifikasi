'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Users,
  BookOpen,
  Video,
  FileText,
  TrendingUp,
  Award,
  Zap,
  Shield,
  Globe,
  Calendar,
  Send,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const faqCategories = [
  {
    id: 'umum',
    title: 'Umum',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    description: 'Pertanyaan umum tentang layanan kami'
  },
  {
    id: 'pendaftaran',
    title: 'Pendaftaran',
    icon: FileText,
    color: 'from-green-500 to-emerald-500',
    description: 'Proses pendaftaran dan persyaratan'
  },
  {
    id: 'sertifikasi',
    title: 'Sertifikasi',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    description: 'Jenis sertifikasi dan prosesnya'
  },
  {
    id: 'biaya',
    title: 'Biaya & Pembayaran',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
    description: 'Informasi biaya dan metode pembayaran'
  },
  {
    id: 'teknis',
    title: 'Bantuan Teknis',
    icon: Zap,
    color: 'from-indigo-500 to-purple-500',
    description: 'Bantuan teknis dan troubleshooting'
  }
]

const faqData = {
  umum: [
    {
      question: 'Apa itu Arofah Travel Certification?',
      answer: 'Arofah Travel Certification adalah platform digital terpercaya yang menyediakan layanan sertifikasi lengkap untuk industri travel haji dan umrah. Kami membantu perusahaan travel memperoleh sertifikasi resmi seperti PPIU, PIHK, IATA, dan berbagai sertifikasi lainnya dengan proses yang mudah dan transparan.',
      helpful: 45,
      views: 1250,
      category: 'umum'
    },
    {
      question: 'Mengapa harus memilih Arofah Travel?',
      answer: 'Arofah Travel memiliki pengalaman lebih dari 10 tahun dalam industri travel haji dan umrah. Kami menawarkan proses sertifikasi yang cepat, transparan, dengan tim ahli yang siap membantu 24/7. Tingkat keberhasilan klien kami mencapai 98% dengan waktu proses rata-rata 30% lebih cepat dari platform lain.',
      helpful: 38,
      views: 980,
      category: 'umum'
    },
    {
      question: 'Apakah layanan Anda tersedia di seluruh Indonesia?',
      answer: 'Ya, kami melayani seluruh wilayah Indonesia. Tim kami siap membantu perusahaan travel dari Sabang hingga Merauke. Kami juga memiliki kantor perwakilan di kota-kota besar seperti Jakarta, Surabaya, Medan, dan Makassar untuk memberikan layanan terbaik.',
      helpful: 32,
      views: 750,
      category: 'umum'
    }
  ],
  pendaftaran: [
    {
      question: 'Apa saja dokumen yang dibutuhkan untuk pendaftaran PPIU?',
      answer: 'Untuk pendaftaran PPIU, Anda membutuhkan: 1) Akta Pendirian Perusahaan, 2) NPWP Perusahaan, 3) NIB (Nomor Induk Berusaha), 4) Surat Keterangan Domisili, 5) Struktur Organisasi, 6) Daftar Tenaga Kerja, 7) Bukti Kepemilikan Kantor, 8) Rekening Koran 3 bulan terakhir. Tim kami akan membantu memeriksa kelengkapan dokumen Anda.',
      helpful: 67,
      views: 2100,
      category: 'pendaftaran'
    },
    {
      question: 'Berapa lama proses pendaftaran PIHK?',
      answer: 'Proses pendaftaran PIHK umumnya memakan waktu 3-6 bulan, tergantung kelengkapan dokumen dan proses verifikasi dari Kementerian Agama. Dengan Arofah Travel, kami dapat mempercepat proses hingga 30% melalui pendampingan intensif dan jaringan yang kami miliki.',
      helpful: 54,
      views: 1800,
      category: 'pendaftaran'
    },
    {
      question: 'Apakah perusahaan baru bisa langsung mendaftar?',
      answer: 'Ya, perusahaan baru bisa mendaftar asalkan telah memenuhi persyaratan minimal: memiliki badan hukum (PT/CV), minimal 1 tahun berdiri, memiliki modal minimal sesuai ketentuan, dan memiliki tenaga kerja yang kompeten. Kami akan membantu mengevaluasi kelayakan perusahaan Anda.',
      helpful: 41,
      views: 1200,
      category: 'pendaftaran'
    }
  ],
  sertifikasi: [
    {
      question: 'Apa saja jenis sertifikasi yang tersedia?',
      answer: 'Kami menyediakan berbagai sertifikasi: 1) PPIU (Penyelenggara Perjalanan Ibadah Umrah), 2) PIHK (Penyelenggara Perjalanan Ibadah Haji Khusus), 3) IATA Accreditation, 4) ISO 9001 (Quality Management), 5) ISO 27001 (Information Security), 6) ISO 22301 (Business Continuity), 7) Sertifikasi Tour Leader, 8) Sertifikasi Ticketing.',
      helpful: 72,
      views: 2500,
      category: 'sertifikasi'
    },
    {
      question: 'Bagaimana proses sertifikasi IATA?',
      answer: 'Proses sertifikasi IATA meliputi: 1) Pendaftaran awal dan document check, 2) Training IATA Core Competencies, 3) Ujian sertifikasi, 4) Audit kelayakan finansial, 5) Verifikasi sistem operasional, 6) Issuance certificate. Proses ini memakan waktu 2-4 bulan dengan tingkat keberhasilan 95% bersama kami.',
      helpful: 58,
      views: 1900,
      category: 'sertifikasi'
    },
    {
      question: 'Apakah sertifikasi bisa diperpanjang?',
      answer: 'Ya, semua sertifikasi bisa diperpanjang. Kami akan mengingatkan Anda 3 bulan sebelum masa berlaku berakhir. Proses perpanjangan lebih sederhana dari pendaftaran baru, biasanya memakan waktu 1-2 bulan tergantung jenis sertifikasi.',
      helpful: 45,
      views: 1400,
      category: 'sertifikasi'
    }
  ],
  biaya: [
    {
      question: 'Berapa biaya untuk pendaftaran PPIU?',
      answer: 'Biaya pendaftaran PPIU bervariasi tergantung layanan yang dipilih: 1) Paket Basic Rp 15.000.000, 2) Paket Premium Rp 25.000.000, 3) Paket All-inclusive Rp 35.000.000. Semua paket sudah termasuk konsultasi, pengurusan dokumen, dan pendampingan hingga sertifikasi terbit.',
      helpful: 89,
      views: 3200,
      category: 'biaya'
    },
    {
      question: 'Apakah ada biaya tersembunyi?',
      answer: 'Tidak, kami transparan dengan semua biaya. Harga yang tercantum sudah all-inclusive. Tidak ada biaya tersembunyi atau tambahan biaya tak terduga. Semua biaya akan dijelaskan di awal sebelum proses dimulai.',
      helpful: 76,
      views: 2100,
      category: 'biaya'
    },
    {
      question: 'Bagaimana sistem pembayarannya?',
      answer: 'Kami menawarkan sistem pembayaran fleksibel: 1) DP 50% di awal, 2) Cicilan 3x tanpa bunga, 3) Pembayaran penuh dapat diskon 10%, 4) Transfer bank, e-wallet, atau virtual account. Semua transaksi aman dan terjamin.',
      helpful: 63,
      views: 1800,
      category: 'biaya'
    }
  ],
  teknis: [
    {
      question: 'Bagaimana cara upload dokumen?',
      answer: 'Upload dokumen sangat mudah: 1) Login ke dashboard, 2) Pilih menu "Dokumen", 3) Klik "Upload Dokumen", 4) Pilih file yang akan diupload (PDF, JPG, PNG maks 5MB), 5) Isi keterangan dokumen, 6) Klik "Upload". Sistem kami akan otomatis memvalidasi dan mengenkripsi dokumen Anda.',
      helpful: 81,
      views: 2800,
      category: 'teknis'
    },
    {
      question: 'Apakah data saya aman?',
      answer: 'Ya, keamanan data adalah prioritas kami. Kami menggunakan enkripsi SSL 256-bit, backup data otomatis, dan sistem keamanan berlapis. Semua data pribadi dan dokumen perusahaan tersimpan dengan aman dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda.',
      helpful: 74,
      views: 2200,
      category: 'teknis'
    },
    {
      question: 'Bagaimana cara tracking aplikasi saya?',
      answer: 'Anda bisa tracking aplikasi secara real-time di dashboard: 1) Login ke akun Anda, 2) Klik "My Applications", 3) Pilih aplikasi yang ingin dicek, 4) Lihat status dan timeline progress. Kami juga mengirimkan notifikasi email/SMS untuk setiap update penting.',
      helpful: 68,
      views: 1900,
      category: 'teknis'
    }
  ]
}

const stats = [
  { label: 'Total FAQ', value: '150+', icon: HelpCircle },
  { label: 'Pertanyaan Terjawab', value: '10,000+', icon: CheckCircle },
  { label: 'User Puas', value: '98%', icon: Users },
  { label: 'Response Time', value: '< 2 Jam', icon: Clock }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({})
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats([150, 10000, 98, 2])
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const handleHelpfulVote = (itemId: string, isHelpful: boolean) => {
    setHelpfulVotes(prev => ({ ...prev, [itemId]: isHelpful }))
  }

  const getAllFAQs = () => {
    if (selectedCategory === 'all') {
      return Object.values(faqData).flat()
    }
    return faqData[selectedCategory as keyof typeof faqData] || []
  }

  const filteredFAQs = getAllFAQs().filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
              Pusat Bantuan FAQ
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Temukan jawaban untuk pertanyaan yang sering diajukan. 
              Jika tidak menemukan jawaban, tim kami siap membantu Anda.
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
                  placeholder="Cari pertanyaan atau kata kunci..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-2xl focus:ring-4 focus:ring-blue-300"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                  Cari
                </Button>
              </div>
            </motion.div>
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
                  {index === 2 ? `${animatedStats[index]}%` : 
                   index === 3 ? `< ${animatedStats[index]} Jam` :
                   `${animatedStats[index].toLocaleString()}+`}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories and FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kategori Pertanyaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih kategori untuk menemukan jawaban yang Anda cari
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              Semua Kategori
            </motion.button>
            {faqCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* FAQ Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-4"
          >
            {filteredFAQs.map((faq, index) => {
              const itemId = `${faq.category}-${index}`
              const isExpanded = expandedItems.includes(itemId)
              
              return (
                <motion.div
                  key={itemId}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleExpanded(itemId)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {faq.views} views
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" />
                            {faq.helpful} helpful
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {faqCategories.find(c => c.id === faq.category)?.title}
                          </Badge>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t pt-4">
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {faq.answer}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Apakah jawaban ini membantu?</span>
                                <div className="flex gap-2">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleHelpfulVote(itemId, true)}
                                    className={`p-2 rounded-full transition-colors ${
                                      helpfulVotes[itemId] === true
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                  >
                                    <ThumbsUp className="w-4 h-4" />
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleHelpfulVote(itemId, false)}
                                    className={`p-2 rounded-full transition-colors ${
                                      helpfulVotes[itemId] === false
                                        ? 'bg-red-100 text-red-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                  >
                                    <ThumbsDown className="w-4 h-4" />
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tidak ada pertanyaan ditemukan
              </h3>
              <p className="text-gray-600 mb-6">
                Coba kata kunci lain atau pilih kategori yang berbeda
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
              >
                Reset Pencarian
              </Button>
            </motion.div>
          )}
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
              <MessageCircle className="w-10 h-10" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6">
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim support kami siap membantu menjawab semua pertanyaan Anda. 
              Jangan ragu untuk menghubungi kami!
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
                  <Mail className="w-5 h-5 mr-2" />
                  Kirim Email
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}