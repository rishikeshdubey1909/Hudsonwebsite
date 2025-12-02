/**
 * useParallax Hook
 * Subtle parallax effects for premium feel
 */

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, isMobile, prefersReducedMotion } from '@/lib/gsap'

interface UseParallaxOptions {
  speed?: number // Speed difference in pixels (10-25px recommended)
  scrub?: number // Smoothness (0.4-0.7 recommended)
  direction?: 'up' | 'down'
  start?: string
  end?: string
}

export function useParallax(options: UseParallaxOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null)
  const {
    speed = 15, // 10-25px range
    scrub = 0.5, // 0.4-0.7 range for elegant feel
    direction = 'up',
    start = 'top bottom',
    end = 'bottom top',
  } = options

  useEffect(() => {
    if (!elementRef.current) return
    if (prefersReducedMotion()) return
    if (isMobile()) return // Disable parallax on mobile for performance

    const element = elementRef.current
    const yValue = direction === 'up' ? -speed : speed

    const animation = gsap.to(element, {
      y: yValue,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
      },
    })

    // Cleanup
    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === element) {
          st.kill()
        }
      })
    }
  }, [speed, scrub, direction, start, end])

  return elementRef
}

