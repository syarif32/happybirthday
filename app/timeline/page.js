'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { MessageCircle, Heart, Calendar, Cake, Coffee, Camera, Star, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { Dancing_Script, Lora } from 'next/font/google'

// --- Konfigurasi Font ---
const handwritingFont = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const bodyFont = Lora({ subsets: ['latin'], weight: ['400', '500', '600'] })

const timelineEvents = [
  {
    id: 1,
    title: 'Awal Cerita',
    description: 'Satu pesan sederhana yang mengubah segalanya. "save cogan dari grub belajar daring" Siapa sangka balasan iseng itu membawa kita sejauh ini?',
    icon: MessageCircle,
    date: 'The Beginning',
    color: 'bg-blue-100 text-blue-600',
    // Ganti src ini dengan foto chat pertama kalian
    image: 'https://images.unsplash.com/photo-1611605698389-ecd39e2e7352?w=500&q=80'
  },
  {
    id: 2,
    title: 'Pertemuan Pertama 💑',
    description: 'Deg-degan parah! Tapi begitu melihat senyummu secara langsung, rasanya dunia berhenti berputar sejenak.',
    icon: Heart,
    date: 'Magic Moment 31 Juli 2023',
    color: 'bg-rose-100 text-rose-600',
    // Ganti src ini dengan foto pertemuan pertama
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&q=80'
  },
  {
    id: 3,
    title: 'Kencan Pertama',
    description: 'Kopi, obrolan deep talk, dan tawa yang nggak habis-habis. Malam itu aku sadar, aku ingin bersamamu lebih lama.',
    icon: Coffee,
    date: 'Unforgettable Night',
    color: 'bg-amber-100 text-amber-600',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80'
  },
  {
    id: 4,
    title: 'Petualangan Kita 🌟',
    description: 'Jalan-jalan bareng, nyasar bareng, bahagia bareng. Setiap tempat jadi indah karena ada kamu.',
    icon: Camera,
    date: 'Our Adventure',
    color: 'bg-emerald-100 text-emerald-600',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80'
  },
  {
    id: 5,
    title: 'Hari Ini - Ultahmu! 🎂',
    description: 'Merayakan bertambahnya usiamu, dan bersyukur karena kamu telah lahir ke dunia ini untuk melengkapi hidupku.',
    icon: Cake,
    date: 'Happy Birthday',
    color: 'bg-purple-100 text-purple-600',
    image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af38?w=500&q=80'
  },
]

function TimelineItem({ event, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0])

  const Icon = event.icon
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className={`relative mb-16 md:mb-32 flex w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center justify-between group`}
    >
      {/* --- KONTEN (Card) --- */}
      <div className={`w-full md:w-[45%] ${isLeft ? 'md:text-right' : 'md:text-left'} text-center mb-8 md:mb-0 relative z-10`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/60 backdrop-blur-md border border-white/80 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-rose-200/50 transition-all duration-300"
        >
          {/* Label Tanggal Cantik */}
          <span className={`${handwritingFont.className} inline-block px-4 py-1 rounded-full text-xl md:text-2xl text-rose-500 bg-rose-50 mb-4 transform -rotate-2`}>
            {event.date}
          </span>
          
          <h3 className={`${bodyFont.className} text-2xl font-bold text-gray-800 mb-3`}>
            {event.title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-light">
            {event.description}
          </p>

          {/* FOTO (Polaroid Style) - Muncul di mobile dan desktop */}
          <div className="mt-6 relative inline-block transform group-hover:rotate-1 transition-transform duration-300">
             <div className="p-2 bg-white rounded shadow-sm border border-gray-100">
                <div className="relative h-48 w-full md:w-64 overflow-hidden rounded-sm">
                   <Image 
                      src={event.image} 
                      alt={event.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transform hover:scale-110 transition-duration-700"
                   />
                </div>
             </div>
             {/* Selotip Hiasan */}
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-rose-200/50 rotate-3 backdrop-blur-sm opacity-80" />
          </div>
        </motion.div>
      </div>

      {/* --- TITIK TENGAH (Icon) --- */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${event.color} flex items-center justify-center shadow-lg border-4 border-white relative`}
        >
          <Icon size={24} className="md:w-8 md:h-8" />
          {/* Pulse Effect */}
          <div className={`absolute inset-0 rounded-full ${event.color} opacity-20 animate-ping`} />
        </motion.div>
      </div>

      {/* Spacer untuk sisi kosong di desktop */}
      <div className="w-full md:w-[45%] hidden md:block" />
    </motion.div>
  )
}

export default function TimelinePage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animasi garis yang memanjang ke bawah
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main ref={containerRef} className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-50">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-100/30 to-rose-100/30 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24 md:mb-32"
        >
          <h1 className={`${handwritingFont.className} text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 mb-6 py-2`}>
            Jejak Cinta Kita
          </h1>
          <p className={`${bodyFont.className} text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed`}>
            Setiap detik bersamamu adalah halaman baru dalam buku cerita favoritku.
            Mari kita lihat kembali bagaimana semua ini bermula...
          </p>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 text-rose-300 flex justify-center"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>

        {/* --- GARIS TENGAH (Timeline Line) --- */}
        {/* Garis Abu-abu (Track) */}
        <div className="absolute left-4 md:left-1/2 top-48 bottom-48 w-1 bg-gray-200 md:-translate-x-1/2" />
        
        {/* Garis Berwarna (Progress Bar) */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-4 md:left-1/2 top-48 bottom-48 w-1 bg-gradient-to-b from-rose-400 via-purple-400 to-rose-400 md:-translate-x-1/2 shadow-[0_0_15px_rgba(244,63,94,0.6)] z-0" 
        />

        {/* --- EVENT LOOP --- */}
        <div className="relative pt-10">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20 md:mt-32 pb-20"
        >
          <div className="inline-block bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-xl border border-rose-100 max-w-2xl mx-auto">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart size={64} className="text-rose-500 mx-auto mb-6 fill-rose-500/20" />
            </motion.div>
            
            <p className={`${handwritingFont.className} text-4xl md:text-5xl text-gray-800 mb-6`}>
              "To be continued..."
            </p>
            <p className="text-gray-600 text-lg mb-10">
              Kisah ini baru permulaan. Masih banyak halaman kosong yang menunggu untuk kita tulis bersama.
            </p>

            <Link href="/surprise">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(244, 63, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg flex items-center gap-3 mx-auto transition-all"
              >
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                Buka Kejutan Terakhir
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  )
}