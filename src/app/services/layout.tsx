'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, Shield } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Navigation Breadcrumb */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Beranda
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">Layanan</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>

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
                  <Link href="#" className="hover:text-white transition-colors inline-block">Panduan</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors inline-block">FAQ</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors inline-block">Support</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors inline-block">Kontak</Link>
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
                  <Link href="#" className="hover:text-white transition-colors inline-block">Kebijakan Privasi</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors inline-block">Syarat & Ketentuan</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors inline-block">Kebijakan Refund</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors inline-block">Kepatuhan</Link>
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