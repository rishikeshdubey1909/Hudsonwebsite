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
    color: 'from-orange-500 to-red-500',
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
    color: 'from-blue-500 to-cyan-500',
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
    color: 'from-gray-600 to-gray-800',
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
    color: 'from-purple-500 to-pink-500',
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
    color: 'from-green-500 to-emerald-500',
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
    color: 'from-yellow-500 to-orange-500',
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
    color: 'from-red-500 to-pink-500',
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
    color: 'from-indigo-500 to-blue-500',
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
    color: 'from-green-600 to-emerald-600',
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
    color: 'from-red-400 to-pink-400',
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
    color: 'from-blue-600 to-cyan-600',
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
    color: 'from-gray-500 to-gray-700',
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
    color: 'from-orange-400 to-red-400',
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
    color: 'from-purple-600 to-pink-600',
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
    color: 'from-amber-600 to-orange-600',
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
    color: 'from-teal-500 to-cyan-500',
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
    color: 'from-amber-400 to-yellow-400',
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
      {/* Hero Section - Creative Split with Visual Elements */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50" />
          <motion.div
            className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

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
                <span className="px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border-2 border-orange-200 text-orange-600 font-bold text-sm shadow-lg">
                  Industry Expertise
                </span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black leading-[0.9]">
                  <span className="block bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Spanning
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Sectors
                  </span>
                </h1>
                
                <motion.p
                  className="text-2xl sm:text-3xl text-gray-700 leading-relaxed font-light max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Comprehensive staffing solutions across{' '}
                  <span className="font-bold text-orange-600">diverse industries</span>
                  , tailored to your{' '}
                  <span className="font-bold text-blue-600">unique needs</span>
                </motion.p>
              </div>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
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
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-2xl`}>
                      <span className="text-4xl">{industry.icon}</span>
                    </div>
                    <AnimatePresence>
                      {hoveredIndustry === industry.title && (
                        <motion.div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold"
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-orange-600 via-blue-600 to-purple-600 flex items-center justify-center shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                <span className="text-6xl">🌍</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced with Images and Details */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
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
              <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive staffing solutions across diverse industries
            </p>
          </motion.div>

          {/* Enhanced Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((industry, index) => {
              const isExpanded = expandedIndustry === industry.title
              
              return (
                <motion.div
                  key={industry.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredIndustry(industry.title)}
                  onHoverEnd={() => setHoveredIndustry(null)}
                >
                  <div className={`relative h-full bg-white rounded-3xl border-2 border-gray-200 hover:border-transparent overflow-hidden transition-all duration-500 ${
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
                      <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 font-semibold text-sm shadow-lg">
                          {industry.category}
                        </span>
                      </div>

                      {/* Icon Overlay */}
                      <div className="absolute bottom-4 right-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-2xl`}>
                          <span className="text-3xl">{industry.icon}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-3 text-gray-900">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
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
                              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                                Key Roles
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {industry.keyRoles.map((role, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-orange-500">•</span>
                                    <span>{role}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Services */}
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                                Services
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {industry.services.map((service, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Highlights */}
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                                Highlights
                              </h4>
                              <ul className="space-y-2">
                                {industry.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-green-500 mt-1">✓</span>
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
                            ? `bg-gradient-to-r ${industry.color} text-white`
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {isExpanded ? 'Show Less' : 'View Details'}
                      </button>

                      {/* Link Button */}
                      {industry.href && (
                        <Link
                          href={industry.href}
                          className={`mt-4 block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 bg-gradient-to-r ${industry.color} text-white hover:shadow-xl hover:scale-105`}
                        >
                          Explore {industry.title}
                        </Link>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${industry.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section - Creative Split Design */}
      <section className="relative py-32 bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                <div className="relative h-full bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Large Number */}
                  <div className="absolute top-8 right-8">
                    <span className="text-9xl font-black text-gray-100 group-hover:text-orange-100 transition-colors duration-500">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-6" />
                    <p className="text-xl text-gray-700 leading-relaxed relative z-10">
                      {value}
                    </p>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-gray-200 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-tl-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full" />
                <span className="text-6xl">"</span>
              </div>
              <p className="text-2xl text-gray-700 italic leading-relaxed max-w-4xl">
                {COMMITMENT_DATA.quote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Creative Gradient Design */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-blue-600 to-purple-600" />
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
                className="block w-full px-10 py-6 bg-white text-orange-600 font-bold rounded-2xl text-center text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <Link
                href="/software-solutions"
                className="block w-full px-10 py-6 bg-transparent border-3 border-white text-white font-bold rounded-2xl text-center text-xl hover:bg-white/10 transition-all duration-300"
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
