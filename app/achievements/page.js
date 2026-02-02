'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy, CloudRain, Sun, ArrowRight, Home, 
  Star, Heart, MapPin, Quote, Sparkles, Plane, 
  Utensils, Briefcase, Dumbbell, Feather, Smile, Crown
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Dancing_Script, Inter, JetBrains_Mono, Playfair_Display, Caveat } from 'next/font/google'

// --- SETUP FONT ---
const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const handFont = Caveat({ subsets: ['latin'], weight: ['400', '700'] })
const serifFont = Playfair_Display({ subsets: ['latin'], weight: ['700', '900'] })
const bodyFont = Inter({ subsets: ['latin'], weight: ['400', '600'] })
const codeFont = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] })

// --- ANIMASI VARIANTS (GEMOY STYLE) ---
const bounceVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", stiffness: 260, damping: 20 } 
  }
}

const floatVariant = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
}

// --- DATA ---
const mainAchievement = {
  title: "EXCHANGE STUDENT",
  desc: "Bukti nyata dari doa dan kerja kerasmu. You conquered your fears!",
  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
}

const otherAchievements = [
  { id: 1, title: "Chef of The Year", desc: "Masakanmu makin enak!", icon: <Utensils size={18} />, image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=500&q=80" },
  { id: 2, title: "Career Woman", desc: "Dapat tempat magang keren.", icon: <Briefcase size={18} />, image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80" },
  { id: 3, title: "Healthy Lifestyle", desc: "Rajin olahraga tahun ini.", icon: <Dumbbell size={18} />, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80" },
  { id: 4, title: "Best Partner", desc: "Makin sabar hadapi aku.", icon: <Heart size={18} />, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80" },
]

const struggles = [
  { id: 1, title: "Air Mata & Revisi", date: "Awal Tahun", desc: "Ingat nggak waktu kamu nangis karena ngerasa buntu? Itu bukan kelemahan, itu bukti kamu peduli.", mood: "rain" },
  { id: 2, title: "Ragu sama Diri Sendiri", date: "Pertengahan Tahun", desc: "Kamu sempat mikir buat nyerah. Tapi lihat, kamu tetap jalan terus walaupun kakimu gemetar.", mood: "cloud" },
  { id: 3, title: "Menemukan Cahaya", date: "Sekarang", desc: "Pelan-pelan badai berlalu. Kamu tumbuh jadi wanita yang jauh lebih kuat.", mood: "sun" },
]

// --- BACKGROUND DOODLES (ANIMASI LUCU DI BELAKANG) ---
const CuteBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-rose-200/40"
        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", scale: 0 }}
        animate={{ 
          y: [0, -20, 0], 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: Math.random() * 3 + 3, repeat: Infinity }}
      >
        {i % 3 === 0 ? <Heart size={Math.random() * 30 + 20} /> : 
         i % 3 === 1 ? <Star size={Math.random() * 30 + 20} /> : 
         <Sparkles size={Math.random() * 30 + 20} />}
      </motion.div>
    ))}
  </div>
)

