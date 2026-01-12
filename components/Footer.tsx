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
              /* {BRAND.social.youtube && (
                <motion.a
                  href={BRAND.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="YouTube"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              )}
              {BRAND.social.twitter && (
                <motion.a
                  href={BRAND.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="X (Twitter)"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
              )}
              {BRAND.social.instagram && (
                <motion.a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Instagram"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              )}
              {BRAND.social.facebook && (
                <motion.a
                  href={BRAND.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Facebook"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a> 
              )}*/
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
