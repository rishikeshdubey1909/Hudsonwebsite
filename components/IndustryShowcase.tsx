'use client'

import { motion } from 'framer-motion'
import { useMemo, memo } from 'react'
import { HOME } from '@/constants/content'
import SectionHeader from './ui/SectionHeader'
import BaseCard from './ui/BaseCard'

function IndustryShowcase() {
  const industryData = useMemo(() => 
    HOME.industryShowcase.map((industry) => ({
      title: industry.showcase.title,
      bullets: [...industry.showcase.bullets],
      href: industry.href,
      icon: industry.icon,
    })), [HOME.industryShowcase]
  )
  
  return (
    <section className="relative py-32 overflow-hidden bg-white" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader
          id="industries-heading"
          title="Industry Expertise"
          description="Specialized staffing solutions tailored to your industry's unique requirements and challenges."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industryData.map((industry, index) => (
            <BaseCard key={industry.href} icon={industry.icon} iconSize="text-6xl" title={industry.title} href={industry.href} delay={index * 0.15}>
              <ul className="space-y-4 mb-8">
                {industry.bullets.map((bullet, bulletIndex) => (
                  <motion.li key={bulletIndex} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 + bulletIndex * 0.1 }}>
                    <span className="text-accent text-xl mt-1">✓</span>
                    <span className="text-text/70 leading-relaxed">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </BaseCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(IndustryShowcase)
