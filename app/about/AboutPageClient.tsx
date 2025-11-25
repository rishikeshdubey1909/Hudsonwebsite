'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BRAND } from '@/constants/content'

export default function AboutPageClient() {
  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light via-white to-secondary/50" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <main className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />
            </motion.div>
            
            <div className="max-w-4xl mx-auto mt-12">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-dark mb-2">About</span>
                <span className="block gradient-text">{BRAND.shortName}</span>
              </motion.h1>
              
              <motion.p
                className="text-xl sm:text-2xl text-text/70 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Founded in {BRAND.founded}, {BRAND.name} is a comprehensive recruitment services provider specializing in technical industries worldwide.
              </motion.p>

              <div className="space-y-8 mb-12">
                {/* Company Overview */}
                <AboutCard
                  title="Our Mission"
                  delay={0.6}
                >
                  <p className="text-text/70 mb-4">
                    {BRAND.description} We are dedicated to empowering businesses across various sectors through digital solutions and exceptional staffing services.
                  </p>
                  <p className="text-text/70">
                    Since our establishment, we have been committed to connecting top talent with leading organizations, ensuring seamless workforce solutions that drive success.
                  </p>
                </AboutCard>

                {/* Founders Section */}
                <AboutCard
                  title="Our Founders"
                  delay={0.8}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FounderCard founder={BRAND.founders.ceo} delay={0.9} />
                    <FounderCard founder={BRAND.founders.coo} delay={1.0} />
                  </div>
                </AboutCard>

                {/* Office Locations */}
                <AboutCard
                  title="Our Offices"
                  delay={1.2}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <OfficeCard office={BRAND.offices.usa} phone={BRAND.phone.usa} country="United States" delay={1.3} />
                    <OfficeCard office={BRAND.offices.india} phone={BRAND.phone.india} country="India" delay={1.4} />
                  </div>
                </AboutCard>

                {/* Services Overview */}
                <AboutCard
                  title="What We Do"
                  delay={1.6}
                >
                  <p className="text-text/70 mb-4">
                    {BRAND.shortName} specializes in providing comprehensive staffing solutions across multiple industries:
                  </p>
                  <ul className="list-none text-text/70 space-y-3">
                    {['Software Development and IT Staffing', 'Oil & Gas Industry Staffing', 'Construction and Infrastructure', 'Retail and Hospitality', 'Technical Recruitment Services'].map((service, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7 + index * 0.1 }}
                      >
                        <span className="text-accent text-xl mt-1">✓</span>
                        <span>{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </AboutCard>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

function AboutCard({ title, children, delay }: { title: string; children: React.ReactNode; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="relative glass rounded-3xl p-8 border border-white/50 shadow-soft overflow-hidden"
        whileHover={{ scale: 1.01, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Hover Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6 }}
        />

        <div className="relative z-10">
          <motion.h2
            className="text-2xl font-heading font-semibold text-primary mb-6"
            animate={{
              color: isHovered ? '#F05A28' : '#000000',
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h2>
          {children}
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary rounded-b-3xl"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}

function FounderCard({ founder, delay }: { founder: { name: string; title: string }; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="relative bg-white/50 rounded-xl p-6 overflow-hidden"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        <div className="relative z-10">
          <h3 className="text-xl font-heading font-semibold text-primary mb-2">
            {founder.name}
          </h3>
          <p className="text-accent font-medium mb-3">{founder.title}</p>
          <p className="text-text/70 text-sm">
            {founder.title.includes('CEO') 
              ? `Leading ${BRAND.shortName} with vision and expertise in global workforce solutions and technical recruitment.`
              : `Driving operational excellence and ensuring seamless service delivery across all client engagements.`}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function OfficeCard({ office, phone, country, delay }: { office: any; phone: string; country: string; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="relative bg-white/50 rounded-xl p-6 overflow-hidden"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        <div className="relative z-10">
          <h3 className="text-lg font-heading font-semibold text-primary mb-3">{country}</h3>
          <address className="not-italic text-text/70 mb-3">
            {office.street}<br />
            {office.area ? `${office.area}, ` : ''}{office.city}{office.state ? `, ${office.state}` : ''} {office.zip}
          </address>
          <p className="text-text/70">
            <strong>Phone:</strong> <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-accent hover:underline">{phone}</a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

