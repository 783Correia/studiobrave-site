"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Processo() {
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
        04 — COMO FUNCIONA
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-20"
      >
        5 ETAPAS.<br />
        SEM SURPRESA.
      </motion.h2>

      {/* Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="relative pl-10 flex flex-col"
      >
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-border" />

        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            variants={fadeUp}
            className={`relative ${i < PROCESS_STEPS.length - 1 ? "pb-14" : ""}`}
          >
            {/* Number badge on the line */}
            <div className="absolute -left-10 top-0 w-8 h-8 bg-brand-black border border-brand-border flex items-center justify-center flex-shrink-0">
              <span className="font-mono text-[9px] text-brand-red tracking-widest">
                {step.num}
              </span>
            </div>

            {/* Content */}
            <div className="pl-4">
              <h3 className="font-display text-[28px] md:text-[32px] text-white tracking-wide leading-none mb-3">
                {step.title}
              </h3>
              <p className="text-brand-muted text-[14px] leading-relaxed max-w-lg">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
