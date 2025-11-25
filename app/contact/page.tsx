import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaInjector from '@/components/SchemaInjector'
import { BRAND } from '@/constants/content'
import ContactFormClient from './ContactFormClient'

export const metadata: Metadata = {
  title: `Contact Us - ${BRAND.name}`,
  description: `Get in touch with ${BRAND.shortName} for staffing solutions. Contact our team for Oil & Gas, IT, and Hospitality staffing needs.`,
  keywords: ['contact Hudson', 'staffing contact', 'hire talent', 'workforce solutions', 'Hudson contact'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact Us - ${BRAND.name}`,
    description: `Get in touch with ${BRAND.shortName} for your staffing needs.`,
    url: `${BRAND.url}/contact`,
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: BRAND.name,
    email: BRAND.email,
    telephone: BRAND.phone.usa,
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

export default function ContactPage() {
  return (
    <>
      <SchemaInjector schema={contactSchema} />
      <Navbar />
      <ContactFormClient />
      <Footer />
    </>
  )
}

