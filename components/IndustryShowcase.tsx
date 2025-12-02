'use client'

import { useMemo, memo } from 'react'
import { HOME } from '@/constants/content'
import SolutionsHeader from './SolutionsHeader'
import PremiumIndustryCard from './ui/PremiumIndustryCard'

function IndustryShowcase() {
  const industryData = useMemo(() => 
    HOME.industryShowcase.map((industry) => ({
      title: industry.showcase.title,
      bullets: industry.showcase.bullets,
      href: industry.href,
      icon: industry.icon,
    })), []
  )
  
  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden bg-white" 
      aria-labelledby="industries-heading"
      data-section-reveal
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div data-reveal-child>
          <SolutionsHeader
            id="industries-heading"
            title="Industry Expertise"
            description="Specialized staffing solutions tailored to your industry's unique requirements and challenges."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10" data-card-container>
          {industryData.map((industry, index) => (
            <div key={industry.href} data-card-reveal>
              <PremiumIndustryCard
                icon={industry.icon}
                title={industry.title}
                bullets={industry.bullets}
                href={industry.href}
                delay={index * 0.15}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(IndustryShowcase)
