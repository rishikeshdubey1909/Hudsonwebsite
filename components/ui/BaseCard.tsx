'use client'

import { motion } from 'framer-motion'
import { useState, useCallback, memo } from 'react'
import Link from 'next/link'

interface BaseCardProps {
  icon?: string
  iconSize?: 'text-4xl' | 'text-5xl' | 'text-6xl'
  title: string
  description?: string
  href?: string
  children?: React.ReactNode
  delay?: number
  className?: string
  showShine?: boolean
  hoverY?: number
}

const cardBaseClasses = "relative glass rounded-3xl p-8 border border-white/50 shadow-soft h-full overflow-hidden"
const hoverTransition = { type: "spring" as const, stiffness: 300, damping: 25 } as const

function BaseCard({ 
  icon, 
  iconSize = 'text-5xl',
  title, 
  description, 
  href, 
  children,
  delay = 0,
  className = '',
  showShine = true,
  hoverY = -8
}: BaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const handleHoverStart = useCallback(() => setIsHovered(true), [])
  const handleHoverEnd = useCallback(() => setIsHovered(false), [])

  const cardContent = (
    <motion.div
      className={`${cardBaseClasses} ${className}`}
      whileHover={{ scale: 1.02, y: hoverY }}
      transition={hoverTransition}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      {showShine && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
      <div className="relative z-10">
        {icon && (
          <motion.div
            className={`${iconSize} mb-6`}
            animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="card-emoji">{icon}</span>
          </motion.div>
        )}
        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isHovered ? 'text-accent' : 'text-dark'}`}>
          {title}
        </h3>
        {description && <p className="text-text/70 mb-6 leading-relaxed">{description}</p>}
        {children}
        {href && (
          <motion.div className="flex items-center gap-2 text-accent font-semibold" whileHover={{ x: 5 }} transition={hoverTransition}>
            <span>Learn More</span>
            <motion.span animate={{ x: isHovered ? [0, 5, 0] : 0 }} transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}>→</motion.span>
          </motion.div>
        )}
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary rounded-b-3xl"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )

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
      {href ? <Link href={href} className="block h-full">{cardContent}</Link> : cardContent}
    </motion.div>
  )
}

export default memo(BaseCard)

