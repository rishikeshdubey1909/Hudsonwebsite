import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchemaInjector from '@/components/SchemaInjector'
import { BRAND } from '@/constants/content'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: `About Us - ${BRAND.name}`,
  description: `Learn about ${BRAND.shortName}, founded in ${BRAND.founded}, and our mission to provide global workforce solutions.`,
  keywords: ['about Hudson', 'Hudson manpower', 'company history', 'founders', 'workforce solutions'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About Us - ${BRAND.name}`,
    description: `Founded in ${BRAND.founded}, ${BRAND.shortName} delivers reliable staffing solutions worldwide.`,
    url: `${BRAND.url}/about`,
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: BRAND.name,
    foundingDate: BRAND.founded,
    founder: [
      {
        '@type': 'Person',
        name: BRAND.founders.ceo.name,
        jobTitle: BRAND.founders.ceo.title,
      },
      {
        '@type': 'Person',
        name: BRAND.founders.coo.name,
        jobTitle: BRAND.founders.coo.title,
      },
    ],
    description: BRAND.description,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: BRAND.offices.usa.street,
        addressLocality: BRAND.offices.usa.city,
        addressRegion: BRAND.offices.usa.state,
        postalCode: BRAND.offices.usa.zip,
        addressCountry: BRAND.offices.usa.country,
      },
      {
        '@type': 'PostalAddress',
        streetAddress: `${BRAND.offices.india.street}, ${BRAND.offices.india.area}`,
        addressLocality: BRAND.offices.india.city,
        postalCode: BRAND.offices.india.zip,
        addressCountry: BRAND.offices.india.country,
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <SchemaInjector schema={aboutSchema} />
      <Navbar />
      <AboutPageClient />
      <Footer />
    </>
  )
}

