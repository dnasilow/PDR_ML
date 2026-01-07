# Deployment Guide: Cloudflare Pages Setup

## 🎯 Quick Start Guide

Since you're already using **Cloudflare DNS** for `dentmaster-aberdeenshire.uk`, deploying to **Cloudflare Pages** is the perfect solution.

---

## 📋 Step-by-Step Deployment

### Step 1: Access Cloudflare Dashboard
1. Go to https://dash.cloudflare.com
2. Log in with your Cloudflare account
3. You should see `dentmaster-aberdeenshire.uk` in your domains list

### Step 2: Navigate to Workers & Pages
1. In the left sidebar, click **"Workers & Pages"** 
2. Click the **"Create application"** button
3. Select the **"Pages"** tab
4. Click **"Connect to Git"**

### Step 3: Connect GitHub Repository
1. Click **"Connect GitHub"** (or sign in if already connected)
2. Authorize Cloudflare to access your repositories
3. Select repository: **`dnasilow/PDR_ML`**
4. Click **"Begin setup"**

### Step 4: Configure Build Settings
Fill in these exact settings:

```
Project name: dent-master-aberdeenshire
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
```

**Framework preset:** Vite (should auto-detect)

### Step 5: Environment Variables (Optional)
No environment variables needed for this project - skip this section.

### Step 6: Deploy!
1. Click **"Save and Deploy"**
2. Cloudflare will:
   - Clone your repository
   - Install dependencies
   - Run build command
   - Deploy to their global CDN
3. Wait 2-5 minutes for first deployment

### Step 7: Connect Custom Domain
1. After deployment completes, click **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter: `dentmaster-aberdeenshire.uk`
4. Click **"Continue"**
5. Cloudflare will automatically:
   - Update your DNS records
   - Provision SSL certificate
   - Configure HTTPS redirect
6. Wait 1-2 minutes for DNS propagation

### Step 8: Add www Subdomain (Optional)
1. Click **"Add a custom domain"** again
2. Enter: `www.dentmaster-aberdeenshire.uk`
3. Click **"Continue"**
4. Set to redirect to main domain or serve same content

---

## ✅ Verification Checklist

After deployment, verify:

1. **Main Domain**
   - Visit: https://dentmaster-aberdeenshire.uk
   - Should load your website ✅

2. **HTTP Redirect**
   - Visit: http://dentmaster-aberdeenshire.uk
   - Should redirect to HTTPS ✅

3. **SSL Certificate**
   - Check for padlock icon in browser
   - Should show "Secure" or "Connection is secure" ✅

4. **DNS Status**
   - Orange cloud should still be "Proxied" ✅

---

## 🔄 Automatic Deployments

Once set up, Cloudflare Pages will:
- ✅ Automatically deploy when you push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show build logs for debugging
- ✅ Rollback to previous deployments if needed

**To deploy updates:**
```bash
git add .
git commit -m "Your changes"
git push origin main
```
Cloudflare will automatically rebuild and deploy in 2-5 minutes!

---

## 📊 Cloudflare Pages Features

### Included FREE:
- Unlimited bandwidth
- Unlimited requests
- 500 builds per month
- Global CDN (300+ cities)
- Automatic SSL certificates
- DDoS protection
- Web Analytics
- Preview deployments
- Rollback capability

### Build Configuration
Already configured in project:
- Package manager: npm
- Node version: 18+ (Cloudflare default)
- Build command: `npm run build`
- Output: `dist/` folder

---

## 🛠️ Troubleshooting

### Build Fails
**Error:** "Command not found: vite"
**Solution:** 
```bash
# Locally test build
npm install
npm run build
# If successful, commit and push
```

**Error:** "Out of memory"
**Solution:** Build should work fine - this project is small

### Domain Not Connecting
**Error:** "DNS resolution error"
**Solution:**
1. Go to Cloudflare DNS settings
2. Ensure CNAME record points to: `<project-name>.pages.dev`
3. Orange cloud should be ON (Proxied)
4. Wait 5-10 minutes

### SSL Certificate Issues
**Error:** "SSL handshake failed"
**Solution:**
1. Go to SSL/TLS → Overview
2. Set mode to: **Full (strict)**
3. Wait 15 minutes for certificate provisioning

---

## 📱 Testing After Deployment

### 1. Homepage Test
```
Visit: https://dentmaster-aberdeenshire.uk
Expected: Hero image, navigation, content loads
```

### 2. Quote Form Test
```
1. Navigate to Contact page
2. Fill in quote form
3. Upload image (test Cloudinary)
4. Submit form
5. Check email at: Dent.Master.Aberdeenshire@gmail.com
```

### 3. Video Gallery Test
```
1. Navigate to Gallery page
2. Scroll to video section
3. Click on video thumbnail
4. Verify modal opens
5. Test hover-to-play
6. Test auto-advance
7. Test navigation arrows
```

### 4. Google Analytics Test
```
1. Visit site
2. Open GA4 Real-Time report
3. Should see your visit within 60 seconds
```

### 5. Mobile Test
```
1. Open on mobile device
2. Test navigation menu
3. Test forms
4. Check responsive design
5. Test video playback
```

---

## 🎉 Post-Deployment Next Steps

1. **Update GA4 Property**
   - Verify site URL in GA4 settings
   - Change from development to production domain

2. **Submit to Google Search Console**
   - Add verified property
   - Submit sitemap.xml

3. **Test All Forms**
   - Quote form
   - Contact form
   - Image uploads

4. **Run Lighthouse Audit**
   - Target: 90+ performance
   - Fix any issues

5. **Create Google Business Profile**
   - Add business details
   - Upload photos
   - Get verified

---

## 📞 Need Help?

### Cloudflare Support
- Documentation: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/
- Status: https://www.cloudflarestatus.com/

### Quick Commands
```bash
# Check current deployment
git log -1

# View recent commits
git log --oneline -5

# Check build locally
npm run build

# Preview build locally
npm run preview
```

---

## 🚀 Deployment Status

- [ ] Step 1: Access Cloudflare Dashboard
- [ ] Step 2: Navigate to Workers & Pages
- [ ] Step 3: Connect GitHub Repository
- [ ] Step 4: Configure Build Settings
- [ ] Step 5: Initial Deployment Complete
- [ ] Step 6: Custom Domain Connected
- [ ] Step 7: HTTPS Working
- [ ] Step 8: Site Live and Tested

**Once all checkboxes are complete, your site is LIVE! 🎉**

