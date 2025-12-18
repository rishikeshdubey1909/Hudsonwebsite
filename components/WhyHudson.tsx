'use client'

import { memo } from 'react'
import { HOME } from '@/constants/content'
import SolutionsHeader from './SolutionsHeader'
import PremiumTrustCard from './ui/PremiumTrustCard'

function WhyHudson() {
  return (
    <section 
      className="relative py-28 lg:py-36 overflow-hidden bg-light" 
      aria-labelledby="why-hudson-heading"
      data-section-reveal
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
        <div data-reveal-child>
          <SolutionsHeader
            id="why-hudson-heading"
            title="Why Choose Hudson"
            description="Trusted by leading companies worldwide for reliable workforce solutions and exceptional service delivery."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {HOME.trustSignals.map((signal, index) => (
            <PremiumTrustCard
              key={signal.label}
              icon={signal.icon}
              value={signal.value}
              label={signal.label}
              description={signal.description}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(WhyHudson)
