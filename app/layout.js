import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Happy Birthday My Love 💖',
  description: 'A special birthday gift made just for you',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-body antialiased bg-gradient-to-br from-cream-50 via-pastel-pink/20 to-pastel-lavender/30 min-h-screen">
        {children}
      </body>
    </html>
  )
}
