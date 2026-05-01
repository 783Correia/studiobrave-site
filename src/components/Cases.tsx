"use client";

import { motion } from "framer-motion";
import { CASES } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Cases() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">
      {/* Eyebrow */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-mono text-[11px] text-brand-red uppercase tracking-[0.3em] mb-6"
      >
        03 — RESULTADOS REAIS
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-4"
      >
        NÃO É PROMESSA.<br />
        É O QUE JÁ ACONTECEU.
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-brand-muted text-[15px] mb-16 max-w-[480px]"
      >
        Cada número aqui é rastreável. Nenhuma estimativa.
      </motion.p>

      {/* Cases grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border"
      >
        {CASES.map((c) => (
          <motion.div
            key={c.client}
            variants={fadeUp}
            className="bg-brand-card p-8 md:p-10 flex flex-col"
          >
            {/* Client info */}
            <div className="mb-8">
              <span className="block font-display text-[20px] text-white tracking-wide leading-none mb-1">
                {c.client}
              </span>
              <span className="block font-mono text-[10px] text-brand-muted uppercase tracking-[0.15em]">
                {c.location}
              </span>
            </div>

            {/* Segment */}
            <p className="text-brand-muted text-[13px] mb-6 leading-snug">
              {c.segment}
            </p>

            {/* Action */}
            <div className="mb-8">
              <span className="block font-mono text-[9px] text-brand-muted uppercase tracking-[0.2em] mb-2">
                Ação:
              </span>
              <p className="text-brand-muted text-[13px] leading-snug">
                {c.action}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-brand-border mb-8 mt-auto" />

            {/* Result */}
            <div>
              <span className="block font-display text-[72px] md:text-[80px] text-brand-red leading-none mb-1">
                {c.result}
              </span>
              <span className="block font-mono text-[10px] text-brand-muted uppercase tracking-[0.15em]">
                {c.resultLabel}
              </span>
              {"resultSub" in c && c.resultSub && (
                <span className="block font-mono text-[10px] text-brand-red mt-1 tracking-[0.1em]">
                  {c.resultSub}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
