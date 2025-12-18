# Hudson IT & Manpower Services Website

A high-performance, SEO-optimized website built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Enterprise-Grade SEO**: Complete metadata, schema markup, and structured data
- **Performance Optimized**: Lighthouse 95+ target with optimized images and code splitting
- **Responsive Design**: Mobile-first approach with clean, minimal corporate aesthetic
- **Accessibility**: WCAG AA compliant with proper ARIA labels
- **Modern Animations**: Smooth Framer Motion transitions and hover effects

## 🎨 Branding

- **Primary Color**: #000000 (Black)
- **Accent Color**: #F05A28 (Orange)
- **Secondary Color**: #F2F2F2 (Light Gray)
- **Text Color**: #333333 (Dark Gray)
- **Fonts**: Montserrat/Poppins (Headings), Open Sans/Lato (Body)

## 📁 Project Structure

```
/app
  /(site)
    page.tsx          # Homepage
    layout.tsx         # Site layout
  /for-employers      # Employers page
  /for-employees      # Employees page
  /oil-and-gas-staffing
  /us-it-staffing
  /hospitality-staffing
  layout.tsx          # Root layout with metadata
  globals.css         # Global styles

/components
  Navbar.tsx          # Sticky navigation
  Hero.tsx            # Hero section
  SegmentCard.tsx     # Service cards
  WhyHudson.tsx       # Trust signals
  IndustryShowcase.tsx # Industry panels
  Footer.tsx          # Footer with links
  Breadcrumbs.tsx    # Breadcrumb navigation
  SchemaInjector.tsx  # JSON-LD schema
```

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 SEO Features Implemented

### Metadata API
- Unique titles and descriptions per page
- Canonical tags
- Open Graph tags
- Twitter Card tags

### Schema Markup (JSON-LD)
- Organization schema
- Website schema
- BreadcrumbList schema
- Service schema
- JobPosting placeholder (ready for dynamic content)

### Technical SEO
- Optimized images via next/image
- Lazy loading
- Preload hero fonts
- Prefetch routes
- Component-level code splitting
- Mobile-first layout
- CLS-free design
- Proper heading hierarchy (h1 → h2 → h3)

### Content SEO
- Keyword-rich, search-intent-friendly copy
- Industry-specific terminology
- Human-readable content (no lorem ipsum)
- ATS-friendly language

## 🎯 Pages

- **Homepage** (`/`): Main landing page with hero, services, trust signals, and industry showcase
- **For Employers** (`/for-employers`): Employer-focused content and CTAs
- **For Employees** (`/for-employees`): Job seeker resources and opportunities
- **Oil & Gas Staffing** (`/oil-and-gas-staffing`): Industry-specific staffing solutions
- **US IT Staffing** (`/us-it-staffing`): Technology talent and IT staffing
- **Hospitality Staffing** (`/hospitality-staffing`): Hospitality and F&B workforce solutions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for production:
```env
NEXT_PUBLIC_SITE_URL=https://hudsonit.com
```

### Google Verification
Update the Google verification code in `app/layout.tsx`:
```typescript
verification: {
  google: 'your-google-verification-code',
}
```

### OG Image
Add your Open Graph image at `/public/images/og-image.jpg` (1200x630px recommended)

## 📊 Performance Targets

- Lighthouse Score: 95+
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.8s

## ♿ Accessibility

- WCAG AA compliant
- Proper ARIA labels
- Color contrast ratios meet standards
- Descriptive alt tags (when images are added)
- Keyboard navigation support
- Screen reader friendly

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify brand colors:
```javascript
colors: {
  primary: '#000000',
  accent: '#F05A28',
  secondary: '#F2F2F2',
  text: '#333333',
}
```

### Fonts
Fonts are loaded via Google Fonts in `app/globals.css`. Modify the import URL to change fonts.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Proprietary - Hudson Information Technology & Manpower Services

## 🤝 Support

For questions or issues, contact: info@hudsonit.com

