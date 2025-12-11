import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchemaInjector from '@/components/SchemaInjector'
import { BRAND } from '@/constants/content'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: `About Us | ${BRAND.name}`,
  description: `The Hudson Group comprises HudsonIT Consultancy Ltd and Hudson Manpower Inc. Founded in ${BRAND.founded}, we transform businesses through cutting-edge digital solutions and outstanding staffing services. Meet our leadership team and learn about our principles.`,
  keywords: ['about Hudson', 'Hudson manpower', 'company history', 'founders', 'workforce solutions', 'Hudson Group', 'HudsonIT', 'leadership team', 'Mayank Doultani', 'Vikas Singh'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About Us | ${BRAND.name}`,
    description: `The Hudson Group: Empowering businesses with innovative software and exceptional talent since ${BRAND.founded}.`,
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

