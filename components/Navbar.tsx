'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, EMPLOYERS } from '@/constants/content'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = NAV_LINKS

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass border-b border-white/30 shadow-hover backdrop-blur-xl bg-white/80' 
          : 'glass border-b border-white/20 backdrop-blur-xl bg-white/70'
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Enhanced Interactive */}
          <Link href="/" className="z-10 group flex items-center">
            <motion.div
              whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative h-14 flex items-center"
            >
              {!logoError ? (
                <>
                  <img
                    src="/images/hudson-logo.png"
                    alt="Hudson Information Technology and Manpower Services"
                    className="h-14 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(240,90,40,0.6)] relative z-10"
                    onError={() => setLogoError(true)}
                  />
                  {/* Logo Glow */}
                  <motion.div
                    className="absolute inset-0 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </>
              ) : (
                <motion.span
                  className="text-2xl font-bold gradient-text relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  Hudson
                </motion.span>
              )}
            </motion.div>
          </Link>

          {/* Centered Navigation - Enhanced Interactive Design */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <motion.div
              className="flex items-center gap-1 glass rounded-2xl px-3 py-2.5 border border-white/40 shadow-soft backdrop-blur-xl bg-white/60"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4, type: "spring" }}
                  >
                    <Link
                      href={link.href}
                      className="relative px-6 py-3 rounded-xl font-semibold text-sm transition-all group"
                    >
                      <span className={`relative z-10 transition-colors ${
                        isActive 
                          ? 'text-accent' 
                          : 'text-dark group-hover:text-accent'
                      }`}>
                        {link.label}
                      </span>
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl"
                          layoutId="activeNav"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/15 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                      />
                      
                      {/* Bottom Accent Line */}
                      <motion.div
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: '80%' }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Active Bottom Line */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '60%' }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* CTA Button - Enhanced Premium */}
          <div className="hidden lg:block z-10">
            <Link href={EMPLOYERS.navButton.href} className="group relative">
              <motion.div
                className="relative px-7 py-3 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl font-semibold text-sm shadow-glow overflow-hidden"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{EMPLOYERS.navButton.text}</span>
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-accent rounded-xl blur-xl opacity-0 group-hover:opacity-50"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button - Modern */}
          <button
            className="lg:hidden p-2 z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              className="w-6 h-5 flex flex-col justify-between"
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            >
              <motion.span
                className="w-full h-0.5 bg-dark rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-dark rounded-full"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-dark rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sleek Slide */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 glass border-l border-white/20 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-5 py-4 rounded-xl font-semibold transition-all relative group ${
                          isActive 
                            ? 'bg-gradient-to-r from-accent/20 to-accent/10 text-accent' 
                            : 'text-dark hover:bg-accent/10'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative z-10">{link.label}</span>
                        {isActive && (
                          <motion.div
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full"
                            layoutId="activeMobileNav"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href={EMPLOYERS.navButton.href}
                    className="block bg-gradient-to-r from-accent to-accent/90 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-glow"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {EMPLOYERS.navButton.text}
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
