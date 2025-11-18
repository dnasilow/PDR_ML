# Cloudinary Setup Guide

## What is Cloudinary?
Cloudinary is a professional image hosting service with a generous free tier (25GB storage, 25GB bandwidth/month). Perfect for your PDR quote form!

## Setup Steps (5 minutes)

### 1. Create Free Account
1. Go to https://cloudinary.com/users/register/free
2. Sign up with email: `Dent.Master.Aberdeenshire@gmail.com`
3. Verify your email
4. You'll be taken to your dashboard

### 2. Get Your Cloud Name
On your Cloudinary dashboard, you'll see:
- **Cloud name**: Something like `dent-master-aberdeenshire` or auto-generated
- **API Key**: (not needed for unsigned uploads)
- **API Secret**: (not needed for unsigned uploads)

### 3. Create Upload Preset (IMPORTANT)
This allows uploads without exposing your API key:

1. Click **Settings** (⚙️ icon in top right)
2. Go to **Upload** tab
3. Scroll down to **Upload presets**
4. Click **Add upload preset**
5. Configure:
   - **Preset name**: `pdr_quotes`
   - **Signing Mode**: **Unsigned** ⚠️ IMPORTANT
   - **Folder**: `dent-master-quotes` (organizes your uploads)
   - **Access mode**: Public (so images can be viewed)
   - Leave other settings as default
6. Click **Save**

### 4. Update Contact.jsx
Replace the cloud name in `src/components/Contact.jsx`:

Find this line (around line 51):
```javascript
const response = await fetch('https://api.cloudinary.com/v1_1/dent-master/image/upload', {
```

Replace `dent-master` with YOUR cloud name:
```javascript
const response = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', {
```

### 5. Test It!
1. Go to your contact form
2. Upload a test image
3. Submit the form
4. Check your email - should see Cloudinary image links
5. Check Cloudinary dashboard - should see uploaded images in `dent-master-quotes` folder

## What You Get

✅ **Free tier**: 25GB storage + 25GB bandwidth/month (plenty for PDR quotes)
✅ **Automatic optimization**: Images are compressed and optimized
✅ **Fast CDN**: Images load quickly worldwide
✅ **Dashboard**: View all uploaded photos in one place
✅ **Image transformations**: Can resize, crop, add watermarks if needed
✅ **Secure URLs**: HTTPS links that work everywhere

## Email Format

When customers submit the form, you'll receive:
```
Name: John Smith
Email: john@example.com
Phone: +44 7700 900000
Car Details: 2020 BMW 3 Series, Black

Damage Description:
Small dent on driver door from parking lot incident

Photo Links:
Image 1: https://res.cloudinary.com/dent-master/image/upload/v1234/dent-master-quotes/abc123.jpg
Image 2: https://res.cloudinary.com/dent-master/image/upload/v1234/dent-master-quotes/def456.jpg
```

Just click the links to view the damage photos!

## Monitoring Usage

Check your dashboard to see:
- Total storage used
- Bandwidth used this month
- Number of transformations
- All uploaded images

If you ever approach the 25GB limit (unlikely), you can:
- Delete old quote images
- Upgrade to paid plan ($25/month for 75GB)
- Or just create a new free account

## Troubleshooting

**Problem**: Upload fails with "Invalid upload preset"
- Make sure you created the preset named `pdr_quotes`
- Make sure it's set to **Unsigned** mode

**Problem**: Images not showing in email
- Check that uploads succeeded (green checkmark in form)
- Verify cloud name is correct in Contact.jsx
- Check spam folder

**Problem**: "Access denied" error
- Make sure upload preset access mode is **Public**

---

**That's it!** Your contact form now has professional image uploads with zero monthly cost.