export default function AnnualReportPage() {
  const [activeTab, setActiveTab] = useState('wins') 

  return (
    <main className={`min-h-screen relative overflow-hidden bg-[#fff0f5] ${bodyFont.className} pb-20`}>
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/30 to-purple-200/30 rounded-full blur-[80px]" />
         <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-200/30 to-rose-200/30 rounded-full blur-[80px]" />
      </div>
      
      <CuteBackground />

      {/* --- HEADER --- */}
      <div className="pt-20 pb-10 text-center px-4 relative z-10">
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
          className="inline-block bg-white border-2 border-rose-200 px-4 py-1 rounded-full mb-4 shadow-sm"
        >
           <span className={`${codeFont.className} text-rose-500 text-xs font-bold tracking-widest flex items-center gap-2`}>
             <Sparkles size={12} className="animate-spin-slow" /> ANNUAL REPORT 2024
           </span>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className={`${serifFont.className} text-5xl md:text-7xl text-rose-900 mb-8`}
        >
          Jurnal Perjalananmu
        </motion.h1>
        
        {/* TAB SWITCHER (BOUNCY) */}
        <div className="flex justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => setActiveTab('wins')}
            className={`px-6 py-2 rounded-full font-bold transition-all border-2 flex items-center gap-2 ${activeTab === 'wins' ? 'bg-rose-500 border-rose-500 text-white shadow-lg' : 'bg-white border-rose-100 text-rose-300 hover:border-rose-300'}`}
          >
            <Trophy size={18} className={activeTab === 'wins' ? 'animate-bounce' : ''} /> Pencapaian
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => setActiveTab('lessons')}
            className={`px-6 py-2 rounded-full font-bold transition-all border-2 flex items-center gap-2 ${activeTab === 'lessons' ? 'bg-indigo-400 border-indigo-400 text-white shadow-lg' : 'bg-white border-indigo-100 text-indigo-300 hover:border-indigo-300'}`}
          >
            <Smile size={18} className={activeTab === 'lessons' ? 'animate-pulse' : ''} /> Proses
          </motion.button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
      <AnimatePresence mode="wait">
        
        {/* ==================== TAB 1: WINS ==================== */}
        {activeTab === 'wins' && (
          <motion.div
            key="wins"
            initial="hidden" animate="visible" exit="hidden"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="space-y-12"
          >
            {/* BIG CARD (SCRAPBOOK) */}
            <motion.div variants={bounceVariant} className="relative group">
               <div className="absolute inset-0 bg-gradient-to-r from-rose-200 via-purple-200 to-yellow-200 rounded-[2.5rem] blur opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
               
               <div className="relative bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border-4 border-white flex flex-col md:flex-row gap-8 items-center transform transition-transform hover:scale-[1.02]">
                  
                  {/* Foto Utama */}
                  <div className="w-full md:w-1/2 relative">
                     <motion.div 
                       animate={{ rotate: [1, -1, 1] }} 
                       transition={{ duration: 4, repeat: Infinity }}
                       className="bg-white p-3 pb-12 shadow-lg border border-gray-100 relative"
                     >
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-rose-300/80 backdrop-blur-sm z-20 shadow-sm transform -rotate-1"></div>
                        <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                           <Image src={mainAchievement.image} alt="UB" fill className="object-cover" />
                        </div>
                        <p className={`${handFont.className} absolute bottom-2 left-0 w-full text-center text-3xl text-gray-600`}>
                           Officially Anak UB! 🎓
                        </p>
                        
                        {/* Sticker Lucu */}
                        <motion.div 
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 w-20 h-20 rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-white text-xs z-30"
                        >
                          <span className="text-center">DREAM<br/>BIG</span>
                        </motion.div>
                     </motion.div>
                  </div>

                  {/* Teks */}
                  <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                     <motion.div 
                       initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                       className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold mb-2 border border-indigo-200"
                     >
                        ⭐ HIGHLIGHT OF THE YEAR
                     </motion.div>
                     <h2 className={`${serifFont.className} text-4xl md:text-5xl text-rose-900 leading-tight`}>
                        Lolos Pertukaran Mahasiswa
                     </h2>
                     <div className="flex items-center justify-center md:justify-start gap-2 text-rose-500 font-medium">
                        <MapPin size={18} className="animate-bounce" /> Universitas Brawijaya
                     </div>
                     <p className="text-gray-600 leading-relaxed font-light">
                        {mainAchievement.desc}
                     </p>
                     
                     {/* Ticket Animation */}
                     <motion.div 
                       whileHover={{ scale: 1.05 }}
                       className="mt-4 bg-rose-50 border-2 border-dashed border-rose-300 p-4 rounded-xl flex items-center gap-4 cursor-default relative overflow-hidden"
                     >
                        <div className="absolute top-0 right-0 p-2 opacity-10"><Plane size={80}/></div>
                        <div className="bg-rose-500 text-white p-3 rounded-full shadow-md">
                           <Plane size={24} className="animate-pulse" />
                        </div>
                        <div className="text-left z-10">
                           <p className="text-xs text-rose-400 font-bold uppercase">Status</p>
                           <p className="text-rose-900 font-bold text-lg">ACCEPTED ✅</p>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </motion.div>

            {/* GRID FOTO LAINNYA */}
            <div>
               <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-rose-200 flex-1"></div>
                  <h3 className={`${serifFont.className} text-2xl text-rose-800`}>Momen Manis Lainnya</h3>
                  <div className="h-px bg-rose-200 flex-1"></div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {otherAchievements.map((item, index) => (
                     <motion.div 
                       key={item.id}
                       variants={bounceVariant}
                       whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                       className="bg-white p-3 rounded-xl shadow-md border border-rose-100 flex flex-col group"
                     >
                        <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
                           <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-rose-500 bg-rose-50 p-1 rounded-md">{item.icon}</span>
                           <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
                        </div>
                        <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
          </motion.div>
        )}

        {/* ==================== TAB 2: PROCESS (DIARY) ==================== */}
        {activeTab === 'lessons' && (
          <motion.div
            key="lessons"
            initial="hidden" animate="visible" exit="hidden"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="max-w-3xl mx-auto"
          >
             <div className="space-y-8">
                <motion.div variants={bounceVariant} className="text-center mb-8">
                   <h2 className={`${handFont.className} text-5xl text-rose-900 mb-2`}>Dear Diary...</h2>
                   <p className="text-gray-500">
                      Tahun ini nggak mudah, tapi kamu berhasil melewatinya. <Heart className="inline w-4 h-4 text-rose-500 fill-rose-500 animate-pulse"/>
                   </p>
                </motion.div>

                {struggles.map((item, index) => (
                   <motion.div 
                     key={item.id}
                     variants={bounceVariant}
                     whileHover={{ scale: 1.02 }}
                     className="bg-[#fff9f0] p-6 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm shadow-md border border-[#eaddcf] relative"
                   >
                      {/* Paper Pin Animation */}
                      <motion.div 
                        animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-rose-400 shadow-sm border-4 border-white z-10 flex items-center justify-center text-white"
                      >
                        <Star size={12} fill="white"/>
                      </motion.div>

                      <div className="flex items-start gap-4">
                         <div className={`p-4 rounded-2xl shrink-0 shadow-inner ${
                            item.mood === 'rain' ? 'bg-blue-100 text-blue-500' :
                            item.mood === 'cloud' ? 'bg-gray-100 text-gray-500' :
                            'bg-yellow-100 text-yellow-500'
                         }`}>
                            {item.mood === 'rain' ? <CloudRain size={28} className="animate-bounce"/> : 
                             item.mood === 'cloud' ? <Feather size={28} className="animate-pulse"/> : 
                             <Sun size={28} className="animate-spin-slow"/>}
                         </div>
                         <div>
                            <span className={`${codeFont.className} text-xs text-gray-400 uppercase tracking-widest bg-white px-2 py-1 rounded-md border border-gray-100`}>
                               {item.date}
                            </span>
                            <h3 className={`${serifFont.className} text-2xl text-gray-800 mb-2 mt-2`}>
                               {item.title}
                            </h3>
                            <p className={`${bodyFont.className} text-gray-600 leading-relaxed italic`}>
                               "{item.desc}"
                            </p>
                         </div>
                      </div>
                   </motion.div>
                ))}

                {/* Final Note */}
                <motion.div 
                  variants={bounceVariant}
                  className="bg-white p-6 rounded-2xl border-2 border-dashed border-rose-300 text-center transform rotate-1 mt-8 shadow-sm cursor-pointer"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                   <p className={`${handFont.className} text-4xl text-rose-500`}>
                      "Luka hari ini adalah kekuatanmu besok. Proud of you!" 
                   </p>
                </motion.div>
             </div>
          </motion.div>
        )}

      </AnimatePresence>
      </div>

      {/* --- FOOTER NAVIGATION --- */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="text-center pt-20 pb-10"
      >
         <div className="flex justify-center gap-4">
             <Link href="/">
               <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white border border-rose-200 text-rose-600 px-6 py-3 rounded-full font-medium shadow-sm hover:bg-rose-50 flex items-center gap-2">
                 <Home size={18} /> Beranda
               </motion.button>
             </Link>
             <Link href="/surprise">
               <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl flex items-center gap-2">
                 Lanjut ke Kejutan <ArrowRight size={18} />
               </motion.button>
             </Link>
         </div>
      </motion.div>

    </main>
  )
}