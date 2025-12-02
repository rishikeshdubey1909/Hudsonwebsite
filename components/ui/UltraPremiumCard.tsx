'use client'

import { useEffect, useRef, useState, memo } from 'react'
import Link from 'next/link'
import ModernIcon from './ModernIcon'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'
import { useParallax } from '@/hooks/useParallax'

interface UltraPremiumCardProps {
  icon: string
  title: string
  description: string
  href: string
  delay?: number
}

function UltraPremiumCard({ icon, title, description, href, delay = 0 }: UltraPremiumCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLSpanElement>(null)
  const underlineRef = useRef<HTMLSpanElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Subtle parallax for icon (ultra-soft micro parallax)
  const iconParallaxRef = useParallax({ speed: 10, scrub: 0.6 })

  // GSAP Card Reveal Animation
  useEffect(() => {
    if (!cardRef.current) return

    const card = cardRef.current
    if (prefersReducedMotion()) return

    gsap.set(card, {
      opacity: 0,
      y: 18,
    })

    const animation = gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === card) {
          st.kill()
        }
      })
    }
  }, [delay])

  // Premium Hover Effects
  useEffect(() => {
    if (!cardRef.current) return

    const card = cardRef.current
    if (prefersReducedMotion()) return

    const handleMouseEnter = () => {
      setIsHovered(true)
      gsap.to(card, {
        y: -8,
        scale: 1.015,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(240, 90, 40, 0.08)',
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.07)',
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // CTA Micro-interactions
  useEffect(() => {
    if (!ctaRef.current || !arrowRef.current || !underlineRef.current) return

    const cta = ctaRef.current
    const arrow = arrowRef.current
    const underline = underlineRef.current
    if (prefersReducedMotion()) return

    const handleMouseEnter = () => {
      gsap.to(arrow, {
        x: 3.5,
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      })
      gsap.fromTo(
        underline,
        {
          scaleX: 0.2,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
          transformOrigin: 'left center',
        }
      )
    }

    const handleMouseLeave = () => {
      gsap.to(arrow, {
        x: 0,
        opacity: 0.7,
        duration: 0.2,
        ease: 'power2.out',
      })
      gsap.to(underline, {
        scaleX: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
      })
    }

    cta.addEventListener('mouseenter', handleMouseEnter)
    cta.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cta.removeEventListener('mouseenter', handleMouseEnter)
      cta.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <Link href={href} className="block h-full group">
      <div
        ref={cardRef}
        className="relative h-full bg-white rounded-[36px] p-10 overflow-hidden"
        style={{
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.07)',
          willChange: 'transform, box-shadow',
        }}
      >
        {/* Multi-layer luxury design */}
        
        {/* Base layer - soft white with border */}
        <div className="absolute inset-0 bg-white rounded-[36px]" />
        
        {/* Middle layer - subtle glass blur */}
        <div 
          className="absolute inset-0 backdrop-blur-[1px] rounded-[36px]"
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
          }}
        />
        
        {/* Top layer - ultra-light gradient */}
        <div 
          className="absolute inset-0 rounded-[36px] opacity-100"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
          }}
        />

        {/* Inner border highlight (Apple effect) */}
        <div 
          className="absolute inset-[1px] rounded-[35px] pointer-events-none"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)',
          }}
        />

        {/* Hover glow ring */}
        <div 
          className="absolute inset-0 rounded-[36px] pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            boxShadow: '0 0 0 1px rgba(240, 90, 40, 0.08), 0 25px 50px rgba(0, 0, 0, 0.12)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon - Executive Minimalist */}
          <div 
            className="mb-6 flex items-center justify-center"
          >
            <div
              ref={iconParallaxRef}
              className="relative w-[50px] h-[50px] rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(240, 90, 40, 0.10)',
                boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* Inner subtle glow */}
              <div 
                className="absolute inset-0 rounded-full z-0"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(240, 90, 40, 0.08), transparent 70%)',
                }}
              />
              {/* Outer ring */}
              <div 
                className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: 'rgba(240, 90, 40, 0.10)',
                  filter: 'blur(4px)',
                }}
              />
              {/* Icon - Must be above all background layers */}
              <div className="relative z-30 w-7 h-7 flex items-center justify-center" style={{ color: '#F05A28' }}>
                <ModernIcon name={icon} strokeWidth={1.7} />
              </div>
            </div>
          </div>

          {/* Typography - Luxury Scaling */}
          <h3 
            className="text-2xl font-bold text-dark"
            style={{
              letterSpacing: '-0.01em',
              lineHeight: '1.2',
              marginBottom: '16px', // 12-18px gap
            }}
          >
            {title}
          </h3>
          
          <p 
            className="text-text/60 flex-grow"
            style={{
              lineHeight: '1.7',
              fontSize: '15px',
              marginBottom: '24px', // 24px gap
            }}
          >
            {description}
          </p>

          {/* CTA - Boutique Interaction */}
          <div 
            ref={ctaRef}
            className="inline-flex items-center gap-2.5 text-accent font-medium text-sm tracking-wide mt-auto"
            style={{
              letterSpacing: '0.01em',
              marginTop: '30px', // 30px gap
            }}
          >
            <span className="relative">
              Learn More
              <span
                ref={underlineRef}
                className="absolute bottom-[-3px] left-0 h-[1.5px] bg-accent/50 origin-left"
                style={{
                  width: '100%',
                  transform: 'scaleX(0)',
                  opacity: 0,
                }}
              />
            </span>
            <span 
              ref={arrowRef}
              className="inline-block text-accent/70"
              style={{
                opacity: 0.7,
                transform: 'translateX(0)',
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default memo(UltraPremiumCard)

