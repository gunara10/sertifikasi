'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Users,
  Building,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  AlertCircle,
  Star,
  Navigation,
  ExternalLink,
  Calendar,
  FileText,
  Video,
  Headphones,
  Zap,
  Shield,
  Award,
  Download
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const contactInfo = {
  headquarters: {
    title: 'Kantor Pusat',
    address: 'Jl. Haji Mansyur No. 123, Tasikmalaya, Jawa Barat 46196',
    phone: '+62 265 1234 5678',
    email: 'info@arofahtravel.com',
    hours: 'Senin - Jumat: 08:00 - 22:00, Sabtu: 09:00 - 18:00',
    coordinates: '-7.3196, 108.2184'
  },
  branches: [
    {
      city: 'Jakarta',
      address: 'Jl. Sudirman No. 456, Jakarta Pusat',
      phone: '+62 21 9876 5432',
      email: 'jakarta@arofahtravel.com'
    },
    {
      city: 'Surabaya',
      address: 'Jl. Embong Malang No. 789, Surabaya',
      phone: '+62 31 2345 6789',
      email: 'surabaya@arofahtravel.com'
    },
    {
      city: 'Medan',
      address: 'Jl. Gatot Subroto No. 321, Medan',
      phone: '+62 61 8765 4321',
      email: 'medan@arofahtravel.com'
    },
    {
      city: 'Makassar',
      address: 'Jl. Pettarani No. 654, Makassar',
      phone: '+62 411 3456 7890',
      email: 'makassar@arofahtravel.com'
    }
  ]
}

const departments = [
  {
    name: 'Sales & Marketing',
    email: 'sales@arofahtravel.com',
    phone: '+62 265 1234 5679',
    description: 'Informasi layanan dan penawaran harga'
  },
  {
    name: 'Support Teknis',
    email: 'support@arofahtravel.com',
    phone: '+62 265 1234 5680',
    description: 'Bantuan teknis dan troubleshooting'
  },
  {
    name: 'Finance & Billing',
    email: 'finance@arofahtravel.com',
    phone: '+62 265 1234 5681',
    description: 'Tagihan, pembayaran, dan invoice'
  },
  {
    name: 'Certification',
    email: 'certification@arofahtravel.com',
    phone: '+62 265 1234 5682',
    description: 'Proses sertifikasi dan dokumen'
  },
  {
    name: 'Partnership',
    email: 'partnership@arofahtravel.com',
    phone: '+62 265 1234 5683',
    description: 'Kerjasama bisnis dan partnership'
  },
  {
    name: 'HR & Karir',
    email: 'hr@arofahtravel.com',
    phone: '+62 265 1234 5684',
    description: 'Lowongan kerja dan karir'
  }
]

const socialMedia = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/arofahtravel',
    followers: '45K',
    color: 'bg-blue-600'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/arofahtravel',
    followers: '32K',
    color: 'bg-sky-500'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/arofahtravel',
    followers: '58K',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/arofahtravel',
    followers: '12K',
    color: 'bg-blue-700'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/arofahtravel',
    followers: '8.5K',
    color: 'bg-red-600'
  }
]

const inquiryTypes = [
  { value: 'general', label: 'Informasi Umum' },
  { value: 'certification', label: 'Sertifikasi' },
  { value: 'technical', label: 'Bantuan Teknis' },
  { value: 'billing', label: 'Tagihan & Pembayaran' },
  { value: 'partnership', label: 'Kerjasama' },
  { value: 'complaint', label: 'Keluhan' },
  { value: 'feedback', label: 'Feedback & Saran' },
  { value: 'other', label: 'Lainnya' }
]

const stats = [
  { label: 'Klien Puas', value: '10,000+', icon: Users },
  { label: 'Response Rate', value: '98%', icon: CheckCircle },
  { label: 'Response Time', value: '< 2 Jam', icon: Clock },
  { label: 'Satisfaction', value: '4.9/5', icon: Star }
]

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    inquiryType: '',
    message: '',
    attachment: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats([10000, 98, 2, 4.9])
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      inquiryType: '',
      message: '',
      attachment: null
    })
    
    setTimeout(() => setShowSuccess(false), 5000)
  }

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
              <MapPin className="w-10 h-10" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Hubungi Kami
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami 
              untuk informasi, konsultasi, atau bantuan teknis.
            </p>
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
                  {index === 0 ? `${animatedStats[index].toLocaleString()}+` : 
                   index === 1 ? `${animatedStats[index]}%` :
                   index === 2 ? `< ${animatedStats[index]} Jam` :
                   `${animatedStats[index]}/5`}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Kirim Pesan
                  </CardTitle>
                  <CardDescription>
                    Isi form di bawah ini dan kami akan segera merespons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <Input
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telepon *
                        </label>
                        <Input
                          required
                          placeholder="+62 812-3456-7890"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Perusahaan
                        </label>
                        <Input
                          placeholder="PT Travel Indonesia"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Pertanyaan *
                      </label>
                      <Select value={formData.inquiryType} onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis pertanyaan" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <Input
                        required
                        placeholder="Pertanyaan tentang sertifikasi PPIU"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <Textarea
                        required
                        placeholder="Jelaskan pertanyaan atau permintaan Anda secara detail..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lampiran (opsional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Klik untuk upload atau drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC, JPG, PNG (max. 5MB)
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800">
                          Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Headquarters */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    Kantor Pusat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-gray-900">{contactInfo.headquarters.address}</p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-blue-600 hover:text-blue-700"
                        onClick={() => window.open(`https://maps.google.com/?q=${contactInfo.headquarters.coordinates}`, '_blank')}
                      >
                        <Navigation className="w-4 h-4 mr-1" />
                        Buka di Maps
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-900">{contactInfo.headquarters.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-900">{contactInfo.headquarters.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-900">{contactInfo.headquarters.hours}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600" />
                    Kontak Cepat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat 24/7
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Center: 1500-123
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Video className="w-4 h-4 mr-2" />
                    Video Consultation
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Headphones className="w-4 h-4 mr-2" />
                    WhatsApp Business
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-600" />
                    Media Sosial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {socialMedia.map((social) => (
                      <motion.div
                        key={social.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => window.open(social.url, '_blank')}
                        >
                          <social.icon className="w-4 h-4 mr-2" />
                          <div className="text-left">
                            <div className="text-sm font-medium">{social.name}</div>
                            <div className="text-xs text-gray-500">{social.followers}</div>
                          </div>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kantor Cabang
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami hadir di kota-kota besar Indonesia untuk melayani Anda lebih baik
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.branches.map((branch, index) => (
              <motion.div
                key={branch.city}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {branch.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                      <p className="text-sm text-gray-600">{branch.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-600">{branch.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-600">{branch.email}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Departemen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kontak langsung departemen yang relevan untuk respons lebih cepat
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {dept.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {dept.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-600">{dept.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-600">{dept.phone}</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <Send className="w-4 h-4 mr-2" />
                      Kontak {dept.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              <Award className="w-10 h-10" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan perusahaan travel yang telah mempercayai 
              kami untuk sertifikasi dan pengembangan bisnis mereka.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  Jadwalkan Konsultasi
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Download Company Profile
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}