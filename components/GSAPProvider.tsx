'use client'

import { useEffect, memo } from 'react'
import { initGSAP } from '@/lib/gsap'
import { initAllGSAPAnimations } from '@/lib/gsapInit'

/**
 * GSAPProvider Component
 * Initializes GSAP and handles cleanup
 * Wrap your app with this component
 */
function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cleanup = initGSAP()
    
    // Use requestIdleCallback for non-critical animations to improve INP
    const initAnimations = () => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        requestIdleCallback(() => {
          initAllGSAPAnimations()
        }, { timeout: 2000 })
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          initAllGSAPAnimations()
        }, 100)
      }
    }

    // Wait for DOM to be ready
    if (typeof window !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations, { once: true })
      } else {
        initAnimations()
      }
    }

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return <>{children}</>
}

export default memo(GSAPProvider)

