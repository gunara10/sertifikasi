'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Shield, Users, Globe, AlertCircle, CheckCircle, Clock, ChevronRight, ChevronDown, ChevronUp, BookOpen, Scale, Heart, Star } from 'lucide-react';

const SyaratKetentuanPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['general']);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedStats, setAnimatedStats] = useState({ clauses: 0, sections: 0, updates: 0, satisfaction: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ clauses: 150, sections: 12, updates: 24, satisfaction: 98 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'Semua Kategori', icon: BookOpen },
    { id: 'general', name: 'Umum', icon: FileText },
    { id: 'user', name: 'Pengguna', icon: Users },
    { id: 'service', name: 'Layanan', icon: Globe },
    { id: 'payment', name: 'Pembayaran', icon: Shield },
    { id: 'privacy', name: 'Privasi', icon: Heart }
  ];

  const termsSections = [
    {
      id: 'general',
      category: 'general',
      title: 'Ketentuan Umum',
      icon: FileText,
      content: {
        description: 'Ketentuan umum yang berlaku untuk semua layanan Arofah Haji & Umrah.',
        clauses: [
          {
            title: 'Penerimaan Syarat',
            content: 'Dengan mengakses dan menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang berlaku. Penggunaan layanan merupakan bentuk persetujuan Anda terhadap ketentuan ini.',
            points: [
              'Layanan hanya tersedia untuk usia 18 tahun ke atas',
              'Wajib memiliki identitas diri yang valid',
              'Bertanggung jawab atas keakuratan data yang diberikan'
            ]
          },
          {
            title: 'Definisi',
            content: 'Istilah-istilah yang digunakan dalam dokumen ini memiliki makna sebagai berikut:',
            points: [
              '"Perusahaan" merujuk pada PT Arofah Global Sistem',
              '"Pengguna" merujuk pada individu atau badan hukum yang menggunakan layanan',
              '"Layanan" merujuk pada semua produk dan jasa yang kami sediakan',
              '"Platform" merujuk pada website dan aplikasi milik Perusahaan'
            ]
          },
          {
            title: 'Perubahan Ketentuan',
            content: 'Perusahaan berhak melakukan perubahan terhadap syarat dan ketentuan sewaktu-waktu. Perubahan akan diberitahukan melalui platform atau email terdaftar.',
            points: [
              'Perubahan berlaku setelah 7 hari pemberitahuan',
              'Pengguna dapat menolak perubahan dengan menghentikan layanan',
              'Penggunaan lanjutan berarti menyetujui perubahan'
            ]
          }
        ]
      }
    },
    {
      id: 'user',
      category: 'user',
      title: 'Kewajiban Pengguna',
      icon: Users,
      content: {
        description: 'Kewajiban dan tanggung jawab yang harus dipenuhi oleh setiap pengguna.',
        clauses: [
          {
            title: 'Data Pribadi',
            content: 'Pengguna wajib memberikan data pribadi yang akurat dan terkini.',
            points: [
              'Data harus sesuai dengan identitas resmi',
              'Memperbarui data jika ada perubahan',
              'Menjaga kerahasiaan akun dan password'
            ]
          },
          {
            title: 'Perilaku Pengguna',
            content: 'Pengguna harus menjaga etika dan sopan santun dalam menggunakan layanan.',
            points: [
              'Dilarang melakukan penipuan atau pemalsuan',
              'Dilarang mengganggu kenyamanan pengguna lain',
              'Dilarang menggunakan layanan untuk kegiatan ilegal'
            ]
          },
          {
            title: 'Kepatuhan Hukum',
            content: 'Pengguna harus mematuhi semua hukum dan peraturan yang berlaku.',
            points: [
              'Mematuhi hukum Indonesia dan internasional',
              'Mengikuti aturan keimigrasian',
              'Memahami regulasi haji dan umrah'
            ]
          }
        ]
      }
    },
    {
      id: 'service',
      category: 'service',
      title: 'Ketentuan Layanan',
      icon: Globe,
      content: {
        description: 'Syarat dan ketentuan khusus untuk setiap jenis layanan yang kami sediakan.',
        clauses: [
          {
            title: 'Layanan Penerbangan',
            content: 'Ketentuan khusus untuk layanan pemesanan tiket penerbangan.',
            points: [
              'Harga tiket dapat berubah sewaktu-waktu',
              'Pembatalan mengikuti kebijakan maskapai',
              'Bagasi sesuai ketentuan maskapai'
            ]
          },
          {
            title: 'Layanan Akomodasi',
            content: 'Ketentuan untuk layanan penginapan dan transportasi.',
            points: [
              'Check-in sesuai jam operasional hotel',
              'Identitas wajib sesuai pemesanan',
              'Kerusakan fasilitas menjadi tanggung jawab pengguna'
            ]
          },
          {
            title: 'Layanan Visa & Dokumen',
            content: 'Persyaratan untuk pengurusan visa dan dokumen perjalanan.',
            points: [
              'Paspor minimal 6 bulan berlaku',
              'Dokumen pendukung harus lengkap',
              'Proses visa tergantung kedutaan'
            ]
          }
        ]
      }
    },
    {
      id: 'payment',
      category: 'payment',
      title: 'Pembayaran & Refund',
      icon: Shield,
      content: {
        description: 'Kebijakan pembayaran, refund, dan penyelesaian transaksi.',
        clauses: [
          {
            title: 'Metode Pembayaran',
            content: 'Kami menerima berbagai metode pembayaran yang aman dan terpercaya.',
            points: [
              'Transfer bank (BCA, Mandiri, BNI, BRI)',
              'Kartu kredit/debit',
              'E-wallet (GoPay, OVO, DANA)',
              'Virtual account'
            ]
          },
          {
            title: 'Jadwal Pembayaran',
            content: 'Pembayaran harus dilakukan sesuai dengan jadwal yang ditentukan.',
            points: [
              'DP minimal 30% untuk pemesanan',
              'Pelunasan H-30 sebelum keberangkatan',
              'Biaya tambahan jika terlambat'
            ]
          },
          {
            title: 'Kebijakan Refund',
            content: 'Pengembalian dana sesuai dengan kebijakan yang berlaku.',
            points: [
              'Refund 100% jika pembatalan dari pihak kami',
              'Refund 50% jika pembatalan H-60',
              'Tidak ada refund H-30 atau kurang'
            ]
          }
        ]
      }
    },
    {
      id: 'privacy',
      category: 'privacy',
      title: 'Privasi & Keamanan Data',
      icon: Heart,
      content: {
        description: 'Perlindungan data pribadi dan keamanan informasi pengguna.',
        clauses: [
          {
            title: 'Pengumpulan Data',
            content: 'Data yang kami kumpulkan hanya untuk keperluan layanan.',
            points: [
              'Data identitas diri',
              'Informasi kontak',
              'Data perjalanan',
              'Informasi pembayaran'
            ]
          },
          {
            title: 'Penggunaan Data',
            content: 'Data pengguna digunakan untuk:',
            points: [
              'Proses pemesanan layanan',
              'Komunikasi terkait layanan',
              'Penyediaan layanan yang lebih baik',
              'Kepatuhan hukum'
            ]
          },
          {
            title: 'Keamanan Data',
            content: 'Kami melindungi data pengguna dengan teknologi terkini.',
            points: [
              'Enkripsi data sensitif',
              'Akses terbatas untuk authorized personnel',
              'Backup data rutin',
              'Audit keamanan berkala'
            ]
          }
        ]
      }
    },
    {
      id: 'legal',
      category: 'general',
      title: 'Ketentuan Hukum',
      icon: Scale,
      content: {
        description: 'Aspek hukum yang mengatur hubungan antara pengguna dan perusahaan.',
        clauses: [
          {
            title: 'Yurisdiksi',
            content: 'Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia.',
            points: [
              'Sengketa diselesaikan secara musyawarah',
              'Jika tidak ada kesepakatan, diselesaikan di pengadilan Jakarta',
              'Hukum Indonesia yang berlaku'
            ]
          },
          {
            title: 'Pemisahan Klausul',
            content: 'Jika salah satu klausul tidak berlaku, klausul lain tetap berlaku.',
            points: [
              'Klausul dapat dipisahkan tanpa mengurangi keabsahan keseluruhan',
              'Perusahaan dapat mengganti klausul yang tidak berlaku',
              'Perubahan harus sejalan dengan tujuan awal'
            ]
          },
          {
            title: 'Force Majeure',
            content: 'Perusahaan tidak bertanggung jawab atas kejadian di luar kendali.',
            points: [
              'Bencana alam',
              'Perang atau konflik',
              'Kebijakan pemerintah',
              'Pandemi atau wabah'
            ]
          }
        ]
      }
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = termsSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.content.clauses.some(clause => 
                           clause.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           clause.content.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = activeCategory === 'all' || section.category === activeCategory;
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
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <FileText className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Panduan lengkap penggunaan layanan Arofah Haji & Umrah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Download PDF
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Hubungi Legal
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
              { label: 'Total Klausul', value: animatedStats.clauses, suffix: '+', icon: FileText },
              { label: 'Bagian', value: animatedStats.sections, suffix: '', icon: BookOpen },
              { label: 'Update Tahun Ini', value: animatedStats.updates, suffix: '', icon: Clock },
              { label: 'Kepuasan Pengguna', value: animatedStats.satisfaction, suffix: '%', icon: Star }
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
                    placeholder="Cari syarat dan ketentuan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category.id
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
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {section.content.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {section.content.clauses.length} klausul
                      </span>
                      {expandedSections.includes(section.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedSections.includes(section.id) && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-6 space-y-6">
                          {section.content.clauses.map((clause, clauseIndex) => (
                            <div key={clauseIndex} className="border-l-4 border-blue-500 pl-4">
                              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                {clause.title}
                              </h4>
                              <p className="text-gray-600 mb-3">
                                {clause.content}
                              </p>
                              {clause.points && clause.points.length > 0 && (
                                <ul className="space-y-2">
                                  {clause.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className="flex items-start gap-2">
                                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-600 text-sm">
                                        {point}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Butuh Bantuan Memahami Syarat & Ketentuan?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Tim legal kami siap membantu menjelaskan setiap detail yang Anda butuhkan
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <FileText className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Konsultasi Legal</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Diskusikan syarat dan ketentuan dengan tim legal kami
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Mulai Konsultasi
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <BookOpen className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">FAQ Lengkap</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Temukan jawaban untuk pertanyaan yang sering diajukan
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Lihat FAQ
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <Shield className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Perlindungan Pengguna</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Pelajari hak dan perlindungan Anda sebagai pengguna
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SyaratKetentuanPage;