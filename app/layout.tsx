import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Hudson IT & Manpower Services | Global Workforce Solutions',
    template: '%s | Hudson IT & Manpower Services'
  },
  description: 'Hudson delivers reliable, compliant and scalable staffing solutions for Oil & Gas, IT, and Hospitality industries worldwide. Connect with 10,000+ verified professionals.',
  keywords: ['staffing solutions', 'oil and gas staffing', 'IT staffing', 'hospitality staffing', 'workforce solutions', 'talent acquisition', 'Hudson'],
  authors: [{ name: 'Hudson Information Technology & Manpower Services' }],
  creator: 'Hudson IT & Manpower Services',
  publisher: 'Hudson IT & Manpower Services',
  metadataBase: new URL('https://hudsonit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hudsonit.com',
    siteName: 'Hudson IT & Manpower Services',
    title: 'Hudson IT & Manpower Services | Global Workforce Solutions',
    description: 'Hudson delivers reliable, compliant and scalable staffing solutions for Oil & Gas, IT, and Hospitality industries worldwide.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hudson IT & Manpower Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hudson IT & Manpower Services | Global Workforce Solutions',
    description: 'Hudson delivers reliable, compliant and scalable staffing solutions for Oil & Gas, IT, and Hospitality industries worldwide.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}

