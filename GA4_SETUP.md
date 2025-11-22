# Google Analytics 4 (GA4) Setup Guide

## Current Status
✅ GA4 tracking code has been added to `index.html`  
⚠️ **ACTION REQUIRED:** Replace placeholder with your actual Measurement ID

## How to Get Your GA4 Measurement ID

### Step 1: Create Google Analytics Account (if you don't have one)
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Fill in your account details

### Step 2: Set Up Property
1. Enter property name: **Dent Master Aberdeenshire**
2. Select timezone: **United Kingdom**
3. Select currency: **Pound Sterling (£)**
4. Click "Next"

### Step 3: Business Information
1. Industry: **Automotive**
2. Business size: **Small**
3. Select how you'll use Google Analytics
4. Click "Create"
5. Accept Terms of Service

### Step 4: Set Up Data Stream
1. Select platform: **Web**
2. Enter website URL: **https://dentmaster-aberdeenshire.com**
3. Stream name: **Dent Master Website**
4. Click "Create stream"

### Step 5: Get Your Measurement ID
1. You'll see your **Measurement ID** (format: G-XXXXXXXXXX)
2. Copy this ID

### Step 6: Update Website
1. Open `index.html` in your project
2. Find these two lines:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```
and
```javascript
gtag('config', 'G-XXXXXXXXXX');
```
3. Replace **G-XXXXXXXXXX** with your actual Measurement ID
4. Save the file
5. Commit and deploy changes

## What GA4 Will Track

### Automatic Events
- Page views
- Scroll depth
- Outbound clicks
- File downloads
- Video engagement

### Enhanced Measurement (enabled by default)
- Site search
- Form interactions
- Engagement time
- User demographics

## Recommended Custom Events

You can add custom event tracking for:
- Quote form submissions
- Contact form submissions
- Phone number clicks
- Service page views
- Gallery image views

## Verify Installation

After deploying:
1. Go to Google Analytics
2. Navigate to Reports → Realtime
3. Visit your website
4. You should see your visit in real-time

## Privacy & GDPR Compliance

✅ Cookie banner is already implemented in the website  
✅ Users can opt-in/opt-out of analytics  
✅ Compliant with UK GDPR requirements

## Useful Reports to Monitor

1. **Acquisition** → See where visitors come from
2. **Engagement** → Most visited pages, time on site
3. **Conversions** → Track quote requests (after setting up goals)
4. **Demographics** → Age, gender, location of visitors

## Setting Up Conversion Goals

To track quote form submissions as conversions:
1. Go to Admin → Events
2. Click "Create event"
3. Event name: `quote_submission`
4. Mark as conversion
5. Configure based on form submission

## Need Help?

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Event Tracking Guide](https://developers.google.com/analytics/devguides/collection/ga4/events)

---

**Note:** It takes 24-48 hours for GA4 to start showing meaningful data after initial setup.
