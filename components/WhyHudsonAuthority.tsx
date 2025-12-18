'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import ModernIcon from './ui/ModernIcon'

interface AuthorityPillar {
  title: string
  description: string
  icon: string
}

const authorityPillars: AuthorityPillar[] = [
  {
    title: 'Deep Industry Knowledge',
    description: 'Specialized expertise across Oil & Gas, IT, and Hospitality sectors with proven success in complex staffing scenarios.',
    icon: 'briefcase',
  },
  {
    title: 'Global Talent Network',
    description: 'Established presence in key markets enabling seamless talent sourcing and deployment across continents.',
    icon: 'globe',
  },
  {
    title: 'Long-term Partnership Approach',
    description: 'We build enduring relationships with organizations through trust, reliability, and consistent delivery excellence.',
    icon: 'users',
  },
]

function WhyHudsonAuthority() {
  return (
    <section 
      className="relative py-12 lg:py-16 overflow-hidden bg-white" 
      aria-labelledby="why-hudson-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, currentColor 1px, transparent 1px),
                          linear-gradient(-45deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="why-hudson-heading" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3">
            <span className="gradient-text">Why Choose Hudson</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Proven expertise, global capabilities, and unwavering commitment to excellence
          </p>
        </motion.div>

        {/* Authority Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {authorityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 border border-secondary hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center border border-accent/10 group-hover:border-accent/20 transition-colors">
                    <div className="w-8 h-8 text-accent">
                      <ModernIcon name={pillar.icon} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-text/70 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Accent Line */}
                <motion.div
                  className="mt-4 w-12 h-0.5 bg-gradient-to-r from-accent to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(WhyHudsonAuthority)
