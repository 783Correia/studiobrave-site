"use client"

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeUp, viewport } from "@/lib/motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
}

export default function AnimatedSection({
  children,
  variants = fadeUp,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
