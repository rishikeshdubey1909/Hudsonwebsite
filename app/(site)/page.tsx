import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsProof from '@/components/StatsProof'
import SimplifiedSolutions from '@/components/SimplifiedSolutions'
import OurMethodology from '@/components/OurMethodology'
import WhyHudsonAuthority from '@/components/WhyHudsonAuthority'
import IndustryShowcase from '@/components/IndustryShowcase'
import MidPageCTA from '@/components/MidPageCTA'
import Footer from '@/components/Footer'
import SchemaInjector from '@/components/SchemaInjector'
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
        {/* Hero Section - LOCKED, DO NOT MODIFY */}
        <Hero />
        
        {/* Stats Proof - ONE stats section with counters */}
        <StatsProof />

        {/* Our Solutions - High-level service summaries */}
        <SimplifiedSolutions />

        {/* Our Methodology - Hudson's process (5 steps) */}
        <OurMethodology />

        {/* Why Choose Hudson - 3 key differentiators (no stats) */}
        <WhyHudsonAuthority />

        {/* Industry Expertise - Execution details only */}
        <IndustryShowcase />

        {/* Mid-Page CTA Band */}
        <MidPageCTA />
      </main>
      <Footer />
    </>
  )
}

