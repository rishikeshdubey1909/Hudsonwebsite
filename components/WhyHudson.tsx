'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HOME } from '@/constants/content'

interface TrustSignal {
  value: string
  label: string
  description: string
  icon: string
}

const trustSignals: readonly TrustSignal[] = HOME.trustSignals

export default function WhyHudson() {
  return (
    <section className="relative py-32 overflow-hidden bg-light" aria-labelledby="why-hudson-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="why-hudson-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Why Choose Hudson</span>
          </h2>
          <p className="text-xl text-text/70 max-w-2xl mx-auto">
            Trusted by leading companies worldwide for reliable workforce solutions and exceptional service delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustSignals.map((signal, index) => (
            <TrustSignalCard key={signal.label} signal={signal} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSignalCard({ signal, index }: { signal: TrustSignal; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <motion.div
        className="relative glass rounded-3xl p-8 border border-white/50 shadow-soft h-full overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          y: -5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Hover Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        <div className="relative z-10">
          <motion.div
            className="text-4xl mb-4"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, 10, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {signal.icon}
          </motion.div>

          <motion.div
            className="text-4xl font-bold gradient-text mb-2"
            animate={{
              backgroundPosition: isHovered ? ['0%', '100%', '0%'] : '0%',
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          >
            {signal.value}
          </motion.div>

          <h3 className="text-xl font-bold text-dark mb-3">
            {signal.label}
          </h3>

          <p className="text-text/70 leading-relaxed">
            {signal.description}
          </p>
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
