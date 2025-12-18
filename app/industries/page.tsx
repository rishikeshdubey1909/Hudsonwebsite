import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchemaInjector from '@/components/SchemaInjector'
import { INDUSTRIES_PAGE, BRAND } from '@/constants/content'
import IndustriesPageClient from './IndustriesPageClient'

export const metadata: Metadata = {
  title: INDUSTRIES_PAGE.meta.title,
  description: INDUSTRIES_PAGE.meta.description,
  keywords: [...INDUSTRIES_PAGE.meta.keywords],
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: INDUSTRIES_PAGE.meta.title,
    description: INDUSTRIES_PAGE.meta.description,
    url: `${BRAND.url}/industries`,
  },
}

const industriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: INDUSTRIES_PAGE.meta.title,
  description: INDUSTRIES_PAGE.meta.description,
  url: `${BRAND.url}/industries`,
}

export default function IndustriesPage() {
  return (
    <>
      <SchemaInjector schema={industriesSchema} />
      <Navbar />
      <IndustriesPageClient />
      <Footer />
    </>
  )
}

