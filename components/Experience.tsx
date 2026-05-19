'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TechTag } from './TechTag'
import { ChevronDown } from 'lucide-react'

interface Chapter {
  index: string
  company: string
  companyType: string
  title: string
  period: string
  subtitle: string
  body: string
  reflection: string
  tags: string[]
}

const chapters: Chapter[] = [
  {
    index: '01',
    company: 'Self-Employed',
    companyType: 'Independent',
    title: "The SaaS I've always wanted to build",
    period: 'Aug 2025 — Present',
    subtitle: 'AI Infrastructure & Full-Stack Developer',
    body: `About a year ago I stopped consulting and started building something I'd had in the back of my head for a while: an AI-assisted platform for document ingestion, semantic processing, and structured workflow generation. The boring version is a SaaS. The honest version is a distributed system I get to own from end to end.

The stack is Golang on the backend, React and TypeScript up front, Kafka in the middle, Kubernetes underneath, PostgreSQL and Redis doing the data work. The parts that turned out to be harder than I expected weren't the AI pieces — inference is mostly a matter of picking the right model and managing latency. The hard parts were the ones that are always hard: a billing system that survives a restart, an async queue that doesn't lose work when a pod dies, workspace isolation that doesn't become a security problem in edge cases you hadn't imagined.

Building the whole thing alone is humbling in the best way. Every architectural decision lands on you, and there's no one to blame when it's wrong.`,
    reflection: `I'd design the workspace isolation layer before the billing system, not after. The order I chose made the auth middleware more complicated than it needed to be — I spent a week untangling something that would have been trivial if I'd thought about it two weeks earlier.`,
    tags: ['Go', 'TypeScript', 'React', 'Kafka', 'PostgreSQL', 'Redis', 'Kubernetes', 'Helm', 'gRPC', 'Docker'],
  },
  {
    index: '02',
    company: 'OpenPipe',
    companyType: 'AI Startup',
    title: 'Kafka, Redis, and a field rewriting itself weekly',
    period: 'Nov 2024 — Jul 2025',
    subtitle: 'Full-Stack Engineer',
    body: `OpenPipe builds tooling for teams working with large language models — fine-tuning, inference routing, evaluation. I joined as a full-stack engineer and ended up owning most of the backend data path: the Kafka pipelines that moved inference requests through the system, the Redis Streams that handled retries and webhook delivery, the React dashboards that made any of it visible to operators.

The pace was startup pace. Features shipped on weekly cycles. Production incidents got handled in real time, with whatever context was available at the moment. Infrastructure decisions were made with incomplete information and revisited when they turned out to be wrong. I learned more about Kubernetes at OpenPipe than at any previous job, mostly because something was always breaking in an instructive way.

The LLM tooling space was moving fast enough that decisions we made in November looked dated by February. That's not a complaint — it pushed us to build things that could be changed rather than things that were just right for now. I grew more in nine months there than in most of the years before it.`,
    reflection: `Build the observability layer proactively rather than reactively. We added centralized logging when we needed it rather than when we built the system, and there were a couple of weeks where production debugging meant grepping pod logs by hand.`,
    tags: ['Go', 'TypeScript', 'React', 'Kafka', 'Redis Streams', 'Kubernetes', 'AWS EKS', 'gRPC', 'PostgreSQL', 'WebSocket'],
  },
  {
    index: '03',
    company: 'Mattermost',
    companyType: 'Open Source',
    title: "Real-time at scale, in a codebase you didn't write",
    period: 'Sept 2023 — Oct 2024',
    subtitle: 'Golang Backend Engineer',
    body: `Mattermost is an open-source team messaging platform with a production engineering culture to match — fully remote, async-first, methodical. My work was real-time backend: the WebSocket layer keeping presence in sync across thousands of concurrent connections, the notification pipelines, the typed-event infrastructure that fed both.

Go and WebSockets at production scale looks simple until you're dealing with goroutine fan-outs under load, PostgreSQL connection storms, and Redis cache invalidation problems that only surface at certain traffic shapes. The problems are interesting in the way that all distributed systems problems are interesting: the failure modes are non-obvious and the fixes are usually more careful design rather than clever code.

Working inside a codebase that other engineers had spent years on changes how you read code. You stop assuming the weird design decision was a mistake. Sometimes there's a comment three files away that explains the constraint which forced it. Sometimes there isn't, and you're experienced enough now to say that with clarity instead of just frustration.`,
    reflection: `Push past unfamiliar services sooner. I stayed close to the WebSocket layer because it was where I was confident. There were backend systems I could have contributed to earlier if I'd treated the unfamiliarity as a reason to engage rather than a reason to wait.`,
    tags: ['Go', 'WebSocket', 'REST APIs', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'React'],
  },
  {
    index: '04',
    company: 'Dualboot Partners',
    companyType: 'Consulting',
    title: 'Learning to ship',
    period: 'Jun 2021 — Aug 2023',
    subtitle: 'Junior Golang Developer',
    body: `My first real engineering job. A consulting firm that built backend systems for clients across different industries, which meant a lot of different codebases, a lot of different requirements, and a fairly rapid survey of what production problems actually look like in the wild.

Junior in title and genuinely junior in most ways: I wrote Golang I'm not proud of, accidentally broke a production index once, and had to learn what "supporting something in production" actually means when you're accountable for it. The fundamentals are all here — REST APIs with Gin, PostgreSQL with GORM, Docker containers, GitHub Actions pipelines. But the real curriculum was softer: how to read other people's code charitably, how to ask questions without wasting senior engineers' time, and how to care about correctness in parts of the system that users will never see.

I'm glad it was a consulting firm. You don't realize how many assumptions are baked into a codebase until you've had to navigate six different ones in two years.`,
    reflection: `Ask questions faster. The junior engineer's instinct to figure things out independently before asking is generally good, but I took it past the point of productivity more than once and spent entire days on problems that a ten-minute conversation would have solved.`,
    tags: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'REST APIs', 'Docker', 'AWS', 'Kubernetes', 'React', 'TypeScript', 'GitHub Actions'],
  },
]

