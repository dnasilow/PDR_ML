# Contact Form Setup Guide

## How It Works

The contact form uses **Formspree** - a free, reliable form backend service that sends form submissions directly to your email.

### Current Setup

- **Recipient Email**: Dent.Master.Aberdeenshire@gmail.com
- **Service**: Formspree (free tier - up to 50 submissions/month)
- **Form ID**: xblqjwno ✅ **CONFIGURED**

### First-Time Setup Required

**IMPORTANT**: You need to create a FREE Formspree account and get your own form ID:

#### Steps to Activate:

1. Go to https://formspree.io/
2. Click "Sign Up" - use the email: `Dent.Master.Aberdeenshire@gmail.com`
3. Verify your email
4. Create a new form:
   - Click "New Form"
   - Name it: "PDR Quote Requests"
   - Email: `Dent.Master.Aberdeenshire@gmail.com`
5. You'll get a Form ID (looks like: `xyzypwje`)
6. Copy that Form ID
7. Edit file: `src/components/Contact.jsx`
8. Find line ~44: `https://formspree.io/f/xyzypwje`
9. Replace `xyzypwje` with your new Form ID
10. Done! Test the form

### What Customers See

When a customer submits the form:
- They see: "Thank you for your inquiry! I will get back to you within 24 hours."
- Form resets to blank
- You receive an email with all their details

### What You Receive

Each submission includes:
- Customer name
- Email address (with reply-to set)
- Phone number
- City/location
- Car details
- Damage description
- Timestamp

### Free Tier Limits

- **50 submissions per month** (free)
- Upgrade to paid plan if you need more ($10/month for unlimited)
- Email notifications for each submission
- Spam filtering included

### Troubleshooting

**Problem**: "Error sending your request"
- **Solution**: Make sure you replaced the form ID with yours from Formspree

**Problem**: Not receiving emails
- Check spam/junk folder
- Verify Formspree account is set up correctly
- Check Formspree dashboard for submissions

**Problem**: Want to test without Formspree
- Form will show error message with direct contact info
- Customer can call/email directly

### Alternative: Direct Email (Fallback)

If Formspree fails, the form shows:
- Error message with direct contact information
- Phone: +44 7763459923
- Email: Dent.Master.Aberdeenshire@gmail.com

### Current Status

✅ Formspree account configured
✅ Form ID updated: xblqjwno
✅ Form validation working
✅ Privacy consent required
✅ Professional error messages
✅ Fallback to direct contact info

---

**Contact form is now LIVE and ready to receive submissions!**

Test it by filling out the form on your website. You should receive an email at Dent.Master.Aberdeenshire@gmail.com
