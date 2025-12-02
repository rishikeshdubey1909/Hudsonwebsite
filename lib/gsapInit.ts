/**
 * Global GSAP Initialization
 * Initializes all section reveals and card animations
 */

import { gsap, ScrollTrigger, ANIMATION_CONFIG, prefersReducedMotion } from './gsap'

export function initSectionReveals() {
  if (typeof window === 'undefined') return
  if (prefersReducedMotion()) return

  // Initialize all section reveals
  const sections = document.querySelectorAll('[data-section-reveal]')
  
  sections.forEach((section) => {
    const children = section.querySelectorAll('[data-reveal-child]')
    
    // Set initial state
    gsap.set(section, { opacity: 0, y: 20 })
    if (children.length > 0) {
      gsap.set(children, { opacity: 0, y: 15 })
    }

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: ANIMATION_CONFIG.triggerOffset,
        toggleActions: 'play none none none',
        once: true,
      },
      defaults: {
        duration: ANIMATION_CONFIG.duration,
        ease: ANIMATION_CONFIG.ease,
      },
    })

    // Animate section
    tl.to(section, {
      opacity: 1,
      y: 0,
    })

    // Animate children with stagger
    if (children.length > 0) {
      tl.to(
        children,
        {
          opacity: 1,
          y: 0,
          stagger: ANIMATION_CONFIG.stagger,
        },
        '<'
      )
    }
  })
}

export function initCardReveals() {
  if (typeof window === 'undefined') return
  if (prefersReducedMotion()) return

  // Initialize all card containers
  const containers = document.querySelectorAll('[data-card-container]')
  
  containers.forEach((container) => {
    const cards = container.querySelectorAll('[data-card-reveal]')
    if (cards.length === 0) return

    // Set initial state
    gsap.set(cards, {
      opacity: 0,
      scale: 0.96,
      y: 20,
    })

    // Animate cards
    gsap.to(cards, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: ANIMATION_CONFIG.duration,
      ease: ANIMATION_CONFIG.ease,
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: ANIMATION_CONFIG.triggerOffset,
        toggleActions: 'play none none none',
        once: true,
      },
    })
  })
}

export function initCardHovers() {
  if (typeof window === 'undefined') return
  if (prefersReducedMotion()) return

  // Enhanced card hover effects
  const cards = document.querySelectorAll('[data-card-hover]')
  
  cards.forEach((card) => {
    const cardElement = card as HTMLElement
    
    cardElement.addEventListener('mouseenter', () => {
      gsap.to(cardElement, {
        y: -3,
        scale: 1.02,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.08)',
        duration: 0.25,
        ease: 'power2.out',
      })
    })

    cardElement.addEventListener('mouseleave', () => {
      gsap.to(cardElement, {
        y: 0,
        scale: 1,
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        duration: 0.25,
        ease: 'power2.out',
      })
    })
  })
}

export function initCTAHovers() {
  if (typeof window === 'undefined') return
  if (prefersReducedMotion()) return

  // CTA hover micro-interactions
  const ctaLinks = document.querySelectorAll('[data-cta-link]')
  
  ctaLinks.forEach((link) => {
    const linkElement = link as HTMLElement
    const arrow = linkElement.querySelector('[data-cta-arrow]')
    const underline = linkElement.querySelector('[data-cta-underline]')

    linkElement.addEventListener('mouseenter', () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 3,
          duration: 0.2,
          ease: 'power2.out',
        })
      }
      if (underline) {
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.2,
          ease: 'power2.out',
        })
      }
    })

    linkElement.addEventListener('mouseleave', () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 0,
          duration: 0.2,
          ease: 'power2.out',
        })
      }
      if (underline) {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.2,
          ease: 'power2.out',
        })
      }
    })
  })
}

// Initialize all GSAP animations
export function initAllGSAPAnimations() {
  if (typeof window === 'undefined') return

  const initAnimations = () => {
    initSectionReveals()
    initCardReveals()
    initCardHovers()
    initCTAHovers()
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations, { once: true })
  } else {
    initAnimations()
  }

  // Refresh on resize with debounce
  let resizeTimer: ReturnType<typeof setTimeout>
  const handleResize = () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 250)
  }
  window.addEventListener('resize', handleResize, { passive: true })
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}

