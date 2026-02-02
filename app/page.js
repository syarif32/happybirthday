'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Heart, Sparkles, Gift, Music, Volume2, VolumeX, 
  Calculator, Code, Terminal, PieChart, DollarSign, Binary, ArrowRight 
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Playfair_Display, Dancing_Script, Inter, JetBrains_Mono } from 'next/font/google'

// --- SETUP FONT ---
const serifFont = Playfair_Display({ subsets: ['latin'], weight: ['700', '900'] })
const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['600', '700'] })
const bodyFont = Inter({ subsets: ['latin'], weight: ['300', '500'] })
const codeFont = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] }) // Font Coding

// --- KOMPONEN PARTIKEL BACKGROUND (SYMBOLS - Versi Pink) ---
const FloatingSymbols = () => {
  // Simbol campuran Akuntansi & Coding
  const symbols = ["$", "%", "{}", "</>", "+", "♥", "01", "£", "*"]
  
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          // Mengubah warna simbol menjadi pink/ungu lembut
          className={`absolute font-bold select-none ${i % 2 === 0 ? 'text-rose-300/40' : 'text-purple-300/40'}`}
          style={{
            fontSize: Math.random() * 20 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </motion.div>
      ))}
    </div>
  )
}

export default function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  
  // --- LOGIKA 3D TILT EFFECT ---
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXFromCenter = e.clientX - rect.left - width / 2
    const mouseYFromCenter = e.clientY - rect.top - height / 2
    
    x.set(mouseXFromCenter / width)
    y.set(mouseYFromCenter / height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // --- VARIAN ANIMASI TEKS ---
  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 }
    }
  }

  const letterItem = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <main 
      // Mengubah background jadi pink sangat muda
      className={`min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-[#fff0f5] ${bodyFont.className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* --- BACKGROUND LAYER --- */}
      
      {/* 1. Gradient Orbs (Warna Pink & Ungu) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          // Ubah jadi Rose/Pink
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-rose-200/40 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          // Ubah jadi Purple/Fuchsia
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[100px]"
        />
      </div>

      {/* 2. Floating Tech/Finance Symbols (Versi Pink) */}
      <FloatingSymbols />


      {/* --- MAIN CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* TEXT SECTION */}
        <motion.div 
          className="text-center md:text-left md:w-1/2 order-2 md:order-1 relative"
        >
          {/* Badge: CFO of My Heart (Versi Pink) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            // Ubah warna border dan teks jadi pink tua
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-rose-200 shadow-sm mb-6"
          >
            <Calculator size={18} className="text-rose-500" />
            <span className={`text-xs font-bold text-rose-800 tracking-wider uppercase ${codeFont.className}`}>
              CFO of My Heart
            </span>
          </motion.div>

          {/* Animated Title */}
          <div className="overflow-hidden">
            <motion.h1 
              variants={letterContainer}
              initial="hidden"
              animate="show"
              className={`${serifFont.className} text-6xl md:text-8xl lg:text-9xl font-black text-gray-800 leading-[0.9] mb-4`}
            >
              {Array.from("Happy").map((char, i) => (
                <motion.span key={i} variants={letterItem} className="inline-block">{char}</motion.span>
              ))}
              <br />
              {/* Gradient teks jadi pink-ungu */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-pink-500">
                {Array.from("Birthday Sayangggg").map((char, i) => (
                   <motion.span key={i} variants={letterItem} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>
                ))}
              </span>
            </motion.h1>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className={`${scriptFont.className} text-4xl md:text-5xl text-gray-600 mb-8 mt-4`}
          >
            Untuk CFO terbaik di hidupku <Sparkles className="inline-block text-pink-400" />  
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md mx-auto md:mx-0 font-light"
          >
            {/* Mengubah highlight warna coding jadi pink/rose */}
            <p className="mb-2">
              Hidupku penuh <span className={`${codeFont.className} bg-rose-100 text-rose-700 px-1 rounded text-sm font-medium`}>bugs</span>, tapi sejak ada kamu, semuanya jadi <span className={`${codeFont.className} bg-pink-100 text-pink-700 px-1 rounded text-sm font-medium`}>balance</span>.
            </p>
            <p>Terima kasih sudah menjadi aset paling berharga yang nggak akan pernah depresiasi. ❤️</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/letter">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // Mengubah tombol jadi gradient pink
                className="group relative px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full text-lg font-medium shadow-xl hover:shadow-rose-500/40 transition-all flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className={`relative z-10 ${codeFont.className} font-bold`}>lanjut ayoo </span>
                <Terminal size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                
                {/* Shine effect putih */}
                <motion.div 
                   animate={{ x: ['-100%', '200%'] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                />
              </motion.button>
            </Link>

            {/* Music Toggle */}
            <motion.button
              onClick={() => setIsMusicPlaying(!isMusicPlaying)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 bg-white/50 backdrop-blur border border-rose-200 text-gray-700 rounded-full font-medium shadow-sm hover:bg-white flex items-center justify-center gap-2"
            >
              {isMusicPlaying ? 
                <div className="flex gap-1 h-3 items-end">
                  {/* Bar musik jadi pink */}
                  <motion.div animate={{ height: [5, 12, 5] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-rose-500 rounded-full"/>
                  <motion.div animate={{ height: [12, 5, 12] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-pink-500 rounded-full"/>
                  <motion.div animate={{ height: [5, 12, 5] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-rose-500 rounded-full"/>
                </div> 
                : <VolumeX size={20} />
              }
            </motion.button>
          </motion.div>
        </motion.div>


        {/* IMAGE SECTION (3D Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative md:w-1/2 flex justify-center order-1 md:order-2 perspective-1000"
          style={{ perspective: 1000 }}
        >
          {/* Lingkaran Dekoratif Bergerak (Jadi Pink & Ungu) */}
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[350px] h-[350px] md:w-[500px] md:h-[500px] border-[1px] border-dashed border-rose-300 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360, scale: [1, 1.05, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[320px] h-[320px] md:w-[450px] md:h-[450px] border-[1px] border-dashed border-purple-300 rounded-full opacity-50"
          />
          
          {/* KARTU FOTO 3D */}
          <motion.div
            style={{ 
              rotateX: rotateX, 
              rotateY: rotateY,
              transformStyle: "preserve-3d" 
            }}
            className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px]"
          >
            {/* Foto Utama */}
            <div className="absolute inset-0 bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all border border-white/50">
               <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                 <Image 
                   // GANTI DENGAN FOTO PACAR KAMU
                   src="https://drive.google.com/file/d/11r05tskCFdMV0mDlDlOVO_71xxkpcpYu/view?usp=sharing" 
                   alt="Birthday Girl"
                   fill
                   className="object-cover transition-transform duration-700 hover:scale-110"
                   priority
                 />
                 {/* Overlay Gradient Pink halus */}
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
               </div>
            </div>

            {/* Elemen Floating 1: Code Tag (Programmer side - Versi Pink) */}
            <motion.div 
               style={{ translateZ: 50 }} 
               // Ubah warna jadi pink tua elegan
               className="absolute -top-6 -right-6 bg-rose-800 text-pink-200 p-4 rounded-xl shadow-xl border border-rose-700"
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
               <Code size={28} />
            </motion.div>

            {/* Elemen Floating 2: Balance/Chart Badge (Accounting side - Versi Pink) */}
            <motion.div 
               style={{ translateZ: 80 }} 
               // Ubah warna jadi pink muda
               className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-rose-100 flex items-center gap-4"
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
               <div className="bg-rose-100 p-3 rounded-full text-rose-600">
                 <PieChart size={24} />
               </div>
               <div>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Relationship Status</p>
                 <p className="text-base font-bold text-gray-800 flex items-center gap-1">
                   100% Balanced <Heart size={14} className="text-rose-500 fill-rose-500"/>
                 </p>
               </div>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>
      
      {/* Footer Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className={`absolute bottom-6 w-full text-center z-10 hidden md:block ${codeFont.className}`}
      >
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          {`{ "message": "Hover to feel the love" }`}
        </p>
      </motion.div>

    </main>
  )
}