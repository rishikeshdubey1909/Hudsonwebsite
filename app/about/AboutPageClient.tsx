'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/constants/content'

export default function AboutPageClient() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">About {BRAND.shortName}</span>
            </h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed">
              {BRAND.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-text/70 leading-relaxed mb-4">
                Founded in {BRAND.founded}, {BRAND.shortName} has been at the forefront of providing 
                reliable, compliant, and scalable staffing solutions across multiple industries.
              </p>
              <p className="text-text/70 leading-relaxed">
                We specialize in {BRAND.industries} industries, connecting top talent with leading 
                organizations worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-text/70 leading-relaxed mb-4">
                To deliver exceptional workforce solutions that empower businesses to scale efficiently 
                while ensuring the highest standards of compliance and quality.
              </p>
              <p className="text-text/70 leading-relaxed">
                We are committed to building lasting partnerships with both clients and candidates, 
                creating opportunities for growth and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              Meet the visionaries behind {BRAND.shortName}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: BRAND.founders.ceo.name, title: BRAND.founders.ceo.title },
              { name: BRAND.founders.coo.name, title: BRAND.founders.coo.title },
            ].map((founder, index) => (
              <motion.div
                key={founder.name}
                className="glass rounded-3xl p-8 border border-white/50 shadow-soft"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-accent font-semibold mb-4">{founder.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
