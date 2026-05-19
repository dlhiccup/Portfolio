import { cn } from '@/lib/utils'

interface TechTagProps {
  label: string
  className?: string
}

export function TechTag({ label, className }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-[11px] leading-none text-muted border border-edge rounded-[4px] px-2.5 py-1.5',
        'hover:border-gold/50 hover:text-gold hover:bg-gold-dim transition-all duration-200 cursor-default',
        className
      )}
    >
      {label}
    </span>
  )
}
