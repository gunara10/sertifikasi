'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, Globe, Star } from 'lucide-react'
import Link from 'next/link'

export default function IzinPIHKPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-2" />
              Izin Resmi Kemenag RI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Izin PIHK
            </h1>
            <p className="text-xl mb-8 text-green-50">
              Penyelenggara Ibadah Haji Khusus. Dapatkan izin resmi untuk menyelenggarakan 
              ibadah Haji Khusus dengan kuota yang terjamin dan pelayanan premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Globe className="w-5 h-5 mr-2" />
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
              <Card className="border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Kuota Haji Khusus</CardTitle>
                  <CardDescription>
                    Akses kuota Haji Khusus yang terjamin setiap tahunnya
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Layanan Premium</CardTitle>
                  <CardDescription>
                    Standar pelayanan tertinggi untuk jamaah Haji Khusus
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Pembimbing Profesional</CardTitle>
                  <CardDescription>
                    Tim pembimbing berpengalaman dan bersertifikat khusus
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Service Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Jenis Layanan PIHK</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Izin Baru PIHK</CardTitle>
                    <CardDescription>
                      Pengajuan izin pertama kali untuk penyelenggara Haji Khusus
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Verifikasi perusahaan & SDM</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Audit kelayakan operasional</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Alokasi kuota Haji Khusus</span>
                      </li>
                    </ul>
                    <Button className="w-full">Ajukan Izin Baru</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Perpanjangan PIHK</CardTitle>
                    <CardDescription>
                      Perpanjangan izin PIHK yang akan masa berlakunya berakhir
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Evaluasi kinerja 5 tahunan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Update dokumen persyaratan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Perpanjangan alokasi kuota</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Perpanjang Izin</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Audit Kepatuhan</CardTitle>
                    <CardDescription>
                      Audit rutin untuk memastikan standar layanan Haji Khusus
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Audit standar pelayanan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Verifikasi dokumentasi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Evaluasi kepuasan jamaah</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Jadwalkan Audit</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Requirements */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Persyaratan Dokumen</CardTitle>
                <CardDescription>
                  Dokumen lengkap yang diperlukan untuk pengajuan Izin PIHK
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Legalitas Perusahaan</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Akta Pendirian & Perubahan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>NIB (Nomor Induk Berusaha)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>NPWP Perusahaan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>SIUP/TDP</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Domisili Perusahaan</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Keuangan & Jaminan</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Laporan Keuangan 5 Tahun</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Rekening Koran 1 Tahun</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Modal Minimal Rp 3 Miliar</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Jaminan Bank Rp 5 Miliar</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Asuransi Penyelenggara</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Operasional & SDM</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Struktur Organisasi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Daftar SDM & Sertifikat</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>SOP Haji Khusus</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Kontrak dengan Muasassir Saudi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Sertifikat Pembimbing Haji</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Alur Proses Pengajuan</h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Konsultasi Awal</h3>
                  <p className="text-sm text-gray-600">Analisis kelayakan & persiapan dokumen</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pengajuan</h3>
                  <p className="text-sm text-gray-600">Submit aplikasi ke sistem Kemenag</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Verifikasi</h3>
                  <p className="text-sm text-gray-600">Proses verifikasi dokumen & administrasi</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Audit Komprehensif</h3>
                  <p className="text-sm text-gray-600">Audit lapangan & wawancara detail</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-semibold mb-2">Terbit Izin</h3>
                  <p className="text-sm text-gray-600">Penerbitan izin PIHK & alokasi kuota</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Keuntungan Menjadi PIHK</CardTitle>
                <CardDescription>
                  Manfaat strategis setelah mendapatkan izin PIHK resmi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Kuota Terjamin</h4>
                    <p className="text-sm text-gray-600">Akses kuota Haji Khusus yang pasti</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Premium Service</h4>
                    <p className="text-sm text-gray-600">Standar layanan tertinggi untuk jamaah</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Akses Saudi</h4>
                    <p className="text-sm text-gray-600">Kerjasama langsung dengan Muasassir</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Kepercayaan Penuh</h4>
                    <p className="text-sm text-gray-600">Kepercayaan maksimal dari jamaah</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Estimasi Biaya & Waktu</CardTitle>
                <CardDescription>
                  Informasi biaya dan estimasi waktu proses pengajuan Izin PIHK
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Izin Baru PIHK</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      Rp 150-300 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Estimasi waktu: 6-12 bulan
                    </p>
                    <ul className="text-sm text-left space-y-1 mb-4">
                      <li>• Fee pengajuan Kemenag</li>
                      <li>• Biaya audit komprehensif</li>
                      <li>• Konsultasi & pendampingan</li>
                      <li>• Jaminan bank & asuransi</li>
                      <li>• Setup operasional awal</li>
                    </ul>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Perpanjangan PIHK</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      Rp 100-200 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Estimasi waktu: 4-8 bulan
                    </p>
                    <ul className="text-sm text-left space-y-1 mb-4">
                      <li>• Fee perpanjangan Kemenag</li>
                      <li>• Biaya evaluasi kinerja</li>
                      <li>• Update dokumentasi</li>
                      <li>• Audit kepatuhan</li>
                      <li>• Negosiasi kuota baru</li>
                    </ul>
                    <Button className="w-full" variant="outline">Detail Biaya</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Pertanyaan Umum</CardTitle>
                <CardDescription>
                  Informasi penting seputar Izin PIHK yang perlu diketahui
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Apa perbedaan PIHK dengan PPIU?</h4>
                    <p className="text-sm text-gray-600">
                      PIHK (Penyelenggara Ibadah Haji Khusus) untuk ibadah Haji dengan kuota khusus, 
                      sedangkan PPIU (Penyelenggara Perjalanan Ibadah Umrah) untuk ibadah Umrah. 
                      Persyaratan PIHK lebih ketat dengan modal yang lebih besar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berapa kuota Haji Khusus untuk PIHK?</h4>
                    <p className="text-sm text-gray-600">
                      Kuota Haji Khusus ditentukan oleh Kemenag setiap tahunnya, biasanya 
                      berkisar antara 500-1000 jamaah per PIHK tergantung evaluasi kinerja.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah PIHK bisa juga menyelenggarakan Umrah?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, PIHK otomatis memiliki izin PPIU juga, sehingga bisa menyelenggarakan 
                      ibadah Umrah tanpa perlu izin tambahan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bagaimana sistem pembagian kuota?</h4>
                    <p className="text-sm text-gray-600">
                      Kuota Haji Khusus dialokasikan berdasarkan evaluasi kinerja PIHK, 
                      tingkat kepuasan jamaah, dan kepatuhan terhadap regulasi.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah ada jaminan lolos seleksi?</h4>
                    <p className="text-sm text-gray-600">
                      Tidak ada jaminan 100%, namun dengan persiapan dokumen yang lengkap 
                      dan pemenuhan semua persyaratan, peluang lolos sangat tinggi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Menjadi PIHK Resmi?
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Wujudkan impian menjadi penyelenggara Haji Khusus yang terpercaya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Konsultasi Eksklusif
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <FileText className="w-5 h-5 mr-2" />
                Cek Kelayakan Perusahaan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}