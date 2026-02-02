'use client'

import { motion } from 'framer-motion'
import { Heart, Infinity as InfinityIcon, Sparkles, Home, ArrowRight, Stars } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Dancing_Script, Playfair_Display, Inter } from 'next/font/google'

// --- FONT SETUP ---
const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const serifFont = Playfair_Display({ subsets: ['latin'], weight: ['600', '800'] })
const bodyFont = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })

// --- DATA KONTEN ---
const content = {
  // Pastikan foto ini ada. Foto akan tampil NATURAL (tanpa filter pink).
  image: "/memories/image.png", 
  title: "Barrakallah Fii Umrik",
  name: "Icha Febrianti Nur",
  wish: "Semoga di usiamu yang ke-20 ini, segala impian dan harapanmu dapat terwujud dengan indah. Teruslah menjadi pribadi yang kuat, penuh cinta, dan inspiratif. Mamas selalu berdoa agar kebahagiaan menyertai langkahmu. Semoga Allah selalu melancarkan segala urusanmu. Aamiin.",
  footer: "Forever & Always"
}

// --- PARTIKEL HALUS ---
const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-rose-300/30 rounded-full blur-sm"
        style={{
          width: Math.random() * 10 + 5,
          height: Math.random() * 10 + 5,
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
        animate={{
          y: [0, -100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
)

export default function ForeverPage() {
  return (
    <main className={`min-h-screen relative flex items-center justify-center bg-[#fff0f5] overflow-hidden px-6 md:px-12 ${bodyFont.className}`}>
      
      {/* --- BACKGROUND --- */}
      {/* Aurora Halus di pojok biar tidak kosong */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-rose-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-purple-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.02] pointer-events-none"></div>
      
      <FloatingParticles />

      {/* Simbol Infinity Raksasa (Samar di background) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
         <InfinityIcon size={1000} className="text-rose-900" />
      </div>

      {/* --- MAIN CONTENT (Layout Kiri-Kanan) --- */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* === LEFT SIDE: TEXT (TYPOGRAPHY CANTIK) === */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left relative order-2 md:order-1"
        >
           {/* Badge Kecil */}
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-rose-200 rounded-full shadow-sm mb-6">
              <Stars size={14} className="text-rose-400" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-rose-400 uppercase">The Final Chapter</span>
           </div>

           {/* Judul Besar Bertumpuk (Seperti Home) */}
           <div className="relative mb-8">
              <h1 className={`${serifFont.className} text-5xl md:text-7xl lg:text-8xl font-black text-rose-950 leading-[0.9]`}>
                <span className="block">Barrakallah Fii Umrik</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
                  Ke-20
                </span>
              </h1>
              
              {/* Nama Pacar (Script Font Overlay) */}
              <p className={`${scriptFont.className} text-4xl md:text-5xl text-rose-400 absolute -bottom-8 right-0 md:right-10 rotate-[-4deg] drop-shadow-sm bg-white/30 backdrop-blur-sm px-2 rounded-lg`}>
                {content.name}
              </p>
           </div>

           {/* Doa/Wish */}
           <div className="mt-12 mb-8 bg-white/60 backdrop-blur-sm border-l-4 border-rose-300 p-6 rounded-r-xl">
              <p className={`${bodyFont.className} text-gray-600 text-lg leading-relaxed text-justify md:text-left`}>
                "{content.wish}"
              </p>
           </div>

           {/* Footer & Button */}
           <div className="flex flex-col md:flex-row items-center gap-6">
              <p className={`${scriptFont.className} text-2xl text-gray-400`}>
                {content.footer}
              </p>
              
              <Link href="/">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold shadow-lg hover:shadow-rose-300/50 flex items-center gap-2 transition-all"
                >
                   <Home size={18} />
                   Kembali ke Awal
                   <ArrowRight size={18} className="opacity-70 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
           </div>
        </motion.div>

        {/* === RIGHT SIDE: PHOTO CARD (WARNA ASLI) === */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2 relative"
        >
           {/* Hiasan di belakang foto */}
           <div className="absolute top-10 right-10 w-full h-full border-2 border-rose-200 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
           
           <motion.div 
             whileHover={{ scale: 1.02, rotate: 1 }}
             className="relative bg-white p-3 rounded-[2rem] shadow-2xl w-[300px] md:w-[400px]"
           >
              {/* Foto Utama - TANPA OVERLAY PINK */}
              <div className="relative aspect-[3/4] w-full rounded-[1.8rem] overflow-hidden bg-gray-100">
                 <Image 
                   src={content.image} 
                   alt="Us Forever" 
                   fill 
                   className="object-cover" 
                   priority
                 />
                 {/* Hapus div overlay gradient disini agar warna kulit natural */}
              </div>

              {/* Floating Badge di Foto */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-rose-50 flex items-center gap-3 animate-bounce-slow">
                 <div className="bg-rose-100 p-2 rounded-full">
                    <Heart size={24} className="text-rose-500 fill-rose-500" />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</p>
                    <p className="text-sm font-bold text-gray-800">1000% Sayang Kamu</p>
                 </div>
              </div>

              {/* Hiasan Sudut */}
              <Sparkles className="absolute -top-6 -right-6 text-yellow-400 fill-yellow-400" size={40} />
           </motion.div>
        </motion.div>

      </div>
    </main>
  )
}