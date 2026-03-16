import React from 'react';
// Pastikan semua icon ini ada di dalam kurung kurawal
import { 
  ShoppingBag, 
  Sparkles, 
  ChevronRight, 
  Heart, 
  Star, 
  ShoppingCart, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  Facebook, 
  ArrowUpRight,
  Menu // Tambahkan Menu jika kamu menggunakannya di mobile
} from 'lucide-react';

import AccessoryManager from './components/AccessoryManager';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      
      {/* --- MODERN FLOATING NAVBAR --- */}
      <nav className="fixed w-full z-50 top-0 md:top-4 px-0 md:px-6">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm md:rounded-2xl px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-tr from-pink-300 to-green-200 rounded-xl rotate-12 flex items-center justify-center shadow-inner">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-green-600">
              CloudyBeads
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-pink-500 transition-colors">Beranda</a>
            <a href="#daftar-aksesoris" className="hover:text-pink-500 transition-colors">Aksesoris</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Pemesanan</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-pink-50 rounded-full transition relative group">
              <ShoppingCart className="w-5 h-5 text-slate-700 group-hover:text-pink-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="hidden md:block px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-pink-500 transition-all shadow-lg shadow-slate-200">
              Mulai Belanja
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase">
              <Star className="w-3 h-3 fill-green-700" />
              Tersedia Koleksi Musim Semi
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
              Cloudy Beads<br />
              <span className="text-pink-400">— Little beads,</span>  big charm. ☁️
            </h1>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
            Selamat datang di Cloudy Beads, tempat di mana keindahan kecil dari manik-manik berubah menjadi aksesoris yang penuh pesona. Terinspirasi dari lembutnya awan di langit, setiap koleksi kami dirancang untuk menghadirkan nuansa manis, ringan, dan aesthetic yang dapat melengkapi gaya harianmu. ✨            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-pink-200 flex items-center justify-center gap-2">
                Lihat Koleksi <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-green-50 hover:border-green-200 transition-all">
                Custom Desain
              </button>
            </div>
          </div>

          {/* Hero Image / Bento Card Style */}
          <div className="flex-1 w-full max-w-md relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-pink-100 rounded-[3rem] p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Box Putih Utama */}
              <div className="w-full h-full bg-white rounded-[2rem] shadow-2xl flex flex-col p-6 space-y-4">
                <div className="w-full h-2/3 bg-slate-50 rounded-xl flex items-center justify-center relative overflow-hidden border border-slate-100">
                   <div className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full shadow-sm">
                      <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                   </div>
                   <img
                     src="/card.jpg"
                     alt=""
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-1/3 bg-green-100 rounded-full"></div>
                  <div className="h-6 w-2/3 bg-slate-900 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Dekorasi Awan (Cloudy) */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-200/50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* --- CATEGORY BENTO GRID --- */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-3">
          Jelajahi <span className="text-green-600">Aksesoris</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-64 bg-pink-100 rounded-[2.5rem] p-10 flex flex-col justify-end group hover:bg-pink-200 transition-all cursor-pointer border border-pink-200/50 overflow-hidden relative">
            <div className="absolute top-10 right-10 text-8xl opacity-20 transition-transform group-hover:scale-110 group-hover:rotate-12">📿</div>
            <h3 className="text-3xl font-black text-pink-700">Kalung Manik</h3>
            <p className="text-pink-600 font-medium">120+ Produk Baru</p>
          </div>
          <div className="h-64 bg-green-100 rounded-[2.5rem] p-10 flex flex-col justify-end group hover:bg-green-200 transition-all cursor-pointer border border-green-200/50 overflow-hidden relative">
             <div className="absolute top-10 right-10 text-7xl opacity-20">💍</div>
            <h3 className="text-3xl font-black text-green-700">Cincin</h3>
            <p className="text-green-600 font-medium">Limited Edition</p>
          </div>
          <div className="h-64 bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-end group hover:scale-[0.98] transition-all cursor-pointer overflow-hidden relative">
            <div className="absolute top-10 right-10 text-7xl opacity-20">✨</div>
            <h3 className="text-3xl font-black text-white">Gelang</h3>
            <p className="text-slate-400 font-medium">Best Seller</p>
          </div>
          <div className="md:col-span-2 h-64 bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col justify-end group hover:border-pink-300 transition-all cursor-pointer overflow-hidden relative">
            <div className="absolute top-10 right-10 text-7xl opacity-20">📱</div>
            <h3 className="text-3xl font-black text-slate-800">Phone Strap</h3>
            <p className="text-slate-500 font-medium">Kustom Nama Sendiri</p>
          </div>
        </div>
      </section>

      {/* --- LIST AKSESORIS (Fitur Tambah Produk) --- */}
      <AccessoryManager />

      {/* --- FOOTER CTA --- */}
      <footer className="pb-20 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-pink-400 to-pink-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-pink-200">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Mulai Buat Gaya Unikmu Sekarang.</h2>
              <button className="px-10 py-4 bg-white text-pink-500 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                Hubungi Kami Melalui WhatsApp
              </button>
           </div>
           {/* Abstract Circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>
        <div className="mt-12 text-center text-slate-400 text-sm font-medium">
        </div>
      </footer>
      {/* --- LOCATION SECTION (Google Maps) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-bold">
                <MapPin className="w-3 h-3" />
                Lokasi Studio
              </div>
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Mampir ke <span className="text-green-500">Cloudy Beads</span> & Lihat Koleksi Langsung
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Jl. Andalas No.110, Andalas, Kec. Padang Tim., Kota Padang, Sumatera Barat 25126 <br />
                Kami buka setiap hari 09:00 - 20:00 WIB.
              </p>
              <div className="flex gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Telepon</p>
                    <p className="text-sm font-bold text-slate-700">+62 895 - 6034 - 06606</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                    <p className="text-sm font-bold text-slate-700">cloudybeads@gmail.com</p>
                  </div>
                </div>
              </div>
              <button className="mt-4 flex items-center gap-2 text-pink-500 font-bold hover:gap-3 transition-all">
                Buka di Google Maps <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-100 border-8 border-white relative group">
              <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.2848606063644!2d100.38835906982422!3d-0.93695068359375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b90f602bde19%3A0x5cbfe9e19915f028!2sJl.%20Andalas%20No.110%2C%20Andalas%2C%20Kec.%20Padang%20Tim.%2C%20Kota%20Padang%2C%20Sumatera%20Barat%2025126!5e0!3m2!1sen!2sid!4v1773665078213!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} // Perbaikan: Gunakan double curly braces
                allowFullScreen={true} // Perbaikan: Gunakan huruf S besar (camelCase)
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" // Perbaikan: Gunakan huruf P besar
                className="grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- REAL FOOTER --- */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Col 1: Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-pink-400 to-green-300 rounded-lg flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-green-600">
                  CloudyBeads
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                  Kami menciptakan aksesoris handmade dengan material premium untuk melengkapi gaya estetikmu setiap hari.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-200 transition-all shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-200 transition-all shadow-sm">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Col 2: Shop */}
            <div>
              <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Belanja</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-pink-500 transition-colors text-sm">Semua Produk</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors text-sm">Kalung Manik</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors text-sm">Gelang Custom</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors text-sm">Cincin Estetik</a></li>
              </ul>
            </div>

            {/* Col 3: Support */}
            <div>
              <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Bantuan</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-pink-500 transition-colors text-sm">Lacak Pesanan</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors text-sm">Cara Pemesanan</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors text-sm">Kebijakan Retur</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors text-sm">FAQ</a></li>
              </ul>
            </div>

            {/* Col 4: Newsletter */}
            <div>
              <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Update Terbaru</h4>
              <p className="text-sm text-slate-500 mb-4">Dapatkan info promo dan koleksi terbatas kami.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email kamu" 
                  className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-pink-300 transition-all"
                />
                <button className="bg-slate-900 text-white p-2 rounded-xl hover:bg-pink-500 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs font-medium">
              © 2026 Cloudy Beads. dibuat oleh Cowo Azell dengan Cinta❤️.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-slate-600 text-xs font-medium">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-slate-600 text-xs font-medium">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}