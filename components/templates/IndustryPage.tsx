import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaInjector from '@/components/SchemaInjector'
import IndustryPageClient from './IndustryPageClient'

interface IndustrySection {
  title: string
  description: string
  items?: ReadonlyArray<string>
}

interface IndustryPageProps {
  content: {
    href: string
    title: string
    meta: {
      title: string
      description: string
      keywords?: ReadonlyArray<string>
    }
    hero: {
      heading: string
      description: string
      image?: string
    }
    sections: ReadonlyArray<IndustrySection>
    cta: {
      text: string
      href: string
    }
  }
}

export function generateMetadata(content: IndustryPageProps['content']): Metadata {
  return {
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords ? [...content.meta.keywords] : undefined,
    alternates: {
      canonical: content.href,
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `https://hudsonit.com${content.href}`,
    },
  }
}

export default function IndustryPage({ content }: IndustryPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hudsonit.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.title,
        item: `https://hudsonit.com${content.href}`,
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: content.title,
    provider: {
      '@type': 'Organization',
      name: 'Hudson Information Technology & Manpower Services',
    },
    description: content.meta.description,
    areaServed: content.href.includes('us-it') ? 'United States' : 'Worldwide',
  }

  return (
    <>
      <SchemaInjector schema={breadcrumbSchema} />
      <SchemaInjector schema={serviceSchema} />
      <Navbar />
      <IndustryPageClient content={content} />
      <Footer />
    </>
  )
}

