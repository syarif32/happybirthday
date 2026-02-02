# 🎨 Customization Guide

This guide will help you personalize the birthday website with your own photos, messages, and memories.

## 📝 Customizing Text Content

### 1. Landing Page (`app/page.js`)

Find this section and update the greeting:

```javascript
<h1 className="...">
  Happy Birthday,
  <br />
  My Love  // ← Change this to her name or nickname
</h1>

<p className="...">
  This website is made just for you,  // ← Personalize this message
  <br />
  to celebrate the most special person in my life.
</p>
```

### 2. Love Letter (`app/letter/page.js`)

Update the `letterContent` object (around line 8):

```javascript
const letterContent = {
  greeting: "My Dearest Love,",  // ← Change greeting
  paragraphs: [
    "Your first paragraph here...",  // ← Write your own paragraphs
    "Your second paragraph here...",
    "Keep adding paragraphs...",
    "Share your feelings...",
    "Express your love..."
  ],
  signature: "With all my love,",
  name: "Your Name ❤️"  // ← Add your name
}
```

**Tips for the love letter:**
- Write from the heart
- Share specific memories
- Tell her what makes her special
- Keep it genuine and sincere
- 3-5 paragraphs is perfect

### 3. Timeline (`app/timeline/page.js`)

Update the `timelineEvents` array (around line 7):

```javascript
const timelineEvents = [
  {
    title: 'First Chat 💬',  // ← Update title
    description: 'The actual story of how you first talked...',  // ← Your story
    date: 'June 2023',  // ← Actual date
  },
  {
    title: 'First Meet 💑',
    description: 'Where and when you first met...',
    date: 'July 15, 2023',
  },
  // Add more events that are meaningful to you!
]
```

**Tips for timeline:**
- Include real dates
- Add significant moments
- First kiss, first trip, special occasions
- Keep descriptions concise but meaningful
- Use emojis to add personality

### 4. Surprise Page (`app/surprise/page.js`)

Find the surprise message (around line 155):

```javascript
<h2 className="...">
  I Love You More
  <br />
  Every Single Day 💖  // ← Your special message
</h2>

<div className="...">
  <p>
    You are my sunshine...  // ← Write your own paragraphs
  </p>
  <p>
    Thank you for being...  // ← Express your gratitude
  </p>
  <p>
    Here's to forever...  // ← Your wishes for her
  </p>
</div>
```

## 📸 Adding Your Own Photos

### Option 1: Use Local Photos

1. Create a folder in `public`:
   ```
   public/
     └── photos/
         ├── photo1.jpg
         ├── photo2.jpg
         └── photo3.jpg
   ```

2. Update `app/memories/page.js`:

```javascript
const memories = [
  {
    id: 1,
    url: '/photos/photo1.jpg',  // ← Your photo path
    caption: 'Our first date at the beach 💕',  // ← Your caption
    tall: true  // true for vertical, false for horizontal
  },
  {
    id: 2,
    url: '/photos/photo2.jpg',
    caption: 'That amazing sunset 🌅',
    tall: false
  },
  // Add more photos...
]
```

### Option 2: Use External URLs

```javascript
const memories = [
  {
    id: 1,
    url: 'https://your-image-host.com/photo.jpg',
    caption: 'Beautiful memory 💖',
    tall: true
  },
]
```

**Photo Tips:**
- Use high-quality images (at least 1000px wide)
- Mix vertical and horizontal photos
- 6-12 photos is ideal
- Choose meaningful moments
- Compress large images before uploading

### Image Optimization

For best performance, resize your images:
- Vertical photos: 600-800px wide
- Horizontal photos: 800-1200px wide
- Use JPG format (smaller file size)
- Tools: [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)

## 🎨 Changing Colors

### Update Color Palette (`tailwind.config.js`)

```javascript
colors: {
  romantic: {
    // Lighter pink
    400: '#ff8fa3',  // ← Change these hex codes
    500: '#ff6b8a',
    600: '#ff477e',
  },
  // Add your own colors
  custom: {
    primary: '#your-color',
    secondary: '#another-color',
  }
}
```

