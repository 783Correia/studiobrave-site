"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeExpo } from "@/lib/motion";

// Revela linhas de texto por trás de uma máscara, uma a uma
export default function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = "h1",
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
}) {
  const reduced = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden" style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={reduced ? { y: 0 } : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.12, ease: easeExpo }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
