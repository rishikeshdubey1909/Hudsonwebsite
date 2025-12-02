'use client'

import { useState, useEffect, useCallback, memo, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SOFTWARE_SOLUTIONS } from '@/constants/content'

// Animation constants
const NAV_ANIMATION = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
} as const

const LOGO_HOVER = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 17 }
} as const

const MOBILE_MENU_TRANSITION = {
  type: "spring" as const,
  damping: 25,
  stiffness: 200
} as const

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  const handleLogoError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    if (target.src.includes('.png')) {
      target.src = '/images/hudson-logo.jpeg'
    } else {
      setLogoError(true)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Memoize nav classes
  const navClasses = useMemo(() => 
    `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass border-b border-white/20 shadow-soft' 
        : 'bg-transparent'
    }`,
    [isScrolled]
  )

  // Memoize hamburger animation variants
  const hamburgerVariants = useMemo(() => ({
    top: {
      rotate: isMobileMenuOpen ? 45 : 0,
      y: isMobileMenuOpen ? 8 : 0,
    },
    middle: {
      opacity: isMobileMenuOpen ? 0 : 1,
    },
    bottom: {
      rotate: isMobileMenuOpen ? -45 : 0,
      y: isMobileMenuOpen ? -8 : 0,
    },
  }), [isMobileMenuOpen])

  return (
    <motion.nav
      {...NAV_ANIMATION}
      className={navClasses}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="z-10 group flex items-center"
            aria-label="Hudson Home"
          >
            <motion.div 
              whileHover={LOGO_HOVER} 
              className="relative h-12 flex items-center"
            >
              {!logoError ? (
                <img 
                  src="/images/hudson-logo.png" 
                  alt="Hudson Information Technology and Manpower Services" 
                  className="h-12 w-auto object-contain" 
                  onError={handleLogoError}
                  width={120}
                  height={48}
                />
              ) : (
                <span className="text-2xl font-bold gradient-text">Hudson</span>
              )}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2" aria-label="Desktop navigation">
            <motion.div 
              className="flex items-center gap-1 glass rounded-2xl px-2 py-2 border border-white/30 shadow-soft" 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div 
                  key={link.href} 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4, type: "spring" }}
                >
                  <Link 
                    href={link.href} 
                    className="relative block px-5 py-2.5 rounded-xl font-medium text-sm text-dark hover:text-accent transition-colors group overflow-hidden"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    <span className="relative z-10 block">{link.label}</span>
                    {/* Background hover effect - properly contained */}
                    <motion.div 
                      className="absolute inset-0 bg-accent/10 rounded-xl" 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    />
                    {/* Underline effect - properly positioned */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" 
                      initial={{ scaleX: 0, originX: 0.5 }}
                      whileHover={{ scaleX: 0.75 }}
                      transition={{ duration: 0.2 }}
                      style={{ transformOrigin: 'center' }}
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block z-10">
            <Link 
              href={SOFTWARE_SOLUTIONS.navButton.href}
              aria-label={`${SOFTWARE_SOLUTIONS.navButton.text} - ${SOFTWARE_SOLUTIONS.navButton.href}`}
            >
              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl font-semibold text-sm shadow-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                {SOFTWARE_SOLUTIONS.navButton.text}
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 z-10 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg" 
            onClick={toggleMobileMenu} 
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span 
                className="w-full h-0.5 bg-dark rounded-full" 
                animate={hamburgerVariants.top}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-dark rounded-full" 
                animate={hamburgerVariants.middle}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-dark rounded-full" 
                animate={hamburgerVariants.bottom}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden" 
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }} 
              transition={MOBILE_MENU_TRANSITION} 
              className="fixed top-0 right-0 bottom-0 w-80 glass border-l border-white/20 shadow-2xl z-50 lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="p-8 pt-24 space-y-2" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, index) => (
                  <motion.div 
                    key={link.href} 
                    initial={{ opacity: 0, x: 30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link 
                      href={link.href} 
                      className="block px-4 py-3 rounded-xl text-dark font-medium hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent" 
                      onClick={closeMobileMenu}
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.3 }} 
                  className="pt-4"
                >
                  <Link 
                    href={SOFTWARE_SOLUTIONS.navButton.href} 
                    className="block bg-gradient-to-r from-accent to-accent/90 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-glow focus:outline-none focus:ring-2 focus:ring-white" 
                    onClick={closeMobileMenu}
                    aria-label={`${SOFTWARE_SOLUTIONS.navButton.text} - ${SOFTWARE_SOLUTIONS.navButton.href}`}
                  >
                    {SOFTWARE_SOLUTIONS.navButton.text}
                  </Link>
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default memo(Navbar)
