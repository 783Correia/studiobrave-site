import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p className={cn(
      "font-mono text-[11px] text-brand-muted uppercase tracking-[0.3em] mb-6",
      className
    )}>
      {children}
    </p>
  )
}
