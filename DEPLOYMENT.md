# Deployment Guide

## Vercel Deployment (Recommended)

### Quick Deploy from Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and log in
2. Click "Add New Project"
3. Import the GitHub repository: `FrankieMolt/nosyt-ai`
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from the project directory
cd nosyt-ai
vercel --prod
```

### Environment Variables (Optional)

This project doesn't require any environment variables for basic functionality.

## Project Structure

- **Framework**: Next.js 14+ with App Router
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Deployment Status

✅ GitHub Repository: https://github.com/FrankieMolt/nosyt-ai
✅ Build Tested: Successful
⏳ Vercel Deployment: Ready to deploy

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check responsive design on mobile
- [ ] Test interactive buttons (Feed, Play, Sleep, Clean, Maintenance)
- [ ] Verify animations are smooth
- [ ] Check search functionality on Memories page
- [ ] Test skill tree expansion

## Custom Domain (Optional)

To use `nosyt-ai.vercel.app` as the domain:

1. After deploying, go to Project Settings → Domains
2. Add domain: `nosyt-ai.vercel.app`
3. Follow the DNS instructions (if using a custom domain)
4. Wait for SSL certificate to provision

## Monitoring

Once deployed, you can monitor:
- Analytics: Vercel Analytics (automatic)
- Performance: Vercel Speed Insights
- Errors: Vercel Logs

## Updates

To update the live site after making changes:

```bash
git add .
git commit -m "Update description"
git push
```

Vercel will automatically detect the push and redeploy.
