'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BRAND } from '@/constants/content'

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In production, you would send this to your backend
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
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
              <Breadcrumbs items={[{ label: 'Contact Us', href: '/contact' }]} />
            </motion.div>
            
            <div className="max-w-5xl mx-auto mt-12">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-dark mb-2">Get in</span>
                <span className="block gradient-text">Touch</span>
              </motion.h1>
              
              <motion.p
                className="text-xl sm:text-2xl text-text/70 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ready to transform your workforce? Let's discuss how {BRAND.shortName} can help you find the right talent or the perfect opportunity.
              </motion.p>

              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Contact Form */}
                <motion.div
                  className="lg:col-span-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="glass rounded-3xl p-8 border border-white/50 shadow-soft">
                    <h2 className="text-2xl font-heading font-semibold text-primary mb-6">Send us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-text/20 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-text/20 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-text/20 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-text/20 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                          Service Interest *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-text/20 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="for-employers">For Employers - Hire Talent</option>
                          <option value="for-employees">For Employees - Find Jobs</option>
                          <option value="oil-gas">Oil & Gas Staffing</option>
                          <option value="it">US IT Staffing</option>
                          <option value="hospitality">Hospitality Staffing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-text/20 bg-white/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl font-semibold text-lg shadow-glow disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">
                          {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                        </span>
                        {!isSubmitting && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                        )}
                      </motion.button>

                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm"
                        >
                          ✓ Thank you! We'll get back to you soon.
                        </motion.div>
                      )}
                    </form>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {/* Contact Cards */}
                  <ContactInfoCard
                    title="Email Us"
                    content={BRAND.email}
                    href={`mailto:${BRAND.email}`}
                    icon="✉️"
                    delay={0.9}
                  />
                  <ContactInfoCard
                    title="Call Us (USA)"
                    content={BRAND.phone.usa}
                    href={`tel:${BRAND.phone.usa.replace(/\s/g, '')}`}
                    icon="📞"
                    delay={1.0}
                  />
                  <ContactInfoCard
                    title="Call Us (India)"
                    content={BRAND.phone.india}
                    href={`tel:${BRAND.phone.india.replace(/\s/g, '')}`}
                    icon="📱"
                    delay={1.1}
                  />

                  {/* Office Locations */}
                  <div className="glass rounded-3xl p-6 border border-white/50 shadow-soft">
                    <h3 className="text-lg font-heading font-semibold text-primary mb-4">Our Offices</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-dark mb-1">United States</p>
                        <address className="text-sm text-text/70 not-italic">
                          {BRAND.offices.usa.street}<br />
                          {BRAND.offices.usa.city}, {BRAND.offices.usa.state} {BRAND.offices.usa.zip}
                        </address>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-dark mb-1">India</p>
                        <address className="text-sm text-text/70 not-italic">
                          {BRAND.offices.india.street}<br />
                          {BRAND.offices.india.area}, {BRAND.offices.india.city} {BRAND.offices.india.zip}
                        </address>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

function ContactInfoCard({ title, content, href, icon, delay }: { title: string; content: string; href: string; icon: string; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group block"
    >
      <motion.div
        className="relative glass rounded-2xl p-6 border border-white/50 shadow-soft overflow-hidden"
        whileHover={{ scale: 1.02, y: -3 }}
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
          <div className="text-3xl mb-3">{icon}</div>
          <h4 className="text-lg font-heading font-semibold text-primary mb-2">{title}</h4>
          <p className="text-text/70 text-sm">{content}</p>
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary rounded-b-2xl"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.a>
  )
}

