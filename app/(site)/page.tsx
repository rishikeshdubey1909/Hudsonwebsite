import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SegmentCard from '@/components/SegmentCard'
import WhyHudson from '@/components/WhyHudson'
import IndustryShowcase from '@/components/IndustryShowcase'
import Footer from '@/components/Footer'
import SchemaInjector from '@/components/SchemaInjector'
import SolutionsHeader from '@/components/SolutionsHeader'
import { HOME, BRAND } from '@/constants/content'

export const metadata: Metadata = {
  title: 'Global Workforce Solutions for Oil & Gas, IT & Hospitality',
  description: 'Hudson delivers reliable, compliant and scalable staffing solutions for Oil & Gas, IT, and Hospitality industries worldwide. Connect with 10,000+ verified professionals.',
  keywords: ['staffing solutions', 'oil and gas staffing', 'IT staffing', 'hospitality staffing', 'workforce solutions', 'talent acquisition', 'Hudson', 'global staffing', 'manpower services'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hudson IT & Manpower Services | Global Workforce Solutions',
    description: 'Hudson delivers reliable, compliant and scalable staffing solutions for Oil & Gas, IT, and Hospitality industries worldwide.',
    url: 'https://hudsonit.com',
    siteName: 'Hudson IT & Manpower Services',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hudson IT & Manpower Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

// Schema Markup for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND.name,
  url: BRAND.url,
  logo: `${BRAND.url}/images/logo.png`,
  description: `Global workforce solutions for ${BRAND.industries}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND.offices.usa.street,
    addressLocality: BRAND.offices.usa.city,
    addressRegion: BRAND.offices.usa.state,
    postalCode: BRAND.offices.usa.zip,
    addressCountry: BRAND.offices.usa.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BRAND.phone.usa,
    contactType: 'Customer Service',
    email: BRAND.email,
  },
  sameAs: [
    BRAND.social.linkedin,
  ],
}

// Schema Markup for Website
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND.name,
  url: BRAND.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BRAND.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// Schema Markup for Service
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Staffing Services',
  provider: {
    '@type': 'Organization',
    name: BRAND.name,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Staffing Solutions',
    itemListElement: HOME.industryShowcase.map((industry) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: industry.title,
        description: industry.card.description,
      },
    })),
  },
}

export default function HomePage() {
  return (
    <>
      <SchemaInjector schema={organizationSchema} />
      <SchemaInjector schema={websiteSchema} />
      <SchemaInjector schema={serviceSchema} />
      <Navbar />
      <main className="relative">
        <Hero />
        
        {/* Our Solutions Section - Ultra Premium */}
        <section 
          className="relative py-28 lg:py-36 overflow-hidden bg-white" 
          aria-labelledby="services-heading"
          data-section-reveal
        >
          {/* Premium Background Texture */}
          {/* Ultra-light noise/grain layer */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E")`,
              opacity: 0.03,
            }}
          />
          
          {/* Very subtle radial gradient behind cards */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(240, 90, 40, 0.06), transparent 70%)',
            }}
          />
          
          {/* Subtle dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }} 
          />
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
            <div data-reveal-child>
              <SolutionsHeader
                id="services-heading"
                title="Our Solutions"
                description="Comprehensive workforce solutions tailored to your industry needs"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 max-w-7xl mx-auto" data-card-container>
              {/* First 3 items - full width row */}
              {HOME.segmentCards.slice(0, 3).map((card, index) => (
                <div key={card.href} data-card-reveal>
                  <SegmentCard 
                    icon={card.icon} 
                    logo={card.logo}
                    title={card.card.title} 
                    description={card.card.description} 
                    href={card.href} 
                    delay={index * 0.08} 
                  />
                </div>
              ))}
              {/* Last 2 items - centered in a 3-column grid */}
              <div className="lg:col-span-3 lg:flex lg:justify-center lg:gap-6 lg:gap-x-8">
                {HOME.segmentCards.slice(3).map((card, index) => (
                  <div key={card.href} data-card-reveal className="w-full md:w-auto md:max-w-sm lg:max-w-md">
                    <SegmentCard 
                      icon={card.icon} 
                      logo={card.logo}
                      title={card.card.title} 
                      description={card.card.description} 
                      href={card.href} 
                      delay={(index + 3) * 0.08} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhyHudson />
        <IndustryShowcase />
      </main>
      <Footer />
    </>
  )
}

