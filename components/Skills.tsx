'use client'

import { motion } from 'motion/react'
import { TechTag } from './TechTag'

const coreStack = [
  { name: 'Go', years: '5 yrs', desc: 'Primary language' },
  { name: 'PostgreSQL', years: '5 yrs', desc: 'Default database' },
  { name: 'Kubernetes', years: '3 yrs', desc: 'Deployment layer' },
]

const skillGroups = [
  { label: 'Languages', tags: ['Go', 'TypeScript', 'JavaScript'] },
  { label: 'Backend',   tags: ['Gin', 'gRPC', 'REST APIs', 'WebSockets', 'Microservices'] },
  { label: 'Data',      tags: ['PostgreSQL', 'Redis', 'Kafka'] },
  { label: 'Frontend',  tags: ['React', 'React Query', 'Tailwind CSS'] },
  { label: 'Infra',     tags: ['Docker', 'Kubernetes', 'Helm', 'AWS EKS', 'GitHub Actions', 'Linux'] },
]

export function Skills() {
  return (
    <section id="stack" className="max-w-3xl mx-auto px-6 py-16">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <div className="section-label">
          <span className="font-mono text-[11px] text-gold tracking-widest uppercase">
            Stack
          </span>
        </div>
        <h2 className="font-serif text-[2rem] text-ink leading-tight">
          What I reach for
        </h2>
      </motion.div>

      {/* Core stack cards */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.06 }}
        className="grid grid-cols-3 gap-3 mb-12"
      >
        {coreStack.map(({ name, years, desc }) => (
          <div
            key={name}
            className="rounded-lg border border-edge bg-surface p-4 hover:border-gold/30 transition-colors duration-300 group"
          >
            <div className="font-serif text-lg text-gradient mb-1">
              {name}
            </div>
            <div className="font-mono text-[10px] text-gold mb-0.5">{years}</div>
            <div className="font-mono text-[10px] text-faint">{desc}</div>
          </div>
        ))}
      </motion.div>

      {/* Prose */}
      <div className="space-y-5 mb-12">
        {[
          `Most days I'm writing Go. It's been my primary language for almost five years, and I keep finding reasons to appreciate it: the concurrency model is legible, the compiler is strict in the right places, and it forces you to design honest APIs. For data persistence, PostgreSQL is the answer until I have a specific reason otherwise. Redis for caching and lightweight pub-sub. Kafka when the problem is genuinely event-driven and the overhead is worth carrying.`,
          `For the frontend I reach for TypeScript and React — less out of love and more because they work, and because having one coherent mental model for the full stack is worth something. I've built production dashboards with React Query and WebSocket-driven updates; I can do the frontend work when the system needs a face.`,
          `On infrastructure: Docker, Kubernetes, Helm, AWS EKS, GitHub Actions. I've run production clusters, chased pod scheduling issues across nodes, and debugged cross-AZ latency at odd hours. I'm opinionated about observability — not because it's best practice, but because I've been on the wrong side of a production incident with no useful logs, and I have no interest in being there again.`,
        ].map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="text-muted leading-[1.8] text-[15.5px]"
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Tag grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl border border-edge bg-surface p-6 divide-y divide-edge"
      >
        {skillGroups.map(({ label, tags }) => (
          <div key={label} className="flex flex-wrap items-start gap-y-2 gap-x-0 py-3 first:pt-0 last:pb-0">
            <span className="font-mono text-[10px] text-faint uppercase tracking-wider w-24 flex-shrink-0 pt-1.5">
              {label}
            </span>
            <div className="flex flex-wrap gap-1.5 flex-1">
              {tags.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="mt-16 border-t border-edge" />
    </section>
  )
}
