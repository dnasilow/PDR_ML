# SSL/HTTPS Setup Guide for Cloudflare Pages

## Current Issue
Your website shows "Not secure" warning because it's being accessed via HTTP instead of HTTPS.

## Solution Steps

### 1. **Cloudflare Pages Automatic SSL**
Cloudflare Pages provides automatic SSL certificates for all sites. Your site should already have HTTPS enabled.

### 2. **Force HTTPS Redirect**
The `_redirects` file has been added to automatically redirect all HTTP traffic to HTTPS.

### 3. **Configure Your Domain**

#### Option A: If using Cloudflare DNS (Recommended)
1. Log into your Cloudflare dashboard: https://dash.cloudflare.com
2. Select your domain: `dentmaster-aberdeenshire.uk`
3. Go to **SSL/TLS** settings
4. Set SSL/TLS encryption mode to **"Full (strict)"**
5. Enable **"Always Use HTTPS"** under SSL/TLS > Edge Certificates
6. Enable **"Automatic HTTPS Rewrites"**
7. Enable **"HSTS (HTTP Strict Transport Security)"**

#### Option B: If NOT using Cloudflare DNS
1. Your domain registrar DNS settings need to point to Cloudflare Pages
2. Add CNAME record: `dentmaster-aberdeenshire.uk` → `your-project.pages.dev`
3. Wait for DNS propagation (can take up to 48 hours)
4. Cloudflare will automatically provision SSL certificate

### 4. **Verify HTTPS is Working**

After deployment, test these URLs:
- https://dentmaster-aberdeenshire.uk (should work)
- http://dentmaster-aberdeenshire.uk (should redirect to HTTPS)
- https://www.dentmaster-aberdeenshire.uk (should work)
- http://www.dentmaster-aberdeenshire.uk (should redirect to HTTPS)

### 5. **Common Issues**

**Issue: "Not Secure" warning persists**
- Solution: Clear browser cache, try incognito mode
- Check that you're typing `https://` in the URL bar
- Verify DNS is pointing to Cloudflare

**Issue: Certificate error**
- Solution: Wait 24-48 hours for SSL certificate provisioning
- Ensure domain is properly connected in Cloudflare Pages settings

**Issue: Mixed content warning**
- Solution: All resources (images, scripts, etc.) must load via HTTPS
- Our code already uses relative URLs and HTTPS endpoints

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
