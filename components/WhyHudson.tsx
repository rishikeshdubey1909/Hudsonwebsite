'use client'

import { motion } from 'framer-motion'
import { memo, useState, useCallback } from 'react'
import { HOME } from '@/constants/content'
import SectionHeader from './ui/SectionHeader'
import BaseCard from './ui/BaseCard'

function WhyHudson() {
  return (
    <section className="relative py-32 overflow-hidden bg-light" aria-labelledby="why-hudson-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader
          id="why-hudson-heading"
          title="Why Choose Hudson"
          description="Trusted by leading companies worldwide for reliable workforce solutions and exceptional service delivery."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME.trustSignals.map((signal, index) => (
            <TrustSignalCard key={signal.label} signal={signal} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSignalCard({ signal, index }: { signal: { value: string; label: string; description: string; icon: string }; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const handleHoverStart = useCallback(() => setIsHovered(true), [])
  const handleHoverEnd = useCallback(() => setIsHovered(false), [])

  return (
    <BaseCard
      icon={signal.icon}
      iconSize="text-4xl"
      title={signal.label}
      description={signal.description}
      delay={index * 0.1}
      hoverY={-5}
      showShine={false}
    >
      <motion.div
        className="text-4xl font-bold gradient-text mb-2"
        animate={{ backgroundPosition: isHovered ? ['0%', '100%', '0%'] : '0%' }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {signal.value}
      </motion.div>
    </BaseCard>
  )
}

export default memo(WhyHudson)
