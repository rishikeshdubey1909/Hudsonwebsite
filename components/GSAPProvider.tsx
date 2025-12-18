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
    
    // Initialize all animations after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initAllGSAPAnimations()
    }, 100)

    return () => {
      clearTimeout(timer)
      if (cleanup) cleanup()
    }
  }, [])

  return <>{children}</>
}

export default memo(GSAPProvider)

