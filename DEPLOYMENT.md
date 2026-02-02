# 🚀 Deploying to Vercel - Step by Step Guide

This guide will help you deploy your birthday website to Vercel in minutes.

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository (e.g., "birthday-website")
4. Choose "Public" or "Private"
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

Open your terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Birthday website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual values.

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In" (you can use your GitHub account)
3. Click "Add New Project"
4. Click "Import" next to your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

That's it! Your site will be live in 2-3 minutes! 🎉

### Step 4: Get Your Live URL

After deployment:
- Vercel will provide a URL like: `your-project.vercel.app`
- You can customize this domain in Project Settings
- Share this URL with your girlfriend! 💖

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

In your project folder:

```bash
vercel
```

Follow the prompts:
- "Set up and deploy?" → Yes
- "Which scope?" → Your account
- "Link to existing project?" → No
- "What's your project's name?" → birthday-website
- "In which directory is your code?" → ./
- Vercel will detect Next.js automatically

### Step 4: Production Deploy

```bash
vercel --prod
```

Your site is now live! 🚀

## Method 3: Deploy via Vercel Dashboard (Direct Upload)

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Choose "Deploy from .git repository" or drag and drop your project folder
4. Vercel will handle the rest!

## Custom Domain (Optional)

Want to use your own domain like `happybirthday-mylove.com`?

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update DNS settings
5. Wait for DNS propagation (usually 5-30 minutes)

## Environment Variables (If Needed)

If you add any API keys or secrets later:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy your project

## Updating Your Site

After deployment, whenever you want to update:

### If using GitHub:
```bash
git add .
git commit -m "Update content"
git push
```
Vercel will automatically redeploy! ✨

### If using CLI:
```bash
vercel --prod
```

## Troubleshooting

### Build Failed?

Check:
- All dependencies are in `package.json`
- No syntax errors in your code
- Node version compatibility (Vercel uses Node 18+)

### Images Not Loading?

- Ensure images are in the `public` folder
- Or use absolute URLs for external images

### Fonts Not Working?

- Google Fonts are loaded automatically by Next.js
- No action needed!

## Performance Tips

Your site is already optimized, but you can:
- Enable Vercel Analytics in project settings
- Check performance in Vercel dashboard
- All images are optimized by Next.js automatically

## Vercel Features You Get Free

✅ Automatic HTTPS/SSL
✅ Global CDN
✅ Automatic deployments from Git
✅ Preview deployments for branches
✅ 100 GB bandwidth/month
✅ Unlimited websites

## Final Checklist

Before sharing with your girlfriend:

- [ ] Test all pages on mobile
- [ ] Update all text content
- [ ] Replace placeholder images
- [ ] Test on different browsers
- [ ] Share the link! 💝

## Support

If you need help:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: Available in your dashboard
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Now go make her day special! 🎉💖**
