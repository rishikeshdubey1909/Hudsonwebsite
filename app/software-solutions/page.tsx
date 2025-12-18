import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchemaInjector from '@/components/SchemaInjector'
import SoftwareSolutionsPageClient from './SoftwareSolutionsPageClient'
import { SOFTWARE_SOLUTIONS, BRAND } from '@/constants/content'

export const metadata: Metadata = {
  title: SOFTWARE_SOLUTIONS.meta.title,
  description: SOFTWARE_SOLUTIONS.meta.description,
  keywords: [...SOFTWARE_SOLUTIONS.meta.keywords],
  alternates: {
    canonical: SOFTWARE_SOLUTIONS.href,
  },
  openGraph: {
    title: SOFTWARE_SOLUTIONS.meta.title,
    description: SOFTWARE_SOLUTIONS.meta.description,
    url: `${BRAND.url}${SOFTWARE_SOLUTIONS.href}`,
  },
}

const softwareSolutionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Software Development',
  provider: {
    '@type': 'Organization',
    name: BRAND.name,
    url: BRAND.url,
  },
  description: SOFTWARE_SOLUTIONS.meta.description,
  areaServed: 'Worldwide',
  offers: {
    '@type': 'Offer',
    itemOffered: [
      {
        '@type': 'Service',
        name: 'Custom Software Development',
      },
      {
        '@type': 'Service',
        name: 'Enterprise Applications',
      },
      {
        '@type': 'Service',
        name: 'Cloud Solutions',
      },
      {
        '@type': 'Service',
        name: 'Digital Transformation',
      },
    ],
  },
}

export default function SoftwareSolutionsPage() {
  return (
    <>
      <SchemaInjector schema={softwareSolutionsSchema} />
      <Navbar />
      <SoftwareSolutionsPageClient />
      <Footer />
    </>
  )
}

