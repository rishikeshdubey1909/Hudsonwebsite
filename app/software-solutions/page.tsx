import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchemaInjector from '@/components/SchemaInjector'
import ContentPage from '@/components/templates/ContentPage'
import { SOFTWARE_SOLUTIONS } from '@/constants/content'

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
    url: `https://hudsonit.com${SOFTWARE_SOLUTIONS.href}`,
  },
}

const softwareSolutionsContent = {
  href: SOFTWARE_SOLUTIONS.href,
  title: SOFTWARE_SOLUTIONS.title,
  meta: SOFTWARE_SOLUTIONS.meta,
  hero: SOFTWARE_SOLUTIONS.hero,
  features: SOFTWARE_SOLUTIONS.features,
  cta: SOFTWARE_SOLUTIONS.cta,
}

export default function SoftwareSolutionsPage() {
  return (
    <>
      <SchemaInjector schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Software Development',
        provider: {
          '@type': 'Organization',
          name: 'Hudson Information Technology & Manpower Services',
        },
        description: SOFTWARE_SOLUTIONS.meta.description,
        areaServed: 'Worldwide',
      }} />
      <ContentPage content={softwareSolutionsContent} />
    </>
  )
}

