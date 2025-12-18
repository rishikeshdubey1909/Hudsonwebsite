'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BRAND } from '@/constants/content'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return
    
    setMounted(true)
    const startTime = Date.now()
    const minDisplayTime = 2000 // Minimum 2 seconds
    
    let intervalId: NodeJS.Timeout | null = null
    let hideTimeout: NodeJS.Timeout | null = null
    
    // Start progress immediately
    intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (intervalId) clearInterval(intervalId)
          return 100
        }
        return Math.min(prev + 2, 100)
      })
    }, 50)

    // Function to hide preloader
    const hidePreloader = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - elapsed)
      
      if (hideTimeout) clearTimeout(hideTimeout)
      hideTimeout = setTimeout(() => {
        setIsLoading(false)
        if (intervalId) clearInterval(intervalId)
      }, remainingTime)
    }

    // Hide when page loads
    const handleLoad = () => {
      hidePreloader()
    }

    // Check if already loaded
    if (document.readyState === 'complete') {
      hidePreloader()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Safety timeout - force hide after 4 seconds
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false)
      if (intervalId) clearInterval(intervalId)
      if (hideTimeout) clearTimeout(hideTimeout)
    }, 4000)

    return () => {
      if (intervalId) clearInterval(intervalId)
      if (hideTimeout) clearTimeout(hideTimeout)
      clearTimeout(safetyTimeout)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Don't render on server
  if (typeof window === 'undefined') return null
  if (!mounted) return null
  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary via-dark to-secondary"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ 
        pointerEvents: isLoading ? 'auto' : 'none',
        display: isLoading ? 'flex' : 'none'
      }}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo/Text Animation */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Hudson Text */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Hudson
            </span>
          </motion.h1>
          
          {/* Group Text - Smooth slide up */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Group
            </span>
          </motion.h2>
          
          {/* Tagline */}
          <motion.p
            className="text-xl sm:text-2xl text-text/60 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {BRAND.tagline}
          </motion.p>
        </motion.div>

        {/* Animated Rings */}
        <div className="relative w-32 h-32 mb-8">
          <motion.div
            className="absolute inset-0 border-4 border-accent/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 border-4 border-accent/50 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 border-4 border-accent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-3 h-3 bg-accent rounded-full" />
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 h-1 bg-text/10 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-accent via-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          className="text-sm text-text/50 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {progress}%
        </motion.p>

        {/* Loading Dots */}
        <motion.div
          className="flex space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-accent rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  )
}
