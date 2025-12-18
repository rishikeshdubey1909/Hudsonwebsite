'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useParallax } from '@/hooks/useParallax'

const INDUSTRIES_DATA = [
  {
    title: 'Oil & Gas',
    description: 'Specializing in recruitment for the oil and gas industry, we cover roles from exploration and production to energy management, fueling the sector with expert recruits.',
    href: '/oil-and-gas-staffing',
    icon: '⛽',
    color: 'from-accent to-primary',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1690508313456-bf8c851e8319?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fG?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Petroleum Engineers', 'Drilling Supervisors', 'Geologists', 'Refinery Operators', 'Pipeline Engineers', 'Safety Specialists'],
    services: ['Exploration & Production Staffing', 'Refinery Operations', 'Pipeline Management', 'Safety & Compliance', 'Project Management'],
    highlights: ['Global reach across major oil fields', '24/7 emergency staffing', 'Compliance with industry standards'],
  },
  {
    title: 'Engineering',
    description: 'With a focus on civil, mechanical, electrical, & chemical engineering, our recruitment strategies bring in expert professionals to push the boundaries of engineering innovation.',
    icon: '🔧',
    color: 'from-accent to-primary',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Civil Engineers', 'Mechanical Engineers', 'Electrical Engineers', 'Chemical Engineers', 'Project Engineers', 'Design Engineers'],
    services: ['Engineering Design', 'Project Management', 'Quality Assurance', 'Technical Consulting', 'CAD/Design Services'],
    highlights: ['Multi-disciplinary expertise', 'PE licensed professionals', 'International project experience'],
  },
  {
    title: 'Industrial & Infrastructure',
    description: 'Our focus is on sourcing professionals for construction, manufacturing, and infrastructure projects, driving progress with skilled manpower.',
    icon: '🏗️',
    color: 'from-primary to-accent',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Construction Managers', 'Site Engineers', 'Project Coordinators', 'Safety Officers', 'Quality Inspectors', 'Foremen'],
    services: ['Construction Staffing', 'Infrastructure Development', 'Project Planning', 'Safety Management', 'Quality Control'],
    highlights: ['Large-scale project experience', 'OSHA certified professionals', 'Turnkey project solutions'],
  },
  {
    title: 'Information Technology',
    description: 'Specializing in software development, IT support, and tech innovation, our IT professionals are poised to advance your technological capabilities.',
    href: '/us-it-staffing',
    icon: '💻',
    color: 'from-accent to-primary',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Software Developers', 'DevOps Engineers', 'Cloud Architects', 'Data Scientists', 'Cybersecurity Specialists', 'IT Support'],
    services: ['Software Development', 'Cloud Migration', 'IT Infrastructure', 'Cybersecurity', 'Data Analytics'],
    highlights: ['Cutting-edge technology expertise', 'Agile & DevOps certified', '24/7 IT support'],
  },
  {
    title: 'Logistics',
    description: 'We excel in recruiting specialists in supply chain management, transportation, and warehousing, optimizing logistics operations with precision.',
    icon: '🚚',
    color: 'from-accent to-primary',
    category: 'Operations',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Supply Chain Managers', 'Logistics Coordinators', 'Warehouse Supervisors', 'Fleet Managers', 'Distribution Specialists', 'Inventory Analysts'],
    services: ['Supply Chain Management', 'Warehouse Operations', 'Transportation', 'Distribution', 'Inventory Management'],
    highlights: ['End-to-end logistics solutions', 'Real-time tracking systems', 'Cost optimization expertise'],
  },
  {
    title: 'Power',
    description: 'Our recruitment expertise in the power sector fills roles that drive energy efficiency and innovation within the industry.',
    icon: '⚡',
    color: 'from-accent to-primary',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1765706836783-e9ad4db6fb53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Power Engineers', 'Electrical Technicians', 'Grid Operators', 'Renewable Energy Specialists', 'Maintenance Engineers', 'Energy Analysts'],
    services: ['Power Generation', 'Grid Management', 'Renewable Energy', 'Maintenance & Operations', 'Energy Consulting'],
    highlights: ['Renewable energy expertise', 'Grid modernization projects', '24/7 power operations'],
  },
  {
    title: 'Automobile',
    description: 'Specializing in automotive recruitment, Hudson Manpower sources top talent for design, manufacturing, and sales within the auto industry, ensuring innovation and expertise drive your workforce.',
    icon: '🚗',
    color: 'from-accent to-primary',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Automotive Engineers', 'Production Managers', 'Quality Engineers', 'Design Engineers', 'Sales Professionals', 'Service Technicians'],
    services: ['Manufacturing Staffing', 'Design & Development', 'Quality Assurance', 'Sales & Marketing', 'After-sales Service'],
    highlights: ['EV and hybrid expertise', 'Lean manufacturing', 'Global automotive networks'],
  },
  {
    title: 'Telecom',
    description: 'We recruit top talents in telecommunications, ensuring robust network engineering and responsive customer support.',
    icon: '📡',
    color: 'from-primary to-accent',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1582193607281-dafb7941640f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Network Engineers', 'Telecom Technicians', '5G Specialists', 'RF Engineers', 'Customer Support', 'Project Managers'],
    services: ['Network Installation', '5G Deployment', 'Maintenance & Support', 'Customer Service', 'Infrastructure Development'],
    highlights: ['5G and fiber expertise', 'Nationwide coverage', '24/7 network support'],
  },
  {
    title: 'Financial Services',
    description: 'We deliver highly skilled professionals across banking, insurance, investment, and fintech sectors, enhancing financial strategies and operations with top-tier talent.',
    icon: '💰',
    color: 'from-accent to-primary',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Financial Analysts', 'Investment Advisors', 'Risk Managers', 'Compliance Officers', 'Banking Professionals', 'Fintech Developers'],
    services: ['Banking Operations', 'Investment Management', 'Risk & Compliance', 'Fintech Solutions', 'Financial Consulting'],
    highlights: ['Regulatory compliance expertise', 'Fintech innovation', 'Global financial markets'],
  },
  {
    title: 'Healthcare',
    description: 'Catering to staffing for medical services, healthcare administration, and biotechnology, prioritizing expertise and compassionate care.',
    icon: '🏥',
    color: 'from-accent to-primary',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Registered Nurses', 'Physicians', 'Medical Technologists', 'Healthcare Administrators', 'Pharmacy Staff', 'Medical Coders'],
    services: ['Clinical Staffing', 'Healthcare Administration', 'Medical Billing', 'Pharmacy Services', 'Telemedicine Support'],
    highlights: ['Licensed professionals', 'HIPAA compliant', '24/7 healthcare staffing'],
  },
  {
    title: 'Outsourcing & Offshoring',
    description: 'We staff BPOs, KPOs, and other outsourcing services with professionals who enhance operational efficiencies and service delivery.',
    icon: '🌐',
    color: 'from-primary to-accent',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1739527324181-e02978b400c0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Call Center Agents', 'Data Entry Specialists', 'Customer Service Reps', 'Back Office Staff', 'Virtual Assistants', 'Process Analysts'],
    services: ['BPO Services', 'KPO Solutions', 'Customer Support', 'Data Processing', 'Virtual Assistance'],
    highlights: ['Multi-language support', '24/7 operations', 'Cost-effective solutions'],
  },
  {
    title: 'Facility Management',
    description: 'Our staffing solutions for facility management encompass maintenance, operations, and administration, ensuring seamless functionality of your facilities.',
    icon: '🏢',
    color: 'from-primary to-accent',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Facility Managers', 'Maintenance Technicians', 'Security Personnel', 'Janitorial Staff', 'HVAC Specialists', 'Property Managers'],
    services: ['Facility Maintenance', 'Security Services', 'Cleaning Services', 'HVAC Management', 'Property Management'],
    highlights: ['Comprehensive facility solutions', 'Preventive maintenance', 'Emergency response'],
  },
  {
    title: 'FMCG (Fast-Moving Consumer Goods)',
    description: 'Our recruitment expertise spans the entire FMCG supply chain, from strategic marketing to sales, ensuring dynamic market responsiveness and operational excellence.',
    icon: '🛒',
    color: 'from-accent to-primary',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Brand Managers', 'Sales Executives', 'Supply Chain Analysts', 'Marketing Specialists', 'Retail Managers', 'Category Managers'],
    services: ['Sales & Marketing', 'Supply Chain Management', 'Retail Operations', 'Brand Management', 'Distribution'],
    highlights: ['Fast-paced environment expertise', 'Consumer insights', 'Retail network'],
  },
  {
    title: 'Media & Entertainment',
    description: 'From media production to digital content, our staffing solutions connect you with creative talents that captivate and engage audiences.',
    icon: '🎬',
    color: 'from-accent to-primary',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Content Creators', 'Video Editors', 'Graphic Designers', 'Social Media Managers', 'Producers', 'Creative Directors'],
    services: ['Content Creation', 'Video Production', 'Digital Marketing', 'Social Media Management', 'Creative Services'],
    highlights: ['Creative talent network', 'Digital content expertise', 'Multi-platform experience'],
  },
  {
    title: 'Metals, Minerals And Mining',
    description: 'Providing recruitment solutions for the mining sector, we ensure your operations are powered by specialists in mining, metallurgy, and resource management.',
    icon: '⛏️',
    color: 'from-accent to-primary',
    category: 'Mining',
    image : 'https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Mining Engineers', 'Geologists', 'Metallurgists', 'Safety Inspectors', 'Equipment Operators', 'Environmental Specialists'],
    services: ['Mining Operations', 'Exploration', 'Processing & Refining', 'Safety & Compliance', 'Environmental Management'],
    highlights: ['Mining safety expertise', 'Resource optimization', 'Environmental compliance'],
  },
  {
    title: 'Services',
    description: 'Catering to a broad array of service industries, we provide staffing solutions that enhance customer satisfaction and business operations.',
    icon: '🎯',
    color: 'from-primary to-accent',
    category: 'Services',
    image : 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Service Managers', 'Customer Service Reps', 'Operations Staff', 'Administrative Assistants', 'Account Managers', 'Support Staff'],
    services: ['Customer Service', 'Administrative Support', 'Operations Management', 'Account Management', 'Service Delivery'],
    highlights: ['Multi-industry service expertise', 'Customer-focused solutions', 'Scalable staffing'],
  },
  {
    title: 'Hospitality',
    description: 'Skilled hospitality professionals, chefs, and service staff for hotels, restaurants, and events. Seasonal and permanent placements with multi-language support.',
    href: '/hospitality-staffing',
    icon: '🍽️',
    color: 'from-accent to-primary',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=90&auto=format&fit=crop',
    hasImage: true,
    keyRoles: ['Hotel Managers', 'Chefs & Cooks', 'Wait Staff', 'Event Coordinators', 'Front Desk Staff', 'Housekeeping'],
    services: ['Hotel Staffing', 'Restaurant Staffing', 'Event Staffing', 'Seasonal Placements', 'Multi-language Support'],
    highlights: ['Luxury hospitality experience', 'Seasonal flexibility', 'Multi-cultural teams'],
  },
]

const COMMITMENT_DATA = {
  heading: 'Our Commitment To You Embodies Two Key Values:',
  values: [
    'Seamless delivery of comprehensive recruitment services, handling everything from sourcing resumes to facilitating candidates\' integration into their new roles.',
    'Tailored solutions designed to meet your unique requirements, ensuring that every staffing solution we provide is as unique as your business.',
  ],
  quote: 'We pride ourselves on our ability to provide tailored recruitment solutions across these diverse industries, ensuring that our clients receive the best talent that aligns with their specific industry needs.',
}

export default function IndustriesPageClient() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const [imageLoading, setImageLoading] = useState<Set<string>>(new Set())
  const rafRef = useRef<number | null>(null)

  // Parallax for background orbs (matching Home Hero)
  const orb1Parallax = useParallax({ speed: 20, scrub: 0.6 })
  const orb2Parallax = useParallax({ speed: -15, scrub: 0.5 })

  // Mouse tracking for cursor follow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const handleImageError = (industryTitle: string) => {
    setImageErrors((prev) => new Set(prev).add(industryTitle))
    setImageLoading((prev) => {
      const next = new Set(prev)
      next.delete(industryTitle)
      return next
    })
  }

  const handleImageLoad = (industryTitle: string) => {
    setImageLoading((prev) => {
      const next = new Set(prev)
      next.delete(industryTitle)
      return next
    })
  }

  const handleImageLoadStart = (industryTitle: string) => {
    setImageLoading((prev) => new Set(prev).add(industryTitle))
  }

  const handleKeyDown = (e: React.KeyboardEvent, industryTitle: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setExpandedIndustry(expandedIndustry === industryTitle ? null : industryTitle)
    }
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Creative Split with Visual Elements */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Premium Soft Gradient Background - Matching Home Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-white to-secondary/30 z-0" />
        
        {/* Animated Gradient Orbs with Parallax - Matching Home Hero */}
        <div
          ref={orb1Parallax}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/8 rounded-full blur-3xl opacity-60 z-0"
        />
        <div
          ref={orb2Parallax}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/8 rounded-full blur-3xl opacity-60 z-0"
        />

        {/* Interactive Cursor Follow Effect - Matching Home Hero */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-3xl pointer-events-none opacity-40 z-0"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        {/* Subtle Grid Pattern - Matching Home Hero */}
        <div 
          className="absolute inset-0 opacity-[0.015] z-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} 
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Side - Text */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="inline-block"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <span className="px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border-2 border-accent text-accent font-bold text-sm shadow-lg hover:bg-accent hover:text-white transition-colors duration-300">
                  Industry Expertise
                </span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-8xl lg:text-9xl font-black leading-[0.9]">
                  <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    Spanning
                  </span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Sectors
                  </span>
                </h1>
                
              <motion.p
                className="text-2xl sm:text-3xl text-primary leading-relaxed font-light max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Comprehensive staffing solutions across{' '}
                <span className="font-bold text-accent">diverse industries</span>
                , tailored to your{' '}
                <span className="font-bold text-primary">unique needs</span>
              </motion.p>
              </div>

              <motion.p
                className="text-lg text-primary/80 leading-relaxed max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Our expertise extends across a wide array of industries, each with its unique requirements and challenges. From information technology to healthcare, finance, manufacturing, retail, hospitality, and more.
              </motion.p>
            </motion.div>

            {/* Right Side - Floating Industry Icons */}
            <motion.div
              className="relative h-[600px] lg:h-[700px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Floating Industry Icons in Organic Pattern */}
              {INDUSTRIES_DATA.slice(0, 8).map((industry, index) => {
                const angle = (index * 45) * (Math.PI / 180)
                const radius = 180 + (index % 3) * 40
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                
                return (
                  <motion.div
                    key={industry.title}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: x,
                      y: y,
                    }}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.3, zIndex: 10 }}
                    onHoverStart={() => setHoveredIndustry(industry.title)}
                    onHoverEnd={() => setHoveredIndustry(null)}
                  >
                    <div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-2xl border-2 border-accent/30"
                      role="button"
                      tabIndex={0}
                      aria-label={`${industry.title} industry icon`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setHoveredIndustry(industry.title)
                        }
                      }}
                    >
                      <span className="text-4xl drop-shadow-lg">{industry.icon}</span>
                    </div>
                    <AnimatePresence>
                      {hoveredIndustry === industry.title && (
                        <motion.div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap px-4 py-2 bg-gradient-to-r from-accent to-primary text-white rounded-lg text-sm font-semibold shadow-lg border-2 border-accent/30"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {industry.title}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
              
              {/* Central Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl border-4 border-accent/40"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                aria-label="Global industries hub"
              >
                <span className="text-6xl drop-shadow-lg">🌍</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced with Images and Details */}
      <section className="relative py-32 bg-gradient-to-b from-white via-secondary to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-2xl text-primary max-w-3xl mx-auto">
              Comprehensive staffing solutions across diverse industries
            </p>
          </motion.div>

          {/* Enhanced Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {INDUSTRIES_DATA.map((industry, index) => {
              const isExpanded = expandedIndustry === industry.title
              const imageError = imageErrors.has(industry.title)
              const imageIsLoading = imageLoading.has(industry.title)
              
              return (
                <motion.div
                  key={industry.title}
                  className={`group relative ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredIndustry(industry.title)}
                  onHoverEnd={() => setHoveredIndustry(null)}
                  style={{ willChange: isExpanded ? 'transform' : 'auto' }}
                >
                  <div className="relative h-full bg-white rounded-3xl border-2 border-secondary hover:border-accent/50 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl">
                    {/* Industry Image or Icon-Based Header */}
                    {industry.hasImage && industry.image && !imageError ? (
                      <div className="relative h-64 overflow-hidden">
                        {imageIsLoading && (
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 animate-pulse z-0" />
                        )}
                        <Image
                          src={industry.image}
                          alt={`${industry.title} industry`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={() => handleImageError(industry.title)}
                          onLoad={() => handleImageLoad(industry.title)}
                          onLoadStart={() => handleImageLoadStart(industry.title)}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-primary/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-primary font-semibold text-sm shadow-lg border border-accent/20">
                            {industry.category}
                          </span>
                        </div>

                        {/* Icon Overlay */}
                        <div className="absolute bottom-4 right-4 z-10">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-2xl border-2 border-accent/30">
                            <span className="text-3xl drop-shadow-lg">{industry.icon}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20">
                        {/* Gradient Background Pattern */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-3xl" />
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-primary font-semibold text-sm shadow-lg border border-accent/20">
                            {industry.category}
                          </span>
                        </div>

                        {/* Large Icon Center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-2xl border-4 border-white/50 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-6xl drop-shadow-lg">{industry.icon}</span>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-3 text-primary">
                        {industry.title}
                      </h3>
                      <p className="text-primary/80 leading-relaxed mb-6">
                        {industry.description}
                      </p>

                      {/* Expandable Details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6 overflow-hidden"
                            id={`industry-details-${industry.title}`}
                            aria-hidden={!isExpanded}
                          >
                            {/* Key Roles */}
                            <div>
                              <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" aria-hidden="true" />
                                Key Roles
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {industry.keyRoles.map((role) => (
                                  <div key={`${industry.title}-role-${role}`} className="flex items-center gap-2 text-sm text-primary">
                                    <span className="text-accent font-bold" aria-hidden="true">•</span>
                                    <span>{role}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Services */}
                            <div>
                              <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" aria-hidden="true" />
                                Services
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {industry.services.map((service) => (
                                  <span
                                    key={`${industry.title}-service-${service}`}
                                    className="px-3 py-1 rounded-full bg-secondary text-primary text-sm border border-accent/20 hover:bg-accent/10 transition-colors"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Highlights */}
                            <div>
                              <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" aria-hidden="true" />
                                Highlights
                              </h4>
                              <ul className="space-y-2">
                                {industry.highlights.map((highlight) => (
                                  <li key={`${industry.title}-highlight-${highlight}`} className="flex items-start gap-2 text-sm text-primary">
                                    <span className="text-accent mt-1 font-bold" aria-hidden="true">✓</span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => setExpandedIndustry(isExpanded ? null : industry.title)}
                        onKeyDown={(e) => handleKeyDown(e, industry.title)}
                        aria-expanded={isExpanded}
                        aria-controls={`industry-details-${industry.title}`}
                        className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                          isExpanded
                            ? 'bg-gradient-to-r from-accent to-primary text-white shadow-lg hover:shadow-xl'
                            : 'bg-secondary text-primary border-2 border-accent/30 hover:bg-accent/10 hover:border-accent'
                        }`}
                      >
                        {isExpanded ? 'Show Less' : 'View Details'}
                      </button>

                      {/* Link Button */}
                      {industry.href ? (
                        <Link
                          href={industry.href}
                          className="mt-4 block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 bg-gradient-to-r from-accent to-primary text-white hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                          aria-label={`Explore ${industry.title} staffing solutions`}
                        >
                          Explore {industry.title}
                        </Link>
                      ) : (
                        <div className="mt-4 text-sm text-primary/60 text-center">
                          Coming soon
                        </div>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent to-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section - Creative Split Design */}
      <section className="relative py-32 bg-gradient-to-br from-secondary via-light to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,90,40,0.05),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Our Commitment
              </span>
            </h2>
          </motion.div>

          {/* Two Values - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {COMMITMENT_DATA.values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative h-full bg-white rounded-3xl p-10 border-2 border-secondary hover:border-accent/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Large Number */}
                  <div className="absolute top-8 right-8">
                    <span className="text-9xl font-black text-secondary group-hover:text-accent/20 transition-colors duration-500">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-2 bg-gradient-to-r from-accent to-primary rounded-full mb-6" />
                    <p className="text-xl text-primary leading-relaxed relative z-10">
                      {value}
                    </p>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-secondary shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-primary/20 rounded-tl-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                <span className="text-6xl text-accent">"</span>
              </div>
              <p className="text-2xl text-primary italic leading-relaxed max-w-4xl">
                {COMMITMENT_DATA.quote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Creative Gradient Design */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight">
                Ready to
                <br />
                Get Started?
              </h2>
              <p className="text-2xl text-white/90 leading-relaxed">
                Let's discuss how we can help you find the perfect talent for your industry.
              </p>
            </motion.div>

            {/* Right - CTA Buttons */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="block w-full px-10 py-6 bg-white text-accent font-bold rounded-2xl text-center text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-accent"
              >
                Contact Us Today
              </Link>
              <Link
                href="/software-solutions"
                className="block w-full px-10 py-6 bg-transparent border-2 border-white text-white font-bold rounded-2xl text-center text-xl hover:bg-white/10 hover:border-accent transition-all duration-300"
              >
                Explore Software Solutions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
