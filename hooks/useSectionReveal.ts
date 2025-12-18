/**
 * useSectionReveal Hook
 * Premium section reveal animations with GSAP ScrollTrigger
 */

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, ANIMATION_CONFIG, prefersReducedMotion } from '@/lib/gsap'

interface UseSectionRevealOptions {
  delay?: number
  stagger?: number
  y?: number
  trigger?: string
  once?: boolean
  children?: boolean
}

export function useSectionReveal(options: UseSectionRevealOptions = {}) {
  const sectionRef = useRef<HTMLElement>(null)
  const {
    delay = 0,
    stagger = ANIMATION_CONFIG.stagger,
    y = 20, // 2-4% upward motion (20px ≈ 2-4% of typical viewport)
    trigger = ANIMATION_CONFIG.triggerOffset,
    once = true,
    children = true,
  } = options

  useEffect(() => {
    if (!sectionRef.current) return
    if (prefersReducedMotion()) return

    const section = sectionRef.current
    const childrenElements = children
      ? section.querySelectorAll('[data-reveal-child]')
      : []

    // Set initial state
    gsap.set(section, { opacity: 0, y })
    if (childrenElements.length > 0) {
      gsap.set(childrenElements, { opacity: 0, y: y * 0.5 })
    }

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: trigger,
        toggleActions: once ? 'play none none none' : 'play none none reverse',
        once,
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
      delay,
    })

    // Animate children with stagger
    if (childrenElements.length > 0) {
      tl.to(
        childrenElements,
        {
          opacity: 1,
          y: 0,
          stagger,
        },
        delay > 0 ? `-=${delay}` : '<'
      )
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === section) {
          st.kill()
        }
      })
    }
  }, [delay, stagger, y, trigger, once, children])

  return sectionRef
}

