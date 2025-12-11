'use client'

import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import ModernIcon from './ModernIcon'

interface UltraPremiumCardProps {
  icon: string
  title: string
  description: string
  href: string
  delay?: number
}

export default function UltraPremiumCard({ icon, title, description, href, delay = 0 }: UltraPremiumCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const handleHoverStart = useCallback(() => setIsHovered(true), [])
  const handleHoverEnd = useCallback(() => setIsHovered(false), [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="group h-full"
    >
      <Link href={href} className="block h-full">
        <motion.div
          className="relative h-full bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.04)]"
          whileHover={{ 
            y: -3,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.06)'
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Premium Top Strip - Icon Section */}
          <div className="relative px-8 pt-12 pb-10 bg-gradient-to-br from-accent/4 via-accent/2 to-transparent backdrop-blur-[2px]">
            {/* Subtle frosted glass effect */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
            <motion.div
              className="relative flex items-center justify-center"
              animate={isHovered ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Soft blurred translucent circle/pill for icon */}
              <div className="relative">
                {/* Outer glow */}
                <motion.div
                  className="absolute inset-0 bg-accent/15 blur-2xl rounded-full"
                  animate={isHovered ? { 
                    scale: 1.2,
                    opacity: 0.6
                  } : { 
                    scale: 1,
                    opacity: 0.3
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Icon container */}
                <motion.div
                  className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent/12 to-accent/6 border border-accent/20 flex items-center justify-center backdrop-blur-md shadow-[0_4px_12px_rgba(251,146,60,0.1)]"
                  animate={isHovered ? { 
                    boxShadow: '0 0 32px rgba(251, 146, 60, 0.25), 0 4px 16px rgba(251, 146, 60, 0.15)',
                    borderColor: 'rgba(251, 146, 60, 0.3)',
                    scale: 1.05
                  } : {}}
                  transition={{ duration: 0.25 }}
                >
                  <div className="w-10 h-10 text-accent/90">
                    <ModernIcon name={icon} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="px-8 pb-12 pt-8">
            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-dark tracking-[-0.02em] leading-tight">
              {title}
            </h3>

            {/* Description */}
            <motion.p
              className="text-text/70 leading-relaxed text-[15px] lg:text-base mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: delay + 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {description}
            </motion.p>

            {/* Premium CTA */}
            <div
              className="inline-flex items-center gap-2.5 text-accent font-medium text-sm tracking-wide group/cta"
              data-cta-link
            >
              <span className="relative">
                Learn More
                <span
                  className="absolute bottom-[-2px] left-0 right-0 h-[1.5px] bg-accent/40 origin-left scale-x-0"
                  data-cta-underline
                />
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                data-cta-arrow
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>

          {/* Subtle bottom accent line on hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0"
            initial={{ scaleX: 0, opacity: 0 }}
            whileHover={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}