**Color Resources:**
- [Coolors](https://coolors.co) - Generate palettes
- [Adobe Color](https://color.adobe.com) - Color wheel
- Keep it romantic: pinks, purples, warm tones

### Change Background Gradient

In `app/layout.js`:

```javascript
<body className="font-body bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
  // ← Change colors here
```

## 🔤 Changing Fonts

### Update Font Import (`app/layout.js`)

```javascript
import { YourFont, AnotherFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-display',
})
```

**Romantic Font Suggestions:**
- **Display**: Playfair Display, Cormorant, Cinzel, Great Vibes
- **Body**: Lora, Crimson Text, Libre Baskerville, Montserrat

Browse fonts: [Google Fonts](https://fonts.google.com)

## 🎵 Adding Background Music (Optional)

### Step 1: Add Your Music File

Place your audio file in the `public` folder:
```
public/
  └── music/
      └── birthday-song.mp3
```

### Step 2: Update Surprise Page

In `app/surprise/page.js`, find the music section and add:

```javascript
const [playMusic, setPlayMusic] = useState(false)
const audioRef = useRef(null)

// Add audio element
<audio ref={audioRef} loop>
  <source src="/music/birthday-song.mp3" type="audio/mpeg" />
</audio>

// Update music toggle
const handleSurpriseClick = () => {
  setShowSurprise(true)
  if (playMusic && audioRef.current) {
    audioRef.current.play()
  }
}
```

**Music Tips:**
- Use her favorite song
- Keep file size under 5MB
- MP3 format works best
- Set volume to 50-70%

## 🎭 Animation Customization

### Adjust Animation Speed

In any component, modify the `transition` prop:

```javascript
// Slower
transition={{ duration: 2 }}  // 2 seconds

// Faster
transition={{ duration: 0.5 }}  // 0.5 seconds
```

### Change Floating Hearts

In `app/page.js`, adjust the number of hearts:

```javascript
{[...Array(20)].map((_, i) => (  // ← Change 15 to more/less
  // Heart component
))}
```

## 📱 Mobile Optimization

The site is already responsive, but you can adjust:

### Text Sizes

```javascript
// Before
className="text-6xl md:text-8xl"

// Adjust for mobile
className="text-5xl md:text-8xl"
```

### Spacing

```javascript
// Before
className="px-4 py-20"

// Adjust
className="px-4 py-12 md:py-20"
```

## ✅ Pre-Launch Checklist

Before sharing with your girlfriend:

- [ ] Update all personal content (letter, timeline, surprise)
- [ ] Add your own photos
- [ ] Test all pages on mobile
- [ ] Check spelling and grammar
- [ ] Verify all links work
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Share with a friend first to get feedback
- [ ] Deploy to Vercel
- [ ] Test the live site
- [ ] Send her the link! 💝

## 🆘 Quick Reference

| What to Change | File Location | Line Number (approx) |
|----------------|---------------|----------------------|
| Landing greeting | `app/page.js` | 65-70 |
| Love letter | `app/letter/page.js` | 8-20 |
| Timeline events | `app/timeline/page.js` | 7-60 |
| Photo gallery | `app/memories/page.js` | 10-50 |
| Surprise message | `app/surprise/page.js` | 155-175 |
| Colors | `tailwind.config.js` | 12-30 |
| Fonts | `app/layout.js` | 3-10 |

## 💡 Creative Ideas

Add your own creative touches:
- Inside jokes as photo captions
- Her favorite quotes in the letter
- Special dates in the timeline
- Her favorite colors in the palette
- A countdown to your anniversary
- Links to playlists you share
- QR code to a voice message

## 🎁 Extra Touch Ideas

### Add a Custom Domain
- `happybirthday-[hername].com`
- `[yournames]-love.com`
- Makes it extra special!

### Print a QR Code
- Generate QR to the website
- Print it on a card
- She scans it to see the site!

### Screen Record
- Record a video showing the site
- Send as a teaser
- Build anticipation!

---

**Make it yours and make it special! 💖**
