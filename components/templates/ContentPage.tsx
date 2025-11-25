import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaInjector from '@/components/SchemaInjector'
import ContentPageClient from './ContentPageClient'

interface ContentPageProps {
  content: {
    href: string
    title: string
    meta: {
      title: string
      description: string
      keywords?: readonly string[]
    }
    hero: {
      heading: string
      description: string
    }
    features: ReadonlyArray<{
      title: string
      description: string
    }>
    cta: {
      text: string
      href: string
    }
  }
}

export function generateMetadata(content: ContentPageProps['content']): Metadata {
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

export default function ContentPage({ content }: ContentPageProps) {
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

  return (
    <>
      <SchemaInjector schema={breadcrumbSchema} />
      <Navbar />
      <ContentPageClient content={content} />
      <Footer />
    </>
  )
}

