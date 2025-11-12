# Deployment Guide - Scotland Business Solutions Website

## Project Overview

This document provides comprehensive deployment instructions for the Scotland Business Solutions website, a production-ready React application built with Vite and Tailwind CSS.

## Quick Start

### Local Development

1. **Clone and Setup**:
```bash
git clone <repository-url>
cd scotland-business-website
pnpm install
```

2. **Start Development Server**:
```bash
pnpm run dev
```

3. **Build for Production**:
```bash
pnpm run build
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides the easiest deployment with automatic builds and global CDN.

**Setup Steps**:
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`
3. Deploy automatically on push to main branch

**Configuration**: Use the provided `deploy/vercel.json` for optimal settings.

### Option 2: Docker Deployment

For containerized deployment on any cloud provider or self-hosted environment.

**Build and Run**:
```bash
# Build the Docker image
docker build -f deploy/Dockerfile -t scotland-business-website .

# Run the container
docker run -p 80:80 scotland-business-website
```

**Using Docker Compose**:
```bash
cd deploy
docker-compose up -d
```

### Option 3: Static Hosting

Deploy the built files to any static hosting provider (Netlify, GitHub Pages, AWS S3, etc.).

**Build Process**:
```bash
pnpm run build
# Upload contents of 'dist' folder to your hosting provider
```

## Environment Configuration

### Required Environment Variables

Create a `.env` file in the project root:

```env
# Contact Information
VITE_CONTACT_EMAIL=info@scotlandbusiness.co.uk
VITE_CONTACT_PHONE=+44 131 123 4567

# Office Locations
VITE_EDINBURGH_ADDRESS="123 Princes Street, Edinburgh EH2 4AD"
VITE_GLASGOW_ADDRESS="456 Buchanan Street, Glasgow G1 2FF"

# Analytics (Optional)
VITE_ANALYTICS_ID=your-analytics-id

# API Configuration (If using external APIs)
VITE_API_URL=https://api.scotlandbusiness.co.uk
```

### Production Environment Variables

For production deployment, ensure these variables are set in your hosting platform:

- `NODE_ENV=production`
- All VITE_ prefixed variables from above

## CI/CD Pipeline

### GitHub Actions

The project includes a complete CI/CD pipeline in `deploy/github-actions.yml`.

**Required Secrets**:
- `VERCEL_TOKEN`: Vercel deployment token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID
- `DOCKER_USERNAME`: Docker Hub username (for Docker builds)
- `DOCKER_PASSWORD`: Docker Hub password

**Pipeline Features**:
- Automated testing and linting
- Build verification
- Staging deployment on develop branch
- Production deployment on main branch
- Docker image building and publishing
- Security scanning with Trivy

### Manual Deployment

For manual deployment without CI/CD:

1. **Build the project**:
```bash
pnpm run build
```

2. **Test the build locally**:
```bash
pnpm run preview
```

3. **Deploy the dist folder** to your hosting provider

## Performance Optimization

### Build Optimization

The project is configured for optimal performance:

- **Code Splitting**: Automatic code splitting for better loading
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image and CSS optimization
- **Compression**: Gzip compression enabled

### Runtime Performance

- **Lazy Loading**: Components and images load on demand
- **Caching**: Aggressive caching for static assets
- **CDN**: Global content delivery network support

## Security Configuration

### Content Security Policy

The application includes strict CSP headers:

```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
```

### Security Headers

All deployments include security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## Monitoring and Analytics

### Performance Monitoring

Recommended monitoring setup:
- **Core Web Vitals**: Monitor LCP, FID, CLS
- **Uptime Monitoring**: 99.9% uptime target
- **Error Tracking**: Real-time error monitoring

### Analytics Integration

The website supports:
- Google Analytics 4
- Google Tag Manager
- Custom analytics solutions

## Backup and Recovery

### Automated Backups

- **Source Code**: Version controlled in Git
- **Content**: JSON files backed up with code
- **Assets**: Stored in version control

### Recovery Procedures

1. **Code Recovery**: Restore from Git repository
2. **Quick Deployment**: Redeploy from any commit
3. **Rollback**: Instant rollback to previous version

## Troubleshooting

### Common Issues

**Build Failures**:
- Check Node.js version (requires 18+)
- Verify all dependencies are installed
- Check for TypeScript errors

**Deployment Issues**:
- Verify environment variables are set
- Check build output directory is correct
- Ensure hosting platform supports SPA routing

**Performance Issues**:
- Enable compression on hosting platform
- Verify CDN configuration
- Check image optimization settings

### Support Contacts

For technical support:
- **Development Team**: dev@scotlandbusiness.co.uk
- **Infrastructure**: ops@scotlandbusiness.co.uk
- **Emergency**: +44 131 123 4567

## Maintenance Schedule

### Regular Updates

- **Dependencies**: Monthly security updates
- **Content**: Quarterly content review
- **Performance**: Monthly performance audits
- **Security**: Continuous security monitoring

### Backup Schedule

- **Code**: Continuous (Git)
- **Content**: Daily automated backups
- **Full System**: Weekly complete backups

---

This deployment guide ensures reliable, secure, and performant deployment of the Scotland Business Solutions website across multiple platforms and environments.

