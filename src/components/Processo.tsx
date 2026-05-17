"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Processo() {
  return (
    <Container className="py-24 md:py-32">
      <AnimatedSection>
        <SectionLabel className="text-brand-red">04 — COMO FUNCIONA</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-20">
          5 ETAPAS.<br />
          SEM SURPRESA.
        </h2>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection
        variants={stagger}
        className="relative pl-10 flex flex-col"
      >
        <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-border" />

        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            variants={fadeUp}
            className={`relative ${i < PROCESS_STEPS.length - 1 ? "pb-14" : ""}`}
          >
            <div className="absolute -left-10 top-0 w-8 h-8 bg-brand-black border border-brand-border flex items-center justify-center flex-shrink-0">
              <span className="font-mono text-[9px] text-brand-red tracking-widest">
                {step.num}
              </span>
            </div>

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
      </AnimatedSection>
    </Container>
  );
}
