'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Stars, Infinity as InfinityIcon, Sparkles, Home } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Dancing_Script, Playfair_Display, Inter } from 'next/font/google'

// --- FONT ---
const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['700'] }) // Untuk tulisan tangan
const serifFont = Playfair_Display({ subsets: ['latin'], weight: ['600', '800'] }) // Untuk judul mewah
const bodyFont = Inter({ subsets: ['latin'], weight: ['300', '400'] }) // Untuk teks kecil

// --- DATA ---
const content = {
  // GANTI DENGAN FOTO COUPLE TERBAIK KALIAN (Vertical/Portrait lebih bagus)
  image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80", 
  title: "Kita, Selamanya.",
  wish: "Di sisa waktuku, aku cuma mau satu hal: Menghabiskan setiap detiknya sama kamu. Sampai rambut kita memutih, sampai tangan kita keriput, cintaku nggak akan pernah luntur.",
  footer: "Satu Foto, Seribu Cerita, Satu Tujuan."
}

// --- KOMPONEN PARTIKEL CAHAYA (GLOWING FIREFLIES) ---
const Fireflies = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-200 rounded-full blur-[1px] shadow-[0_0_10px_gold]"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default function ForeverPage() {
  return (
    <main className={`min-h-screen relative flex flex-col items-center justify-center bg-[#fff0f5] overflow-hidden px-4 ${bodyFont.className}`}>
      
      {/* --- BACKGROUND VIBES --- */}
      {/* Gradient Lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-pink-100 to-rose-200 opacity-60 z-0" />
      
      {/* Simbol Infinity Besar di Background (Samar-samar) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-10 text-rose-300 pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <InfinityIcon size={800} strokeWidth={0.5} />
      </motion.div>

      <Fireflies />

      {/* --- CONTENT UTAMA --- */}
      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
        
        {/* FOTO UTAMA (THE CENTERPIECE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative group"
        >
          {/* Efek Cahaya di belakang foto (Halo Effect) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 bg-gradient-to-r from-rose-300 via-yellow-200 to-pink-300 rounded-[50%] blur-xl opacity-60"
          />
          
          {/* Bingkai Foto Elegan */}
          <div className="relative w-64 h-80 md:w-80 md:h-[450px] p-2 bg-white/40 backdrop-blur-sm rounded-[2rem] border-2 border-white/60 shadow-2xl">
             <div className="w-full h-full relative rounded-[1.8rem] overflow-hidden border border-white/50">
                <Image 
                  src={content.image} 
                  alt="Us Forever" 
                  fill 
                  className="object-cover"
                  priority
                />
                
                {/* Overlay Kilau di atas foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent opacity-60" />
                
                {/* Ikon Hati di pojok foto */}
                <div className="absolute bottom-4 right-4 text-white drop-shadow-md">
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      <Heart fill="currentColor" size={24} />
                   </motion.div>
                </div>
             </div>
          </div>

          {/* Hiasan Bunga/Bintang Melayang di sekitar foto */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-6 -right-6 text-yellow-400 drop-shadow-lg"><Sparkles size={40}/></motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -left-6 text-rose-400 drop-shadow-lg"><Stars size={32}/></motion.div>

        </motion.div>

        {/* TEKS JANJI (THE VOW) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center mt-12 space-y-4"
        >
          <h1 className={`${serifFont.className} text-5xl md:text-7xl text-rose-900 drop-shadow-sm`}>
            {content.title}
          </h1>
          
          <div className="relative py-4">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-1 bg-rose-300 rounded-full" />
             <p className={`${scriptFont.className} text-2xl md:text-3xl text-rose-600 leading-relaxed max-w-sm mx-auto`}>
               &quot;{content.wish}&quot;
             </p>
             <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-1 bg-rose-300 rounded-full" />
          </div>

          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.3em] mt-8">
            {content.footer}
          </p>
        </motion.div>

        {/* TOMBOL HOME (KECIL & MINIMALIS) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-16"
        >
           <Link href="/">
             <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-rose-200 text-rose-400 hover:bg-white hover:shadow-md transition-all text-sm">
                <Home size={14} /> Kembali ke Awal
             </button>
           </Link>
        </motion.div>

      </div>
    </main>
  )
}