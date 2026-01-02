'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BRAND } from '@/constants/content'

const hudsonPrinciples = [
  {
    letter: 'H',
    word: 'Honesty',
    description: 'We uphold transparency and honesty in all our interactions with clients and candidates alike.',
  },
  {
    letter: 'U',
    word: 'Uncompromising Quality',
    description: 'Our commitment to excellence is unwavering, ensuring only the best talent and services.',
  },
  {
    letter: 'D',
    word: 'Dedicated Service',
    description: 'Every client is important to us, and we show it through our personalized and dedicated approach.',
  },
  {
    letter: 'S',
    word: 'Strategic Solutions',
    description: 'We think ahead, providing strategic staffing and project management solutions.',
  },
  {
    letter: 'O',
    word: 'Outcome Oriented',
    description: 'Our focus is always on delivering positive, measurable outcomes for your business.',
  },
  {
    letter: 'N',
    word: 'Navigating Talent',
    description: 'We expertly navigate the global talent pool, connecting you with the skills and expertise you need.',
  },
]

const whyChooseUs = [
  {
    title: 'Proven Expertise and Experience',
    description: 'With years of successful projects under our belt, The Hudson Group brings unmatched expertise and in-depth industry knowledge to every venture, ensuring that we understand the intricacies and unique requirements of your sector.',
    icon: '🎯',
  },
  {
    title: 'Tailored Staffing Solutions',
    description: 'We pride ourselves on offering customized solutions that align perfectly with your specific business needs. Our approach involves a thorough understanding of your project\'s demands, allowing us to deliver staffing solutions that are not just effective but also innovative.',
    icon: '⚡',
  },
  {
    title: 'Commitment to Integrity and Reliability',
    description: 'At the core of The Hudson Group is a steadfast commitment to honesty and reliability. We build lasting relationships with our clients based on trust, delivering on our promises and maintaining the highest ethical standards in every interaction.',
    icon: '🤝',
  },
]

const teamMembers = [
  {
    name: BRAND.founders.ceo.name,
    title: BRAND.founders.ceo.title,
    image: BRAND.founders.ceo.image,
    description: 'Our CEO embodies a unique blend of expertise and empathy, having honed a deep-seated passion for hiring and personnel management throughout his career in customer-centric businesses. Mayank\'s journey has culminated in his leadership role at The Hudson Group, a prestigious firm known for serving a diverse clientele from the Middle East to South East Asia, the Americas, and the Caspian Region.\n\nMayank excels in understanding client needs, ensuring a perfect alignment of talent with their requirements, all while maintaining a keen involvement in the business\'s administrative facets. His dedication extends beyond professional duties to the genuine care of our team\'s welfare, actively participating in various HR roles to support the health and happiness of our employees, thereby enhancing their effectiveness with our clients.\n\nMore than a leader, Mayank is a compassionate individual, always available to support not just his family and friends but every member of our team, fostering a nurturing environment that encourages personal and professional growth. His enthusiasm for connecting with new people and valuing diverse viewpoints not only enriches our company culture but also propels our collective success.\n\nWe invite you to be part of our story, led by a visionary who excels in business acumen and cherishes the human element in all facets of our operations, steering us towards building a compassionate and professional team dedicated to excellence.',
  },
  {
    name: BRAND.founders.coo.name,
    title: BRAND.founders.coo.title,
    image: BRAND.founders.coo.image,
    description: 'Vikas Singh, the proud Co-Founder of The Hudson Group, stands at the forefront of our mission to connect elite talent with leading companies in the dynamic tech world. His journey, fueled by a profound passion for nurturing professional relationships and an in-depth grasp of the IT staffing industry, brings an invaluable breadth of experience to our organization. As a visionary Co-Founder, Vikas has been instrumental in sculpting Hudson into a beacon of IT staffing solutions. Our ethos extends beyond merely filling positions; we strive to forge enduring partnerships that seamlessly unite exceptional talent with organizations on the brink of success.\n\nVikas\'s strategy is deeply entrenched in his comprehensive understanding of the ever-shifting IT landscape. This insight empowers us to stay at the vanguard of industry developments, offering avant-garde solutions to our clients. At Hudson, we are driven by the transformative potential of people. Vikas\'s role is pivotal in ensuring that our team is fully prepared to embrace the challenges and opportunities of the digital era.\n\nJoin us on our journey as we continue to push the boundaries of IT staffing, guided by a leader who not only excels in strategic foresight but also deeply values the power of human potential in shaping the future of technology.',
  },
]


