"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import Counter from "@/components/ui/Counter";

const STATS = [
  { value: 68, prefix: "+", suffix: "%", decimals: 0, label: "conversão do site", sub: "Jaco Locadora" },
  { value: 560, prefix: "", suffix: "%", decimals: 0, label: "crescimento em faturamento", sub: "Sales Embalagens" },
  { value: 17.5, prefix: "R$", suffix: "", decimals: 2, label: "por lead qualificado", sub: "TornoMetal" },
  { value: 10, prefix: "", suffix: " dias", decimals: 0, label: "do briefing ao no ar", sub: "garantido em contrato" },
];

export default function Stats() {
  return (
    <section
      className="relative"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
        className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="py-12 md:py-16 px-2 md:px-8 flex flex-col gap-2"
            style={{
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <span className="font-display text-[clamp(34px,3.6vw,52px)] leading-none text-brand-green-light">
              <Counter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals}
              />
            </span>
            <span className="text-[13px] text-brand-text leading-snug">{s.label}</span>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-brand-faint">
              {s.sub}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
