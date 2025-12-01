'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

interface SectionHeaderProps {
  title: string
  description: string
  id?: string
}

function SectionHeader({ title, description, id }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 id={id} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-xl text-text/70 max-w-2xl mx-auto">{description}</p>
    </motion.div>
  )
}

export default memo(SectionHeader)


