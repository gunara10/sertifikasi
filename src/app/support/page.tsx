'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Headphones, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Users,
  Ticket,
  Calendar,
  FileText,
  Search,
  Filter,
  Plus,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Globe,
  Video,
  Download,
  Upload,
  Paperclip,
  X,
  Minimize2,
  Maximize2
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const supportChannels = [
  {
    id: 'livechat',
    title: 'Live Chat',
    description: 'Chat langsung dengan tim support',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-500',
    status: 'online',
    waitTime: '< 1 menit',
    available: '24/7'
  },
  {
    id: 'phone',
    title: 'Telepon',
    description: 'Bicara langsung dengan ahli kami',
    icon: Phone,
    color: 'from-blue-500 to-cyan-500',
    status: 'online',
    waitTime: '< 3 menit',
    available: '08:00 - 22:00'
  },
  {
    id: 'email',
    title: 'Email',
    description: 'Kirim detail pertanyaan Anda',
    icon: Mail,
    color: 'from-purple-500 to-pink-500',
    status: 'online',
    waitTime: '< 24 jam',
    available: '24/7'
  },
  {
    id: 'video',
    title: 'Video Call',
    description: 'Konsultasi tatap muka virtual',
    icon: Video,
    color: 'from-orange-500 to-red-500',
    status: 'appointment',
    waitTime: 'Jadwalkan',
    available: '09:00 - 17:00'
  }
]

const ticketCategories = [
  { value: 'technical', label: 'Bantuan Teknis' },
  { value: 'billing', label: 'Tagihan & Pembayaran' },
  { value: 'certification', label: 'Sertifikasi' },
  { value: 'account', label: 'Akun & Keamanan' },
  { value: 'general', label: 'Umum' }
]

const priorityLevels = [
  { value: 'low', label: 'Rendah', color: 'bg-green-100 text-green-600' },
  { value: 'medium', label: 'Sedang', color: 'bg-yellow-100 text-yellow-600' },
  { value: 'high', label: 'Tinggi', color: 'bg-orange-100 text-orange-600' },
  { value: 'urgent', label: 'Darurat', color: 'bg-red-100 text-red-600' }
]

const mockTickets = [
  {
    id: 'TKT-001',
    subject: 'Kendala Upload Dokumen PPIU',
    category: 'technical',
    priority: 'high',
    status: 'open',
    createdAt: '2024-01-15 10:30',
    lastUpdate: '2024-01-15 14:20',
    assignedTo: 'Ahmad Support',
    messages: 3
  },
  {
    id: 'TKT-002',
    subject: 'Konfirmasi Pembayaran Paket Premium',
    category: 'billing',
    priority: 'medium',
    status: 'in-progress',
    createdAt: '2024-01-14 15:45',
    lastUpdate: '2024-01-15 09:15',
    assignedTo: 'Siti Finance',
    messages: 5
  },
  {
    id: 'TKT-003',
    subject: 'Status Sertifikasi IATA',
    category: 'certification',
    priority: 'low',
    status: 'resolved',
    createdAt: '2024-01-13 11:20',
    lastUpdate: '2024-01-14 16:30',
    assignedTo: 'Budi Certification',
    messages: 7
  }
]

const stats = [
  { label: 'Tiket Aktif', value: '24', icon: Ticket, color: 'from-blue-500 to-cyan-500' },
  { label: 'Response Time', value: '2.5m', icon: Clock, color: 'from-green-500 to-emerald-500' },
  { label: 'Resolusi Rate', value: '96%', icon: CheckCircle, color: 'from-purple-500 to-pink-500' },
  { label: 'Customer Satisfaction', value: '4.8/5', icon: Star, color: 'from-orange-500 to-red-500' }
]

