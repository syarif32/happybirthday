'use client'

import { motion } from 'framer-motion'
import { Heart, Stars, Infinity as InfinityIcon, Sparkles, Home, Quote, ArrowRight, Flower2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Dancing_Script, Playfair_Display, Inter } from 'next/font/google'

// --- FONT SETUP ---
const handwritingFont = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const serifFont = Playfair_Display({ subsets: ['latin'], weight: ['500', '700', '900'] })
const bodyFont = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })

// --- DATA KONTEN ---
const content = {
  image: "/memories/image.png", 
  title: "Barrakallah Fii Umrik",
  name: "Icha Febrianti Nur",
  wish: "Semoga di usiamu yang ke-20 ini, segala impian dan harapanmu dapat terwujud dengan indah. Teruslah menjadi pribadi yang kuat, penuh cinta, dan inspiratif seperti yang selama ini aku kenal. Mamas selalu berdoa agar kebahagiaan, kesehatan, dan kesuksesan selalu menyertai setiap langkah perjalanan hidup adekk. Semoga di tahun ini adek menjadi lebih baik dari tahun-tahun sebelumnya dan Semoga Allah selalu melancarkan segala urusanmu. Aamiin ya rabbal'alamin.",
  footer: "Forever & Always"
}

// --- KOMPONEN LATAR BELAKANG AURORA ---
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-r from-rose-300 to-purple-300 rounded-full blur-[150px] mix-blend-multiply"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, -90, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
      className="absolute -bottom-[30%] -right-[10%] w-[80%] h-[80%] bg-gradient-to-l from-yellow-200 to-pink-300 rounded-full blur-[150px] mix-blend-multiply"
    />
  </div>
)

// --- KOMPONEN PARTIKEL MENGAMBANG (Floating Petals/Sparkles) ---
const FloatingParticles = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/60 drop-shadow-md"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10
          }}
        >
          {i % 2 === 0 ? <Sparkles size={20} /> : <Flower2 size={16} />}
        </motion.div>
      ))}
    </div>
  )

export default function ForeverPage() {
  return (
    <main className={`min-h-screen relative flex items-center justify-center bg-[#f8fafc] overflow-hidden px-4 ${bodyFont.className}`}>
      
      {/* --- LAPISAN BACKGROUND --- */}
      {/* 1. Warna Dasar */}
      <div className="absolute inset-0 bg-[#fff0f5]" />
      
      {/* 2. Aurora Bergerak */}
      <AuroraBackground />
      
      {/* 3. Tekstur Noise (Film Grain) untuk kesan mewah */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      {/* 4. Partikel Mengambang */}
      <FloatingParticles />

      {/* Simbol Infinity Besar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
         <motion.div 
           animate={{ rotate: 360, scale: [1, 1.05, 1] }}
           transition={{ rotate: { duration: 120, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
         >
            <InfinityIcon size={900} strokeWidth={0.1} className="text-rose-950" />
         </motion.div>
      </div>

      {/* --- KONTEN UTAMA (KARTU KACA PREMIUM) --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 w-full max-w-5xl perspective-1000"
      >
        {/* Glass Container */}
        <motion.div 
            whileHover={{ y: -10, rotateX: 2, scale: 1.01 }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_30px_80px_-20px_rgba(244,63,94,0.25)] rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 md:gap-20 relative overflow-hidden transition-all"
        >
           {/* Efek Kilauan Kaca */}
           <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20 opacity-70 pointer-events-none rounded-[3rem]"></div>

           {/* LEFT: FOTO DENGAN GLOWING AURA */}
           <div className="w-full md:w-1/2 relative group z-10">
              {/* Glowing Aura di belakang foto */}
              <motion.div 
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-tr from-rose-400 via-pink-300 to-purple-400 rounded-[2.5rem] blur-2xl opacity-60"
              />
              
              <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                 <Image 
                   src={content.image} 
                   alt="Birthday Girl" 
                   fill 
                   className="object-cover"
                   priority
                 />
                 {/* Overlay Cahaya Sinematik */}
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-950/50 via-transparent to-white/10 opacity-70 mix-blend-overlay"></div>
                 
                 {/* Ikon Hati di Pojok */}
                 <motion.div 
                   animate={{ scale: [1, 1.15, 1] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-5 right-5 text-white drop-shadow-[0_2px_10px_rgba(244,63,94,0.8)]"
                 >
                    <Heart fill="currentColor" size={32} />
                 </motion.div>
              </div>
           </div>

           {/* RIGHT: TYPOGRAPHY ELEGANT */}
           <div className="w-full md:w-1/2 text-center md:text-left space-y-8 relative z-10">
              
              <div>
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                   className="inline-flex items-center gap-2 mb-3 text-rose-500 bg-rose-50/80 px-4 py-1 rounded-full border border-rose-100 backdrop-blur-md"
                 >
                    <Sparkles size={14} />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">The One & Only</span>
                 </motion.div>
                 
                 <h1 className={`${serifFont.className} text-5xl md:text-6xl lg:text-[4rem] text-rose-950 leading-[1.1] mb-2 drop-shadow-sm font-black tracking-tight`}>
                   {content.title}
                 </h1>
                 <h2 className={`${handwritingFont.className} text-4xl md:text-5xl text-rose-600 font-bold relative`}>
                   {content.name}
                   <motion.span animate={{ width: ['0%', '100%'] }} transition={{ duration: 1.5, delay: 1 }} className="absolute bottom-0 left-0 h-1 bg-rose-300/50 rounded-full"></motion.span>
                 </h2>
              </div>

              <div className="relative py-4">
                 {/* Hiasan Kutipan Besar di Belakang Teks */}
                 <Quote className="absolute -top-6 -left-4 text-rose-200/40 transform scale-x-[-1] scale-[2.5] pointer-events-none" />
                 
                 <p className={`${bodyFont.className} text-gray-700 text-lg md:text-xl leading-relaxed relative z-10 font-medium`}>
                   {content.wish}
                 </p>
              </div>

              <div className="flex flex-col items-center md:items-start gap-6 pt-4 border-t border-rose-100/50">
                 <p className={`${handwritingFont.className} text-2xl text-gray-400 flex items-center gap-2`}>
                   <Stars size={18} className="text-rose-300"/> {content.footer}
                 </p>
                 
                 <Link href="/">
                    <motion.button 
                       whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(244, 63, 94, 0.4)" }}
                       whileTap={{ scale: 0.98 }}
                       className="group relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold shadow-md transition-all flex items-center justify-center gap-3 mx-auto md:mx-0 w-full md:w-auto"
                     >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <Home size={20} className="relative z-10"/> 
                        <span className="relative z-10">Kembali ke Awal</span>
                        <ArrowRight size={18} className="relative z-10 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                     </motion.button>
                 </Link>
              </div>

           </div>
        </motion.div>
      </motion.div>

    </main>
  )
}