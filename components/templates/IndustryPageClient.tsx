'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'

interface IndustrySection {
  title: string
  description: string
  items?: ReadonlyArray<string>
}

interface IndustryPageClientProps {
  content: {
    href: string
    title: string
    hero: {
      heading: string
      description: string
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
    <>
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-white to-secondary/50" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <main className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={[{ label: content.title, href: content.href }]} />
            </motion.div>
            
            <div className="max-w-4xl mx-auto mt-12">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-dark mb-2">{content.hero.heading.split(' ').slice(0, -2).join(' ')}</span>
                <span className="block gradient-text">{content.hero.heading.split(' ').slice(-2).join(' ')}</span>
              </motion.h1>
              
              <motion.p
                className="text-xl sm:text-2xl text-text/70 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {content.hero.description}
              </motion.p>

              <div className="space-y-6 mb-16">
                {content.sections.map((section, index) => (
                  <IndustrySectionCard key={index} section={section} index={index} />
                ))}
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + content.sections.length * 0.1 }}
              >
                <Link href={content.cta.href} className="group relative inline-block">
                  <motion.div
                    className="relative px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-white rounded-2xl font-semibold text-lg shadow-glow overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{content.cta.text}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

function IndustrySectionCard({ section, index }: { section: IndustrySection; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="relative glass rounded-3xl p-8 border border-white/50 shadow-soft overflow-hidden"
        whileHover={{ scale: 1.01, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Hover Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6 }}
        />

        <div className="relative z-10">
          <motion.h2
            className="text-2xl font-heading font-semibold text-primary mb-4"
            animate={{
              color: isHovered ? '#F05A28' : '#000000',
            }}
            transition={{ duration: 0.3 }}
          >
            {section.title}
          </motion.h2>
          <p className="text-text/70 mb-4 leading-relaxed">
            {section.description}
          </p>
          {section.items && (
            <motion.ul
              className="list-none text-text/70 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {section.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + itemIndex * 0.1 }}
                >
                  <motion.span
                    className="text-accent text-xl mt-1"
                    animate={{
                      scale: isHovered ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    ✓
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary rounded-b-3xl"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}

