'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

interface ContentPageClientProps {
  content: {
    href: string
    title: string
    hero: {
      heading: string
      description: string
    }
    features: ReadonlyArray<{
      title: string
      description: string
      items?: readonly string[]
    }>
    cta: {
      text: string
      href: string
    }
  }
}

export default function ContentPageClient({ content }: ContentPageClientProps) {
  return (
    <main className="min-h-screen">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: content.title, href: content.href }]} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">{content.hero.heading}</span>
            </h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
            {content.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass rounded-3xl p-8 border border-white/50 shadow-soft"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-text/70 leading-relaxed mb-6">{feature.description}</p>
                {feature.items && (
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-text/70">
                        <span className="text-accent mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <Link
              href={content.cta.href}
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all"
            >
              {content.cta.text}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
