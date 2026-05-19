'use client'

import { motion } from 'motion/react'
import { Phone, GitBranch, ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16 pb-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
        className="mb-14"
      >
        <div className="section-label">
          <span className="font-mono text-[11px] text-gold tracking-widest uppercase">
            Contact
          </span>
        </div>
        <h2 className="font-serif text-[2rem] text-ink leading-tight mb-3">
          If the problem is interesting, reach out
        </h2>
        <p className="text-muted text-[15.5px] leading-relaxed max-w-[44ch]">
          Based in Houston, working remotely. I'm most useful on teams where
          the infrastructure problem is the actual problem — not the part that
          gets built after the features ship.
        </p>
      </motion.div>

      {/* Main CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-8"
      >
        <a
          href="mailto:dlhiccup@gmail.com"
          className="group relative block rounded-xl border border-edge bg-surface hover:border-gold/30 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 30% 50%, rgba(228,180,90,0.07), transparent 70%)'
            }}
          />
          <div className="relative p-8 flex items-center justify-between">
            <div>
              <div className="font-mono text-[11px] text-muted mb-2 tracking-wide uppercase">
                Primary contact
              </div>
              <div className="font-serif text-[1.5rem] text-ink group-hover:text-gradient leading-tight">
                dlhiccup@gmail.com
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-edge bg-canvas flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold-dim transition-all duration-300">
              <ArrowUpRight
                size={16}
                className="text-muted group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </div>
          </div>
        </a>
      </motion.div>

      {/* Secondary links */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="grid sm:grid-cols-2 gap-3 mb-12"
      >
        <a
          href="tel:+16466932168"
          className="group flex items-center gap-3 rounded-lg border border-edge bg-surface p-4 hover:border-edge hover:bg-faint/10 transition-all duration-200"
        >
          <div className="w-8 h-8 rounded-md border border-edge bg-canvas flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 group-hover:text-gold transition-all duration-200">
            <Phone size={14} className="text-muted group-hover:text-gold transition-colors duration-200" />
          </div>
          <div className="min-w-0">
            <div className="font-mono text-[10px] text-faint mb-0.5">Phone</div>
            <div className="text-[13px] text-muted group-hover:text-ink transition-colors duration-200 truncate">
              +1 646-693-2168
            </div>
          </div>
        </a>

        <a
          href="https://github.com/dlhiccup"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-lg border border-edge bg-surface p-4 hover:border-edge hover:bg-faint/10 transition-all duration-200"
        >
          <div className="w-8 h-8 rounded-md border border-edge bg-canvas flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-all duration-200">
            <GitBranch size={14} className="text-muted group-hover:text-gold transition-colors duration-200" />
          </div>
          <div className="min-w-0">
            <div className="font-mono text-[10px] text-faint mb-0.5">GitHub</div>
            <div className="text-[13px] text-muted group-hover:text-ink transition-colors duration-200 truncate">
              github.com/dlhiccup
            </div>
          </div>
        </a>
      </motion.div>

      {/* Availability note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-faint text-[13px] font-mono"
      >
        Not looking for short-term contracts — open to full-time remote roles
        and interesting conversations.
      </motion.p>
    </section>
  )
}
