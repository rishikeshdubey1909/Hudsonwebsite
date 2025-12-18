'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HOME } from '@/constants/content'
import ModernIcon from './ui/ModernIcon'

export default function SimplifiedSolutions() {
  return (
    <section 
      className="relative py-12 lg:py-16 overflow-hidden bg-white" 
      aria-labelledby="solutions-heading"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(240, 90, 40, 0.04), transparent 70%)',
          }}
        />
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
          <h2 id="solutions-heading" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3">
            <span className="gradient-text">Our Solutions</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Comprehensive workforce solutions across enterprise software, IT staffing, and specialized industries
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME.segmentCards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link href={card.href} className="group block h-full">
                <div className="relative h-full bg-white rounded-2xl p-6 border border-secondary hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center border border-accent/10 group-hover:border-accent/20 transition-colors">
                      <div className="w-7 h-7 text-accent">
                        <ModernIcon name={card.icon} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {card.card.title}
                  </h3>

                  {/* Description - Simplified */}
                  <p className="text-text/70 leading-relaxed mb-4 line-clamp-2 text-sm">
                    {card.card.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