export default function AboutPageClient() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Matching Homepage Theme */}
      <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
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
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-accent/15 shadow-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-accent tracking-wide uppercase">Our Story</span>
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-5 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              <span className="block text-dark mb-2">About</span>
              <span className="block gradient-text">Us</span>
            </h1>
            
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-text/70 max-w-3xl mx-auto leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empowering Your Business with{' '}
              <span className="font-bold text-accent">Innovative Software</span>
              {' '}and{' '}
              <span className="font-bold text-accent">Exceptional Talent</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
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

      {/* Hudson's Roots Section - Brand Colors */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
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
          {/* Main Content Container */}
          <div className="relative">
            {/* Timeline Marker - Since 2019 */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <div className="relative bg-gradient-to-r from-accent to-accent/90 rounded-full px-6 py-3 shadow-2xl border-2 border-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-white font-bold text-sm sm:text-base">
                    Since Early 2019
                  </span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                {/* Arrow pointing down */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent" />
              </div>
            </motion.div>

            {/* Two Companies - Split Design */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 mb-12">
              {/* HudsonIT Consultancy Ltd */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative h-full bg-white/70 backdrop-blur-md rounded-[32px] p-8 lg:p-10 border border-accent/10 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-500 overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon/Visual Element */}
                  <div className="absolute top-6 right-6 w-20 h-20 lg:w-24 lg:h-24">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-primary/10 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 flex items-center justify-center">
                        <span className="text-4xl">💻</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pr-20 lg:pr-24">
                    <div className="inline-block mb-4">
                      <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-xs uppercase tracking-wide">
                        Software & IT Staffing
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
                      HudsonIT Consultancy Ltd
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-6" />
                    <p className="text-lg text-text/70 leading-relaxed mb-6">
                      A dynamic Software Solutions and IT Staffing firm in United States, delivering cutting-edge technology solutions and exceptional talent.
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3">
                      {['Software Solutions', 'IT Staffing', 'Technology Consulting'].map((feature, idx) => (
                        <motion.li
                          key={feature}
                          className="flex items-center gap-3 text-text/60"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm lg:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                </div>
              </motion.div>

              {/* Connecting Element - Desktop Only */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  className="relative w-16 h-16"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent rounded-full blur-md opacity-50" />
                  <div className="absolute inset-2 bg-white rounded-full border-4 border-accent flex items-center justify-center shadow-xl">
                    <span className="text-2xl font-bold gradient-text">
                      &
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Hudson Manpower Inc */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative h-full bg-white/70 backdrop-blur-md rounded-[32px] p-8 lg:p-10 border border-accent/10 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-500 overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon/Visual Element */}
                  <div className="absolute top-6 right-6 w-20 h-20 lg:w-24 lg:h-24">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl -rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 flex items-center justify-center">
                        <span className="text-4xl">👥</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pr-20 lg:pr-24">
                    <div className="inline-block mb-4">
                      <span className="px-4 py-1.5 rounded-full bg-primary/20 text-dark font-semibold text-xs uppercase tracking-wide">
                        Global Recruitment
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
                      Hudson Manpower Inc
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
                    <p className="text-lg text-text/70 leading-relaxed mb-6">
                      Specializing in offering comprehensive recruitment services for technical industries worldwide, ensuring quality hires for various sectors.
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3">
                      {['Technical Recruitment', 'Global Talent Pool', 'Quality Assurance'].map((feature, idx) => (
                        <motion.li
                          key={feature}
                          className="flex items-center gap-3 text-text/60"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm lg:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-br-full" />
                </div>
              </motion.div>
            </div>

            {/* Story Section - Enhanced */}
            <motion.div
              className="relative max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-[32px] p-8 lg:p-12 border border-accent/10 shadow-xl overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, currentColor 1px, transparent 1px),
                                    linear-gradient(-45deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }} />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark">
                      Our Journey
                    </h3>
                    <div className="flex-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  </div>

                  <div className="space-y-6 text-lg lg:text-xl text-text/70 leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      We began our journey in <strong className="text-dark font-bold">early 2019</strong> and take pride in our ability to transform businesses through the seamless integration of cutting-edge digital solutions and outstanding staffing services. With a rich history of staffing experience, we have not only adapted but thrived in the ever-changing landscape of technological innovation.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      Our unique software solutions are intended to optimize operations and drive growth across a wide range of businesses on a worldwide scale. Whether you're a start-up aiming to grow or a global organization looking to improve efficiency, our unique approach guarantees that your specific requirements are addressed with accuracy and experience.
                    </motion.p>
                  </div>

                  {/* Stats/Highlights */}
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-accent/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    {[
                      { label: 'Years of Excellence', value: '5+' },
                      { label: 'Global Reach', value: 'Worldwide' },
                      { label: 'Industries Served', value: 'Multiple' },
                    ].map((stat, idx) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-text/60 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hudson's Principles Section - Ultra Creative Modern Design */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/8 to-primary/5 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-accent/5 rounded-full blur-3xl opacity-60" />
        </div>
        
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} 
        />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
              <span className="gradient-text">Hudson's Principles</span>
            </h2>
            <p className="text-lg lg:text-xl text-text/70 max-w-3xl mx-auto leading-relaxed">
              These pillars are foundational to our business philosophy, ensuring that when you partner with us, you are choosing a service that truly values and upholds your business objectives.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Ultra Creative Layout - Hexagonal/Connected Design */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Lines Background (Desktop) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" style={{ minHeight: '600px' }}>
                {hudsonPrinciples.map((_, index) => {
                  if (index === hudsonPrinciples.length - 1) return null
                  const row = Math.floor(index / 3)
                  const col = index % 3
                  const nextRow = Math.floor((index + 1) / 3)
                  const nextCol = (index + 1) % 3
                  
                  if (row === nextRow && nextCol === col + 1) {
                    // Horizontal connection
                    const x1 = (col * 33.33) + 16.66
                    const x2 = (nextCol * 33.33) + 16.66
                    const y = (row * 50) + 25
                    return (
                      <motion.line
                        key={`line-${index}`}
                        x1={`${x1}%`}
                        y1={`${y}%`}
                        x2={`${x2}%`}
                        y2={`${y}%`}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity="0.2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    )
                  }
                  return null
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F05A28" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Principles Grid - Creative Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 relative z-10">
              {hudsonPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.letter}
                  className="group relative"
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{ perspective: 1000 }}
                >
                  <div className="relative h-full bg-white/90 backdrop-blur-md rounded-[28px] p-6 lg:p-7 border-2 border-accent/10 shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/8 group-hover:via-accent/5 group-hover:to-primary/8 transition-all duration-500 rounded-[28px]" />
                    
                    {/* Letter Badge - Modern Hexagonal Style */}
                    <div className="relative mb-5 flex items-start">
                      <div className="relative">
                        {/* Large Letter Background */}
                        <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                          {/* Hexagon-like shape with rounded corners */}
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl rotate-45 group-hover:rotate-12 transition-transform duration-500" />
                          <div className="absolute inset-1 bg-gradient-to-br from-accent/15 to-primary/10 rounded-xl -rotate-6 group-hover:rotate-6 transition-transform duration-500 flex items-center justify-center border-2 border-accent/30 backdrop-blur-sm shadow-lg">
                            <span className="text-3xl lg:text-4xl font-black text-accent relative z-10 rotate-6 group-hover:rotate-0 transition-transform duration-500">
                              {principle.letter}
                            </span>
                          </div>
                          {/* Glow Effect */}
                          <div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                      
                      {/* Number Indicator */}
                      <div className="ml-auto">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent backdrop-blur-sm">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      <h3 className="text-xl lg:text-2xl font-bold text-dark group-hover:text-accent transition-colors duration-300 leading-tight">
                        {principle.word}
                      </h3>
                      <p className="text-sm lg:text-base text-text/70 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>

                    {/* Bottom Accent Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-[28px]" />

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[28px]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Hudson Vanguard - Team Section - Brand Colors */}
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
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">
                The Hudson Vanguard
              </span>
            </h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders driving innovation and excellence at The Hudson Group
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="space-y-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative bg-white/70 backdrop-blur-md rounded-[32px] p-5 md:p-6 lg:p-7 border border-accent/10 shadow-xl overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
                      {member.image && (
                        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                          <div className="relative w-full max-w-xs lg:w-[16rem] lg:h-[20rem] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 z-10" />
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              sizes="(max-width: 1024px) 100vw, 256px"
                            />
                            {/* Decorative Border */}
                            <div className="absolute inset-0 border-2 border-white/60 rounded-xl" />
                            {/* Frame Shadow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                          </div>
                        </div>
                      )}
                      <div className="flex-1 flex flex-col min-w-0">
                        <div className="mb-3">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-dark">
                            {member.name}
                          </h3>
                          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-2" />
                          <p className="text-lg md:text-xl text-accent font-semibold">{member.title}</p>
                        </div>
                        
                        <div className="prose prose-base max-w-none flex-1">
                          {member.description.split('\n\n').map((paragraph, pIndex) => (
                            <motion.p
                              key={pIndex}
                              className="text-text/70 leading-relaxed mb-3 last:mb-0 text-sm md:text-base"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: pIndex * 0.1 }}
                            >
                              {paragraph}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
