'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BRAND } from '@/constants/content'

const hudsonPrinciples = [
  {
    letter: 'H',
    word: 'Honesty',
    description: 'We uphold transparency and honesty in all our interactions with clients and candidates alike.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    letter: 'U',
    word: 'Uncompromising Quality',
    description: 'Our commitment to excellence is unwavering, ensuring only the best talent and services.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    letter: 'D',
    word: 'Dedicated Service',
    description: 'Every client is important to us, and we show it through our personalized and dedicated approach.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    letter: 'S',
    word: 'Strategic Solutions',
    description: 'We think ahead, providing strategic staffing and project management solutions.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    letter: 'O',
    word: 'Outcome Oriented',
    description: 'Our focus is always on delivering positive, measurable outcomes for your business.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    letter: 'N',
    word: 'Navigating Talent',
    description: 'We expertly navigate the global talent pool, connecting you with the skills and expertise you need.',
    gradient: 'from-teal-500 to-cyan-500',
  },
]

const whyChooseUs = [
  {
    title: 'Proven Expertise and Experience',
    description: 'With years of successful projects under our belt, The Hudson Group brings unmatched expertise and in-depth industry knowledge to every venture, ensuring that we understand the intricacies and unique requirements of your sector.',
    icon: '🎯',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Tailored Staffing Solutions',
    description: 'We pride ourselves on offering customized solutions that align perfectly with your specific business needs. Our approach involves a thorough understanding of your project\'s demands, allowing us to deliver staffing solutions that are not just effective but also innovative.',
    icon: '⚡',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Commitment to Integrity and Reliability',
    description: 'At the core of The Hudson Group is a steadfast commitment to honesty and reliability. We build lasting relationships with our clients based on trust, delivering on our promises and maintaining the highest ethical standards in every interaction.',
    icon: '🤝',
    gradient: 'from-orange-500/20 to-red-500/20',
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

const commitmentValues = [
  'Seamless delivery of comprehensive recruitment services, handling everything from sourcing resumes to facilitating candidates\' integration into their new roles.',
  'Tailored solutions designed to meet your unique requirements, ensuring that every staffing solution we provide is as unique as your business.',
]

export default function AboutPageClient() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Ultra Modern */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            
            <motion.p
              className="text-2xl sm:text-3xl text-text/70 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empowering Your Business with{' '}
              <span className="font-semibold text-accent">Innovative Software</span>
              {' '}and{' '}
              <span className="font-semibold text-primary">Exceptional Talent</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hudson's Roots Section - Enhanced Creative Design */}
      <section className="relative py-24 bg-gradient-to-b from-white via-light/20 to-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 rounded-full blur-3xl" />
        </div>

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
              <div className="relative bg-gradient-to-r from-accent to-primary rounded-full px-6 py-3 shadow-2xl border-2 border-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-white font-bold text-sm sm:text-base">
                    Since Early 2019
                  </span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                {/* Arrow pointing down */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
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
                <div className="relative h-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl p-8 lg:p-10 border-2 border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon/Visual Element */}
                  <div className="absolute top-6 right-6 w-20 h-20 lg:w-24 lg:h-24">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 flex items-center justify-center">
                        <span className="text-4xl">💻</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pr-20 lg:pr-24">
                    <div className="inline-block mb-4">
                      <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-700 font-semibold text-xs uppercase tracking-wide">
                        Software & IT Staffing
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      HudsonIT Consultancy Ltd
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6" />
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
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                          <span className="text-sm lg:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full" />
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-50" />
                  <div className="absolute inset-2 bg-white rounded-full border-4 border-purple-500 flex items-center justify-center shadow-xl">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
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
                <div className="relative h-full bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl p-8 lg:p-10 border-2 border-purple-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon/Visual Element */}
                  <div className="absolute top-6 right-6 w-20 h-20 lg:w-24 lg:h-24">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl -rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 flex items-center justify-center">
                        <span className="text-4xl">👥</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pr-20 lg:pr-24">
                    <div className="inline-block mb-4">
                      <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-700 font-semibold text-xs uppercase tracking-wide">
                        Global Recruitment
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Hudson Manpower Inc
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" />
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
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                          <span className="text-sm lg:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full" />
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-transparent rounded-br-full" />
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
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-gray-200/50 shadow-2xl overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, currentColor 1px, transparent 1px),
                                    linear-gradient(-45deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }} />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-dark to-dark bg-clip-text text-transparent">
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
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200"
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
                        <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
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

      {/* Hudson's Principles Section - Creative Timeline Design */}
      <section className="relative py-24 bg-gradient-to-b from-light/30 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Hudson's Principles
              </span>
            </h2>
            <p className="text-xl text-text/60 max-w-3xl mx-auto leading-relaxed">
              These pillars are foundational to our business philosophy, ensuring that when you partner with us, you are choosing a service that truly values and upholds your business objectives.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Creative Vertical Timeline with Connecting Lines */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-accent via-primary to-secondary"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />
            </div>

            {/* Principles Timeline Items */}
            <div className="space-y-12 lg:space-y-16">
              {hudsonPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.letter}
                  className="relative group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Letter Badge - Always on left for mobile, alternating for desktop */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className={`relative w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10`}
                        whileHover={{ scale: 1.1, rotate: 6 }}
                      >
                        <span className="text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                          {principle.letter}
                        </span>
                        {/* Animated Ring */}
                        <motion.div
                          className={`absolute inset-0 rounded-3xl border-4 border-white/30`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                      
                      {/* Connecting Line to Center (Desktop only) */}
                      {index < hudsonPrinciples.length - 1 && (
                        <div className="hidden lg:block absolute top-full left-1/2 w-1 h-16 -translate-x-1/2">
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-b ${principle.gradient}`}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                            style={{ transformOrigin: 'top' }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content Panel */}
                    <div className={`flex-1 ${
                      index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                    } text-center lg:text-left`}>
                      <motion.div
                        className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-accent/30"
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Gradient Overlay on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-dark to-dark bg-clip-text text-transparent">
                            {principle.word}
                          </h3>
                          <div className={`w-20 h-1 bg-gradient-to-r ${principle.gradient} mb-6 ${
                            index % 2 === 0 ? 'lg:ml-0' : 'lg:mr-0 lg:ml-auto'
                          } mx-auto lg:mx-0`} />
                          <p className="text-lg text-text/70 leading-relaxed">
                            {principle.description}
                          </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-40 h-40 bg-gradient-to-br ${principle.gradient} opacity-5 rounded-bl-full ${index % 2 === 1 ? 'rounded-bl-none rounded-br-full' : ''}`} />
                        <div className={`absolute bottom-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-32 h-32 bg-gradient-to-tr ${principle.gradient} opacity-5 rounded-tr-full ${index % 2 === 1 ? 'rounded-tr-none rounded-tl-full' : ''}`} />
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Accent */}
          </div>
        </div>
      </section>

      {/* The Hudson Vanguard - Team Section - Premium Design */}
      <section className="relative py-24 bg-gradient-to-b from-white via-light/20 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                The Hudson Vanguard
              </span>
            </h2>
            <p className="text-xl text-text/60 max-w-3xl mx-auto leading-relaxed">
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
                <div className="relative bg-white rounded-2xl p-5 md:p-6 lg:p-7 border border-gray-100 shadow-xl overflow-hidden">
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

      {/* Our Commitment Section - Enhanced Creative Design */}
      <section className="relative py-32 bg-gradient-to-b from-white via-light/30 to-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 text-accent font-semibold text-sm backdrop-blur-sm">
                Our Promise
              </span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Our Commitment
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-text/60 mb-8 max-w-3xl mx-auto">
              To You Embodies <span className="font-semibold text-accent">Two Key Values</span>
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-accent via-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Two Key Values - Creative Split Design */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {commitmentValues.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index === 0 
                      ? 'from-blue-500/10 via-cyan-500/5 to-transparent' 
                      : 'from-purple-500/10 via-pink-500/5 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Large Number Badge - Creative Design */}
                  <div className="relative mb-8">
                    <motion.div
                      className={`relative w-24 h-24 lg:w-28 lg:h-28 mx-auto lg:mx-0 ${
                        index === 0 
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500' 
                          : 'bg-gradient-to-br from-purple-500 to-pink-500'
                      } rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      whileHover={{ scale: 1.1, rotate: 6 }}
                    >
                      <span className="text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                        {index + 1}
                      </span>
                      {/* Animated Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-3xl border-4 ${
                          index === 0 ? 'border-blue-300/50' : 'border-purple-300/50'
                        }`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>
                    
                    {/* Connecting Line (Desktop only, between the two cards) */}
                    {index === 0 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-1 z-10">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          style={{ transformOrigin: 'left' }}
                        />
                        <motion.div
                          className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center lg:text-left">
                    <div className={`w-20 h-1 mx-auto lg:mx-0 mb-6 rounded-full ${
                      index === 0 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`} />
                    <p className="text-lg lg:text-xl text-text/70 leading-relaxed">
                      {value}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-0 ${
                    index === 0 ? 'right-0' : 'left-0'
                  } w-40 h-40 bg-gradient-to-br ${
                    index === 0 
                      ? 'from-blue-500/10 to-transparent' 
                      : 'from-purple-500/10 to-transparent'
                  } rounded-bl-full ${index === 1 ? 'rounded-bl-none rounded-br-full' : ''}`} />
                  <div className={`absolute bottom-0 ${
                    index === 0 ? 'left-0' : 'right-0'
                  } w-32 h-32 bg-gradient-to-tr ${
                    index === 0 
                      ? 'from-cyan-500/10 to-transparent' 
                      : 'from-pink-500/10 to-transparent'
                  } rounded-tr-full ${index === 1 ? 'rounded-tr-none rounded-tl-full' : ''}`} />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Statement - Enhanced Design */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-white via-light/50 to-white rounded-3xl p-10 lg:p-16 border-2 border-gray-200/50 shadow-2xl overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(45deg, currentColor 1px, transparent 1px),
                                  linear-gradient(-45deg, currentColor 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }} />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-primary" />
                  <div className="flex-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>

                <p className="text-xl lg:text-2xl text-text/80 leading-relaxed text-center font-light max-w-5xl mx-auto">
                  At The Hudson Group, we revolutionize how businesses operate with our{' '}
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    cutting-edge software solutions
                  </span>
                  {' '}and{' '}
                  <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    comprehensive staffing services
                  </span>
                  . With a rich history in staffing, we've evolved to lead in the software solution space, catering to diverse industries worldwide.
                </p>

                {/* Bottom Accent */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="flex-1 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
