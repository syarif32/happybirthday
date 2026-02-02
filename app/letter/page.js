'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Hapus PieChart dan Paperclip jika tidak dipakai untuk menghindari error
import { Heart, ArrowRight, ArrowLeft, Sparkles, Flower2, Music } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Dancing_Script, Lora, Playfair_Display } from 'next/font/google'

const handwritingFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] })
const bodyFont = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const titleFont = Playfair_Display({ subsets: ['latin'], weight: ['600', '800'] })

const letterContent = {
  recipient: "To Sayanggku Icha Febrianti Nur",
  // https://drive.google.com/file/d/11r05tskCFdMV0mDlDlOVO_71xxkpcpYu/view?usp=drive_link
  photoUrl: "https://drive.google.com/uc?export=view&id=11r05tskCFdMV0mDlDlOVO_71xxkpcpYu", 
  paragraphs: [
    "Selamat ulang tahun yang ke-20, cantikku! Rasanya baru kemarin kita ngobrol hal-hal kecil, dan sekarang mas melihatmu tumbuh menjadi wanita yang begitu hebat, kuat, dan luar biasa.",
    "Mungkin angka 20 terdengar sedikit menakutkan dengan segala tanggung jawab barunya. Tapi percayalah, kamu nggak sendirian. Ada mamas di sini, siap jadi pendukung nomor satumu.",
    "Mamas kagum sama caramu melihat dunia, sama gigihnya kamu mengejar mimpi, dan sama tulusnya hati dan pikiran kamu. Mamas tahu, perjalanan ini nggak selalu mudah. Ada saat-saat kamu merasa ragu, lelah, atau bahkan pengen nyerah. Tapi lihatlah kamu sekarang, kamu udah melewati semuanya dengan kepala tegak dan senyum di wajahmu.",
    "Terima kasih sudah bertahan sejauh ini. Terima kasih sudah mengizinkan mas jadi bagian dari ceritamu.",
    "Happy Level 20! Mari kita tua bersama, menertawakan hal bodoh, dan menaklukkan dunia berdua. I love you, more than words could ever say."
  ],
  closing: "Peluk hangat,",
  sender: "Pacarmu Tersayang"
}

const FallingPetals = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-300/50"
          initial={{ y: -50, x: Math.random() * 100 + "%", rotate: 0, opacity: 0 }}
          animate={{ 
            y: "120vh", 
            x: `calc(${Math.random() * 100}% + ${Math.random() * 300 - 150}px)`, 
            rotate: 720, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{ 
            duration: Math.random() * 15 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          <Flower2 size={Math.random() * 25 + 15} />
        </motion.div>
      ))}
    </div>
  )
}

export default function LetterPage() {
  const [isOpen, setIsOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.3, delayChildren: 0.5 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#fdf2f8]">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 z-0" />
      <motion.div 
        className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-rose-300/30 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] bg-purple-300/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <FallingPetals />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.5, rotate: -5, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              className="cursor-pointer group perspective-1000"
              onClick={() => setIsOpen(true)}
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-[320px] h-[220px] md:w-[500px] md:h-[350px] bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl shadow-2xl flex items-center justify-center border-b-4 border-rose-300/50"
              >
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl border border-white/40">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-rose-50/50 origin-top transform skew-y-6 opacity-30"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1/2 bg-white/20 origin-bottom transform -skew-y-6 opacity-30"></div>
                </div>
                <div className="relative z-20 flex flex-col items-center">
                   <motion.div
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 1.5, repeat: Infinity }}
                     className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-600 to-rose-700 rounded-full flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(225,29,72,0.5)] border-4 border-red-700/30 relative"
                   >
                     <Heart className="text-rose-50 drop-shadow-md" size={40} fill="currentColor" />
                   </motion.div>
                   <p className={`${titleFont.className} mt-6 text-rose-700 text-xl font-bold bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-sm`}>
                     Buka Suratnya 💌
                   </p>
                </div>
                <motion.div animate={{ opacity: [0,1,0], scale: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-8 -right-8 text-yellow-400"><Sparkles size={32}/></motion.div>
                <motion.div animate={{ opacity: [0,1,0], scale: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute -bottom-5 -left-8 text-rose-400"><Heart size={24}/></motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="w-full max-w-3xl relative"
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_30px_80px_-20px_rgba(244,63,94,0.3)] overflow-hidden border border-white/50">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-rose-500 pointer-events-none"><Flower2 size={80} /></div>
                <div className="absolute bottom-0 left-0 p-6 opacity-10 text-rose-500 pointer-events-none rotate-180"><Flower2 size={80} /></div>

                <div className="p-8 md:p-16 relative">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
                    <div className="flex-1">
                       <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6 bg-rose-50/80 px-4 py-2 rounded-full border border-rose-100">
                         <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white animate-spin-slow"><Music size={14} /></div>
                         <div>
                           <p className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">Now Playing</p>
                           <p className="text-sm text-rose-700 font-medium truncate max-w-[120px]">Lagu Favorit Kita 🎵</p>
                         </div>
                       </motion.div>
                       <motion.h1 variants={itemVariants} className={`${handwritingFont.className} text-5xl md:text-6xl text-rose-600 font-bold drop-shadow-sm leading-tight`}>
                         {letterContent.recipient}
                       </motion.h1>
                    </div>
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }} className="relative shrink-0 bg-white p-3 pt-8 pb-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] rotate-3 border border-gray-100 rounded-sm">
                       <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-rose-200/50 backdrop-blur-md rotate-[-4deg] opacity-90 shadow-sm z-10"></div>
                       <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-50 overflow-hidden transition-all duration-500 rounded-sm relative z-0">
                          <Image src={letterContent.photoUrl} alt="Us" width={200} height={200} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
                       </div>
                       <p className={`${handwritingFont.className} text-center mt-3 text-gray-500 text-xl`}>Our Story ❤️</p>
                    </motion.div>
                  </div>

                  <div className={`space-y-6 ${bodyFont.className} text-gray-700 leading-relaxed text-lg md:text-[1.15rem] tracking-wide`}>
                    {letterContent.paragraphs.map((p, i) => (
                      <motion.p key={i} variants={itemVariants}>{p}</motion.p>
                    ))}
                  </div>

                  <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-rose-50 flex flex-col items-end">
                    <p className={`${handwritingFont.className} text-3xl text-rose-400 mb-2`}>{letterContent.closing}</p>
                    <div className="relative">
                       <p className={`${titleFont.className} text-2xl font-bold text-rose-700 tracking-wider`}>{letterContent.sender}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* NAVIGASI BERURUTAN (HANYA KE MEMORIES) */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 pb-10"
              >
                 <Link href="/">
                    <button className="group w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm text-rose-600 rounded-full hover:bg-white hover:shadow-md transition-all font-medium border border-rose-100">
                       <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"/> Beranda
                    </button>
                 </Link>
                 
                 <Link href="/memories">
                    <button className="group w-full md:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(244,63,94,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(244,63,94,0.6)] hover:scale-105 transition-all font-semibold tracking-wide">
                       Lanjut ke Kenangan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </Link>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}