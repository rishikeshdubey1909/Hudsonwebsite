'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const softwareServices = [
  {
    id: 'interactive-solutions',
    title: 'Interactive Solutions',
    description: 'We have crafted interactive solutions to enhance user experiences and boost engagement.',
    icon: '🎨',
    services: ['Portal Development', 'UX & UI Design', 'Digital Marketing', 'CMS & Web Design', 'Mobile Applications', 'Enterprise Content Management'],
    focus: 'Creating engaging digital experiences through web applications and mobile apps.',
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'End-to-end product engineering services, from concept to deployment.',
    icon: '⚙️',
    services: ['Agile Development and Delivery', 'Full-Stack Development', 'Cross-Domain Expertise', 'Rapid Prototyping', 'Quality Assurance and Testing Excellence'],
    focus: 'Delivering innovative products with speed and quality.',
  },
  {
    id: 'connected-enterprise',
    title: 'Connected Enterprise',
    description: 'Connected Enterprise solutions designed to enhance operations, foster collaboration, and elevate efficiency.',
    icon: '🔗',
    services: ['End-to-end integration', 'Scalable and future-ready solutions', 'Security-first approach'],
    focus: 'Seamlessly connecting your business ecosystem for maximum efficiency.',
  },
  {
    id: 'data-ai',
    title: 'Data & AI',
    description: 'Hudson IT leverages cloud data and artificial intelligence to transform business operations. Our integrated solutions utilize cloud computing for seamless data management and advanced AI algorithms to enhance decision-making and operational efficiency.',
    icon: '🤖',
    services: ['Generative AI', 'Data Platform Modernization', 'AI and Machine Learning', 'Serverless Computing', 'Data Storage', 'Data Security and Privacy'],
    focus: 'Transforming businesses with intelligent data solutions and AI capabilities.',
  },
  {
    id: 'data-management',
    title: 'Data Management',
    description: 'Comprehensive data management solutions to ensure data accuracy, accessibility, and usability.',
    icon: '📊',
    services: ['Data Quality Management', 'Data Security and Compliance', 'Data Integration and Migration', 'Master Data Management (MDM)'],
    focus: 'Ensuring your data is accurate, secure, and accessible when you need it.',
  },
  {
    id: 'application-management',
    title: 'Application Management',
    description: 'Focusing on cloud application management, Hudson IT offers services that streamline cloud operations.',
    icon: '☁️',
    services: ['DevOps Integration', 'Intelligent Automation', 'Auto-Scaling', 'Application Monitoring', 'Performance Optimization'],
    focus: 'Optimizing cloud applications for peak performance and reliability.',
  },
  {
    id: 'network-services',
    title: 'Network Services',
    description: 'Hudson IT specializes in cloud network services, assisting organizations in optimizing their cloud network performance, security, and scalability.',
    icon: '🌐',
    services: ['Enterprise Network Solutions', 'Network Managed Services'],
    focus: 'Building robust, secure, and scalable network infrastructure.',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Specialized data engineering services for modern data infrastructure.',
    icon: '🔧',
    services: ['Data pipeline development', 'ETL/ELT processes', 'Data warehousing solutions'],
    focus: 'Building robust data pipelines and infrastructure for modern analytics.',
  },
  {
    id: 'analytics-bi',
    title: 'Analytics & Business Intelligence',
    description: 'Advanced analytics and business intelligence solutions to drive data-driven decision making.',
    icon: '📈',
    services: ['Business intelligence dashboards', 'Data visualization', 'Predictive analytics', 'Reporting solutions'],
    focus: 'Turning data into actionable insights for better business decisions.',
  },
  {
    id: 'web-development',
    title: 'Web Design & Development',
    description: 'Custom web design and development services for businesses of all sizes.',
    icon: '💻',
    services: ['Custom website development', 'Responsive design', 'E-commerce solutions', 'Web application development'],
    focus: 'Creating beautiful, functional websites that drive business results.',
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    description: 'Enterprise-grade software solutions for large organizations.',
    icon: '🏢',
    services: ['Enterprise application development', 'System integration', 'Legacy system modernization'],
    focus: 'Powering large-scale operations with robust enterprise solutions.',
  },
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    description: 'Strategic technology consulting to help businesses leverage technology effectively.',
    icon: '💡',
    services: ['Technology strategy', 'Digital transformation consulting', 'IT architecture planning'],
    focus: 'Guiding your technology journey with expert strategic advice.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Capabilities',
    description: 'Comprehensive cybersecurity services to protect organizations from threats.',
    icon: '🔒',
    services: ['Security assessment', 'Threat detection and response', 'Compliance and governance', 'Security infrastructure'],
    focus: 'Protecting your business with enterprise-grade security solutions.',
  },
  {
    id: 'application-transformation',
    title: 'Application Transformation',
    description: 'Modernizing and transforming legacy applications for the cloud era.',
    icon: '🔄',
    services: ['Application migration', 'Cloud-native development', 'Microservices architecture'],
    focus: 'Modernizing legacy systems for the cloud-native future.',
  },
  {
    id: 'infrastructure-services',
    title: 'Infrastructure Services',
    description: 'Cloud infrastructure services for scalable and reliable operations.',
    icon: '🏗️',
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

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Matching Homepage Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Premium Soft Gradient Background with Hudson Colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-white to-secondary/30" />
        
        {/* Animated Gradient Orbs with Parallax - Hudson Colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl opacity-60" />

        {/* Subtle Grid Pattern with Hudson Colors */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(rgba(240, 90, 40, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} 
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <div className="flex flex-col items-center justify-center min-h-[85vh] lg:min-h-[90vh] py-12 lg:py-20 text-center">
            {/* Badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-accent/15 shadow-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-accent tracking-wide uppercase">Enterprise Software Development</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-dark mb-2">Software</span>
              <span className="block gradient-text">Solutions</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-text/70 leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your business with{' '}
              <span className="font-bold text-accent">custom software</span>
              ,{' '}
              <span className="font-bold text-accent">enterprise applications</span>
              , and{' '}
              <span className="font-bold text-accent">digital transformation</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact" className="group relative inline-block">
                <motion.button
                  className="relative px-8 py-4 lg:px-10 lg:py-4.5 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg shadow-lg shadow-accent/20 overflow-hidden w-full sm:w-auto transition-all duration-200"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Today
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </Link>

              <Link href="/about" className="group relative inline-block">
                <motion.button
                  className="relative px-8 py-4 lg:px-10 lg:py-4.5 bg-white/60 backdrop-blur-sm border-2 border-dark/10 text-dark rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg shadow-sm overflow-hidden group-hover:border-accent/40 transition-all duration-200 w-full sm:w-auto"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Learn More
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/8 to-accent/0"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] text-text/30 font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-5 h-8 border border-text/15 rounded-full flex justify-center p-1.5">
            <motion.div 
              className="w-1.5 h-1.5 bg-accent/60 rounded-full" 
              animate={{ y: [0, 16, 0] }} 
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} 
            />
          </div>
        </motion.div>
      </section>

      {/* Core Capabilities - Enhanced Space Utilization */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-light to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/8 to-primary/5 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-accent/5 rounded-full blur-3xl opacity-60" />
        </div>
        
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} 
        />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">Core</span>
              <span className="text-dark"> </span>
              <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-base lg:text-lg text-text/70 max-w-2xl mx-auto leading-relaxed">
              Comprehensive software solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Optimized Grid Layout - Better Space Utilization */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredService(feature.title)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-5 lg:p-6 border border-accent/10 shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Number Badge - Compact Design */}
                  <div className="relative mb-4 flex items-center justify-center">
                    <div className="relative">
                      {/* Outer Ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/15 via-accent/8 to-primary/8 blur-sm group-hover:blur-md transition-all duration-300" />
                      
                      {/* Number Circle - Smaller */}
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent/15 to-primary/10 border-2 border-accent/20 flex items-center justify-center backdrop-blur-md shadow-md group-hover:scale-110 group-hover:border-accent/40 transition-all duration-300">
                        <span className="text-lg font-black text-accent">{feature.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content - Compact */}
                  <div className="relative z-10 space-y-2 flex-1 flex flex-col">
                    <h3 className="text-lg lg:text-xl font-bold text-dark group-hover:text-accent transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base text-text/70 leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:via-accent/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />
                  
                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Matching Homepage Card Style */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-light">
        <div className="absolute inset-0 opacity-[0.012] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, currentColor 1px, transparent 1px),
                              linear-gradient(-45deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 tracking-tight">
              <span className="gradient-text">Our Solutions</span>
            </h2>
            <p className="text-xl lg:text-2xl text-text/70 max-w-3xl mx-auto leading-relaxed">
              A complete suite of software services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {softwareServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className="relative h-full bg-white/70 backdrop-blur-md rounded-[32px] p-8 overflow-hidden border border-black/5 hover:border-accent/20 shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-accent/12 to-accent/6 border border-accent/20 flex items-center justify-center backdrop-blur-md shadow-[0_4px_12px_rgba(251,146,60,0.1)]">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-dark">
                      {service.title}
                    </h3>
                    <p className="text-text/70 leading-relaxed mb-6 text-[15px] lg:text-base">
                      {service.description}
                    </p>
                    
                    {/* Services - Compact List */}
                    <div className="space-y-2">
                      {service.services.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-accent/40" />
                          <span className="text-text/60">{item}</span>
                        </div>
                      ))}
                      {service.services.length > 3 && (
                        <div className="text-sm text-text/50">
                          +{service.services.length - 3} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <AnimatePresence>
                    {hoveredService === service.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 rounded-[32px]"
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

      {/* CTA Section - Matching Homepage Style */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
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
