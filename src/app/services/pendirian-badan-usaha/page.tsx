'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Users, FileText, Shield, Award, Building, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function PendirianBadanUsahaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Building className="w-4 h-4 mr-2" />
              Legal & Corporate Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pendirian Badan Usaha
            </h1>
            <p className="text-xl mb-8 text-orange-50">
              Solusi lengkap pendirian badan usaha untuk ekosistem travel dan pariwisata. 
              Dari PT hingga Yayasan, kami bantu dari awal hingga selesai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <CheckCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Briefcase className="w-5 h-5 mr-2" />
                Mulai Pendirian
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
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Legal Compliance</CardTitle>
                  <CardDescription>
                    Sesuai dengan hukum perusahaan yang berlaku di Indonesia
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Proses Cepat</CardTitle>
                  <CardDescription>
                    Pendirian badan usaha dalam 14-21 hari kerja
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>One-Stop Service</CardTitle>
                  <CardDescription>
                    Dari akta hingga perizinan usaha lengkap
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Business Entity Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Jenis Badan Usaha</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">PT (Perseroan Terbatas)</CardTitle>
                    <CardDescription>
                      Badan hukum yang paling umum untuk bisnis travel
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Modal minimal Rp 50 juta</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">2-3 pendiri (minimal)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Direktur & Komisaris</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Saham dapat dialihkan</span>
                      </li>
                    </ul>
                    <Button className="w-full">Pilih PT</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">PT Perorangan</CardTitle>
                    <CardDescription>
                      PT dengan satu pemegang saham (single shareholder)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Hanya 1 pendiri</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Modal minimal sama dengan PT</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Struktur sederhana</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Cocok untuk UMKM naik kelas</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Pilih PT Perorangan</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">CV (Commanditaire Vennootschap)</CardTitle>
                    <CardDescription>
                      Persekutuan komanditer untuk bisnis kecil-menengah
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Minimal 2 pendiri</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Persero aktif & pasif</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Tidak ada modal minimal</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Proses lebih sederhana</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Pilih CV</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">PMA (Penanaman Modal Asing)</CardTitle>
                    <CardDescription>
                      PT dengan kepemilikan saham asing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Modal minimal US$ 2.5 juta</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Kepemilikan asing 0-100%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Izin BKPM & investasi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">RPTKA & IMTA untuk ekspat</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Pilih PMA</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Yayasan</CardTitle>
                    <CardDescription>
                      Badan hukum untuk kegiatan sosial & pendidikan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Tujuan sosial/pendidikan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Minimal 3 pendiri</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Pengurus & Pembina</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Tidak mencari keuntungan</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Pilih Yayasan</Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Firma</CardTitle>
                    <CardDescription>
                      Persekutuan antara beberapa orang untuk praktik profesional
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Minimal 2 pendiri</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Tanggung jawab tidak terbatas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span className="text-sm">Cocok untuk kantor hukum, akuntan, konsultan</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm">Nama menggunakan nama pendiri</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">Pilih Firma</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Services */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Layanan Tambahan</CardTitle>
                <CardDescription>
                  Dokumen dan perizinan pendukung untuk operasional bisnis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Akta Perusahaan</h4>
                    <p className="text-sm text-gray-600">Pembuatan & perubahan akta notaris</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">SK Kemenkumham</h4>
                    <p className="text-sm text-gray-600">Pengesahan badan hukum</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Building className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">NPWP Perusahaan</h4>
                    <p className="text-sm text-gray-600">Pendaftaran pajak perusahaan</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Briefcase className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">NIB/OSS</h4>
                    <p className="text-sm text-gray-600">Nomor Induk Berusaha</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">SIUP/TDP</h4>
                    <p className="text-sm text-gray-600">Izin usaha & daftar perusahaan</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Virtual Office</h4>
                    <p className="text-sm text-gray-600">Alamat khusus untuk domisili</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Surat Domisili</h4>
                    <p className="text-sm text-gray-600">Keterangan domisili usaha</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Perizinan Sektor</h4>
                    <p className="text-sm text-gray-600">Izin khusus bidang usaha</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Flow */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Alur Proses Pendirian</h2>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Konsultasi</h3>
                  <p className="text-sm text-gray-600">Analisis kebutuhan & pemilihan bentuk usaha</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Persiapan Dokumen</h3>
                  <p className="text-sm text-gray-600">Kompilasi dokumen & persyaratan</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Akta Notaris</h3>
                  <p className="text-sm text-gray-600">Penandatanganan akta pendirian</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pengesahan</h3>
                  <p className="text-sm text-gray-600">Proses SK Kemenkumham</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="font-semibold mb-2">Perizinan Lengkap</h3>
                  <p className="text-sm text-gray-600">NPWP, NIB, dan izin usaha lainnya</p>
                </div>
              </div>
            </div>

            {/* Document Requirements */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Dokumen yang Diperlukan</CardTitle>
                <CardDescription>
                  Persiapkan dokumen-dokumen berikut untuk proses pendirian
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Pendiri (WNI)</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Fotokopi KTP & NPWP pendiri</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Fotokopi KK & Paspor</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Surat keterangan domisili</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Foto 3x4 (4 lembar)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Surat kuasa (jika diwakilkan)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Dokumen Perusahaan</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Nama perusahaan (3 opsi)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Struktur permodalan</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Bidang usaha (KBLI)</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Alamat kantor</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                        <span>Struktur organisasi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Estimasi Biaya</CardTitle>
                <CardDescription>
                  Biaya pendirian badan usaha (all-in)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">CV</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      Rp 5-7 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 7-10 hari kerja
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">PT</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      Rp 7-10 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 14-21 hari kerja
                    </p>
                    <Button className="w-full">Detail Biaya</Button>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">PMA</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      Rp 25-50 Juta
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Proses 30-45 hari kerja
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
                  Informasi penting seputar pendirian badan usaha
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Bentuk badan usaha mana yang paling cocok untuk travel?</h4>
                    <p className="text-sm text-gray-600">
                      PT adalah bentuk yang paling direkomendasikan untuk bisnis travel karena 
                      memberikan kepastian hukum, mudah dalam kerjasama dengan mitra, dan 
                      persyaratan untuk mendapatkan izin-izin khusus seperti PPIU/PIHK.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Berapa lama proses pendirian PT?</h4>
                    <p className="text-sm text-gray-600">
                      Proses pendirian PT normal memakan waktu 14-21 hari kerja. Namun bisa 
                      lebih cepat (7-10 hari) dengan menggunakan layanan express atau jika 
                      semua dokumen lengkap dan tidak ada kendala.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apakah harus memiliki alamat kantor fisik?</h4>
                    <p className="text-sm text-gray-600">
                      Ya, untuk pendirian PT diperlukan alamat kantor yang jelas. Jika belum 
                      memiliki kantor fisik, bisa menggunakan virtual office yang menyediakan 
                      alamat domisili legal.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apa saja yang harus disiapkan setelah pendirian?</h4>
                    <p className="text-sm text-gray-600">
                      Setelah pendirian, perlu mengurus NPWP perusahaan, NIB melalui OSS, 
                      membuka rekening bank perusahaan, dan mengurus perizinan usaha sesuai bidangnya.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bisakah pendirinya orang asing?</h4>
                    <p className="text-sm text-gray-600">
                      Bisa, dengan mendirikan PMA (Penanaman Modal Asing). Persyaratannya lebih 
                      kompleks dengan modal minimal yang lebih tinggi dan perlu izin dari BKPM.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Siap Mendirikan Badan Usaha Anda?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Tim ahli kami siap membantu proses pendirian dari awal hingga selesai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <FileText className="w-5 h-5 mr-2" />
                Cek Kelengkapan Dokumen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}