'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SOFTWARE_SOLUTIONS } from '@/constants/content'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass border-b border-white/20 shadow-soft' 
          : 'bg-transparent'
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="z-10 group flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="relative h-12 flex items-center">
              {!logoError ? (
                <img src="/images/hudson-logo.png" alt="Hudson Information Technology and Manpower Services" className="h-12 w-auto object-contain" onError={handleLogoError} />
              ) : (
                <span className="text-2xl font-bold gradient-text">Hudson</span>
              )}
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <motion.div className="flex items-center gap-1 glass rounded-2xl px-2 py-2 border border-white/30 shadow-soft" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {NAV_LINKS.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + index * 0.1, duration: 0.4, type: "spring" }}>
                  <Link href={link.href} className="relative px-5 py-2.5 rounded-xl font-medium text-sm text-dark hover:text-accent transition-colors group">
                    <span className="relative z-10">{link.label}</span>
                    <motion.div className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-3/4 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block z-10">
            <Link href={SOFTWARE_SOLUTIONS.navButton.href}>
              <motion.div className="px-6 py-2.5 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl font-semibold text-sm shadow-glow" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                {SOFTWARE_SOLUTIONS.navButton.text}
              </motion.div>
            </Link>
          </div>
          <button className="lg:hidden p-2 z-10" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <motion.div className="w-6 h-5 flex flex-col justify-between" animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}>
              <motion.span className="w-full h-0.5 bg-dark rounded-full" animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }} />
              <motion.span className="w-full h-0.5 bg-dark rounded-full" animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} />
              <motion.span className="w-full h-0.5 bg-dark rounded-full" animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }} />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden" onClick={closeMobileMenu} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 w-80 glass border-l border-white/20 shadow-2xl z-50 lg:hidden overflow-y-auto">
              <div className="p-8 pt-24 space-y-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.3 }}>
                    <Link href={link.href} className="block px-4 py-3 rounded-xl text-dark font-medium hover:bg-accent/10 transition-colors" onClick={closeMobileMenu}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.3 }} className="pt-4">
                  <Link href={SOFTWARE_SOLUTIONS.navButton.href} className="block bg-gradient-to-r from-accent to-accent/90 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-glow" onClick={closeMobileMenu}>
                    {SOFTWARE_SOLUTIONS.navButton.text}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default memo(Navbar)
