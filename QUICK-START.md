# 🚀 Quick Start Guide

Get your birthday website up and running in 5 minutes!

## ⚡ Fast Track (For Immediate Use)

### Step 1: Install Dependencies (2 minutes)

```bash
cd birthday-website
npm install
```

### Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

**That's it!** The website is running with placeholder content.

---

## 🎯 Priority Customizations (Do These First)

### 1. Update the Love Letter (5 minutes)

Open `app/letter/page.js` and find line 8:

```javascript
const letterContent = {
  greeting: "My Dearest [Her Name],",  // ← Add her name
  paragraphs: [
    "Write your first paragraph here...",
    "Your second heartfelt message...",
    "Keep going with your feelings...",
  ],
  name: "Your Name ❤️"  // ← Add your name
}
```

### 2. Personalize Timeline Events (5 minutes)

Open `app/timeline/page.js` and update around line 7:

```javascript
{
  title: 'First Chat 💬',
  description: 'The day we first talked on [Platform] about [Topic]',
  date: 'Your actual date',
}
```

### 3. Add Photos (10 minutes)

**Quick method - Use these steps:**

1. Put your photos in `public/photos/` folder
2. Open `app/memories/page.js`
3. Update line 10:

```javascript
const memories = [
  {
    url: '/photos/your-photo.jpg',  // ← Your photo
    caption: 'Our first date 💕',   // ← Your caption
    tall: true  // true = vertical, false = horizontal
  },
  // Add 5-10 more photos
]
```

---

## 🎨 Optional Customizations (If You Have Time)

### Change Her Name on Landing Page

`app/page.js` - line 65:

```javascript
<h1>
  Happy Birthday,
  <br />
  [Her Name]  // ← Add her name
</h1>
```

### Update Surprise Message

`app/surprise/page.js` - line 155:

```javascript
<h2>
  Your special message here 💖
</h2>
```

---

## 🚢 Deploy to Vercel (10 minutes)

### Fastest Method:

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Connect your GitHub (upload your project there first)
5. Click "Deploy"
6. Get your link: `your-site.vercel.app`
7. Share with her! 💝

**Don't have GitHub?**

See `DEPLOYMENT.md` for alternative methods.

---

## ✅ Final Checklist

Before sharing:

- [ ] Updated love letter with her name
- [ ] Changed timeline to your real story
- [ ] Added at least 5-10 real photos
- [ ] Changed landing page greeting
- [ ] Tested on mobile (open site on your phone)
- [ ] Deployed to Vercel
- [ ] Tested the live link

---

## 🆘 Common Issues

### "Module not found" error?
```bash
npm install
```

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Images not showing?
- Make sure they're in the `public` folder
- Use correct path: `/photos/image.jpg`

### Build failed on Vercel?
- Check for typos in your code
- Ensure all files are saved
- Look at the error message in Vercel

---

## 📞 Need Help?

Check these files:
- **CUSTOMIZATION.md** - Detailed personalization guide
- **DEPLOYMENT.md** - Complete deployment instructions
- **README.md** - Full project documentation

---

## 🎁 Pro Tips

1. **Test on her phone first** - Send the link to yourself
2. **Screenshot the best pages** - Send as teasers!
3. **Share at the right moment** - When she wakes up or during dinner
4. **Have a backup** - Save the link somewhere safe
5. **Record her reaction** - Priceless memories!

---

**You're ready! Now go make her birthday amazing! 🎉💖**

### Time Breakdown:
- ⚡ Installation: 2 min
- ✏️ Letter: 5 min
- 📅 Timeline: 5 min
- 📸 Photos: 10 min
- 🚀 Deploy: 10 min

**Total: ~30 minutes to a perfect gift!**
