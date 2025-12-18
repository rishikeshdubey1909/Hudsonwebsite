'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MidPageCTA() {
  return (
    <section 
      className="relative py-12 lg:py-16 overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background with Hudson Colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px),
                            linear-gradient(-45deg, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Let's Discuss Your Needs
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Connect with our team to explore how we can support your organization
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-accent font-semibold rounded-xl hover:bg-white/95 transition-all duration-200 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
