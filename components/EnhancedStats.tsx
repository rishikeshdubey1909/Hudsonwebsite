'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HOME } from '@/constants/content'

interface StatItem {
  value: string
  label: string
  sublabel: string
  context?: string
}

function AnimatedNumber({ value, isInView }: { value: string; isInView: boolean }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return
    }

    if (isNaN(numericValue) || numericValue === 0) {
      setDisplayValue(0)
      return
    }

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(numericValue)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, numericValue])

  if (isNaN(numericValue) || numericValue === 0) {
    return <span>{value}</span>
  }

  return <span>{displayValue}{suffix}</span>
}

export default function EnhancedStats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-secondary/30 to-white overflow-hidden"
      aria-label="Company Statistics"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Proven Track Record
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Delivering Excellence at Scale
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Trusted by leading organizations worldwide for reliable workforce solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {HOME.stats.map((stat, index) => {
            const statRef = useRef<HTMLDivElement>(null)
            const statInView = useInView(statRef, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={stat.label}
                ref={statRef}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Number */}
                <div className="mb-3">
                  <motion.div
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AnimatedNumber value={stat.value} isInView={statInView} />
                  </motion.div>
                </div>

                {/* Label */}
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1">
                  {stat.label}
                </h3>

                {/* Context Line */}
                <p className="text-sm text-text/60">
                  {stat.sublabel}
                </p>

                {/* Decorative Line */}
                <motion.div
                  className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
