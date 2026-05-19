'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'Work',    href: '#work' },
  { label: 'Stack',   href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['work', 'stack', 'contact']

export function Nav() {
  const [visible, setVisible]     = useState(false)
  const [active,  setActive]      = useState<string>('')

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 160)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-40 border-b border-edge bg-canvas/80 backdrop-blur-md"
        >
          <div className="max-w-3xl mx-auto px-6 h-[52px] flex items-center justify-between">
            {/* Name */}
            <a
              href="#top"
              className="font-serif text-[15px] text-muted hover:text-ink transition-colors duration-200"
            >
              Daniel Lim
            </a>

            {/* Links + toggle */}
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive  = active === sectionId
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative hidden sm:inline-flex items-center px-3 py-1.5 rounded text-[13px] transition-colors duration-200 ${
                      isActive
                        ? 'text-ink bg-surface'
                        : 'text-muted hover:text-ink hover:bg-surface/60'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-3 right-3 h-px bg-gold rounded-full"
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </a>
                )
              })}
              <div className="ml-1">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
