'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, Mountain, Truck } from 'lucide-react'
import Link from 'next/link'

export default function IzinPertambanganPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-2" />
              Mining & Energy Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Perizinan Pertambangan
            </h1>
            <p className="text-xl mb-8 text-gray-50">
              Pendampingan lengkap perizinan Minerba: dari batuan skala kecil 
              hingga IUPK operasi produksi. Solusi komprehensif untuk industri pertambangan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-700 hover:bg-gray-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-700">
                <Truck className="w-5 h-5 mr-2" />
                Mulai Pengajuan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle>Kepatuhan UU Minerba</CardTitle>
                  <CardDescription>
                    Sesuai dengan UU No. 3 Tahun 2020 tentang Perubahan UU No. 4 Tahun 2009
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle>Proses Terstruktur</CardTitle>
                  <CardDescription>
                    Mengikuti alur perizinan yang sesuai dengan kewenangan pemerintah
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle>End-to-End Service</CardTitle>
                  <CardDescription>
                    Dari persiapan dokumen hingga perizinan operasional lengkap
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Mining Permit Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Jenis Izin Pertambangan</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">SIPB</CardTitle>
                    <CardDescription>
                      Surat Izin Penambangan Batuan (skala kecil)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Pasir, batu, tanah urug</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Kewenangan Bupati/Walikota</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Masa berlaku 5 tahun</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">UKL-UPL sederhana</span>
                      </li>
                    </ul>
                    <Button className="w-full">Ajukan SIPB</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">IPR</CardTitle>
                    <CardDescription>
                      Izin Pertambangan Rakyat (skala kecil tradisional)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Wilayah Pertambangan Rakyat</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Kelompok masyarakat lokal</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Teknologi sederhana</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Luas maksimal 1 hektar</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan IPR</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">IUJP</CardTitle>
                    <CardDescription>
                      Izin Usaha Jasa Pertambangan (penunjang)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Jasa pertambangan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Eksplorasi, konsultansi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Pengangkutan internal</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Klasifikasi KBLI khusus</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan IUJP</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">IPP</CardTitle>
                    <CardDescription>
                      Izin Pengangkutan & Penjualan (niaga komoditas)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Beli & jual komoditas</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Pengangkutan hasil tambang</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Bukan pemilik tambang</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Asal komoditas jelas</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan IPP</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">IUP</CardTitle>
                    <CardDescription>
                      Izin Usaha Pertambangan (tahapan inti)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Eksplorasi & Operasi Produksi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">WIUP dari pemerintah</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Wajib RKAB tahunan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Jaminan reklamasi</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan IUP</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">IUPK</CardTitle>
                    <CardDescription>
                      Izin Usaha Pertambangan Khusus (wilayah khusus)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Wilayah khusus/eks-KK</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">WIUPK penugasan/lelang</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Kewenangan Menteri ESDM</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">Divestasi wajib</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Ajukan IUPK</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Process Flow */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Alur Proses Perizinan</CardTitle>
                <CardDescription>
                  Tahapan lengkap proses perizinan pertambangan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-600 font-bold text-xl">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Studi Kelayakan</h3>
                    <p className="text-sm text-gray-600">Analisis teknis & ekonomi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-600 font-bold text-xl">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Persiapan Dokumen</h3>
                    <p className="text-sm text-gray-600">Kompilasi semua persyaratan</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-600 font-bold text-xl">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Pengajuan</h3>
                    <p className="text-sm text-gray-600">Submit ke instansi berwenang</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-600 font-bold text-xl">4</span>
                    </div>
                    <h3 className="font-semibold mb-2">Evaluasi</h3>
                    <p className="text-sm text-gray-600">Review & verifikasi dokumen</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gray-600 font-bold text-xl">5</span>
                    </div>
                    <h3 className="font-semibold mb-2">Terbit Izin</h3>
                    <p className="text-sm text-gray-600">Penerbitan izin resmi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Document Requirements */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Persyaratan Dokumen</CardTitle>
                <CardDescription>
                  Dokumen lengkap yang diperlukan untuk setiap jenis izin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Legalitas</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Akta pendirian & perubahan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>NIB & NPWP perusahaan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>SIUP & TDP</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Struktur organisasi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Domisili perusahaan</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Teknis</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Studi kelayakan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Peta wilayah & koordinat</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Rencana kerja teknis</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Metode penambangan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Perhitungan cadangan</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Lingkungan</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>AMDAL/UKL-UPL</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>RKL-RPL</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Rencana reklamasi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Jaminan reklamasi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                        <span>Analisis dampak sosial</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Services */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Layanan Khusus Pertambangan</CardTitle>
                <CardDescription>
                  Layanan pendukung untuk operasional pertambangan yang komprehensif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-semibold mb-2">RKAB & Pelaporan</h4>
                    <p className="text-sm text-gray-600">Rencana kerja tahunan & pelaporan produksi</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Lingkungan & Reklamasi</h4>
                    <p className="text-sm text-gray-600">AMDAL, UKL-UPL, dan pascatambang</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-semibold mb-2">K3L & Safety</h4>
                    <p className="text-sm text-gray-600">Keselamatan & kesehatan kerja lingkungan</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Due Diligence</h4>
                    <p className="text-sm text-gray-600">Due diligence tambang & valuasi aset</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Estimasi Biaya</CardTitle>
                <CardDescription>
                  Investasi untuk perizinan pertambangan yang komprehensif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">SIPB/IPR</h3>
                    <div className="text-3xl font-bold text-gray-600 mb-2">
                      Rp 15-30 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 2-4 bulan
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">IUJP/IPP</h3>
                    <div className="text-3xl font-bold text-gray-600 mb-2">
                      Rp 25-50 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 4-6 bulan
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">IUP/IUPK</h3>
                    <div className="text-3xl font-bold text-gray-600 mb-2">
                      Rp 100-300 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 6-12 bulan
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Pertanyaan Umum</CardTitle>
                <CardDescription>
                  Informasi penting seputar perizinan pertambangan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Apa perbedaan IUP dan IUPK?</h4>
                    <p className="text-sm text-gray-600">
                      IUP (Izin Usaha Pertambangan) untuk wilayah umum dengan kewenangan 
                      Gubernur, sedangkan IUPK (Izin Usaha Pertambangan Khusus) untuk wilayah 
                      khusus dengan kewenangan Menteri ESDM.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kapan harus menggunakan AMDAL vs UKL-UPL?</h4>
                    <p className="text-sm text-gray-600">
                      AMDAL wajib untuk kegiatan dengan dampak penting, sedangkan UKL-UPL 
                      untuk kegiatan dengan dampak tidak penting. Penentuan berdasarkan 
                      skala dan lokasi kegiatan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apa itu RKAB dan kapan harus dibuat?</h4>
                    <p className="text-sm text-gray-600">
                      RKAB (Rencana Kegiatan Anggaran Belanja) adalah rencana kerja tahunan 
                      yang wajib dibuat oleh pemegang IUP OP dan IUPK OP setiap tahun.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama proses perizinan pertambangan?</h4>
                    <p className="text-sm text-gray-600">
                      Proses bervariasi: SIPB/IPR 2-4 bulan, IUJP/IPP 4-6 bulan, 
                      IUP/IUPK 6-12 bulan tergantung kompleksitas dan kelengkapan dokumen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah izin bisa dialihkan atau dijual?</h4>
                    <p className="text-sm text-gray-600">
                      Izin pertambangan bisa dialihkan dengan persetujuan pemerintah, 
                      namun ada syarat dan prosedur khusus yang harus dipenuhi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Memulai Usaha Pertambangan Anda?
            </h2>
            <p className="text-xl text-gray-50 mb-8">
              Tim ahli pertambangan kami siap membantu proses perizinan yang kompleks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-700 hover:bg-gray-50">
                Konsultasi Eksklusif
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-700">
                <FileText className="w-5 h-5 mr-2" />
                Cek Kelayakan Proyek
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}