'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BRAND, FOOTER } from '@/constants/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="relative bg-primary text-white mt-32 overflow-hidden" role="contentinfo">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              {!logoError ? (
                <motion.img
                  src="/images/hudson-logo.png"
                  alt="Hudson Information Technology and Manpower Services"
                  className="h-16 w-auto object-contain brightness-0 invert"
                  onError={() => setLogoError(true)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              ) : (
                <h2 className="text-2xl font-heading font-bold text-white">Hudson</h2>
              )}
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-sm lg:text-base max-w-xs">
              {FOOTER.description}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {BRAND.social.linkedin && (
                <motion.a
                  href={BRAND.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="LinkedIn"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(FOOTER.links).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-heading font-semibold text-white text-base lg:text-lg mb-6 tracking-tight">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={`${category}-${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-white/70 hover:text-white transition-all duration-300 text-sm lg:text-base"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {link.label}
                        <motion.span
                          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                          aria-hidden="true"
                        >
                          →
                        </motion.span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-12 pb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-3">
              <strong className="text-white block mb-4 text-sm font-semibold tracking-wide uppercase text-white/90">
                Email
              </strong>
              <div className="space-y-2">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="block text-white/70 hover:text-accent transition-all duration-300 text-sm lg:text-base group"
                >
                  <span className="flex items-center gap-2">
                    {BRAND.email}
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                </a>
                <a
                  href={`mailto:${BRAND.emailIT}`}
                  className="block text-white/70 hover:text-accent transition-all duration-300 text-sm lg:text-base group"
                >
                  <span className="flex items-center gap-2">
                    {BRAND.emailIT} (IT Support)
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <strong className="text-white block mb-4 text-sm font-semibold tracking-wide uppercase text-white/90">
                Phone
              </strong>
              <div className="space-y-2">
                <a
                  href={`tel:${BRAND.phone.usa.replace(/\s/g, '')}`}
                  className="block text-white/70 hover:text-accent transition-all duration-300 text-sm lg:text-base group"
                >
                  <span className="flex items-center gap-2">
                    {BRAND.phone.usa} (USA)
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                </a>
                <a
                  href={`tel:${BRAND.phone.usaOther.replace(/\s/g, '')}`}
                  className="block text-white/70 hover:text-accent transition-all duration-300 text-sm lg:text-base group"
                >
                  <span className="flex items-center gap-2">
                    {BRAND.phone.usaOther} (USA)
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                </a>
                <a
                  href={`tel:${BRAND.phone.india.replace(/\s/g, '')}`}
                  className="block text-white/70 hover:text-accent transition-all duration-300 text-sm lg:text-base group"
                >
                  <span className="flex items-center gap-2">
                    {BRAND.phone.india} (India)
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <strong className="text-white block mb-4 text-sm font-semibold tracking-wide uppercase text-white/90">
                USA Office
              </strong>
              <address className="not-italic text-white/70 text-sm lg:text-base leading-relaxed">
                {BRAND.offices.usa.street}<br />
                {BRAND.offices.usa.city}, {BRAND.offices.usa.state} {BRAND.offices.usa.zip}<br />
                {BRAND.offices.usa.country}
              </address>
            </div>

            <div className="space-y-3">
              <strong className="text-white block mb-4 text-sm font-semibold tracking-wide uppercase text-white/90">
                India Office
              </strong>
              <address className="not-italic text-white/70 text-sm lg:text-base leading-relaxed">
                {BRAND.offices.india.street}<br />
                {BRAND.offices.india.area}, {BRAND.offices.india.city} {BRAND.offices.india.zip}<br />
                {BRAND.offices.india.country}
              </address>
            </div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p className="text-center sm:text-left">
              &copy; {currentYear} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-white/50">
              <span>Built with</span>
              <span className="text-accent">♥</span>
              <span>for global workforce solutions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
