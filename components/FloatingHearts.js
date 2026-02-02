'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function FloatingHearts({ count = 12, className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-romantic-300/30"
          initial={{ 
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000, 
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: -100,
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          <Heart size={Math.random() * 30 + 20} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  )
}