function ChapterCard({ chapter, isLast }: { chapter: Chapter; isLast: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="group relative"
    >
      {/* Left timeline accent */}
      <div className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full bg-edge group-hover:bg-gold/40 transition-colors duration-400 pointer-events-none" />

      <div className={`relative pl-5 py-8 ${!isLast ? 'border-b border-edge' : ''}`}>
        {/* Chapter header */}
        <div className="flex items-start gap-5 mb-6">
          {/* Index + decorative */}
          <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-1.5 pt-0.5">
            <span className="font-mono text-[11px] text-faint tabular-nums">
              {chapter.index}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            {/* Company meta */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-[11px] text-gold bg-gold-dim px-2 py-0.5 rounded">
                {chapter.company}
              </span>
              <span className="font-mono text-[10px] text-faint border border-faint rounded px-1.5 py-0.5">
                {chapter.companyType}
              </span>
              <span className="font-mono text-[10px] text-faint ml-auto hidden sm:block">
                {chapter.period}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-[1.45rem] leading-[1.25] text-ink mb-1.5">
              {chapter.title}
            </h3>
            <p className="text-muted text-[13px]">{chapter.subtitle}</p>
            <p className="font-mono text-[11px] text-faint mt-1 sm:hidden">
              {chapter.period}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="sm:pl-9 space-y-3">
          {chapter.body.split('\n\n').map((para, i) => (
            <p key={i} className="text-muted leading-[1.75] text-[15.5px]">
              {para}
            </p>
          ))}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-3">
            {chapter.tags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>

          {/* Reflection */}
          <div className="pt-3">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 text-faint hover:text-muted transition-colors duration-200 cursor-pointer group/btn"
            >
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group-hover/btn:text-gold transition-colors duration-200"
              >
                <ChevronDown size={13} />
              </motion.span>
              <span className="font-mono text-[11px] tracking-wider">
                {open ? 'Close reflection' : "What I'd do differently"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pl-4 pr-3 py-3 border-l-2 border-gold/50 bg-gold/[0.04] rounded-r-md">
                    <p className="text-muted text-[14px] leading-[1.7] italic">
                      {chapter.reflection}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Experience() {
  return (
    <section id="work" className="max-w-3xl mx-auto px-6 py-16">
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
            Experience
          </span>
        </div>
        <h2 className="font-serif text-[2rem] text-ink leading-tight mb-2">
          The work, in chapters
        </h2>
        <p className="text-muted text-[15px]">
          Four roles over five years — each one a different kind of education.
        </p>
      </motion.div>

      {/* Chapter list */}
      {chapters.map((chapter, i) => (
        <ChapterCard
          key={chapter.index}
          chapter={chapter}
          isLast={i === chapters.length - 1}
        />
      ))}

      <div className="mt-6 border-t border-edge" />
    </section>
  )
}
