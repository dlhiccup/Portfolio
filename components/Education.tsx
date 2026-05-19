'use client'

import { motion } from 'motion/react'

export function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-3xl mx-auto px-6 py-16"
    >
      <div className="flex gap-8 md:gap-16">
        <div className="hidden sm:block flex-shrink-0 w-6" />
        <div className="flex-1">
          <h2 className="font-serif text-3xl text-ink mb-8">
            How I got here
          </h2>

          <div className="prose-editorial space-y-4">
            <p className="text-muted leading-relaxed">
              I moved to Houston in 2019, spent two years at ELS Language
              Centers working on my English, and taught myself to write
              software through Udemy courses and personal projects while doing
              it. HTML, CSS, JavaScript, Python, Go — learned in roughly that
              order, through tutorials and then through building things that
              didn't work and figuring out why.
            </p>
            <p className="text-muted leading-relaxed">
              It was slow, unglamorous work — the kind that doesn't look
              impressive on paper but probably explains why I still think about
              fundamentals more carefully than I would have otherwise. In 2021
              I got my first engineering job at Dualboot Partners. I didn't
              know nearly enough, but I knew how to figure things out when I
              was stuck. That turned out to be most of what the job required.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-0 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-edge" />

            {[
              {
                period: '2019 — 2021',
                name: 'ELS Language Centers',
                detail: 'English language study · Houston, TX',
              },
              {
                period: '2019 — 2021',
                name: 'Udemy',
                detail: 'Self-directed engineering education · HTML, CSS, JS, Python, Go',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="relative pl-6 pb-6 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-[5px] w-[11px] h-[11px] rounded-full border border-gold/50 bg-surface" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4">
                  <span className="font-mono text-[11px] text-faint flex-shrink-0 sm:w-24">
                    {item.period}
                  </span>
                  <div>
                    <span className="text-ink text-sm font-medium">{item.name}</span>
                    <span className="text-muted text-sm"> — {item.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-edge" />
    </motion.section>
  )
}
