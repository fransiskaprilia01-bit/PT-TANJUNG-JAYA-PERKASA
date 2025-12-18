'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Package, Truck, Shield, Clock, ChevronRight, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    { name: 'Semen', description: 'Berbagai merek semen berkualitas' },
    { name: 'Besi Beton', description: 'Besi beton standar SNI' },
    { name: 'Bata Merah', description: 'Bata merah berkualitas tinggi' },
    { name: 'Pasir & Batu', description: 'Material bangunan alami' },
    { name: 'Cat', description: 'Berbagai jenis cat interior & eksterior' },
    { name: 'Pipa & Sanitasi', description: 'Sistem plumbing lengkap' }
  ]

  const services = [
    { icon: Truck, title: 'Pengiriman Cepat', description: 'Pengiriman material langsung ke lokasi proyek' },
    { icon: Shield, title: 'Kualitas Terjamin', description: 'Semua produk bergaransi dan standar SNI' },
    { icon: Clock, title: 'Buka Setiap Hari', description: 'Siap melayani kebutuhan material Anda' },
    { icon: Package, title: 'Produk Lengkap', description: 'Berbagai macam material bangunan tersedia' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</a>
              <a href="#produk" className="text-gray-700 hover:text-orange-600 transition-colors">Produk</a>
              <a href="#layanan" className="text-gray-700 hover:text-orange-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-orange-600 transition-colors">Kontak</a>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#beranda" className="text-lg font-medium text-gray-700 hover:text-orange-600">Beranda</a>
                  <a href="#produk" className="text-lg font-medium text-gray-700 hover:text-orange-600">Produk</a>
                  <a href="#layanan" className="text-lg font-medium text-gray-700 hover:text-orange-600">Layanan</a>
                  <a href="#kontak" className="text-lg font-medium text-gray-700 hover:text-orange-600">Kontak</a>
                  <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                    Hubungi Kami
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-orange-600">Material Bangunan</span> Terlengkap & Terpercaya
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                PT TANJUNG JAYA PRAKASA - Solusi lengkap kebutuhan material bangunan untuk proyek Anda. Kualitas terjamin, harga bersaing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Lihat Produk
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Package className="h-8 w-8 text-orange-600 mb-2" />
                    <p className="font-semibold">1000+ Produk</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Truck className="h-8 w-8 text-orange-600 mb-2" />
                    <p className="font-semibold">Pengiriman Cepat</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Shield className="h-8 w-8 text-orange-600 mb-2" />
                    <p className="font-semibold">Bergaransi</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Clock className="h-8 w-8 text-orange-600 mb-2" />
                    <p className="font-semibold">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-orange-600">PT TANJUNG JAYA PRAKASA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perusahaan perdagangan eceran berbagai macam material bangunan yang telah dipercaya oleh kontraktor dan developer di wilayah Bogor dan sekitarnya.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Produk Lengkap</h3>
                <p className="text-gray-600">Berbagai macam material bangunan dari semen, besi, hingga alat-alat konstruksi</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengiriman Tepat Waktu</h3>
                <p className="text-gray-600">Layanan pengiriman material langsung ke lokasi proyek dengan armada yang memadai</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
                <p className="text-gray-600">Semua produk yang kami jual memiliki standar kualitas SNI dan bergaransi</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-lg text-gray-600">Berbagai macam material bangunan berkualitas tinggi</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <Package className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-lg text-gray-600">Solusi lengkap untuk kebutuhan material bangunan Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hubungi Kami</h2>
              <p className="text-xl mb-8 text-orange-100">
                Siap melayani kebutuhan material bangunan untuk proyek Anda. Hubungi kami sekarang juga!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <span>0852-8570-3515</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6" />
                  <span>info@tanjungjayaprakasa.co.id</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 mt-1" />
                  <span>
                    Kp Malahpar RT002/RW 005, Desa/Kelurahan Sukamulya, Kec. Rumpin, Kab. Bogor, Provinsi Jawa Barat
                  </span>
                </div>
              </div>
            </div>
            
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pesan</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      rows={4}
                      placeholder="Jelaskan kebutuhan Anda"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TJP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">PT TANJUNG JAYA PRAKASA</h3>
                  <p className="text-sm text-gray-400">Material Bangunan Terpercaya</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan perdagangan eceran berbagai macam material bangunan yang telah dipercaya oleh kontraktor dan developer.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#beranda" className="text-gray-400 hover:text-white">Beranda</a></li>
                <li><a href="#produk" className="text-gray-400 hover:text-white">Produk</a></li>
                <li><a href="#layanan" className="text-gray-400 hover:text-white">Layanan</a></li>
                <li><a href="#kontak" className="text-gray-400 hover:text-white">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 PT TANJUNG JAYA PRAKASA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}