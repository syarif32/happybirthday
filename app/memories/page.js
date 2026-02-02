'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowRight, ArrowLeft, Camera, Stars } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Dancing_Script, Lora } from 'next/font/google'

// --- Konfigurasi Font ---
const handwritingFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] })
const bodyFont = Lora({ subsets: ['latin'], weight: ['400', '600'] })

// --- Data Kenangan (Placeholder) ---
// Note: rotation adalah kemiringan awal foto agar terlihat natural
const memories = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop',
    caption: 'Our first date 💕',
    rotation: -3,
    tall: true
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=600&fit=crop',
    caption: 'That perfect sunset 🌅',
    rotation: 2,
    tall: false
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=800&fit=crop',
    caption: 'Beach day with you ☀️',
    rotation: -4,
    tall: true
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1522673607668-e97136e4a053?w=600&h=600&fit=crop',
    caption: 'Coffee dates ☕',
    rotation: 3,
    tall: false
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=700&fit=crop',
    caption: 'Dancing in the rain 💃',
    rotation: -2,
    tall: true
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&h=600&fit=crop',
    caption: 'Your pretty smile ✨',
    rotation: 4,
    tall: false
  },
]

export default function MemoriesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', bounce: 0.4 }
    }
  }

  return (
    <main className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-pink-100">
      
      {/* --- Background Decorations --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-200/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-200/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-block p-3 rounded-full bg-white/50 backdrop-blur-sm mb-4 shadow-sm text-rose-500"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Camera size={32} />
          </motion.div>
          
          <h1 className={`${handwritingFont.className} text-6xl md:text-8xl font-bold text-rose-600 mb-6 drop-shadow-sm`}>
            Our Sweet Memories
          </h1>
          <p className={`${bodyFont.className} text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed`}>
            Koleksi momen kecil yang menjadi kenangan besar. Setiap foto punya cerita, dan setiap cerita adalah tentang kamu.
          </p>
        </motion.div>

        {/* --- Polaroid Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-4 md:px-0"
        >
          {memories.map((memory) => (
            <motion.div
              key={memory.id}
              variants={itemVariants}
              // Menerapkan rotasi acak dari data untuk efek natural
              style={{ rotate: memory.rotation }}
              // Saat di-hover: Luruskan foto (rotate 0), perbesar (scale), dan angkat ke atas (z-index)
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, transition: { duration: 0.3 } }}
              className="break-inside-avoid relative group"
            >
              <div className="bg-white p-4 pb-16 rounded shadow-xl transition-all duration-300 transform group-hover:shadow-2xl border border-gray-100">
                
                {/* Washi Tape Effect (Selotip di atas foto) */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-rose-100/50 backdrop-blur-sm rotate-2 shadow-sm z-10 opacity-80" />

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-sm bg-gray-100 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={memory.url}
                    alt={memory.caption}
                    width={600}
                    height={memory.tall ? 800 : 600}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Shine effect overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>

                {/* Handwritten Caption */}
                <div className="absolute bottom-0 left-0 w-full h-16 flex items-center justify-center">
                  <p className={`${handwritingFont.className} text-2xl md:text-3xl text-gray-700 -rotate-1 group-hover:text-rose-600 transition-colors`}>
                    {memory.caption}
                  </p>
                </div>

                {/* Decorative Sticker (muncul saat hover) */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Stars size={32} fill="currentColor" />
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Footer Decoration --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-32 mb-10"
        >
          <p className={`${bodyFont.className} text-gray-500 italic mb-4`}>
            ...and many more to come.
          </p>
          <div className="flex justify-center gap-2 text-rose-300">
            <Heart size={20} fill="currentColor" />
            <Heart size={20} fill="currentColor" />
            <Heart size={20} fill="currentColor" />
          </div>
        </motion.div>

        {/* --- Navigation Buttons --- */}
        <div className="flex justify-between items-center mt-12 pb-10">
          <Link href="/letter">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full text-rose-700 hover:bg-white hover:shadow-lg transition-all ${bodyFont.className} font-medium border border-rose-100`}
            >
              <ArrowLeft size={20} />
              Kembali
            </motion.button>
          </Link>

          <Link href="/timeline">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full text-white shadow-lg hover:shadow-rose-300/50 transition-all ${bodyFont.className} font-medium`}
            >
              Kisah Kita (Timeline)
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>

      </div>
    </main>
  )
}