'use client'

import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TJP</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">PT TANJUNG JAYA PRAKASA</h1>
                <p className="text-xs text-gray-500">Material Bangunan Terpercaya</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Kebijakan Privasi PT TANJUNG JAYA PRAKASA
          </p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-orange-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di PT TANJUNG JAYA PRAKASA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda ketika Anda menggunakan layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan website dan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-orange-600" />
                <span>Informasi yang Kami Kumpulkan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                <p className="text-gray-700 mb-2">Kami dapat mengumpulkan informasi pribadi berikut:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Nama lengkap</li>
                  <li>Nomor telepon</li>
                  <li>Alamat email</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi perusahaan (jika berlaku)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Non-Pribadi</h3>
                <p className="text-gray-700 mb-2">Kami juga dapat mengumpulkan:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Alamat IP</li>
                  <li>Jenis browser</li>
                  <li>Informasi perangkat</li>
                  <li>Data penggunaan website</li>
                  <li>Cookies dan teknologi pelacakan lainnya</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Information Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-orange-600" />
                <span>Penggunaan Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan informasi yang kami kumpulkan untuk tujuan berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Memproses dan mengirimkan pesanan material bangunan</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Mengkomunikasikan informasi produk dan penawaran khusus</li>
                <li>Memperbaiki dan mengembangkan layanan kami</li>
                <li>Memastikan keamanan dan mencegah penipuan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-orange-600" />
                <span>Keamanan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                PT TANJUNG JAYA PRAKASA berkomitmen untuk melindungi keamanan informasi pribadi Anda. Kami menerapkan langkah-langkah keamanan yang sesuai untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Mencegah akses tidak sah ke informasi pribadi</li>
                <li>Melindungi data dari kehilangan atau penyalahgunaan</li>
                <li>Menyimpan informasi dengan aman dan terenkripsi</li>
                <li>Membatasi akses hanya kepada staf yang berwenang</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third Party Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-600" />
                <span>Pembagian Informasi dengan Pihak Ketiga</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk keperluan pemasaran. Kami hanya akan membagikan informasi Anda dalam keadaan berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Dengan persetujuan Anda yang jelas</li>
                <li>Untuk memproses transaksi dan pengiriman</li>
                <li>Jika diwajibkan oleh hukum atau peraturan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-orange-600" />
                <span>Hak Anda sebagai Pengguna</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                <li>Meminta penghapusan informasi pribadi Anda</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Menarik persetujuan Anda kapan saja</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara kami menangani informasi pribadi Anda, silakan hubungi kami:
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">PT TANJUNG JAYA PRAKASA</p>
                <p className="text-gray-700">📞 0852-8570-3515</p>
                <p className="text-gray-700">📧 info@tanjungjayaprakasa.co.id</p>
                <p className="text-gray-700">📍 Kp Malahpar RT002/RW 005, Desa/Kelurahan Sukamulya, Kec. Rumpin, Kab. Bogor, Provinsi Jawa Barat</p>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-600" />
                <span>Pembaruan Kebijakan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan hukum yang berlaku. Setiap perubahan akan diposting di halaman ini dengan tanggal revisi terbaru.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}