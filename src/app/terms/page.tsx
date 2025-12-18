'use client'

import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function TermsAndConditions() {
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
            <FileText className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">
            Syarat dan Ketentuan PT TANJUNG JAYA PRAKASA
          </p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-orange-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di PT TANJUNG JAYA PRAKASA. Syarat dan Ketentuan ini mengatur penggunaan website dan layanan yang kami sediakan. Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh menggunakan website atau layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-600" />
                <span>Informasi Perusahaan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">PT TANJUNG JAYA PRAKASA</p>
                <p className="text-gray-700">📞 0852-8570-3515</p>
                <p className="text-gray-700">📧 info@tanjungjayaprakasa.co.id</p>
                <p className="text-gray-700">📍 Kp Malahpar RT002/RW 005, Desa/Kelurahan Sukamulya, Kec. Rumpin, Kab. Bogor, Provinsi Jawa Barat</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                PT TANJUNG JAYA PRAKASA adalah perusahaan yang bergerak di bidang perdagangan eceran berbagai macam material bangunan yang telah beroperasi secara legal sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span>Produk dan Layanan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menyediakan berbagai macam material bangunan meliputi:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Semen dan bahan perekat</li>
                <li>Besi beton dan baja konstruksi</li>
                <li>Bata merah dan batako</li>
                <li>Pasir, batu, dan material agregat</li>
                <li>Cat dan bahan finishing</li>
                <li>Pipa dan sistem sanitasi</li>
                <li>Alat-alat pertukangan</li>
                <li>Material bangunan lainnya</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Semua produk yang kami jual adalah produk baru dan berkualitas sesuai standar yang berlaku (SNI).
              </p>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-orange-600" />
                <span>Pemesanan dan Pembayaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cara Pemesanan</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau datang langsung ke lokasi kami</li>
                  <li>Customer service kami akan membantu Anda dalam memilih produk yang sesuai</li>
                  <li>Konfirmasi ketersediaan stok dan harga sebelum melakukan pemesanan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Pembayaran tunai (cash)</li>
                  <li>Transfer bank ke rekening perusahaan</li>
                  <li>Pembayaran tempo (syarat dan ketentuan berlaku)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Harga</h3>
                <p className="text-gray-700">
                  Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Harga yang berlaku adalah harga pada saat transaksi.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span>Pengiriman</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Layanan Pengiriman</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Kami menyediakan layanan pengiriman untuk wilayah Bogor dan sekitarnya</li>
                  <li>Biaya pengiriman disesuaikan dengan jarak dan volume barang</li>
                  <li>Pengiriman akan dilakukan setelah pembayaran diterima secara penuh</li>
                  <li>Waktu pengiriman disesuaikan dengan ketersediaan armada dan kondisi lalu lintas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tanggung Jawab Pengiriman</h3>
                <p className="text-gray-700">
                  Kami tidak bertanggung jawab atas kerusakan yang terjadi selama proses pengiriman yang disebabkan oleh faktor eksternal di luar kendali kami. Pemeriksaan barang saat diterima sangat disarankan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Warranty */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>Pengembalian dan Garansi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Pengembalian barang hanya dapat dilakukan dalam waktu 1x24 jam setelah barang diterima</li>
                  <li>Barang yang dikembalikan harus dalam kondisi utuh dan tidak digunakan</li>
                  <li>Pengembalian hanya berlaku untuk barang yang cacat produksi atau salah kirim</li>
                  <li>Buk pembelian harus disertakan saat proses pengembalian</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Garansi Produk</h3>
                <p className="text-gray-700">
                  Garansi produk mengikuti kebijakan masing-masing produsen. Kami akan membantu proses klaim garansi sesuai dengan syarat dan ketentuan yang berlaku.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>Pembatasan Tanggung Jawab</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                PT TANJUNG JAYA PRAKASA tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan produk kami</li>
                <li>Kesalahan instalasi atau penggunaan produk yang tidak sesuai dengan petunjuk</li>
                <li>Keterlambatan pengiriman yang disebabkan oleh faktor di luar kendali kami (cuaca, lalu lintas, bencana alam, dll.)</li>
                <li>Ketersediaan stok produk yang dapat berubah sewaktu-waktu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-orange-600" />
                <span>Hak Kekayaan Intelektual</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Semua konten di website ini termasuk tetapi tidak terbatas pada teks, gambar, logo, dan desain merupakan hak milik PT TANJUNG JAYA PRAKASA dan dilindungi oleh hukum hak cipta. Tidak diperbolehkan menggunakan, menyalin, atau mendistribusikan konten tanpa izin tertulis dari kami.
              </p>
            </CardContent>
          </Card>

          {/* Force Majeure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>Force Majeure</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Kami tidak bertanggung jawab atas keterlambatan atau kegagalan dalam memenuhi kewajiban kami yang disebabkan oleh kejadian di luar kendali kami yang wajar (force majeure), termasuk tetapi tidak terbatas pada bencana alam, perang, pemogokan, atau tindakan pemerintah.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-orange-600" />
                <span>Hukum yang Berlaku</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan diselesaikan melalui musyawarah untuk mufakat.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-orange-600" />
                <span>Perubahan Syarat dan Ketentuan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku efektif segera setelah diposting di website ini. Penggunaan website yang berkelanjutan setelah perubahan merupakan penerimaan Anda terhadap syarat dan ketentuan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">PT TANJUNG JAYA PRAKASA</p>
                <p className="text-gray-700">📞 0852-8570-3515</p>
                <p className="text-gray-700">📧 info@tanjungjayaprakasa.co.id</p>
                <p className="text-gray-700">📍 Kp Malahpar RT002/RW 005, Desa/Kelurahan Sukamulya, Kec. Rumpin, Kab. Bogor, Provinsi Jawa Barat</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}