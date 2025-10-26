'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  UserCheck,
  AlertCircle,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Mail,
  Phone,
  ChevronRight,
  Search,
  Calendar,
  Users,
  Globe,
  Cookie,
  Server,
  Key,
  Trash2,
  Share2,
  Settings,
  Info
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const privacySections = [
  {
    id: 'pengumpulan-data',
    title: 'Pengumpulan Data Pribadi',
    icon: Database,
    description: 'Data apa yang kami kumpulkan dan bagaimana cara kami mengumpulkannya',
    content: [
      {
        subtitle: 'Data yang Kami Kumpulkan',
        points: [
          'Informasi identitas pribadi (nama, email, nomor telepon, alamat)',
          'Informasi perusahaan (nama perusahaan, NPWP, alamat kantor)',
          'Data dokumen (KTP, paspor, akta perusahaan, izin usaha)',
          'Informasi keuangan (rekening bank, riwayat pembayaran)',
          'Data penggunaan platform (log aktivitas, preferensi, cookies)',
          'Informasi komunikasi (chat, email, catatan panggilan)'
        ]
      },
      {
        subtitle: 'Cara Pengumpulan',
        points: [
          'Formulir pendaftaran dan aplikasi online',
          'Dokumen yang diunggah oleh pengguna',
          'Interaksi dengan website dan platform',
          'Komunikasi langsung dengan tim kami',
          'Analisis otomatis dan tracking teknologi',
          'Data dari pihak ketiga yang terverifikasi'
        ]
      }
    ]
  },
  {
    id: 'penggunaan-data',
    title: 'Penggunaan Data',
    icon: Settings,
    description: 'Bagaimana kami menggunakan data pribadi Anda',
    content: [
      {
        subtitle: 'Tujuan Utama',
        points: [
          'Memproses aplikasi sertifikasi',
          'Verifikasi dokumen dan validasi data',
          'Komunikasi dan layanan pelanggan',
          'Penyediaan layanan konsultasi',
          'Analisis dan peningkatan layanan',
          'Kepatuhan terhadap regulasi'
        ]
      },
      {
        subtitle: 'Penggunaan Tambahan',
        points: [
          'Personalisasi pengalaman pengguna',
          'Pengembangan produk dan fitur baru',
          'Analisis statistik dan tren industri',
          'Pencegahan penipuan dan keamanan',
          'Marketing yang relevan dan terpersonalisasi',
          'Penelitian dan pengembangan'
        ]
      }
    ]
  },
  {
    id: 'perlindungan-data',
    title: 'Perlindungan Data',
    icon: Lock,
    description: 'Langkah-langkah keamanan yang kami implementasikan',
    content: [
      {
        subtitle: 'Teknologi Keamanan',
        points: [
          'Enkripsi SSL/TLS 256-bit untuk semua transmisi data',
          'Enkripsi database dengan AES-256',
          'Firewall dan sistem deteksi intrusi',
          'Multi-factor authentication untuk akses admin',
          'Regular security audits dan penetration testing',
          'Backup data otomatis dengan enkripsi'
        ]
      },
      {
        subtitle: 'Prosedur Keamanan',
        points: [
          'Akses terbatas berbasis peran (role-based access)',
          'Training keamanan rutin untuk tim',
          'Kebijakan password yang kuat',
          'Monitoring aktivitas 24/7',
          'Incident response plan yang terstruktur',
          'Compliance dengan standar internasional'
        ]
      }
    ]
  },
  {
    id: 'hak-pengguna',
    title: 'Hak Pengguna',
    icon: UserCheck,
    description: 'Hak Anda atas data pribadi yang kami simpan',
    content: [
      {
        subtitle: 'Hak Akses',
        points: [
          'Meminta salinan data pribadi yang kami simpan',
          'Mengetahui tujuan penggunaan data Anda',
          'Memperbaiki data yang tidak akurat',
          'Menghapus data yang tidak lagi diperlukan',
          'Membatasi pengolahan data tertentu',
          'Memindahkan data ke pihak ketiga (data portability)'
        ]
      },
      {
        subtitle: 'Cara Melaksanakan Hak',
        points: [
          'Login ke dashboard dan akses menu "Data Pribadi"',
          'Kirim email ke privacy@arofahtravel.com',
          'Hubungi customer service di 1500-123',
          'Formulir permintaan online di website',
          'Surat resmi ke alamat kantor kami',
          'Respon dalam 14 hari kerja'
        ]
      }
    ]
  },
  {
    id: 'cookies',
    title: 'Kebijakan Cookies',
    icon: Cookie,
    description: 'Penggunaan cookies dan teknologi tracking',
    content: [
      {
        subtitle: 'Jenis Cookies',
        points: [
          'Essential cookies - untuk fungsi dasar website',
          'Performance cookies - untuk analisis performa',
          'Functional cookies - untuk fitur personalisasi',
          'Marketing cookies - untuk iklan yang relevan',
          'Third-party cookies - dari partner terpercaya',
          'Session cookies - selama kunjungan aktif'
        ]
      },
      {
        subtitle: 'Pengelolaan Cookies',
        points: [
          'Cookie consent banner saat pertama kunjungan',
          'Pengaturan cookies melalui browser',
          'Opsi untuk menolak non-essential cookies',
          'Clear cookies kapan saja',
          'Informasi detail tentang setiap cookie',
          'Update kebijakan cookies secara berkala'
        ]
      }
    ]
  },
  {
    id: 'pihak-ketiga',
    title: 'Berbagi dengan Pihak Ketiga',
    icon: Share2,
    description: 'Kapan dan dengan siapa kami berbagi data Anda',
    content: [
      {
        subtitle: 'Pihak yang Berwenang',
        points: [
          'Kementerian Agama Republik Indonesia',
          'Otoritas Jasa Keuangan (OJK)',
          'Kementerian Hukum dan HAM',
          'Badan Pengawas Perdagangan Berjangka Komoditi',
          'Lembaga Sertifikasi Internasional (IATA, dll)',
          'Pihak berwenang lain sesuai hukum'
        ]
      },
      {
        subtitle: 'Partner Layanan',
        points: [
          'Payment gateway terverifikasi',
          'Cloud service providers (AWS, Google Cloud)',
          'Email marketing services',
          'Analytics platforms',
          'Customer support software',
          'Security monitoring services'
        ]
      }
    ]
  }
]

