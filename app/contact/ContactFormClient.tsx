'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BRAND } from '@/constants/content'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:${BRAND.email}?subject=Contact Form Submission&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nMessage: ${formData.message}`
    )}`
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              Get in touch with us for staffing solutions, job opportunities, or general inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass rounded-3xl p-8 border border-white/50 shadow-soft">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-secondary/80 text-text focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-text/50"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-secondary/80 text-text focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-text/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-secondary/80 text-text focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-text/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-secondary/80 text-text focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-text/50"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-secondary/80 text-text focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-text/50 resize-none"
                      placeholder="Your Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="glass rounded-3xl p-8 border border-white/50 shadow-soft">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href={`mailto:${BRAND.email}`} className="text-accent hover:underline">
                      {BRAND.email}
                    </a>
                    <br />
                    <a href={`mailto:${BRAND.emailIT}`} className="text-accent hover:underline text-sm">
                      {BRAND.emailIT} (IT Support)
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a href={`tel:${BRAND.phone.usa.replace(/\s/g, '')}`} className="text-accent hover:underline">
                      {BRAND.phone.usa} (USA)
                    </a>
                    <br />
                    <a href={`tel:${BRAND.phone.india.replace(/\s/g, '')}`} className="text-accent hover:underline">
                      {BRAND.phone.india} (India)
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-8 border border-white/50 shadow-soft">
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">USA Office</h3>
                    <address className="not-italic text-text/70">
                      {BRAND.offices.usa.street}<br />
                      {BRAND.offices.usa.city}, {BRAND.offices.usa.state} {BRAND.offices.usa.zip}
                    </address>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">India Office</h3>
                    <address className="not-italic text-text/70">
                      {BRAND.offices.india.street}<br />
                      {BRAND.offices.india.area}, {BRAND.offices.india.city} {BRAND.offices.india.zip}
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
