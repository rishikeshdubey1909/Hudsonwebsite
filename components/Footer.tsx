'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BRAND, FOOTER } from '@/constants/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="bg-primary text-white mt-32" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              {!logoError ? (
                <img
                  src="/images/hudson-logo.jpeg"
                  alt="Hudson Information Technology and Manpower Services"
                  className="h-16 w-auto object-contain brightness-0 invert"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <h2 className="text-2xl font-heading font-bold text-white">Hudson</h2>
              )}
            </div>
            <p className="text-white/70 mb-4">
              {FOOTER.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={BRAND.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER.links).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/70">
            <div>
              <strong className="text-white block mb-1">Email</strong>
              <a href={`mailto:${BRAND.email}`} className="hover:text-accent transition-colors">
                {BRAND.email}
              </a>
            </div>
            <div>
              <strong className="text-white block mb-1">Phone</strong>
              <a href={`tel:${BRAND.phone.usa.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                {BRAND.phone.usa}
              </a>
            </div>
            <div>
              <strong className="text-white block mb-1">Address</strong>
              <address className="not-italic">
                {BRAND.offices.usa.street}<br />
                {BRAND.offices.usa.city}, {BRAND.offices.usa.state} {BRAND.offices.usa.zip}
              </address>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; {currentYear} {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

