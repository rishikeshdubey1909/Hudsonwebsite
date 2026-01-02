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

    // Set initial states
    gsap.set([badge, heading, description, cta], { opacity: 0, y: 30 })

    // Animate in sequence
    tl.to(badge, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
      .to(heading, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .to(description, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
      .to(cta, { opacity: 1, y: 0, duration: 0.8 }, 0.7)
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
      {/* Premium Soft Gradient Background with Hudson Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-light via-white to-secondary/30" />
      
      {/* Animated Gradient Orbs with Parallax - Hudson Colors */}
      <div
        ref={orb1Parallax}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-3xl opacity-70"
      />
      <div
        ref={orb2Parallax}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-3xl opacity-70"
      />

      {/* Additional Hudson Color Accent Orbs */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Interactive Cursor Follow Effect - Hudson Colors */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-accent/12 to-primary/12 rounded-full blur-3xl pointer-events-none opacity-50"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Subtle Grid Pattern with Hudson Colors */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(rgba(240, 90, 40, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} 
      />

      <div 
        ref={heroContentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col items-center justify-center min-h-[85vh] lg:min-h-[90vh] py-12 lg:py-20">
          {/* Centered Content Area */}
          <div className="w-full max-w-4xl space-y-6 lg:space-y-8 text-center">
            {/* Badge - Centered */}
            <div data-hero-badge className="flex justify-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-accent/15 shadow-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-accent tracking-wide uppercase">Solutions</span>
              </div>
            </div>

            {/* Main Heading - Centered */}
            <h1 
              data-hero-heading 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="block text-dark mb-2">{HOME.hero.heading.line1}</span>
              <span className="block gradient-text">{HOME.hero.heading.line2}</span>
              <span className="block text-dark">{HOME.hero.heading.line3}</span>
            </h1>

            {/* Description - Centered */}
            <p 
              data-hero-description 
              className="text-lg sm:text-xl lg:text-2xl text-text/70 leading-relaxed max-w-2xl mx-auto"
            >
              {HOME.hero.description}
            </p>

            {/* CTA Buttons - Centered */}
            <div data-hero-cta className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
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
