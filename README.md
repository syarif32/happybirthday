# 💖 Birthday Website for My Girlfriend

A beautiful, romantic birthday website built with Next.js, featuring smooth animations, elegant design, and heartfelt messages.

## ✨ Features

- **Landing Page**: Animated greeting with floating hearts and sparkles
- **Love Letter**: Romantic letter with beautiful text reveal animations
- **Photo Memories**: Masonry gallery with hover effects and captions
- **Timeline**: Vertical timeline showing our love story with scroll animations
- **Surprise Page**: Interactive surprise with confetti animation and special message

## 🎨 Design Highlights

- Romantic color palette (soft pink, pastel purple, cream)
- Elegant typography (Playfair Display + Lora)
- Smooth Framer Motion animations
- Fully responsive (mobile-first)
- Custom scrollbar and selection colors
- Floating hearts and sparkle effects throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Lora)

## 📦 Installation

1. Clone or download this project
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment to Vercel

### Quick Deploy

The easiest way to deploy this website is using Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Manual Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts, and your site will be live in minutes!

## 📄 Pages

- `/` - Landing page with animated greeting
- `/letter` - Romantic love letter
- `/memories` - Photo gallery
- `/timeline` - Our love story timeline
- `/surprise` - Special surprise with confetti

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  romantic: { ... },
  cream: { ... },
  pastel: { ... }
}
```

### Fonts

Change fonts in `app/layout.js`:

```javascript
import { YourFont, AnotherFont } from 'next/font/google'
```

### Content

Update the content in each page:
- Love letter: `app/letter/page.js`
- Timeline events: `app/timeline/page.js`
- Photo captions: `app/memories/page.js`
- Surprise message: `app/surprise/page.js`

### Photos

Replace placeholder images in `app/memories/page.js` with your own photos:

```javascript
const memories = [
  {
    url: '/your-photo-path.jpg',
    caption: 'Your caption',
  },
  // ...
]
```

Store photos in the `public` folder or use external URLs.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (phones)
- Tablets
- Desktops
- Large screens

## 🎭 Animations

Built with Framer Motion for smooth, professional animations:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Confetti particles
- Floating elements

## 💝 Special Features

- **Confetti Animation**: On the surprise page
- **Floating Hearts**: Background decoration on multiple pages
- **Smooth Scrolling**: Natural page navigation
- **Music Toggle**: Optional background music (you can add your own audio file)
- **Custom Cursors**: Romantic selection colors

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- All images use Unsplash placeholders - replace with your own photos
- Music feature is ready but requires you to add an audio file
- Customize the love letter and timeline to match your story
- The website has no backend - it's purely frontend

## 💖 Made with Love

This website was created with love and care to celebrate someone special.

---

**Happy Birthday! 🎂🎉💕**
