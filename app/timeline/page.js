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
    title: 'Anak Pertama, Beban Pertama',
    description:
      'Kamu tumbuh dengan tanggung jawab yang nggak ringan. Banyak hal kamu tanggung sendiri, banyak hal kamu pikirin sendiri. Tapi kamu tetap jalan, tetap kuat, walaupun kadang capek banget. Mas lihat itu semua.',
    icon: MessageCircle,
    date: 'Awal Perjuangan',
    color: 'bg-blue-100 text-blue-600',
    image: '/memories/hihi.jpeg',
  },
  {
    id: 2,
    title: 'Ragu, OVT, Tapi Tetap Bertahan',
    description:
      'Ada masa kamu ngerasa ragu sama diri sendiri, overthinking tiap malam, takut gagal, takut mengecewakan. Tapi kamu tetap bertahan. Kamu tetap berusaha walau hati kamu lagi berantakan. Mamas bangga kamu bisa sampai sini.',
    icon: Heart,
    date: 'Fase Terberat',
    color: 'bg-rose-100 text-rose-600',
    image: '/memories/cute.jpeg',
  },
  {
    id: 3,
    title: 'Pelan-Pelan Kamu Tumbuh',
    description:
      'Kamu mulai belajar percaya sama diri sendiri. Kamu mulai kuat bukan karena semuanya mudah, tapi karena kamu nggak menyerah. Kamu berubah, kamu berkembang, dan kamu makin hebat dari hari ke hari. Mas seneng banget lihat versi kamu yang sekarang.',
    icon: Coffee,
    date: 'Proses Bertumbuh',
    color: 'bg-amber-100 text-amber-600',
    image: '/memories/biru.jpeg',
  },
  {
    id: 4,
    title: 'Semua Pencapaian Kamu',
    description:
      'Pertukaran mahasiswa berhasil kamu lewati, IPK kamu makin tinggi, dan kamu juga berhasil dapet magang. Semua itu bukti kalau kamu hebat banget sayanggg <3. Mas bener-bener bangga sama kamu.',
    icon: Star,
    date: 'Pencapaian Besar',
    color: 'bg-emerald-100 text-emerald-600',
    image: '/memories/ub.jpeg',
  },
  {
    id: 5,
    title: 'Dan Terakhir… Kisah Kita 🤍',
    description:
      'Di antara semua perjalanan kamu yang berat, mas bersyukur bisa hadir jadi bagian kecil dari hidup kamu. Mamas cuma mau jadi tempat pulang kamu, jadi orang yang selalu dukung kamu, dan nemenin kamu sampai sejauh mungkin.',
    icon: Camera,
    date: 'Us Together',
    color: 'bg-purple-100 text-purple-600',
    image: '/memories/marina.jpg',
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
            Her Story
          </h1>
          <p className={`${bodyFont.className} text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed`}>
            A story about strength, growth, and a heart that never gave up.
            And I’m grateful I get to be part of it.
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
              This story isn’t finished yet. There are still so many beautiful pages waiting for us to write together.
            </p>

            <Link href="/surprise">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(244, 63, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg flex items-center gap-3 mx-auto transition-all"
              >
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                Open Surprise
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