export default function SupportPage() {
  const [selectedChannel, setSelectedChannel] = useState('')
  const [showNewTicketForm, setShowNewTicketForm] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'support', message: 'Halo! Selamat datang di Arofah Support. Ada yang bisa saya bantu?', time: '10:30' }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [newTicket, setNewTicket] = useState({
    subject: '',
    category: '',
    priority: '',
    description: '',
    attachments: []
  })
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats([24, 2.5, 96, 4.8])
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: newMessage,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      }
      setChatMessages([...chatMessages, userMessage])
      setNewMessage('')
      
      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: chatMessages.length + 2,
          sender: 'support',
          message: 'Terima kasih atas pesan Anda. Saya akan membantu Anda segera.',
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        }
        setChatMessages(prev => [...prev, supportResponse])
      }, 1000)
    }
  }

  const handleCreateTicket = () => {
    // Handle ticket creation logic here
    console.log('Creating ticket:', newTicket)
    setShowNewTicketForm(false)
    setNewTicket({
      subject: '',
      category: '',
      priority: '',
      description: '',
      attachments: []
    })
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-600'
      case 'in-progress': return 'bg-yellow-100 text-yellow-600'
      case 'resolved': return 'bg-green-100 text-green-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Buka'
      case 'in-progress': return 'Dalam Proses'
      case 'resolved': return 'Selesai'
      default: return status
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
              <Headphones className="w-10 h-10" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Pusat Support Arofah
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Tim support profesional siap membantu Anda 24/7. 
              Dapatkan solusi cepat untuk semua pertanyaan dan kendala Anda.
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
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4 text-white`}
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
                  {index === 1 ? `${animatedStats[index]}m` : 
                   index === 2 ? `${animatedStats[index]}%` :
                   index === 3 ? `${animatedStats[index]}/5` :
                   `${animatedStats[index]}`}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pilih Saluran Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih saluran yang paling nyaman untuk Anda. Kami siap membantu melalui berbagai cara.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {supportChannels.map((channel) => (
              <motion.div
                key={channel.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white cursor-pointer">
                  <CardHeader className="text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full mx-auto mb-4 text-white`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <channel.icon className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {channel.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          channel.status === 'online' ? 'bg-green-500' : 
                          channel.status === 'appointment' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}></div>
                        <span className="text-sm text-gray-600">
                          {channel.status === 'online' ? 'Online' : 
                           channel.status === 'appointment' ? 'Perlu Janji' : 'Offline'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {channel.waitTime}
                      </div>
                      <div className="text-sm text-gray-600">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        {channel.available}
                      </div>
                    </div>
                    <Button 
                      className={`w-full bg-gradient-to-r ${channel.color} hover:opacity-90 text-white`}
                      onClick={() => {
                        if (channel.id === 'livechat') {
                          setShowChat(true)
                        } else {
                          setSelectedChannel(channel.id)
                        }
                      }}
                    >
                      {channel.id === 'livechat' ? 'Mulai Chat' : 
                       channel.id === 'phone' ? 'Call Sekarang' :
                       channel.id === 'email' ? 'Kirim Email' :
                       'Jadwalkan Video'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ticket System */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sistem Tiket Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buat dan lacak tiket support untuk pertanyaan yang membutuhkan penanganan lebih detail.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Tiket Saya</h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => setShowNewTicketForm(true)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Tiket Baru
                </Button>
              </motion.div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {mockTickets.map((ticket) => (
                <motion.div
                  key={ticket.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{ticket.subject}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {ticket.id}
                        </Badge>
                        <Badge className={getStatusColor(ticket.status)}>
                          {getStatusText(ticket.status)}
                        </Badge>
                        <Badge className={priorityLevels.find(p => p.value === ticket.priority)?.color}>
                          {priorityLevels.find(p => p.value === ticket.priority)?.label}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {ticket.createdAt}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {ticket.assignedTo}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {ticket.messages} pesan
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Ticket Modal */}
      <AnimatePresence>
        {showNewTicketForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowNewTicketForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Buat Tiket Baru</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNewTicketForm(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <Input
                    placeholder="Jelaskan masalah Anda secara singkat"
                    value={newTicket.subject}
                    onChange={(e) => setNewTicket({...newTicket, subject: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori
                    </label>
                    <Select value={newTicket.category} onValueChange={(value) => setNewTicket({...newTicket, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {ticketCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prioritas
                    </label>
                    <Select value={newTicket.priority} onValueChange={(value) => setNewTicket({...newTicket, priority: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih prioritas" />
                      </SelectTrigger>
                      <SelectContent>
                        {priorityLevels.map((priority) => (
                          <SelectItem key={priority.value} value={priority.value}>
                            {priority.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi
                  </label>
                  <Textarea
                    placeholder="Jelaskan masalah Anda secara detail"
                    rows={6}
                    value={newTicket.description}
                    onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lampiran (opsional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Klik untuk upload atau drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, JPG, PNG (max. 10MB)
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowNewTicketForm(false)}
                  >
                    Batal
                  </Button>
                  <Button
                    onClick={handleCreateTicket}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Tiket
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Chat Widget */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-xl shadow-2xl z-50 flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-t-xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold">Live Chat Support</h4>
                  <p className="text-xs opacity-90">Tim kami siap membantu</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20">
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20" onClick={() => setShowChat(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ketik pesan Anda..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      {!showChat && (
        <motion.div
          className="fixed bottom-4 right-4 z-40"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => setShowChat(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full w-16 h-16 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}