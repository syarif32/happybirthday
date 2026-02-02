'use client'

import { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { 
  Heart, Sparkles, Gift, Music, Volume2, VolumeX, 
  Calculator, Code, Terminal, PieChart, ArrowRight, Stars 
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Playfair_Display, Dancing_Script, Inter, JetBrains_Mono } from 'next/font/google'

// --- SETUP FONT ---
const serifFont = Playfair_Display({ subsets: ['latin'], weight: ['600', '800'] })
const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['500', '700'] })
const bodyFont = Inter({ subsets: ['latin'], weight: ['300', '500'] })
const codeFont = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] })

// --- BACKGROUND SYMBOLS (Floating) ---
const FloatingSymbols = () => {
  const symbols = ["$", "%", "{}", "</>", "+", "♥", "01", "£", "*"]
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute font-bold select-none ${i % 2 === 0 ? 'text-rose-300/30' : 'text-purple-300/30'}`}
          style={{
            fontSize: Math.random() * 20 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
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
  
  // --- 3D TILT EFFECT LOGIC ---
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

  // --- ANIMASI HURUF ---
  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  }
  const letterItem = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <main 
      className={`min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-[#fff0f5] ${bodyFont.className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* --- BACKGROUND DECORATION --- */}
      {/* 1. Gradient Orbs Soft */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] -left-[10%] w-[60vw] h-[60vw] bg-rose-200/40 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] -right-[10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]"
        />
      </div>

      {/* 2. Noise Texture (Bikin kesan mahal/kertas) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] pointer-events-none z-0"></div>

      {/* 3. Floating Symbols */}
      <FloatingSymbols />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        
        {/* === LEFT SIDE: TEXT === */}
        <motion.div className="text-center md:text-left md:w-1/2 order-2 md:order-1 relative">
          
          {/* Badge Kecil */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full border border-rose-200 shadow-sm mb-6"
          >
            <Calculator size={14} className="text-rose-500" />
            <span className={`text-[10px] font-bold text-rose-600 tracking-widest uppercase ${codeFont.className}`}>
              CFO of My Heart
            </span>
          </motion.div>

          {/* Typography Cantik (Ukuran Diperbaiki) */}
          <div className="mb-6 relative">
            <motion.h1 
              variants={letterContainer}
              initial="hidden"
              animate="show"
              className={`${serifFont.className} text-5xl md:text-7xl lg:text-8xl font-black text-rose-950 leading-[1.1] md:leading-tight`}
            >
              <span className="block">Happy</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">
                Birthday
              </span>
            </motion.h1>
            
            {/* Script Font Overlay */}
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: "spring" }}
              className={`${scriptFont.className} text-4xl md:text-6xl text-rose-400 absolute -bottom-6 right-0 md:-right-10 rotate-[-6deg] drop-shadow-sm`}
            >
              Sayangku
            </motion.p>
          </div>
          
          {/* Description */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-gray-600 mb-8 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0 mt-8 md:mt-4"
          >
            <p className="mb-3">
              Hidupku penuh <span className={`${codeFont.className} bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-medium`}>bugs</span>, tapi sejak ada kamu, semuanya jadi <span className={`${codeFont.className} bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded text-sm font-medium`}>balance</span>.
            </p>
            <p>
              Terima kasih sudah menjadi aset paling berharga yang tak ternilai harganya.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/letter">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-rose-500/30 transition-all flex items-center justify-center gap-3 overflow-hidden w-full sm:w-auto"
              >
                <span className={`relative z-10 ${codeFont.className} font-bold text-sm md:text-base`}>Start Journey_</span>
                <Terminal size={18} className="relative z-10" />
                
                {/* Shine Effect */}
                <motion.div 
                   animate={{ x: ['-100%', '200%'] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                />
              </motion.button>
            </Link>

            <motion.button
              onClick={() => setIsMusicPlaying(!isMusicPlaying)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 bg-white/60 backdrop-blur border border-rose-200 text-rose-600 rounded-full font-medium shadow-sm hover:bg-white flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
            >
              {isMusicPlaying ? 
                <div className="flex gap-1 h-3 items-end">
                  <motion.div animate={{ height: [5, 12, 5] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-rose-500 rounded-full"/>
                  <motion.div animate={{ height: [12, 5, 12] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-rose-500 rounded-full"/>
                  <motion.div animate={{ height: [5, 12, 5] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-rose-500 rounded-full"/>
                </div> 
                : <VolumeX size={20} />
              }
              <span className="text-sm">Music</span>
            </motion.button>
          </motion.div>
        </motion.div>


        {/* === RIGHT SIDE: 3D PHOTO CARD === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative md:w-1/2 flex justify-center order-1 md:order-2 perspective-1000"
          style={{ perspective: 1000 }}
        >
          {/* Animated Circles behind card */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-dashed border-rose-300 rounded-full opacity-60"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-dotted border-purple-300 rounded-full opacity-60"
          />
          
          {/* THE CARD */}
          <motion.div
            style={{ 
              rotateX: rotateX, 
              rotateY: rotateY,
              transformStyle: "preserve-3d" 
            }}
            className="relative w-[280px] h-[380px] md:w-[340px] md:h-[460px]"
          >
            <div className="absolute inset-0 bg-white p-3 rounded-[2rem] shadow-2xl overflow-hidden transform transition-all border-4 border-white/40">
               <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-gray-100">
                 <Image 
                   // Ganti dengan foto pacar yang paling cantik!
                   src="https://drive.google.com/uc?export=view&id=1DS0OhPFubmlASLSf_5PTopr2ME3b_5-g" 
                   alt="Birthday Girl"
                   fill
                   className="object-cover"
                   priority
                 />
                 {/* Pink Gradient Overlay */}
                 
               </div>
            </div>

            {/* Floating Element 1: Code */}
            <motion.div 
               style={{ translateZ: 60 }} 
               className="absolute -top-4 -right-4 bg-white text-rose-500 p-3 rounded-2xl shadow-lg border border-rose-100"
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
               <Code size={24} />
            </motion.div>

            {/* Floating Element 2: Status */}
            <motion.div 
               style={{ translateZ: 80 }} 
               className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-rose-50 flex items-center gap-3"
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
               <div className="bg-rose-100 p-2 rounded-full text-rose-600">
                 <PieChart size={20} />
               </div>
               <div>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Status</p>
                 <p className="text-sm font-bold text-gray-800 flex items-center gap-1">
                   100% Mine <Heart size={12} className="text-rose-500 fill-rose-500"/>
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
        <p className="text-[10px] text-gray-400 tracking-widest uppercase">
          {`{ "message": "Hover to feel the love" }`}
        </p>
      </motion.div>

    </main>
  )
}