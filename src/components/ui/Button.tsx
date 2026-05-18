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
  primary: [
    "text-white font-display tracking-[0.1em]",
    "rounded-lg",
    "transition-all duration-300",
  ].join(" "),
  ghost: [
    "font-mono text-brand-muted uppercase tracking-[2px]",
    "rounded-lg",
    "transition-all duration-300",
    "hover:text-white",
  ].join(" "),
}

const sizeClasses = {
  sm: "text-[11px] px-5 py-3",
  md: "text-[15px] px-8 py-4",
  lg: "text-[16px] md:text-[17px] px-10 py-5",
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
  const isPrimary = variant === "primary"

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      style={isPrimary ? {
        background: "linear-gradient(135deg, #C41E1E 0%, #A81818 100%)",
        boxShadow: "0 0 24px rgba(196,30,30,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
      } : {
        border: "1px solid rgba(255,255,255,0.12)",
      }}
      onMouseEnter={(e) => {
        if (isPrimary) {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 36px rgba(196,30,30,0.45), inset 0 1px 0 rgba(255,255,255,0.12)"
          ;(e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"
        } else {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)"
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 24px rgba(196,30,30,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
          ;(e.currentTarget as HTMLElement).style.filter = ""
        } else {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"
        }
      }}
    >
      {children}
    </a>
  )
}
