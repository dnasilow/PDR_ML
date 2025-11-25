# Dent Master Aberdeenshire - Professional Paintless Dent Repair Website

A modern, responsive, SEO-optimized website for Dent Master Aberdeenshire, a Scottish automotive repair business specializing in Paintless Dent Repair (PDR) services in Fraserburgh, Aberdeenshire, and across Scotland.

## 🚀 Features

- **Modern React SPA** - Built with React 18 and Vite for optimal performance
- **Multi-Page Navigation** - React Router with dedicated pages for Services, About, Gallery, Team, and Contact
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop devices
- **Professional Branding** - Luxury automotive aesthetic with orange accent colors
- **Service Showcase** - Comprehensive PDR services including hail damage, door dings, scratch removal
- **Quote Request Forms** - Integrated Formspree forms with Cloudinary image upload
- **Google Maps Integration** - Interactive map showing business location in Fraserburgh
- **Testimonials Carousel** - Customer reviews with auto-play functionality
- **SEO Optimized** - Complete meta tags, JSON-LD structured data, sitemap.xml, robots.txt
- **Google Analytics 4** - Full GA4 integration with measurement ID: G-BPKVKY04ET
- **GDPR Compliant** - Cookie consent banner and privacy policy

## 🛠 Tech Stack

- **Frontend**: React 18.2.0 + Vite 4.5.14
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 6.22.0
- **Icons**: Lucide React 0.321.0
- **SEO**: React Helmet Async 2.0.4
- **Forms**: Formspree (xblqjwno)
- **Image Upload**: Cloudinary (dl1oyyiun)
- **Analytics**: Google Analytics 4 (G-BPKVKY04ET)
- **Deployment**: Cloudflare Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server runs on `http://localhost:5173/`

## 📝 Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # Reusable UI components (Button)
│   ├── Header.jsx    # Navigation header with mobile menu
│   ├── Hero.jsx      # Homepage hero section
│   ├── Services.jsx  # PDR services showcase
│   ├── About.jsx     # About Maciej and the business
│   ├── Team.jsx      # Team member profiles
│   ├── Gallery.jsx   # Before/after photo gallery
│   ├── Testimonials.jsx  # Customer testimonials carousel
│   ├── Quote.jsx     # Quote request form with image upload
│   ├── Contact.jsx   # Contact form and info
│   ├── Footer.jsx    # Site footer with links
│   ├── CookieBanner.jsx  # GDPR cookie consent
│   └── SEO.jsx       # SEO meta tags component
├── pages/            # Page components
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── AboutPage.jsx
│   ├── GalleryPage.jsx
│   ├── TeamPage.jsx
│   └── ContactPage.jsx
├── data/             # JSON data files
│   ├── services.json
│   ├── team.json
│   ├── testimonials.json
│   ├── resources.json
│   └── caseStudies.json
├── App.jsx           # Main app with routing
└── main.jsx          # Entry point
```

public/
├── images/           # Website images (hero, gallery, team)
├── sitemap.xml       # SEO sitemap
├── robots.txt        # Search engine directives
└── _redirects        # Cloudflare Pages SPA routing

## 🎨 Design

Modern luxury automotive design with:
- Gradient hero background with luxury car imagery
- Clean, professional service cards
- Before/after gallery with hover effects
- Orange (#f97316) brand accent color
- Responsive mobile-first layout
- Professional typography (system fonts)

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and configure:
- GA4 Measurement ID
- Formspree Form ID
- Cloudinary credentials
- Site URL and business info

### SEO Features
✅ Meta tags for all pages  
✅ Open Graph tags  
✅ Twitter Card tags  
✅ JSON-LD structured data (LocalBusiness, AutoRepair, FAQPage)  
✅ Sitemap.xml  
✅ Robots.txt  
✅ Canonical URLs  
✅ Geo-location meta tags  

### Forms Integration
- **Formspree**: Contact and quote forms (xblqjwno)
- **Cloudinary**: Image/video uploads for damage photos (dl1oyyiun)
- **Google Maps**: Embedded location map

### Analytics
- **Google Analytics 4**: Measurement ID G-BPKVKY04ET
- **Cookie Consent**: GDPR-compliant banner

## 🚀 Deployment

### Cloudflare Pages (Recommended)
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Build Settings
```
Build command: npm run build
Output directory: dist
Root directory: /
Node version: 18.x or higher
```

## 📱 Contact Information

**Dent Master Aberdeenshire**  
92 Charlotte St, Fraserburgh, AB43 9JH, Scotland  
📞 +44 7763459923  
📧 Dent.Master.Aberdeenshire@gmail.com  
🌐 https://dentmaster-aberdeenshire.com

## 📚 Documentation

- `GA4_SETUP.md` - Google Analytics setup guide
- `CLOUDINARY_SETUP.md` - Image upload configuration
- `.copilot-instructions.md` - Development guidelines

## 📄 License

© 2025 Dent Master Aberdeenshire. All rights reserved.
