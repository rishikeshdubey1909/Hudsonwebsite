'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const INDUSTRIES_DATA = [
  {
    title: 'Oil & Gas',
    description: 'Specializing in recruitment for the oil and gas industry, we cover roles from exploration and production to energy management, fueling the sector with expert recruits.',
    href: '/oil-and-gas-staffing',
    icon: '⛽',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    keyRoles: ['Petroleum Engineers', 'Drilling Supervisors', 'Geologists', 'Refinery Operators', 'Pipeline Engineers', 'Safety Specialists'],
    services: ['Exploration & Production Staffing', 'Refinery Operations', 'Pipeline Management', 'Safety & Compliance', 'Project Management'],
    highlights: ['Global reach across major oil fields', '24/7 emergency staffing', 'Compliance with industry standards'],
  },
  {
    title: 'Engineering',
    description: 'With a focus on civil, mechanical, electrical, & chemical engineering, our recruitment strategies bring in expert professionals to push the boundaries of engineering innovation.',
    icon: '🔧',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1581091878788-959a0b0c1e0b?w=800&q=80',
    keyRoles: ['Civil Engineers', 'Mechanical Engineers', 'Electrical Engineers', 'Chemical Engineers', 'Project Engineers', 'Design Engineers'],
    services: ['Engineering Design', 'Project Management', 'Quality Assurance', 'Technical Consulting', 'CAD/Design Services'],
    highlights: ['Multi-disciplinary expertise', 'PE licensed professionals', 'International project experience'],
  },
  {
    title: 'Industrial & Infrastructure',
    description: 'Our focus is on sourcing professionals for construction, manufacturing, and infrastructure projects, driving progress with skilled manpower.',
    icon: '🏗️',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    keyRoles: ['Construction Managers', 'Site Engineers', 'Project Coordinators', 'Safety Officers', 'Quality Inspectors', 'Foremen'],
    services: ['Construction Staffing', 'Infrastructure Development', 'Project Planning', 'Safety Management', 'Quality Control'],
    highlights: ['Large-scale project experience', 'OSHA certified professionals', 'Turnkey project solutions'],
  },
  {
    title: 'Information Technology',
    description: 'Specializing in software development, IT support, and tech innovation, our IT professionals are poised to advance your technological capabilities.',
    href: '/us-it-staffing',
    icon: '💻',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    keyRoles: ['Software Developers', 'DevOps Engineers', 'Cloud Architects', 'Data Scientists', 'Cybersecurity Specialists', 'IT Support'],
    services: ['Software Development', 'Cloud Migration', 'IT Infrastructure', 'Cybersecurity', 'Data Analytics'],
    highlights: ['Cutting-edge technology expertise', 'Agile & DevOps certified', '24/7 IT support'],
  },
  {
    title: 'Logistics',
    description: 'We excel in recruiting specialists in supply chain management, transportation, and warehousing, optimizing logistics operations with precision.',
    icon: '🚚',
    category: 'Operations',
    image: 'https://images.unsplash.com/photo-1601581875306-fafbf2b3b69c?w=800&q=80',
    keyRoles: ['Supply Chain Managers', 'Logistics Coordinators', 'Warehouse Supervisors', 'Fleet Managers', 'Distribution Specialists', 'Inventory Analysts'],
    services: ['Supply Chain Management', 'Warehouse Operations', 'Transportation', 'Distribution', 'Inventory Management'],
    highlights: ['End-to-end logistics solutions', 'Real-time tracking systems', 'Cost optimization expertise'],
  },
  {
    title: 'Power',
    description: 'Our recruitment expertise in the power sector fills roles that drive energy efficiency and innovation within the industry.',
    icon: '⚡',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    keyRoles: ['Power Engineers', 'Electrical Technicians', 'Grid Operators', 'Renewable Energy Specialists', 'Maintenance Engineers', 'Energy Analysts'],
    services: ['Power Generation', 'Grid Management', 'Renewable Energy', 'Maintenance & Operations', 'Energy Consulting'],
    highlights: ['Renewable energy expertise', 'Grid modernization projects', '24/7 power operations'],
  },
  {
    title: 'Automobile',
    description: 'Specializing in automotive recruitment, Hudson Manpower sources top talent for design, manufacturing, and sales within the auto industry, ensuring innovation and expertise drive your workforce.',
    icon: '🚗',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    keyRoles: ['Automotive Engineers', 'Production Managers', 'Quality Engineers', 'Design Engineers', 'Sales Professionals', 'Service Technicians'],
    services: ['Manufacturing Staffing', 'Design & Development', 'Quality Assurance', 'Sales & Marketing', 'After-sales Service'],
    highlights: ['EV and hybrid expertise', 'Lean manufacturing', 'Global automotive networks'],
  },
  {
    title: 'Telecom',
    description: 'We recruit top talents in telecommunications, ensuring robust network engineering and responsive customer support.',
    icon: '📡',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    keyRoles: ['Network Engineers', 'Telecom Technicians', '5G Specialists', 'RF Engineers', 'Customer Support', 'Project Managers'],
    services: ['Network Installation', '5G Deployment', 'Maintenance & Support', 'Customer Service', 'Infrastructure Development'],
    highlights: ['5G and fiber expertise', 'Nationwide coverage', '24/7 network support'],
  },
  {
    title: 'Financial Services',
    description: 'We deliver highly skilled professionals across banking, insurance, investment, and fintech sectors, enhancing financial strategies and operations with top-tier talent.',
    icon: '💰',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    keyRoles: ['Financial Analysts', 'Investment Advisors', 'Risk Managers', 'Compliance Officers', 'Banking Professionals', 'Fintech Developers'],
    services: ['Banking Operations', 'Investment Management', 'Risk & Compliance', 'Fintech Solutions', 'Financial Consulting'],
    highlights: ['Regulatory compliance expertise', 'Fintech innovation', 'Global financial markets'],
  },
  {
    title: 'Healthcare',
    description: 'Catering to staffing for medical services, healthcare administration, and biotechnology, prioritizing expertise and compassionate care.',
    icon: '🏥',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=800&q=80',
    keyRoles: ['Registered Nurses', 'Physicians', 'Medical Technologists', 'Healthcare Administrators', 'Pharmacy Staff', 'Medical Coders'],
    services: ['Clinical Staffing', 'Healthcare Administration', 'Medical Billing', 'Pharmacy Services', 'Telemedicine Support'],
    highlights: ['Licensed professionals', 'HIPAA compliant', '24/7 healthcare staffing'],
  },
  {
    title: 'Outsourcing & Offshoring',
    description: 'We staff BPOs, KPOs, and other outsourcing services with professionals who enhance operational efficiencies and service delivery.',
    icon: '🌐',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    keyRoles: ['Call Center Agents', 'Data Entry Specialists', 'Customer Service Reps', 'Back Office Staff', 'Virtual Assistants', 'Process Analysts'],
    services: ['BPO Services', 'KPO Solutions', 'Customer Support', 'Data Processing', 'Virtual Assistance'],
    highlights: ['Multi-language support', '24/7 operations', 'Cost-effective solutions'],
  },
  {
    title: 'Facility Management',
    description: 'Our staffing solutions for facility management encompass maintenance, operations, and administration, ensuring seamless functionality of your facilities.',
    icon: '🏢',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    keyRoles: ['Facility Managers', 'Maintenance Technicians', 'Security Personnel', 'Janitorial Staff', 'HVAC Specialists', 'Property Managers'],
    services: ['Facility Maintenance', 'Security Services', 'Cleaning Services', 'HVAC Management', 'Property Management'],
    highlights: ['Comprehensive facility solutions', 'Preventive maintenance', 'Emergency response'],
  },
  {
    title: 'FMCG (Fast-Moving Consumer Goods)',
    description: 'Our recruitment expertise spans the entire FMCG supply chain, from strategic marketing to sales, ensuring dynamic market responsiveness and operational excellence.',
    icon: '🛒',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    keyRoles: ['Brand Managers', 'Sales Executives', 'Supply Chain Analysts', 'Marketing Specialists', 'Retail Managers', 'Category Managers'],
    services: ['Sales & Marketing', 'Supply Chain Management', 'Retail Operations', 'Brand Management', 'Distribution'],
    highlights: ['Fast-paced environment expertise', 'Consumer insights', 'Retail network'],
  },
  {
    title: 'Media & Entertainment',
    description: 'From media production to digital content, our staffing solutions connect you with creative talents that captivate and engage audiences.',
    icon: '🎬',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    keyRoles: ['Content Creators', 'Video Editors', 'Graphic Designers', 'Social Media Managers', 'Producers', 'Creative Directors'],
    services: ['Content Creation', 'Video Production', 'Digital Marketing', 'Social Media Management', 'Creative Services'],
    highlights: ['Creative talent network', 'Digital content expertise', 'Multi-platform experience'],
  },
  {
    title: 'Metals, Minerals And Mining',
    description: 'Providing recruitment solutions for the mining sector, we ensure your operations are powered by specialists in mining, metallurgy, and resource management.',
    icon: '⛏️',
    category: 'Mining',
    image: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=800&q=80',
    keyRoles: ['Mining Engineers', 'Geologists', 'Metallurgists', 'Safety Inspectors', 'Equipment Operators', 'Environmental Specialists'],
    services: ['Mining Operations', 'Exploration', 'Processing & Refining', 'Safety & Compliance', 'Environmental Management'],
    highlights: ['Mining safety expertise', 'Resource optimization', 'Environmental compliance'],
  },
  {
    title: 'Services',
    description: 'Catering to a broad array of service industries, we provide staffing solutions that enhance customer satisfaction and business operations.',
    icon: '🎯',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    keyRoles: ['Service Managers', 'Customer Service Reps', 'Operations Staff', 'Administrative Assistants', 'Account Managers', 'Support Staff'],
    services: ['Customer Service', 'Administrative Support', 'Operations Management', 'Account Management', 'Service Delivery'],
    highlights: ['Multi-industry service expertise', 'Customer-focused solutions', 'Scalable staffing'],
  },
  {
    title: 'Hospitality',
    description: 'Skilled hospitality professionals, chefs, and service staff for hotels, restaurants, and events. Seasonal and permanent placements with multi-language support.',
    href: '/hospitality-staffing',
    icon: '🍽️',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
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
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null)

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
                <span className="text-xs font-semibold text-accent tracking-wide uppercase">Industry Expertise</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-dark mb-2">Spanning</span>
              <span className="block gradient-text">Sectors</span>
            </motion.h1>

            {/* Description */}
            <motion.div
              className="space-y-5 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-text/70 leading-relaxed max-w-3xl mx-auto">
                Comprehensive staffing solutions across{' '}
                <span className="font-bold text-accent relative inline-block">
                  <span className="relative z-10">diverse industries</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 to-transparent rounded-full" />
                </span>
                , tailored to your unique needs
              </p>
              
              <p className="text-base sm:text-lg text-text/65 leading-relaxed max-w-xl mx-auto">
                Our expertise extends across a wide array of industries, each with its unique requirements and challenges. From information technology to healthcare, finance, manufacturing, retail, hospitality, and more.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-6 pt-6 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { value: '18+', label: 'Industries', sublabel: 'Served', icon: '🏢' },
                { value: '50+', label: 'Countries', sublabel: 'Global', icon: '🌍' },
                { value: '10K+', label: 'Professionals', sublabel: 'Deployed', icon: '👥' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 lg:p-6 border border-accent/10 shadow-lg hover:shadow-xl hover:border-accent/20 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Icon */}
                  <div className="text-2xl mb-2 relative z-10">{stat.icon}</div>
                  
                  {/* Value */}
                  <div className="text-3xl lg:text-4xl font-black gradient-text mb-2 relative z-10">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm font-bold text-dark mb-1 relative z-10">{stat.label}</div>
                  <div className="text-xs text-text/60 relative z-10">{stat.sublabel}</div>
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/8 group-hover:via-accent/5 group-hover:to-primary/8 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link href="/contact" className="group relative inline-block">
                <motion.button
                  className="relative px-8 py-4 lg:px-10 lg:py-4.5 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg shadow-lg shadow-accent/20 overflow-hidden w-full sm:w-auto transition-all duration-200"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
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

              <Link href="#industries" className="group relative inline-block">
                <motion.button
                  className="relative px-8 py-4 lg:px-10 lg:py-4.5 bg-white/60 backdrop-blur-sm border-2 border-dark/10 text-dark rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg shadow-sm overflow-hidden group-hover:border-accent/40 transition-all duration-200 w-full sm:w-auto"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Industries
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

      {/* Industries Section - Matching Homepage Style */}
      <section id="industries" className="relative py-28 lg:py-36 overflow-hidden bg-light">
        {/* Subtle background pattern */}
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
              <span className="gradient-text">Our Expertise</span>
            </h2>
            <p className="text-xl lg:text-2xl text-text/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive staffing solutions across diverse industries
            </p>
          </motion.div>

          {/* Enhanced Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {INDUSTRIES_DATA.map((industry, index) => {
              const isExpanded = expandedIndustry === industry.title
              
              return (
                <motion.div
                  key={industry.title}
                  className="group relative h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredIndustry(industry.title)}
                  onHoverEnd={() => setHoveredIndustry(null)}
                >
                  <div className={`relative h-full bg-white/70 backdrop-blur-md rounded-[32px] overflow-hidden border border-black/5 hover:border-accent/20 shadow-lg hover:shadow-xl transition-all duration-500 ${
                    isExpanded ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}>
                    {/* Industry Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-accent/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-dark font-semibold text-sm shadow-lg border border-accent/20">
                          {industry.category}
                        </span>
                      </div>

                      {/* Icon Overlay */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-md shadow-lg">
                          <span className="text-3xl">{industry.icon}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-dark">
                        {industry.title}
                      </h3>
                      <p className="text-text/70 leading-relaxed mb-6 text-[15px] lg:text-base">
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
                          >
                            {/* Key Roles */}
                            <div>
                              <h4 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Key Roles
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {industry.keyRoles.map((role, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-text/70">
                                    <span className="text-accent font-bold">•</span>
                                    <span>{role}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Services */}
                            <div>
                              <h4 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Services
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {industry.services.map((service, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 rounded-full bg-secondary text-dark text-sm border border-accent/20 hover:bg-accent/10 transition-colors"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Highlights */}
                            <div>
                              <h4 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Highlights
                              </h4>
                              <ul className="space-y-2">
                                {industry.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-text/70">
                                    <span className="text-accent mt-1 font-bold">✓</span>
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
                        className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                          isExpanded
                            ? 'bg-gradient-to-r from-accent to-accent/90 text-white shadow-lg hover:shadow-xl'
                            : 'bg-secondary text-dark border-2 border-accent/30 hover:bg-accent/10 hover:border-accent'
                        }`}
                      >
                        {isExpanded ? 'Show Less' : 'View Details'}
                      </button>

                      {/* Link Button */}
                      {industry.href && (
                        <Link
                          href={industry.href}
                          className="mt-4 block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 bg-gradient-to-r from-accent to-accent/90 text-white hover:shadow-xl hover:scale-105"
                        >
                          Explore {industry.title}
                        </Link>
                      )}
                    </div>

                    {/* Hover Gradient Overlay */}
                    <AnimatePresence>
                      {hoveredIndustry === industry.title && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 rounded-[32px] pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section - Matching Homepage Style */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-white">
        {/* Premium Background Texture */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E")`,
            opacity: 0.03,
          }}
        />
        
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(240, 90, 40, 0.06), transparent 70%)',
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} 
        />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 tracking-tight">
              <span className="gradient-text">Our Commitment</span>
            </h2>
          </motion.div>

          {/* Two Values - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {COMMITMENT_DATA.values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative h-full bg-white/70 backdrop-blur-md rounded-[32px] p-8 lg:p-10 border border-black/5 hover:border-accent/20 hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Large Number */}
                  <div className="absolute top-8 right-8">
                    <span className="text-9xl font-black text-secondary group-hover:text-accent/10 transition-colors duration-500">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-2 bg-gradient-to-r from-accent to-primary rounded-full mb-6" />
                    <p className="text-xl text-text/70 leading-relaxed relative z-10">
                      {value}
                    </p>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div
            className="relative bg-white/80 backdrop-blur-sm rounded-[32px] p-10 lg:p-12 border border-accent/10 shadow-xl overflow-hidden"
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
              <p className="text-2xl text-text/70 italic leading-relaxed max-w-4xl">
                {COMMITMENT_DATA.quote}
              </p>
            </div>
          </motion.div>
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
                className="block w-full px-10 py-6 bg-white text-accent font-bold rounded-2xl text-center text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <Link
                href="/software-solutions"
                className="block w-full px-10 py-6 bg-transparent border-2 border-white text-white font-bold rounded-2xl text-center text-xl hover:bg-white/10 transition-all duration-300"
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
