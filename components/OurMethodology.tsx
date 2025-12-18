'use client'

import { motion } from 'framer-motion'
import ModernIcon from './ui/ModernIcon'

interface MethodologyStep {
  number: string
  title: string
  description: string
  icon: string
}

const methodologySteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We analyze your workforce requirements, organizational culture, and strategic objectives to understand your unique needs.',
    icon: 'briefcase',
  },
  {
    number: '02',
    title: 'Talent Sourcing',
    description: 'Our global network and rigorous screening process identify qualified candidates aligned with your specifications.',
    icon: 'users',
  },
  {
    number: '03',
    title: 'Vetting & Selection',
    description: 'Comprehensive background checks, skills validation, and cultural fit assessment ensure the right match.',
    icon: 'check-circle',
  },
  {
    number: '04',
    title: 'Deployment & Onboarding',
    description: 'Streamlined integration processes with compliance documentation and support for seamless transitions.',
    icon: 'arrows-sync',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: 'Continuous monitoring, performance management, and responsive assistance throughout the engagement.',
    icon: 'lifebuoy',
  },
]

export default function OurMethodology() {
  return (
    <section 
      className="relative py-12 lg:py-16 overflow-hidden bg-secondary/30" 
      aria-labelledby="methodology-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
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
          <h2 id="methodology-heading" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3">
            <span className="gradient-text">Our Methodology</span>
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            A structured approach to delivering exceptional workforce solutions
          </p>
        </motion.div>

        {/* Methodology Steps */}
        <div className="space-y-6">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <div className="relative">
                    <span className="text-6xl lg:text-7xl font-black text-secondary">
                      {step.number}
                    </span>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-xl bg-white border border-accent/10 flex items-center justify-center shadow-sm">
                        <div className="w-6 h-6 text-accent">
                          <ModernIcon name={step.icon} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-5 lg:p-6 border border-secondary hover:border-accent/20 transition-all">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line (except last) */}
              {index < methodologySteps.length - 1 && (
                <div className="hidden lg:block absolute left-[60px] top-full w-0.5 h-6 bg-gradient-to-b from-accent/20 to-transparent mt-3" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
