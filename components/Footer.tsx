'use client'

import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-edge">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[11px] text-faint">
            © 2026 Daniel Lim
          </span>
          <span className="font-mono text-[11px] text-faint">
            Built with Next.js, Tailwind, Framer Motion
          </span>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group w-9 h-9 rounded-lg border border-edge bg-surface flex items-center justify-center hover:border-gold/40 hover:bg-gold-dim transition-all duration-200 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp
            size={14}
            className="text-muted group-hover:text-gold transition-colors duration-200 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>
    </footer>
  )
}
