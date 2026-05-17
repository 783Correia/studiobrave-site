import { cn } from "@/lib/utils"

interface ButtonProps {
  href: string
  variant?: "primary" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  children: React.ReactNode
  target?: string
  rel?: string
  fullWidth?: boolean
}

const variantClasses = {
  primary: "bg-brand-red text-white font-display tracking-[0.1em] hover:brightness-110",
  ghost: "border border-brand-border text-brand-muted font-bold uppercase tracking-[2px] hover:text-white hover:border-white",
}

const sizeClasses = {
  sm: "text-[11px] px-4 py-3",
  md: "text-xl px-8 py-4",
  lg: "text-xl md:text-2xl px-10 py-5",
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  target,
  rel,
  fullWidth,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </a>
  )
}
