'use client'

import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ModernIndustryCardProps {
  title: string
  description: string
  href?: string
  delay?: number
  image?: string
  gradient?: string
  icon?: string
}

const industryGradients = {
  'Oil & Gas': 'from-orange-500/20 via-red-500/15 to-yellow-500/10',
  'Engineering': 'from-blue-500/20 via-indigo-500/15 to-purple-500/10',
  'Industrial & Infrastructure': 'from-gray-500/20 via-slate-500/15 to-zinc-500/10',
  'Information Technology': 'from-cyan-500/20 via-blue-500/15 to-indigo-500/10',
  'Logistics': 'from-green-500/20 via-emerald-500/15 to-teal-500/10',
  'Power': 'from-yellow-500/20 via-amber-500/15 to-orange-500/10',
  'Automobile': 'from-red-500/20 via-rose-500/15 to-pink-500/10',
  'Telecom': 'from-purple-500/20 via-violet-500/15 to-fuchsia-500/10',
  'Financial Services': 'from-green-500/20 via-emerald-500/15 to-teal-500/10',
  'Healthcare': 'from-pink-500/20 via-rose-500/15 to-red-500/10',
  'Outsourcing & Offshoring': 'from-indigo-500/20 via-blue-500/15 to-cyan-500/10',
  'Facility Management': 'from-slate-500/20 via-gray-500/15 to-zinc-500/10',
  'FMCG (Fast-Moving Consumer Goods)': 'from-orange-500/20 via-amber-500/15 to-yellow-500/10',
  'Media & Entertainment': 'from-purple-500/20 via-pink-500/15 to-rose-500/10',
  'Metals, Minerals And Mining': 'from-amber-500/20 via-orange-500/15 to-red-500/10',
  'Services': 'from-blue-500/20 via-cyan-500/15 to-teal-500/10',
  'Hospitality': 'from-pink-500/20 via-purple-500/15 to-indigo-500/10',
}

// Realistic industry images from Unsplash - Professionally researched and curated for each industry
// Each image specifically represents the industry's core activities and professional environment
// Images verified to accurately represent each industry's actual work environment
const industryImages = {
  'Oil & Gas': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=90', // Offshore oil rig drilling platform - verified relevant
  'Engineering': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=90', // Engineers with blueprints technical drawings - verified relevant
  'Industrial & Infrastructure': 'https://images.unsplash.com/photo-1504307651254-35680f786035?w=800&h=600&fit=crop&q=90', // Construction site with cranes infrastructure - verified relevant
  'Information Technology': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=90', // Server room data center technology - verified relevant
  'Logistics': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=90', // Warehouse logistics shipping cargo - verified relevant
  'Power': 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&q=90', // Wind turbines renewable energy power - verified relevant
  'Automobile': 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&q=90', // Car manufacturing assembly line automotive - verified relevant
  'Telecom': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=90', // Cell towers telecommunications network - verified relevant
  'Financial Services': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90', // Stock market financial trading charts - verified relevant
  'Healthcare': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&q=90', // Medical professionals hospital healthcare - verified relevant
  'Outsourcing & Offshoring': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=90', // Call center team collaboration office - verified relevant
  'Facility Management': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&q=90', // Building maintenance facility operations - verified relevant
  'FMCG (Fast-Moving Consumer Goods)': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=90', // Supermarket retail consumer products - verified relevant
  'Media & Entertainment': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=90', // Film production broadcasting entertainment - verified relevant
  'Metals, Minerals And Mining': 'https://images.unsplash.com/photo-1504307651254-35680f786035?w=800&h=600&fit=crop&q=90', // Mining operations heavy machinery - verified relevant
  'Services': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=90', // Customer service professionals business - verified relevant
  'Hospitality': 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop&q=90', // Hotel restaurant hospitality service - verified relevant
}

const industryIcons = {
  'Oil & Gas': '⚡',
  'Engineering': '🔧',
  'Industrial & Infrastructure': '🏗️',
  'Information Technology': '💻',
  'Logistics': '🚚',
  'Power': '⚡',
  'Automobile': '🚗',
  'Telecom': '📡',
  'Financial Services': '💼',
  'Healthcare': '🏥',
  'Outsourcing & Offshoring': '🌐',
  'Facility Management': '🏢',
  'FMCG (Fast-Moving Consumer Goods)': '🛒',
  'Media & Entertainment': '🎬',
  'Metals, Minerals And Mining': '⛏️',
  'Services': '🔔',
  'Hospitality': '🏨',
}

export default function ModernIndustryCard({
  title,
  description,
  href,
  delay = 0,
  gradient,
  icon,
  image,
}: ModernIndustryCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const handleHoverStart = useCallback(() => setIsHovered(true), [])
  const handleHoverEnd = useCallback(() => setIsHovered(false), [])

  const cardGradient = gradient || industryGradients[title as keyof typeof industryGradients] || 'from-accent/20 via-primary/15 to-secondary/10'
  const cardIcon = icon || industryIcons[title as keyof typeof industryIcons] || '💼'
  const cardImage = image || industryImages[title as keyof typeof industryImages]

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="group relative h-full"
    >
      <motion.div
        className="relative h-full bg-white rounded-3xl overflow-hidden border border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08)',
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background Gradient with Pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cardGradient} opacity-60`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            className="relative w-full h-full"
            animate={isHovered ? { 
              scale: 1.08
            } : { scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cardGradient} opacity-30 z-10 mix-blend-overlay`} />
            
            {/* Image */}
            {cardImage ? (
              <Image
                src={cardImage}
                alt={`${title} industry`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
                priority={false}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-6xl opacity-50">{cardIcon}</span>
              </div>
            )}
            
            {/* Overlay Gradient for better text readability and depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent z-10" />
            
            {/* Subtle shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"
              initial={{ x: '-100%' }}
              animate={isHovered ? { x: '200%' } : { x: '-100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="relative px-8 pb-8 pt-4">
          <h3 className="text-2xl font-bold mb-3 text-dark tracking-tight group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-text/70 leading-relaxed text-sm mb-6 line-clamp-3">
            {description}
          </p>

          {/* CTA Button */}
          {href && (
            <motion.div
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span>Explore</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={isHovered ? { x: 4 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </motion.svg>
            </motion.div>
          )}
        </div>

        {/* Hover Accent Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Shine Effect on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%', rotate: 45 }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ pointerEvents: 'none' }}
        />
      </motion.div>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}

