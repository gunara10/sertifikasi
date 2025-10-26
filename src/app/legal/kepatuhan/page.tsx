'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Shield, CheckCircle, AlertCircle, Award, FileText, Users, Globe, Lock, Eye, Download, ChevronRight, ChevronDown, ChevronUp, Calendar, TrendingUp, Certificate, Scale, Building } from 'lucide-react';

const KepatuhanPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['overview']);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedStats, setAnimatedStats] = useState({ certifications: 0, audits: 0, compliance: 0, standards: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ certifications: 15, audits: 48, compliance: 99.8, standards: 12 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'Semua Kategori', icon: Shield },
    { id: 'certification', name: 'Sertifikasi', icon: Certificate },
    { id: 'audit', name: 'Audit', icon: Eye },
    { id: 'policy', name: 'Kebijakan', icon: FileText },
    { id: 'standard', name: 'Standar', icon: Award },
    { id: 'report', name: 'Laporan', icon: Download }
  ];

  const complianceSections = [
    {
      id: 'overview',
      category: 'policy',
      title: 'Ringkasan Kepatuhan',
      icon: Shield,
      content: {
        description: 'Tinjauan komprehensif mengenai kepatuhan perusahaan terhadap regulasi dan standar industri.',
        metrics: [
          { label: 'Tingkat Kepatuhan Keseluruhan', value: '99.8%', status: 'excellent' },
          { label: 'Sertifikasi Aktif', value: '15', status: 'active' },
          { label: 'Audit Tahunan', value: '48', status: 'completed' },
          { label: 'Standar Diikuti', value: '12', status: 'current' }
        ],
        highlights: [
          'ISO 9001:2015 - Sistem Manajemen Mutu',
          'ISO 27001:2022 - Sistem Manajemen Keamanan Informasi',
          'ISO 22301:2019 - Sistem Manajemen Kelangsungan Bisnis',
          'Sertifikasi IATA untuk layanan penerbangan',
          'Akreditasi Kementerian Agama RI',
          'Sertifikasi Badan Nasional Sertifikasi Profesi (BNSP)'
        ]
      }
    },
    {
      id: 'certifications',
      category: 'certification',
      title: 'Sertifikasi Perusahaan',
      icon: Certificate,
      content: {
        description: 'Daftar lengkap sertifikasi yang dimiliki perusahaan untuk menjamin kualitas layanan.',
        certifications: [
          {
            name: 'ISO 9001:2015',
            issuer: 'British Standards Institution (BSI)',
            validUntil: '2025-12-31',
            scope: 'Manajemen Layanan Perjalanan Haji dan Umrah',
            status: 'active',
            certificate: 'ISO-9001-2021-ARF'
          },
          {
            name: 'ISO 27001:2022',
            issuer: 'BSI Group',
            validUntil: '2025-06-30',
            scope: 'Sistem Manajemen Keamanan Informasi',
            status: 'active',
            certificate: 'ISO-27001-2023-ARF'
          },
          {
            name: 'ISO 22301:2019',
            issuer: 'TÜV Rheinland',
            validUntil: '2024-12-31',
            scope: 'Sistem Manajemen Kelangsungan Bisnis',
            status: 'active',
            certificate: 'ISO-22301-2022-ARF'
          },
          {
            name: 'IATA Accreditation',
            issuer: 'International Air Transport Association',
            validUntil: '2025-03-31',
            scope: 'Agen Penjualan Tiket Penerbangan',
            status: 'active',
            certificate: 'IATA-ACC-2024-ARF'
          },
          {
            name: 'PIHK Certification',
            issuer: 'Kementerian Agama RI',
            validUntil: '2024-12-31',
            scope: 'Penyelenggara Ibadah Haji Khusus',
            status: 'active',
            certificate: 'PIHK-2023-ARF'
          },
          {
            name: 'PPIU Registration',
            issuer: 'Kementerian Agama RI',
            validUntil: '2025-12-31',
            scope: 'Penyelenggara Perjalanan Ibadah Umrah',
            status: 'active',
            certificate: 'PPIU-2023-ARF'
          }
        ]
      }
    },
    {
      id: 'audit',
      category: 'audit',
      title: 'Audit & Inspeksi',
      icon: Eye,
      content: {
        description: 'Hasil audit dan inspeksi rutin untuk memastikan kepatuhan berkelanjutan.',
        audits: [
          {
            type: 'Audit Internal ISO 9001',
            date: '2024-10-15',
            auditor: 'Tim Audit Internal',
            result: 'Memenuhi Syarat',
            findings: 2,
            recommendations: 3,
            status: 'completed'
          },
          {
            type: 'Audit Keamanan Informasi',
            date: '2024-09-20',
            auditor: 'External IT Auditor',
            result: 'Sangat Baik',
            findings: 1,
            recommendations: 2,
            status: 'completed'
          },
          {
            type: 'Audit Operasional Haji',
            date: '2024-08-10',
            auditor: 'Kementerian Agama RI',
            result: 'Memenuhi Syarat',
            findings: 0,
            recommendations: 4,
            status: 'completed'
          },
          {
            type: 'Audit Lingkungan',
            date: '2024-07-05',
            auditor: 'Environmental Consultant',
            result: 'Baik',
            findings: 3,
            recommendations: 5,
            status: 'completed'
          }
        ]
      }
    },
    {
      id: 'policies',
      category: 'policy',
      title: 'Kebijakan Internal',
      icon: FileText,
      content: {
        description: 'Kebijakan internal yang diterapkan untuk memastikan kepatuhan dan standar operasional.',
        policies: [
          {
            title: 'Kebijakan Anti Penyuapan',
            lastUpdated: '2024-01-15',
            version: 'v2.1',
            status: 'active',
            description: 'Kebijakan pencegahan suap dalam semua bentuk transaksi bisnis.'
          },
          {
            title: 'Kebijakan Perlindungan Data',
            lastUpdated: '2024-02-20',
            version: 'v3.0',
            status: 'active',
            description: 'Perlindungan data pribadi jamaah dan pemegang saham sesuai GDPR dan PDP Law.'
          },
          {
            title: 'Kebijakan Kesehatan & Keselamatan',
            lastUpdated: '2024-03-10',
            version: 'v1.5',
            status: 'active',
            description: 'Standar K3 untuk seluruh operasional perjalanan ibadah.'
          },
          {
            title: 'Kebijakan Anti Pencucian Uang',
            lastUpdated: '2024-01-30',
            version: 'v2.0',
            status: 'active',
            description: 'Prosedur pencegahan dan pelaporan transaksi mencurigakan.'
          }
        ]
      }
    },
    {
      id: 'standards',
      category: 'standard',
      title: 'Standar Industri',
      icon: Award,
      content: {
        description: 'Standar industri yang diikuti untuk memastikan kualitas dan kepatuhan.',
        standards: [
          {
            name: 'IATA Operational Safety Audit (IOSA)',
            category: 'Aviation',
            compliance: '100%',
            lastAssessment: '2024-03-15',
            nextAssessment: '2025-03-15'
          },
          {
            name: 'Global Sustainable Tourism Council (GSTC)',
            category: 'Tourism',
            compliance: '95%',
            lastAssessment: '2024-01-20',
            nextAssessment: '2025-01-20'
          },
          {
            name: 'AS9100 - Quality Management for Aviation',
            category: 'Aviation',
            compliance: '98%',
            lastAssessment: '2024-02-10',
            nextAssessment: '2025-02-10'
          },
          {
            name: 'OHSAS 18001 - Occupational Health & Safety',
            category: 'Safety',
            compliance: '100%',
            lastAssessment: '2024-04-05',
            nextAssessment: '2025-04-05'
          }
        ]
      }
    },
    {
      id: 'reports',
      category: 'report',
      title: 'Laporan Kepatuhan',
      icon: Download,
      content: {
        description: 'Laporan kepatuhan berkala yang tersedia untuk unduh.',
        reports: [
          {
            title: 'Laporan Kepatuhan Tahunan 2023',
            type: 'Annual Report',
            size: '2.4 MB',
            format: 'PDF',
            uploadDate: '2024-03-31',
            downloads: 1247
          },
          {
            title: 'Laporan Audit ISO 9001 Q4 2023',
            type: 'Audit Report',
            size: '1.8 MB',
            format: 'PDF',
            uploadDate: '2024-01-15',
            downloads: 892
          },
          {
            title: 'Laporan Keberlanjutan 2023',
            type: 'Sustainability Report',
            size: '3.2 MB',
            format: 'PDF',
            uploadDate: '2024-02-28',
            downloads: 756
          },
          {
            title: 'Laporan Keamanan Informasi 2023',
            type: 'Security Report',
            size: '1.5 MB',
            format: 'PDF',
            uploadDate: '2024-01-10',
            downloads: 623
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

  const filteredSections = complianceSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.content.description.toLowerCase().includes(searchTerm.toLowerCase());
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
                <Shield className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kepatuhan & Sertifikasi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Komitmen kami terhadap standar tertinggi dalam industri travel haji dan umrah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Download Certificate
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Verify Compliance
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
              { label: 'Sertifikasi Aktif', value: animatedStats.certifications, suffix: '', icon: Certificate },
              { label: 'Audit Selesai', value: animatedStats.audits, suffix: '+', icon: Eye },
              { label: 'Tingkat Kepatuhan', value: animatedStats.compliance, suffix: '%', icon: TrendingUp },
              { label: 'Standar Diikuti', value: animatedStats.standards, suffix: '', icon: Award }
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
                    placeholder="Cari dokumen kepatuhan..."
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
          <div className="max-w-5xl mx-auto">
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
                        {section.id === 'overview' ? '4 metrik' :
                         section.id === 'certifications' ? `${section.content.certifications.length} sertifikat` :
                         section.id === 'audit' ? `${section.content.audits.length} audit` :
                         section.id === 'policies' ? `${section.content.policies.length} kebijakan` :
                         section.id === 'standards' ? `${section.content.standards.length} standar` :
                         `${section.content.reports.length} laporan`}
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
                        <div className="p-6">
                          {section.id === 'overview' && (
                            <div className="space-y-6">
                              <div className="grid md:grid-cols-2 gap-4">
                                {section.content.metrics.map((metric, idx) => (
                                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                      <span className="text-gray-600">{metric.label}</span>
                                      <span className={`text-2xl font-bold ${
                                        metric.status === 'excellent' ? 'text-green-600' :
                                        metric.status === 'active' ? 'text-blue-600' :
                                        metric.status === 'completed' ? 'text-purple-600' :
                                        'text-gray-600'
                                      }`}>
                                        {metric.value}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Sertifikasi Utama:</h4>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {section.content.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                      <CheckCircle className="w-4 h-4 text-green-500" />
                                      <span className="text-sm text-gray-600">{highlight}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {section.id === 'certifications' && (
                            <div className="space-y-4">
                              {section.content.certifications.map((cert, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                                      <p className="text-sm text-gray-600 mb-2">{cert.scope}</p>
                                      <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                          <span className="text-gray-500">Penerbit:</span>
                                          <span className="ml-2 text-gray-700">{cert.issuer}</span>
                                        </div>
                                        <div>
                                          <span className="text-gray-500">Berlaku hingga:</span>
                                          <span className="ml-2 text-gray-700">{cert.validUntil}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                                        {cert.status}
                                      </span>
                                      <span className="text-xs text-gray-500">{cert.certificate}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.id === 'audit' && (
                            <div className="space-y-4">
                              {section.content.audits.map((audit, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-gray-800">{audit.type}</h4>
                                      <p className="text-sm text-gray-600 mb-2">Auditor: {audit.auditor}</p>
                                      <div className="grid grid-cols-3 gap-4 text-sm">
                                        <div>
                                          <span className="text-gray-500">Tanggal:</span>
                                          <span className="ml-2 text-gray-700">{audit.date}</span>
                                        </div>
                                        <div>
                                          <span className="text-gray-500">Temuan:</span>
                                          <span className="ml-2 text-gray-700">{audit.findings}</span>
                                        </div>
                                        <div>
                                          <span className="text-gray-500">Rekomendasi:</span>
                                          <span className="ml-2 text-gray-700">{audit.recommendations}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                        audit.result === 'Sangat Baik' ? 'bg-green-100 text-green-800' :
                                        audit.result === 'Memenuhi Syarat' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                                      }`}>
                                        {audit.result}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.id === 'policies' && (
                            <div className="space-y-4">
                              {section.content.policies.map((policy, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-gray-800">{policy.title}</h4>
                                      <p className="text-sm text-gray-600 mt-2">{policy.description}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                                        {policy.status}
                                      </span>
                                      <span className="text-xs text-gray-500">v{policy.version}</span>
                                      <span className="text-xs text-gray-500">{policy.lastUpdated}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.id === 'standards' && (
                            <div className="space-y-4">
                              {section.content.standards.map((standard, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-gray-800">{standard.name}</h4>
                                      <p className="text-sm text-gray-600">Kategori: {standard.category}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                      <div className="text-right">
                                        <span className="text-lg font-bold text-green-600">{standard.compliance}</span>
                                        <p className="text-xs text-gray-500">Kepatuhan</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <span className="text-gray-500">Assessment Terakhir:</span>
                                      <span className="ml-2 text-gray-700">{standard.lastAssessment}</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Assessment Berikutnya:</span>
                                      <span className="ml-2 text-gray-700">{standard.nextAssessment}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.id === 'reports' && (
                            <div className="space-y-4">
                              {section.content.reports.map((report, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                      <div className="bg-gray-100 rounded-lg p-3">
                                        <FileText className="w-6 h-6 text-gray-600" />
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-gray-800">{report.title}</h4>
                                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                          <span>{report.type}</span>
                                          <span>•</span>
                                          <span>{report.size}</span>
                                          <span>•</span>
                                          <span>{report.format}</span>
                                          <span>•</span>
                                          <span>{report.downloads} unduhan</span>
                                        </div>
                                      </div>
                                    </div>
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                                    >
                                      <Download className="w-4 h-4" />
                                      Download
                                    </motion.button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
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
              Butuh Verifikasi Kepatuhan?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Tim compliance kami siap membantu verifikasi dan konsultasi kepatuhan
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <Shield className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Verify Certificate</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Verifikasi keabsahan sertifikasi kami secara online
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Verify Now
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <FileText className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Request Report</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Dapatkan laporan kepatuhan terbaru dari kami
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request Report
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <Users className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Contact Compliance</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Hubungi tim compliance untuk pertanyaan teknis
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KepatuhanPage;