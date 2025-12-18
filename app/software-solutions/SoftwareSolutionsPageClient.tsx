'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useParallax } from '@/hooks/useParallax'

const softwareServices = [
  {
    id: 'interactive-solutions',
    title: 'Interactive Solutions',
    description: 'We have crafted interactive solutions to enhance user experiences and boost engagement.',
    icon: '🎨',
    gradient: 'from-blue-500 to-cyan-500',
    services: ['Portal Development', 'UX & UI Design', 'Digital Marketing', 'CMS & Web Design', 'Mobile Applications', 'Enterprise Content Management'],
    focus: 'Creating engaging digital experiences through web applications and mobile apps.',
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'End-to-end product engineering services, from concept to deployment.',
    icon: '⚙️',
    gradient: 'from-purple-500 to-pink-500',
    services: ['Agile Development and Delivery', 'Full-Stack Development', 'Cross-Domain Expertise', 'Rapid Prototyping', 'Quality Assurance and Testing Excellence'],
    focus: 'Delivering innovative products with speed and quality.',
  },
  {
    id: 'connected-enterprise',
    title: 'Connected Enterprise',
    description: 'Connected Enterprise solutions designed to enhance operations, foster collaboration, and elevate efficiency.',
    icon: '🔗',
    gradient: 'from-orange-500 to-red-500',
    services: ['End-to-end integration', 'Scalable and future-ready solutions', 'Security-first approach'],
    focus: 'Seamlessly connecting your business ecosystem for maximum efficiency.',
  },
  {
    id: 'data-ai',
    title: 'Data & AI',
    description: 'Hudson IT leverages cloud data and artificial intelligence to transform business operations. Our integrated solutions utilize cloud computing for seamless data management and advanced AI algorithms to enhance decision-making and operational efficiency.',
    icon: '🤖',
    gradient: 'from-green-500 to-emerald-500',
    services: ['Generative AI', 'Data Platform Modernization', 'AI and Machine Learning', 'Serverless Computing', 'Data Storage', 'Data Security and Privacy'],
    focus: 'Transforming businesses with intelligent data solutions and AI capabilities.',
  },
  {
    id: 'data-management',
    title: 'Data Management',
    description: 'Comprehensive data management solutions to ensure data accuracy, accessibility, and usability.',
    icon: '📊',
    gradient: 'from-indigo-500 to-blue-500',
    services: ['Data Quality Management', 'Data Security and Compliance', 'Data Integration and Migration', 'Master Data Management (MDM)'],
    focus: 'Ensuring your data is accurate, secure, and accessible when you need it.',
  },
  {
    id: 'application-management',
    title: 'Application Management',
    description: 'Focusing on cloud application management, Hudson IT offers services that streamline cloud operations.',
    icon: '☁️',
    gradient: 'from-teal-500 to-cyan-500',
    services: ['DevOps Integration', 'Intelligent Automation', 'Auto-Scaling', 'Application Monitoring', 'Performance Optimization'],
    focus: 'Optimizing cloud applications for peak performance and reliability.',
  },
  {
    id: 'network-services',
    title: 'Network Services',
    description: 'Hudson IT specializes in cloud network services, assisting organizations in optimizing their cloud network performance, security, and scalability.',
    icon: '🌐',
    gradient: 'from-violet-500 to-purple-500',
    services: ['Enterprise Network Solutions', 'Network Managed Services'],
    focus: 'Building robust, secure, and scalable network infrastructure.',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Specialized data engineering services for modern data infrastructure.',
    icon: '🔧',
    gradient: 'from-rose-500 to-pink-500',
    services: ['Data pipeline development', 'ETL/ELT processes', 'Data warehousing solutions'],
    focus: 'Building robust data pipelines and infrastructure for modern analytics.',
  },
  {
    id: 'analytics-bi',
    title: 'Analytics & Business Intelligence',
    description: 'Advanced analytics and business intelligence solutions to drive data-driven decision making.',
    icon: '📈',
    gradient: 'from-amber-500 to-orange-500',
    services: ['Business intelligence dashboards', 'Data visualization', 'Predictive analytics', 'Reporting solutions'],
    focus: 'Turning data into actionable insights for better business decisions.',
  },
  {
    id: 'web-development',
    title: 'Web Design & Development',
    description: 'Custom web design and development services for businesses of all sizes.',
    icon: '💻',
    gradient: 'from-sky-500 to-blue-500',
    services: ['Custom website development', 'Responsive design', 'E-commerce solutions', 'Web application development'],
    focus: 'Creating beautiful, functional websites that drive business results.',
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    description: 'Enterprise-grade software solutions for large organizations.',
    icon: '🏢',
    gradient: 'from-emerald-500 to-teal-500',
    services: ['Enterprise application development', 'System integration', 'Legacy system modernization'],
    focus: 'Powering large-scale operations with robust enterprise solutions.',
  },
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    description: 'Strategic technology consulting to help businesses leverage technology effectively.',
    icon: '💡',
    gradient: 'from-fuchsia-500 to-pink-500',
    services: ['Technology strategy', 'Digital transformation consulting', 'IT architecture planning'],
    focus: 'Guiding your technology journey with expert strategic advice.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Capabilities',
    description: 'Comprehensive cybersecurity services to protect organizations from threats.',
    icon: '🔒',
    gradient: 'from-red-500 to-rose-500',
    services: ['Security assessment', 'Threat detection and response', 'Compliance and governance', 'Security infrastructure'],
    focus: 'Protecting your business with enterprise-grade security solutions.',
  },
  {
    id: 'application-transformation',
    title: 'Application Transformation',
    description: 'Modernizing and transforming legacy applications for the cloud era.',
    icon: '🔄',
    gradient: 'from-blue-600 to-indigo-600',
    services: ['Application migration', 'Cloud-native development', 'Microservices architecture'],
    focus: 'Modernizing legacy systems for the cloud-native future.',
  },
  {
    id: 'infrastructure-services',
    title: 'Infrastructure Services',
    description: 'Cloud infrastructure services for scalable and reliable operations.',
    icon: '🏗️',
    gradient: 'from-cyan-500 to-blue-500',
    services: ['Cloud infrastructure setup', 'Infrastructure as Code', 'Disaster recovery', 'Infrastructure monitoring'],
    focus: 'Building resilient, scalable infrastructure for your business.',
  },
]

const keyFeatures = [
  {
    title: 'Custom Development',
    description: 'Bespoke software solutions designed and developed to meet your unique business requirements and workflows.',
    icon: '🎯',
    number: '01',
  },
  {
    title: 'Enterprise Applications',
    description: 'Scalable enterprise-grade applications with robust architecture, security, and performance optimization.',
    icon: '🚀',
    number: '02',
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud-native applications, migration services, and infrastructure management for modern businesses.',
    icon: '☁️',
    number: '03',
  },
  {
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
    icon: '✨',
    number: '04',
  },
]

export default function SoftwareSolutionsPageClient() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Creative Split Design */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
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
                <span className="px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border-2 border-accent/30 text-accent font-bold text-sm shadow-lg">
                  Enterprise Software Development
                </span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black leading-[0.9]">
                  <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    Software
                  </span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h1>
                
                <motion.p
                  className="text-2xl sm:text-3xl text-text leading-relaxed font-light max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Transform your business with{' '}
                  <span className="font-bold text-accent">custom software</span>
                  ,{' '}
                  <span className="font-bold text-primary">enterprise applications</span>
                  , and{' '}
                  <span className="font-bold text-accent">digital transformation</span>
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-accent to-primary text-white font-bold rounded-2xl overflow-hidden shadow-2xl hover:shadow-accent/50 transition-all duration-300"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <Link
                  href="/about"
                  className="px-10 py-5 bg-white/90 backdrop-blur-md border-2 border-accent/30 text-accent font-bold rounded-2xl hover:bg-accent/10 transition-all duration-300 shadow-lg"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Elements */}
            <motion.div
              className="relative h-[600px] lg:h-[700px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Floating Service Icons */}
              {softwareServices.slice(0, 6).map((service, index) => {
                const angle = (index * 60) * (Math.PI / 180)
                const radius = 200
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                
                return (
                  <motion.div
                    key={service.id}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-2xl cursor-pointer border-2 border-accent/30">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                  </motion.div>
                )
              })}
              
              {/* Central Hub - Hudson Colors */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl border-4 border-accent/40"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                <span className="text-5xl">💼</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Creative Numbered List */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(240,90,40,0.03)_50%,transparent_100%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Core
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(feature.title)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-white via-secondary/50 to-white border-2 border-transparent hover:border-accent/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Large Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <span className="text-9xl sm:text-[12rem] font-black text-secondary group-hover:text-accent/20 transition-colors duration-500">
                        {feature.number}
                      </span>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-4xl sm:text-5xl font-bold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-text leading-relaxed max-w-2xl">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Gradient Overlay - Hudson Colors */}
                  <AnimatePresence>
                    {hoveredService === feature.title && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Creative Grid with Overlapping Elements */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
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
                Our Solutions
              </span>
            </h2>
            <p className="text-2xl text-text max-w-3xl mx-auto">
              A complete suite of software services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                style={{ perspective: 1000 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className="relative h-full bg-white rounded-3xl p-8 border-2 border-secondary hover:border-accent/30 overflow-hidden transition-all duration-500">
                  {/* Gradient Background - Hudson Colors */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon - Large and Prominent - Hudson Colors */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-2xl border-2 border-accent/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-5xl">{service.icon}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-3 text-primary group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-text group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-500">
                      {service.description}
                    </p>
                    
                    {/* Services - Compact List */}
                    <div className="space-y-2">
                      {service.services.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary group-hover:bg-white transition-colors duration-500" />
                          <span className="text-text group-hover:text-white/90 transition-colors duration-500">{item}</span>
                        </div>
                      ))}
                      {service.services.length > 3 && (
                        <div className="text-sm text-text/60 group-hover:text-white/80 transition-colors duration-500">
                          +{service.services.length - 3} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Decorative Elements - Hudson Colors */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent to-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent to-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Creative Split Design - Hudson Colors */}
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
                Transform?
              </h2>
              <p className="text-2xl text-white/90 leading-relaxed">
                Let's discuss how our software solutions can drive innovation and growth for your organization.
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
                className="block w-full px-10 py-6 bg-white text-accent font-bold rounded-2xl text-center text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="block w-full px-10 py-6 bg-transparent border-2 border-white text-white font-bold rounded-2xl text-center text-xl hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
