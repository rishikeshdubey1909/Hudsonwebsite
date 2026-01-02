'use client'

import { useEffect, useRef, useState, memo } from 'react'
import LogoIcon from './LogoIcon'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

interface PremiumTrustCardProps {
  icon?: string
  logo?: string
  value: string
  label: string
  description: string
  delay?: number
}

function PremiumTrustCard({ icon, logo, value, label, description, delay = 0 }: PremiumTrustCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // GSAP Scroll Animation
  useEffect(() => {
    if (!cardRef.current || prefersReducedMotion()) return

    const card = cardRef.current

    gsap.set(card, {
      opacity: 0,
      y: 18,
    })

    const animation = gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.85,
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
    if (!cardRef.current || !iconRef.current || prefersReducedMotion()) return

    const card = cardRef.current
    const icon = iconRef.current

    const handleMouseEnter = () => {
      setIsHovered(true)
      gsap.to(card, {
        y: -6,
        scale: 1.015,
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.1)',
        duration: 0.25,
        ease: 'power2.out',
      })
      gsap.to(icon, {
        y: -3,
        scale: 1.05,
        boxShadow: '0 0 20px rgba(240, 90, 40, 0.2)',
        duration: 0.25,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06)',
        duration: 0.25,
        ease: 'power2.out',
      })
      gsap.to(icon, {
        y: 0,
        scale: 1,
        boxShadow: '0 0 0px rgba(240, 90, 40, 0)',
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

  return (
    <div
      ref={cardRef}
      className="relative h-full bg-white/70 backdrop-blur-md rounded-[32px] p-8 overflow-hidden"
      style={{
        border: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06)',
        willChange: 'transform, box-shadow',
      }}
    >
      {/* Frosted Glass Overlay */}
      <div 
        className="absolute inset-0 rounded-[32px] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon - Modern, Centered, with Soft Blur */}
        <div className="mb-6 flex items-center justify-center">
          <div
            ref={iconRef}
            className="relative w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(240, 90, 40, 0.08)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Soft glow on hover */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.3 : 0,
                background: 'radial-gradient(circle, rgba(240, 90, 40, 0.15), transparent 70%)',
              }}
            />
            {/* Icon */}
            <div className="relative z-10 w-7 h-7" style={{ color: '#F05A28' }}>
              <LogoIcon src={logo} icon={icon} size={28} alt={label} />
            </div>
          </div>
        </div>

        {/* Value/Metric */}
        <div 
          className="text-4xl font-bold gradient-text"
          style={{
            marginBottom: '28px',
          }}
        >
          {value}
        </div>

        {/* Title */}
        <h3 
          className="text-xl font-bold text-dark"
          style={{
            marginBottom: '12px',
            letterSpacing: '-0.01em',
          }}
        >
          {label}
        </h3>

        {/* Description */}
        <p 
          className="text-text/60 leading-relaxed flex-grow"
          style={{
            marginBottom: '20px',
            lineHeight: '1.65',
            fontSize: '15px',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default memo(PremiumTrustCard)

