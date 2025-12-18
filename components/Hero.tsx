'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef, memo } from 'react'
import { HOME } from '@/constants/content'
import { useParallax } from '@/hooks/useParallax'
import { gsap, prefersReducedMotion } from '@/lib/gsap'

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroContentRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  // Parallax for background orbs
  const orb1Parallax = useParallax({ speed: 20, scrub: 0.6 })
  const orb2Parallax = useParallax({ speed: -15, scrub: 0.5 })

  // GSAP Hero Content Reveal
  useEffect(() => {
    if (!heroContentRef.current || prefersReducedMotion()) return

    const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.22, 1, 0.36, 1)' } })
    
    const badge = heroContentRef.current.querySelector('[data-hero-badge]')
    const heading = heroContentRef.current.querySelector('[data-hero-heading]')
    const description = heroContentRef.current.querySelector('[data-hero-description]')
    const cta = heroContentRef.current.querySelector('[data-hero-cta]')
    const stats = heroContentRef.current.querySelectorAll('[data-hero-stat]')

    // Set initial states
    gsap.set([badge, heading, description, cta], { opacity: 0, y: 30 })
    gsap.set(stats, { opacity: 0, scale: 0.8, y: 20 })

    // Animate in sequence
    tl.to(badge, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
      .to(heading, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .to(description, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
      .to(cta, { opacity: 1, y: 0, duration: 0.8 }, 0.7)
      .to(stats, { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1 
      }, 0.9)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light via-white to-secondary/30" />
      
      {/* Animated Gradient Orbs with Parallax */}
      <div
        ref={orb1Parallax}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/8 rounded-full blur-3xl opacity-60"
      />
      <div
        ref={orb2Parallax}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/8 rounded-full blur-3xl opacity-60"
      />

      {/* Interactive Cursor Follow Effect */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-3xl pointer-events-none opacity-40"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} 
      />

      <div 
        ref={heroContentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[85vh] lg:min-h-[90vh] py-12 lg:py-20">
          {/* Left Content Area */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Badge - Enhanced Creative Design */}
            <div data-hero-badge>
              <motion.div 
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/90 via-white/80 to-white/90 backdrop-blur-md border-2 border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 group/badge"
                whileHover={{ scale: 1.05, borderColor: 'rgba(240, 90, 40, 0.4)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Pulse Dot */}
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="absolute inset-0 w-2.5 h-2.5 bg-accent/30 rounded-full blur-sm" />
                  <span className="relative w-2.5 h-2.5 bg-gradient-to-br from-accent to-accent/80 rounded-full shadow-lg shadow-accent/50" />
                </motion.div>
                
                {/* Badge Text with Gradient */}
                <span className="text-xs font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent tracking-wider uppercase relative">
                  Solutions
                  <motion.span
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
                
                {/* Decorative Accent */}
                <motion.div
                  className="absolute -right-1 -top-1 w-3 h-3 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full blur-sm opacity-0 group-hover/badge:opacity-100 transition-opacity"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>

            {/* Main Heading - Keep exactly as is */}
            <h1 
              data-hero-heading 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="block text-dark mb-2">{HOME.hero.heading.line1}</span>
              <span className="block gradient-text">{HOME.hero.heading.line2}</span>
              <span className="block text-dark">{HOME.hero.heading.line3}</span>
            </h1>

            {/* Description */}
            <p 
              data-hero-description 
              className="text-lg sm:text-xl lg:text-2xl text-text/70 leading-relaxed max-w-2xl"
            >
              {HOME.hero.description}
            </p>

            {/* CTA Buttons */}
            <div data-hero-cta className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Primary Button - Bold Gradient */}
              <Link href={HOME.hero.cta.primary.href} className="group relative inline-block">
                <motion.button
                  className="relative px-8 py-4 lg:px-10 lg:py-4.5 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg shadow-lg shadow-accent/20 overflow-hidden w-full sm:w-auto transition-all duration-200"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {HOME.hero.cta.primary.text}
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </Link>

              {/* Secondary Button - Subtle Outline */}
              <Link href={HOME.hero.cta.secondary.href} className="group relative inline-block">
                <motion.button
                  className="relative px-8 py-4 lg:px-10 lg:py-4.5 bg-white/60 backdrop-blur-sm border-2 border-dark/10 text-dark rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg shadow-sm overflow-hidden group-hover:border-accent/40 transition-all duration-200 w-full sm:w-auto"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {HOME.hero.cta.secondary.text}
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/8 to-accent/0"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Stats Area - Enhanced Creative Design */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {HOME.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  data-hero-stat
                  className="group relative"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Enhanced Card with Creative Elements */}
                  <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-5 lg:p-6 border-2 border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Animated Background Gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-accent/0 via-primary/0 to-accent/0 group-hover:from-accent/8 group-hover:via-primary/5 group-hover:to-accent/8 transition-all duration-500 pointer-events-none rounded-2xl" 
                    />
                    
                    {/* Decorative Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Number with Enhanced Animation */}
                      <motion.div
                        className="text-3xl lg:text-4xl font-bold gradient-text mb-2 relative inline-block"
                        animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        {stat.value}
                        {/* Glow Effect */}
                        <motion.span
                          className="absolute inset-0 text-3xl lg:text-4xl font-bold gradient-text blur-xl opacity-0 group-hover:opacity-30 transition-opacity -z-10"
                          aria-hidden="true"
                        >
                          {stat.value}
                        </motion.span>
                      </motion.div>
                      
                      {/* Label with Icon-like Decoration */}
                      <div className="flex items-center gap-2 mb-1">
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <div className="text-sm font-semibold text-dark group-hover:text-accent transition-colors">
                          {stat.label}
                        </div>
                      </div>
                      
                      {/* Sublabel */}
                      <div className="text-xs text-text/60 group-hover:text-text/80 transition-colors">
                        {stat.sublabel}
                      </div>
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Centered, Minimal, Smooth */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }} 
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] text-text/30 font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-5 h-8 border border-text/15 rounded-full flex justify-center p-1.5">
          <motion.div 
            className="w-1.5 h-1.5 bg-accent/60 rounded-full" 
            animate={{ y: [0, 16, 0] }} 
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} 
          />
        </div>
      </motion.div>
    </section>
  )
}

export default memo(Hero)
