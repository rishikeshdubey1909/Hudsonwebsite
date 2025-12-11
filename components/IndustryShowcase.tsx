'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface IndustryPanel {
  title: string
  bullets: string[]
  href: string
  icon: string
}

const industries: IndustryPanel[] = [
  {
    title: 'Oil & Gas Staffing',
    bullets: [
      'Expert field technicians and engineers',
      'Compliance with HSE standards',
      'Rapid deployment for critical projects',
    ],
    href: '/oil-and-gas-staffing',
    icon: '⚡',
  },
  {
    title: 'US IT Staffing & Technology',
    bullets: [
      'Top-tier software developers and engineers',
      'Cloud architecture and DevOps specialists',
      'Agile teams for enterprise projects',
    ],
    href: '/us-it-staffing',
    icon: '💻',
  },
  {
    title: 'Hospitality & F&B Workforce',
    bullets: [
      'Skilled hospitality professionals',
      'Seasonal and permanent placements',
      'Multi-language support capabilities',
    ],
    href: '/hospitality-staffing',
    icon: '🏨',
  },
]

export default function IndustryShowcase() {
  return (
    <section className="relative py-32 overflow-hidden bg-white" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="industries-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Industry Expertise</span>
          </h2>
          <p className="text-xl text-text/70 max-w-2xl mx-auto">
            Specialized staffing solutions tailored to your industry's unique requirements and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ industry, index }: { industry: IndustryPanel; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <motion.div
        className="relative glass rounded-3xl p-8 border border-white/50 shadow-soft h-full overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          y: -8,
        }}
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
          <motion.div
            className="text-6xl mb-6"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, 15, -15, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {industry.icon}
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-dark mb-6"
            animate={{
              color: isHovered ? '#F05A28' : '#000000',
            }}
            transition={{ duration: 0.3 }}
          >
            {industry.title}
          </motion.h3>

          <ul className="space-y-4 mb-8">
            {industry.bullets.map((bullet, bulletIndex) => (
              <motion.li
                key={bulletIndex}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + bulletIndex * 0.1 }}
              >
                <motion.span
                  className="text-accent text-xl mt-1"
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5, delay: bulletIndex * 0.1 }}
                >
                  ✓
                </motion.span>
                <span className="text-text/70 leading-relaxed">{bullet}</span>
              </motion.li>
            ))}
          </ul>

          <Link
            href={industry.href}
            className="inline-flex items-center gap-2 text-accent font-semibold group/link"
          >
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Learn More
            </motion.span>
            <motion.span
              animate={{ x: isHovered ? [0, 5, 0] : 0 }}
              transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
            >
              →
            </motion.span>
          </Link>
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
