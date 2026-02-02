'use client'

import { motion, AnimatePresence } from 'framer-motion'
// Tambahkan import Infinity icon
import { Gift, Heart, Sparkles, Music, Home, PartyPopper, Stars, RotateCcw, Infinity as InfinityIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Dancing_Script, Poppins } from 'next/font/google'

// --- Konfigurasi Font ---
const handwritingFont = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const bodyFont = Poppins({ subsets: ['latin'], weight: ['300', '400', '600'] })

// --- Komponen Confetti (Hujan Kertas Warna-warni) ---
function Confetti() {
  const colors = ['#f472b6', '#c084fc', '#fb7185', '#fbbf24', '#60a5fa']
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(100)].map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-md"
            style={{
              backgroundColor: randomColor,
              left: `${Math.random() * 100}%`,
              top: -20,
            }}
            initial={{ y: -20, opacity: 1, rotate: 0 }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              opacity: [1, 1, 0],
              rotate: Math.random() * 720,
              x: (Math.random() - 0.5) * 300, // Gerakan menyamping acak
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 0.5,
              ease: "linear",
            }}
          />
        )
      })}
    </div>
  )
}

export default function SurprisePage() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [playMusic, setPlayMusic] = useState(false)

  const handleSurpriseClick = () => {
    setShowSurprise(true)
  }

  return (
    <main className={`min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 ${bodyFont.className}`}>
      
      {/* Confetti Animation (Muncul saat tombol diklik) */}
      <AnimatePresence>
        {showSurprise && <Confetti />}
      </AnimatePresence>

      {/* --- Background Elements (Floating Hearts) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart size={Math.random() * 50 + 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <AnimatePresence mode="wait">
          
          {!showSurprise ? (
            // --- TAHAP 1: SEBELUM DIBUKA (GIFT BOX BESAR) ---
            <motion.div
              key="before"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="relative cursor-pointer group"
                onClick={handleSurpriseClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Efek Cahaya di belakang kado */}
                <div className="absolute inset-0 bg-pink-400 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Animasi Kado Berdenyut */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative z-10 drop-shadow-2xl text-rose-500"
                >
                  <Gift size={180} strokeWidth={1} />
                </motion.div>

                {/* Teks Petunjuk */}
                <motion.div 
                   className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-1 rounded-full shadow-md text-sm font-medium text-rose-500"
                   animate={{ y: [0, 5, 0] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Klik Kadonya! 👆
                </motion.div>
              </motion.div>

              <h1 className={`${handwritingFont.className} text-5xl md:text-7xl font-bold text-gray-800 mt-12 mb-4`}>
                Ada Kejutan Untukmu...
              </h1>

              <p className="text-lg md:text-xl text-gray-500 mb-10 font-light max-w-lg">
                Aku sudah menyiapkan sesuatu yang spesial. Tarik napas, dan buka kadonya saat kamu siap ❤️
              </p>

              {/* Music Toggle */}
              <motion.button
                onClick={() => setPlayMusic(!playMusic)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md ${
                  playMusic 
                    ? 'bg-rose-100 text-rose-600 border border-rose-200' 
                    : 'bg-white text-gray-500 border border-gray-100'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <Music size={18} />
                {playMusic ? 'Musik Menyala 🎵' : 'Putar Musik? 🔇'}
              </motion.button>
            </motion.div>
          ) : (
            // --- TAHAP 2: SETELAH DIBUKA (KARTU KACA CANTIK) ---
            <motion.div
              key="after"
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15, 
                delay: 0.2 
              }}
              className="relative"
            >
              {/* Kartu Glassmorphism */}
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(244,63,94,0.15)] relative overflow-hidden">
                
                {/* Efek Kilau di ujung kartu */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="mb-6 inline-block bg-rose-100 p-4 rounded-full text-rose-500 shadow-inner"
                >
                  <PartyPopper size={48} />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className={`${handwritingFont.className} text-5xl md:text-6xl font-bold text-rose-600 mb-6`}
                >
                  Happy Birthday, Sayang! 🎉
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="space-y-4 text-gray-700 md:text-lg leading-relaxed max-w-2xl mx-auto"
                >
                  <p>
                    Semoga di usia barumu ini, kamu selalu dikelilingi kebahagiaan, kesehatan, dan rezeki yang melimpah.
                  </p>
                  <p>
                    Terima kasih telah menjadi pribadi yang jadi tulang punggung senyuman setiap orang. Semangat untuk tumbuh yaa sayanggg, mamas selalu ada disini.
                    Semoga apa yang kita impikan bareng jadi suatu hal yang akan terjadi besok.
                  </p>
                  <p className="font-semibold text-rose-500 pt-4 text-xl">
                    I Love Youu ❤️
                  </p>
                </motion.div>

                {/* --- BAGIAN TOMBOL --- */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                  {/* Tombol Ulangi (Sekunder - Putih) */}
                  <motion.button
                    onClick={() => setShowSurprise(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white border border-rose-200 text-rose-500 rounded-full font-medium shadow-sm hover:shadow-md flex items-center gap-2"
                  >
                    <RotateCcw size={18} />
                    Ulangi
                  </motion.button>

                  {/* Tombol FOREVER (Utama - Gradient) */}
                  <Link href="/forever">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-rose-300/50 flex items-center gap-2"
                    >
                      <InfinityIcon size={20} />
                      Satu Halaman Terakhir
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Hiasan Bintang Berkelap-kelip di luar kartu */}
              <div className="absolute inset-0 pointer-events-none">
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-10 -right-10 text-yellow-400"><Stars size={40}/></motion.div>
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute -bottom-5 -left-5 text-yellow-400"><Stars size={30}/></motion.div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}