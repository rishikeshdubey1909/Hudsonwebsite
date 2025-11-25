import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SegmentCard from '@/components/SegmentCard'
import WhyHudson from '@/components/WhyHudson'
import IndustryShowcase from '@/components/IndustryShowcase'
import Footer from '@/components/Footer'
import SchemaInjector from '@/components/SchemaInjector'
import { HOME, BRAND } from '@/constants/content'

export const metadata: Metadata = {
  title: HOME.meta.title,
  description: HOME.meta.description,
  keywords: [...HOME.meta.keywords],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${BRAND.shortName} IT & Manpower Services | Global Workforce Solutions`,
    description: HOME.meta.description,
    url: BRAND.url,
    siteName: BRAND.name,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: BRAND.name,
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
  description: BRAND.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND.offices.usa.street,
    addressLocality: BRAND.offices.usa.city,
    addressRegion: BRAND.offices.usa.state,
    postalCode: BRAND.offices.usa.zip,
    addressCountry: BRAND.offices.usa.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: BRAND.phone.usa,
      contactType: 'Customer Service',
      email: BRAND.email,
      areaServed: 'US',
    },
    {
      '@type': 'ContactPoint',
      telephone: BRAND.phone.india,
      contactType: 'Customer Service',
      email: BRAND.email,
      areaServed: 'IN',
    },
  ],
  sameAs: [
    BRAND.social.linkedin,
    BRAND.social.twitter,
    BRAND.social.facebook,
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
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: HOME.industryShowcase[0].title,
          description: HOME.industryShowcase[0].card.description,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: HOME.industryShowcase[1].title,
          description: HOME.industryShowcase[1].card.description,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: HOME.industryShowcase[2].title,
          description: HOME.industryShowcase[2].card.description,
        },
      },
    ],
  },
}

export default function HomePage() {
  const segmentCards = HOME.segmentCards.map(card => ({
    icon: card.icon,
    title: card.card.title,
    description: card.card.description,
    href: card.href,
  }))

  return (
    <>
      <SchemaInjector schema={organizationSchema} />
      <SchemaInjector schema={websiteSchema} />
      <SchemaInjector schema={serviceSchema} />
      <Navbar />
      <main>
        <Hero />
        
        {/* Main Segmented Cards Section - Ultra Modern */}
        <section className="relative py-32 overflow-hidden bg-white" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 id="services-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Our Solutions</span>
              </h2>
              <p className="text-xl text-text/70 max-w-2xl mx-auto">
                Comprehensive workforce solutions tailored to your industry needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segmentCards.map((card, index) => (
                <SegmentCard
                  key={card.href}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  href={card.href}
                  delay={index * 0.1}
                />
              ))}
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

