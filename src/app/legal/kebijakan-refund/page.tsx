'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, DollarSign, Calendar, CheckCircle, AlertCircle, FileText, ChevronRight, Phone, Mail, MessageCircle, Filter, X } from 'lucide-react';

const KebijakanRefundPage = () => {
  const [activeTab, setActiveTab] = useState('syarat');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ success: 0, time: 0, amount: 0, cases: 0 });

  // Animation stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ success: 98, time: 3, amount: 95, cases: 1247 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const refundCategories = [
    { id: 'all', name: 'Semua Kategori', icon: FileText },
    { id: 'penerbangan', name: 'Penerbangan', icon: FileText },
    { id: 'akomodasi', name: 'Akomodasi', icon: FileText },
    { id: 'paket', name: 'Paket Travel', icon: FileText },
    { id: 'visa', name: 'Visa & Dokumen', icon: FileText }
  ];

  const refundConditions = [
    {
      id: 1,
      category: 'penerbangan',
      title: 'Pembatalan oleh Maskapai',
      description: 'Jika penerbangan dibatalkan oleh maskapai, Anda berhak mendapatkan refund penuh.',
      conditions: ['Pembatalan resmi dari maskapai', 'Tiket masih berlaku', 'Tidak ada alternative flight'],
      refundAmount: '100%',
      processTime: '7-14 hari kerja',
      icon: AlertCircle
    },
    {
      id: 2,
      category: 'penerbangan',
      title: 'Penundaan Penerbangan > 6 Jam',
      description: 'Penundaan lebih dari 6 jam memberikan hak refund sebagian atau penuh.',
      conditions: ['Keterlambatan > 6 jam', 'Dokumentasi dari maskapai', 'Tidak menerima alternative flight'],
      refundAmount: '50-100%',
      processTime: '14-21 hari kerja',
      icon: Clock
    },
    {
      id: 3,
      category: 'akomodasi',
      title: 'Pembatalan Hotel',
      description: 'Kebijakan refund tergantung pada waktu pembatalan dan ketentuan hotel.',
      conditions: ['Pembatalan sebelum check-in', 'Sesuai kebijakan hotel', 'Dokumen pembayaran valid'],
      refundAmount: '0-100%',
      processTime: '5-10 hari kerja',
      icon: FileText
    },
    {
      id: 4,
      category: 'paket',
      title: 'Pembatalan Paket Travel',
      description: 'Refund untuk paket travel disesuaikan dengan tanggal pembatalan.',
      conditions: ['Pembatalan sebelum keberangkatan', 'Kelengkapan dokumen', 'Tidak ada penalty clause'],
      refundAmount: '30-100%',
      processTime: '14-30 hari kerja',
      icon: DollarSign
    },
    {
      id: 5,
      category: 'visa',
      title: 'Penolakan Visa',
      description: 'Jika visa ditolak, biaya pengajuan dapat direfund sebagian.',
      conditions: ['Surat penolakan dari kedutaan', 'Dokumen aplikasi lengkap', 'Tidak ada kesalahan aplikasi'],
      refundAmount: '20-80%',
      processTime: '21-30 hari kerja',
      icon: FileText
    }
  ];

  const refundProcess = [
    { step: 1, title: 'Pengajuan Refund', description: 'Submit form refund dengan dokumen lengkap', duration: '1 hari' },
    { step: 2, title: 'Verifikasi Dokumen', description: 'Tim kami memverifikasi kelengkapan dan validitas dokumen', duration: '2-3 hari' },
    { step: 3, title: 'Proses dengan Pihak Terkait', description: 'Koordinasi dengan maskapai, hotel, atau provider lain', duration: '7-14 hari' },
    { step: 4, title: 'Persetujuan Refund', description: 'Konfirmasi jumlah dan metode refund yang disetujui', duration: '1-2 hari' },
    { step: 5, title: 'Transfer Dana', description: 'Proses transfer ke rekening Anda', duration: '1-3 hari' }
  ];

  const filteredConditions = refundConditions.filter(condition => {
    const matchesSearch = condition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         condition.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || condition.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative container mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kebijakan Refund
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Jaminan pengembalian dana yang transparan dan adil untuk setiap transaksi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Ajukan Refund Sekarang
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Hubungi Konsultan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Tingkat Keberhasilan', value: animatedStats.success, suffix: '%', icon: CheckCircle },
              { label: 'Waktu Proses Rata-rata', value: animatedStats.time, suffix: ' Hari', icon: Clock },
              { label: 'Jumlah Refund Tertinggi', value: animatedStats.amount, suffix: '%', icon: DollarSign },
              { label: 'Kasus Ditangani', value: animatedStats.cases, suffix: '+', icon: FileText }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cari kebijakan refund..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {refundCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              {[
                { id: 'syarat', label: 'Syarat & Kondisi', icon: CheckCircle },
                { id: 'proses', label: 'Proses Refund', icon: Clock },
                { id: 'jumlah', label: 'Jumlah Refund', icon: DollarSign },
                { id: 'waktu', label: 'Waktu Proses', icon: Calendar }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'syarat' && (
                <motion.div
                  key="syarat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-6">
                    {filteredConditions.map((condition) => (
                      <motion.div
                        key={condition.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 rounded-lg p-3">
                            <condition.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {condition.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{condition.description}</p>
                            
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <h4 className="font-semibold text-gray-700 mb-2">Syarat:</h4>
                                <ul className="space-y-1">
                                  {condition.conditions.map((cond, index) => (
                                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                                      <CheckCircle className="w-4 h-4 text-green-500" />
                                      {cond}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-700 mb-2">Jumlah Refund:</h4>
                                <div className="text-2xl font-bold text-green-600">
                                  {condition.refundAmount}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-700 mb-2">Waktu Proses:</h4>
                                <div className="text-lg font-semibold text-blue-600">
                                  {condition.processTime}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'proses' && (
                <motion.div
                  key="proses"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                      Proses Refund Langkah demi Langkah
                    </h2>
                    <div className="space-y-6">
                      {refundProcess.map((step, index) => (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="flex-shrink-0">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                              {step.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{step.description}</p>
                            <div className="flex items-center gap-2 text-sm text-blue-600">
                              <Clock className="w-4 h-4" />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                          {index < refundProcess.length - 1 && (
                            <div className="flex-shrink-0 flex items-center">
                              <ChevronRight className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'jumlah' && (
                <motion.div
                  key="jumlah"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                      Kebijakan Jumlah Refund
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { range: '100%', title: 'Refund Penuh', description: 'Pembatalan oleh pihak penyedia layanan' },
                        { range: '75-99%', title: 'Refund Sebagian Besar', description: 'Pembatalan darurat dengan dokumen valid' },
                        { range: '50-74%', title: 'Refund Sebagian', description: 'Pembatalan dengan pemberitahuan terlambat' },
                        { range: '25-49%', title: 'Refund Minimal', description: 'Pembatalan mendadak tanpa alasan valid' },
                        { range: '10-24%', title: 'Refund Sangat Minimal', description: 'Pembatalan sangat mendadak' },
                        { range: '0%', title: 'Tidak Ada Refund', description: 'No-show atau melewati batas waktu' }
                      ].map((policy, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {policy.title}
                            </h3>
                            <span className="text-2xl font-bold text-blue-600">
                              {policy.range}
                            </span>
                          </div>
                          <p className="text-gray-600">{policy.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'waktu' && (
                <motion.div
                  key="waktu"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                      Estimasi Waktu Proses Refund
                    </h2>
                    <div className="space-y-4">
                      {[
                        { type: 'Refund Penuh', time: '7-14 hari kerja', priority: 'High' },
                        { type: 'Refund Sebagian', time: '14-21 hari kerja', priority: 'Medium' },
                        { type: 'Refund Minimal', time: '21-30 hari kerja', priority: 'Low' },
                        { type: 'Kasus Khusus', time: '30-45 hari kerja', priority: 'Special' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <h3 className="font-semibold text-gray-800">{item.type}</h3>
                            <p className="text-sm text-gray-600">Prioritas: {item.priority}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-blue-600">
                              {item.time}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Butuh Bantuan dengan Refund Anda?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Tim kami siap membantu Anda 24/7 untuk proses refund yang lancar
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <Phone className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Telepon</h3>
                <p className="text-blue-100">+62 21 1234 5678</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <Mail className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-blue-100">refund@arofahajj.com</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <MessageCircle className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-blue-100">Chat dengan tim kami</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KebijakanRefundPage;