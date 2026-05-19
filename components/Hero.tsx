'use client'

import { motion } from 'motion/react'
import { GitBranch, Mail, ArrowRight } from 'lucide-react'

const headlineLines = [
  'Building infrastructure',
  "that doesn't wake",
  'anyone up at 3am.',
]

const stats = [
  { value: '5', label: 'years in Go' },
  { value: '4', label: 'production companies' },
  { value: '1', label: 'SaaS in progress' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative max-w-3xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-12 w-[640px] h-[480px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 35% 45%, rgba(228,180,90,0.13) 0%, transparent 68%)',
        }}
      />

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0 }}
        className="mb-5"
      >
        <span className="font-serif text-[2rem] text-ink">Daniel Lim</span>
      </motion.div>

      {/* Status pill */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="inline-flex items-center gap-2.5 mb-12 px-3 py-1.5 rounded-full border border-edge bg-surface"
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot flex-shrink-0"
          style={{ boxShadow: '0 0 0 0 rgba(74,222,128,0.4)' }}
        />
        <span className="font-mono text-[11px] text-muted tracking-wider uppercase">
          Houston, TX — Available for work
        </span>
      </motion.div>

      {/* Headline */}
      <h1 className="font-serif text-[clamp(2.8rem,6.5vw,4.75rem)] leading-[1.04] tracking-tight text-ink mb-9">
        {headlineLines.map((line, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.15 + i * 0.13,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className={`block ${i === 2 ? 'text-gradient' : ''}`}
          >
            {line}
          </motion.span>
        ))}
      </h1>

      {/* Cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-1.5">
          <span className="font-mono text-xs text-faint">
            dlim@prod:~$
          </span>
          <span className="inline-block w-[7px] h-[14px] bg-gold/70 cursor-blink" />
        </div>
      </motion.div>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.68 }}
        className="text-muted text-[17px] leading-[1.7] max-w-[46ch] mb-10"
      >
        Go engineer with five years across distributed systems, real-time
        backends, and LLM infrastructure. I gravitate toward the backend
        problems that don't have clever solutions — just careful design,
        honest tradeoffs, and enough observability to know what broke and why.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.82 }}
        className="flex divide-x divide-edge mb-12 pb-12 border-b border-edge"
      >
        {stats.map(({ value, label }, i) => (
          <div key={label} className={i === 0 ? 'pr-8' : 'px-8'}>
            <div className="font-serif text-[2.5rem] leading-none text-ink mb-2 tabular-nums">
              {value}
            </div>
            <div className="font-mono text-[10px] text-muted uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.95 }}
        className="flex flex-wrap items-center gap-3"
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-canvas text-sm font-medium hover:bg-gold/90 transition-all duration-200"
        >
          Get in touch
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </a>
        <a
          href="https://github.com/dlhiccup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-edge text-sm text-muted hover:text-ink hover:border-ink/30 transition-all duration-200"
        >
          <GitBranch size={14} />
          GitHub
        </a>
        <a
          href="mailto:dlhiccup@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-edge text-sm text-muted hover:text-ink hover:border-ink/30 transition-all duration-200"
        >
          <Mail size={14} />
          Email
        </a>
      </motion.div>
    </section>
  )
}
