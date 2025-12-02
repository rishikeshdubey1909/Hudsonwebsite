/**
 * GSAP Initialization & Setup
 * Premium scroll animations with GSAP ScrollTrigger
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Premium easing curves (Apple-like)
export const EASINGS = {
  premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const

// Default animation configs
export const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: EASINGS.premium,
  stagger: 0.08,
  triggerOffset: 'top 80%',
} as const

// Initialize GSAP with performance optimizations
export function initGSAP() {
  if (typeof window === 'undefined') return

  // Set default ease
  gsap.defaults({
    ease: EASINGS.premium,
  })

  // Performance optimizations
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    ignoreMobileResize: true,
  })

  // Cleanup on unmount
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }
}

// Utility: Check if device is mobile
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Utility: Check if prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export { gsap, ScrollTrigger }

