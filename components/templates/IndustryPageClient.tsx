'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface IndustrySection {
  title: string
  description: string
  items?: ReadonlyArray<string>
  note?: string
}

interface IndustryPageClientProps {
  content: {
    href: string
    title: string
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

export default function IndustryPageClient({ content }: IndustryPageClientProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {content.hero.image && (
          <div className="absolute inset-0 z-0">
            <Image
              src={content.hero.image}
              alt={content.hero.heading}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
        )}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${content.hero.image ? 'text-white' : ''}`}>
              <span className={content.hero.image ? '' : 'gradient-text'}>{content.hero.heading}</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${content.hero.image ? 'text-white/90' : 'text-text/70'}`}>
              {content.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
            {content.sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="glass rounded-3xl p-8 border border-white/50 shadow-soft"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-text/70 leading-relaxed mb-6">{section.description}</p>
                {section.items && (
                  <ul className="space-y-2 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-text/70">
                        <span className="text-accent mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.note && (
                  <div className="mt-6 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                    <p className="text-text/80 italic leading-relaxed">{section.note}</p>
                  </div>
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
