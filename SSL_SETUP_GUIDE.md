# SSL/HTTPS Setup Guide for Cloudflare Pages

## Current Issue
Your website shows "Not secure" warning because it's being accessed via HTTP instead of HTTPS.

## Solution Steps

### 1. **Your Current Setup**
✅ You're using Cloudflare DNS (I can see the "Proxied" orange cloud in your screenshot)
✅ SSL is already enabled on your domain
✅ DNS records are properly configured

### 2. **Enable HTTPS Redirect in Cloudflare**

**Step-by-Step Instructions:**

1. **Go to SSL/TLS Settings:**
   - In your Cloudflare dashboard (where you showed the DNS screenshot)
   - Click on **"SSL/TLS"** in the left sidebar menu
   - Under **"Overview"**, set the encryption mode to **"Full"** or **"Full (strict)"**

2. **Enable Always Use HTTPS:**
   - Still in **SSL/TLS** section
   - Click on **"Edge Certificates"** tab (second tab)
   - Scroll down and toggle **"Always Use HTTPS"** to **ON**
   - This will automatically redirect all HTTP requests to HTTPS

3. **Enable Automatic HTTPS Rewrites (Optional but Recommended):**
   - Same **"Edge Certificates"** page
   - Toggle **"Automatic HTTPS Rewrites"** to **ON**
   - This fixes mixed content warnings

4. **Enable HSTS (Optional but Recommended):**
   - Same **"Edge Certificates"** page
   - Scroll to **"HTTP Strict Transport Security (HSTS)"**
   - Click **"Enable HSTS"** and accept the warning
   - Use these settings:
     - Max Age: 6 months (15768000 seconds)
     - Include subdomains: ON
     - Preload: OFF (unless you're sure)

### 3. **Where to Find These Settings**

Looking at your current Cloudflare screen:
- You're currently in: **DNS → Records**
- You need to go to: **SSL/TLS** (in the left sidebar)
- The SSL/TLS menu icon looks like a lock 🔒

### 4. **Verify HTTPS is Working**

After deployment, test these URLs:
- https://dentmaster-aberdeenshire.uk (should work)
- http://dentmaster-aberdeenshire.uk (should redirect to HTTPS)
- https://www.dentmaster-aberdeenshire.uk (should work)
- http://www.dentmaster-aberdeenshire.uk (should redirect to HTTPS)

### 5. **Common Issues**

**Issue: "Not Secure" warning persists**
- Solution: After enabling "Always Use HTTPS", wait 1-2 minutes for changes to propagate
- Make sure you're typing the full URL: `https://dentmaster-aberdeenshire.uk`
- Clear browser cache (Ctrl+Shift+Delete) or try incognito mode
- The "Always Use HTTPS" setting is the key - this must be enabled

**Issue: Where is my hosting?**
- Your DNS is on Cloudflare, but where is your website actually hosted?
- Check Cloudflare dashboard → **Workers & Pages** section
- OR check if you're using another hosting service (Vercel, Netlify, GitHub Pages, etc.)
- The CNAME records in your screenshot point to different services

**Issue: CNAME records pointing to multiple places**
- I see `dent-master-aberdeenshire...` and `domainconnect.gd.do...`
- You may need to consolidate these to one hosting provider
- If using Cloudflare Pages, you'd see a CNAME pointing to `*.pages.dev`

### 6. **Update Browser Bookmarks**
Make sure all bookmarks and links use `https://` instead of `http://`

### 7. **Google Search Console**
After enabling HTTPS:
1. Add HTTPS version of your site to Google Search Console
2. Update sitemap URL to use HTTPS
3. Set HTTPS version as preferred domain

## Files Updated
- `_redirects` - HTTP to HTTPS redirects and security headers
- This guide for reference

## Next Steps After Deployment
1. Test all pages load via HTTPS
2. Run SSL test: https://www.ssllabs.com/ssltest/
3. Verify security headers: https://securityheaders.com/
4. Update Google Analytics to track HTTPS URLs
5. Update any external links/backlinks to use HTTPS

## Support
If issues persist:
- Cloudflare Support: https://support.cloudflare.com/
- Pages Documentation: https://developers.cloudflare.com/pages/
