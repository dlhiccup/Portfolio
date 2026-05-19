'use client'

import { motion } from 'motion/react'

export function Currently() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-3xl mx-auto px-6 py-8 pb-16"
    >
      {/* Card */}
      <div className="relative rounded-xl border border-edge bg-surface overflow-hidden">
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <div className="p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">
            {/* Left label */}
            <div className="flex-shrink-0 flex items-center gap-2 sm:flex-col sm:items-start sm:gap-3 sm:pt-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 pulse-dot"
                  style={{ boxShadow: '0 0 0 0 rgba(74,222,128,0.4)' }}
                />
                <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">
                  Now
                </span>
              </div>
              <span className="font-mono text-[10px] text-faint tracking-wide">May 2026</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="font-serif text-xl text-ink mb-4 leading-snug">
                Currently
              </h2>
              <div className="prose-editorial space-y-3">
                <p className="text-muted leading-relaxed text-[15px]">
                  Finishing the billing layer on a SaaS I've been building
                  since last August — the kind of work that sounds
                  straightforward until you're three days deep in idempotency
                  edge cases. Also revisiting{' '}
                  <em className="text-ink italic">
                    Designing Data-Intensive Applications
                  </em>{' '}
                  for what might be the third time, with more patience for the
                  chapters I thought I already understood.
                </p>
                <p className="text-muted leading-relaxed text-[15px]">
                  If you're building something where the backend is the real
                  problem — event-driven pipelines, real-time data,
                  infrastructure that needs to hold up under load — I'd like
                  to hear about it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-edge" />
    </motion.section>
  )
}
