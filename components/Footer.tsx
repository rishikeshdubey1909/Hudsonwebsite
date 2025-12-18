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
      {/* Enhanced background with accent gradients */}
      <div className="absolute inset-0">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        {/* Accent gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
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
                <motion.div className="relative inline-block">
                  <motion.img
                    src="/images/hudson-logo.png"
                    alt="Hudson Information Technology and Manpower Services"
                    className="h-16 w-auto object-contain relative z-10"
                    onError={() => setLogoError(true)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  {/* Accent glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-accent/20 blur-xl rounded-lg -z-10"
                    whileHover={{ opacity: 0.4, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ) : (
                <h2 className="text-2xl font-heading font-bold bg-gradient-to-r from-white via-accent/90 to-white bg-clip-text text-transparent">
                  Hudson
                </h2>
              )}
            </div>
            <p className="text-white/80 mb-6 leading-relaxed text-sm max-w-xs">
              {FOOTER.description}
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-accent/30 hover:border-accent/60 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Accent gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <svg className="w-5 h-5 text-white/90 group-hover:text-accent transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
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
              <h3 className="font-heading font-semibold text-white text-lg mb-6 tracking-tight relative inline-block">
                {category}
                {/* Accent underline */}
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={`${category}-${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-white/70 hover:text-accent transition-all duration-300 text-sm lg:text-base font-medium"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {link.label}
                        <motion.span
                          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-accent"
                          aria-hidden="true"
                        >
                          →
                        </motion.span>
                      </span>
                      {/* Enhanced accent underline */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300" />
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
          className="border-t border-accent/20 pt-10 pb-8 relative"
        >
          {/* Accent accent line */}
          <div className="absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-accent to-transparent" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <strong className="text-white block mb-4 text-sm font-semibold tracking-wide uppercase text-white flex items-center gap-2">
                <span className="w-1 h-4 bg-accent rounded-full" />
                Email
              </strong>
              <div className="space-y-2.5">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="block text-white/80 hover:text-accent transition-all duration-300 text-sm lg:text-base group relative"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    {BRAND.email}
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-accent"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href={`mailto:${BRAND.emailIT}`}
                  className="block text-white/70 hover:text-accent transition-all duration-300 text-xs lg:text-sm group relative"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    {BRAND.emailIT} (IT Support)
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-accent"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <strong className="text-white block mb-4 text-sm font-semibold tracking-wide uppercase text-white flex items-center gap-2">
                <span className="w-1 h-4 bg-accent rounded-full" />
                Phone
              </strong>
              <div className="space-y-2.5">
                <a
                  href={`tel:${BRAND.phone.usa.replace(/\s/g, '')}`}
                  className="block text-white/80 hover:text-accent transition-all duration-300 text-sm lg:text-base group relative"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    {BRAND.phone.usa} (USA)
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-accent"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href={`tel:${BRAND.phone.usaOther.replace(/\s/g, '')}`}
                  className="block text-white/70 hover:text-accent transition-all duration-300 text-xs lg:text-sm group relative"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    {BRAND.phone.usaOther} (USA)
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-accent"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href={`tel:${BRAND.phone.india.replace(/\s/g, '')}`}
                  className="block text-white/70 hover:text-accent transition-all duration-300 text-xs lg:text-sm group relative"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    {BRAND.phone.india} (India)
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-accent"
                      aria-hidden="true"
                    >
                      ↗
                    </motion.span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <strong className="text-white block mb-4 text-sm font-semibold tracking-wide uppercase text-white flex items-center gap-2">
                <span className="w-1 h-4 bg-accent rounded-full" />
                USA Office
              </strong>
              <address className="not-italic text-white/80 text-sm leading-relaxed">
                {BRAND.offices.usa.street}<br />
                {BRAND.offices.usa.city}, {BRAND.offices.usa.state} {BRAND.offices.usa.zip}<br />
                {BRAND.offices.usa.country}
              </address>
            </div>

            <div className="space-y-3">
              <strong className="text-white block mb-4 text-sm font-semibold tracking-wide uppercase text-white flex items-center gap-2">
                <span className="w-1 h-4 bg-accent rounded-full" />
                India Office
              </strong>
              <address className="not-italic text-white/80 text-sm leading-relaxed">
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
          className="pt-10 mt-8"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Brand Message */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                <span className="bg-gradient-to-r from-white via-accent/90 to-white bg-clip-text text-transparent">
                  Hudson Information Technology & Manpower Services
                </span>
              </h3>
              <p className="text-white/70 text-sm max-w-xl mx-auto">
                Delivering workforce solutions across industries worldwide
              </p>
            </div>

            {/* Copyright */}
            <div className="pt-4 w-full">
              <p className="text-xs text-white/60">
                &copy; {currentYear} {BRAND.name}. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
