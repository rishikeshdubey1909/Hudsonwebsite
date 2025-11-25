'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface SegmentCardProps {
  icon: string
  title: string
  description: string
  href: string
  delay?: number
}

export default function SegmentCard({ icon, title, description, href, delay = 0 }: SegmentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <Link href={href} className="block h-full">
        <motion.div
          className="relative h-full glass rounded-3xl p-8 border border-white/50 shadow-soft overflow-hidden"
          whileHover={{ 
            scale: 1.02,
            y: -8,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Hover Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 0.6 }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="text-5xl mb-6"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                rotate: isHovered ? [0, 10, -10, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-dark mb-4"
              animate={{
                color: isHovered ? '#F05A28' : '#000000',
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            <p className="text-text/70 mb-6 leading-relaxed">
              {description}
            </p>

            <motion.div
              className="flex items-center gap-2 text-accent font-semibold"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Learn More</span>
              <motion.span
                animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
              >
                →
              </motion.span>
            </motion.div>
          </div>

          {/* Bottom Accent Line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary rounded-b-3xl"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}
