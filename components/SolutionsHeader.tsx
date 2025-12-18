'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

interface SolutionsHeaderProps {
  id: string
  title: string
  description: string
}

function SolutionsHeader({ id, title, description }: SolutionsHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16 lg:mb-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 id={id} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-xl lg:text-2xl text-text/70 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default memo(SolutionsHeader)