const stats = [
  { label: 'Data Terlindungi', value: '100%', icon: Shield },
  { label: 'Enkripsi Level', value: '256-bit', icon: Lock },
  { label: 'Compliance', value: 'ISO 27001', icon: CheckCircle },
  { label: 'Security Audit', value: '24/7', icon: Eye }
]

export default function KebijakanPrivasiPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('pengumpulan-data')
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats([100, 256, 27001, 24])
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

  const filteredSections = privacySections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
              <Shield className="w-10 h-10" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Kebijakan Privasi
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Komitmen kami melindungi data pribadi Anda dengan standar keamanan tertinggi. 
              Privasi Anda adalah prioritas utama kami.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Hubungi Privacy Team
                </Button>
              </motion.div>
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
                  {animatedStats[index]}
                  {index === 0 && '%'}
                  {index === 1 && '-bit'}
                  {index === 2 && ''}
                  {index === 3 && '/7'}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari topik privasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-lg focus:ring-4 focus:ring-blue-300"
                />
              </div>
            </motion.div>

            {/* Section Navigation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredSections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeSection === section.id ? "default" : "outline"}
                    className={`w-full h-auto p-4 text-left justify-start ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activeSection === section.id
                            ? 'bg-white bg-opacity-20'
                            : 'bg-blue-100'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <section.icon className={`w-5 h-5 ${
                          activeSection === section.id ? 'text-white' : 'text-blue-600'
                        }`} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold">{section.title}</h4>
                        <p className={`text-sm ${
                          activeSection === section.id ? 'text-blue-100' : 'text-gray-600'
                        }`}>
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredSections.map((section) => (
                activeSection === section.id && (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="shadow-xl">
                      <CardHeader>
                        <motion.div
                          className="flex items-center gap-3 mb-4"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <motion.div
                            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <section.icon className="w-6 h-6" />
                          </motion.div>
                          <div>
                            <CardTitle className="text-2xl">{section.title}</CardTitle>
                            <CardDescription className="text-gray-600 mt-1">
                              {section.description}
                            </CardDescription>
                          </div>
                        </motion.div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-8">
                          {section.content.map((contentBlock, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                {contentBlock.subtitle}
                              </h4>
                              <ul className="space-y-3">
                                {contentBlock.points.map((point, pointIndex) => (
                                  <motion.li
                                    key={pointIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 + pointIndex * 0.05 }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-3"
                                  >
                                    <motion.div
                                      className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                      whileHover={{ scale: 1.5 }}
                                      transition={{ duration: 0.2 }}
                                    />
                                    <span className="text-gray-700 leading-relaxed">{point}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan Tentang Privasi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim privacy kami siap membantu menjawab semua pertanyaan Anda mengenai 
              perlindungan data dan kebijakan privasi kami.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-8 h-8" />
                  </motion.div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>privacy@arofahtravel.com</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Kirim Email
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Phone className="w-8 h-8" />
                  </motion.div>
                  <CardTitle>Telepon</CardTitle>
                  <CardDescription>1500-123</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Sekarang
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FileText className="w-8 h-8" />
                  </motion.div>
                  <CardTitle>Formulir</CardTitle>
                  <CardDescription>Permintaan online</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Isi Formulir
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Update Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Calendar className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pembaruan Kebijakan
                </h3>
                <p className="text-gray-600 mb-6">
                  Kebijakan privasi ini terakhir diperbarui pada 15 Januari 2024. 
                  Kami akan memberitahukan setiap perubahan melalui email dan notifikasi di platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Lihat Riwayat Perubahan
                  </Button>
                  <Button variant="outline">
                    <Info className="w-4 h-4 mr-2" />
                    Daftar Notifikasi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}