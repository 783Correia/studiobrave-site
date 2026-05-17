"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Processo() {
  return (
    <Container className="py-28 md:py-40">
      <AnimatedSection>
        <SectionLabel className="text-brand-red">04 — COMO FUNCIONA</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.88] text-white mb-24">
          5 ETAPAS.<br />
          SEM SURPRESA.
        </h2>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection
        variants={stagger}
        className="relative flex flex-col gap-0"
      >
        {/* Vertical line */}
        <div className="absolute left-5 top-5 bottom-5 w-px bg-brand-border" />

        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            variants={fadeUp}
            className={`relative flex items-start gap-8 group ${i < PROCESS_STEPS.length - 1 ? "pb-16" : ""}`}
          >
            {/* Node */}
            <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-brand-black border border-brand-border group-hover:border-brand-red group-hover:bg-brand-red/10 transition-all duration-300 flex items-center justify-center">
              <span className="font-mono text-[10px] text-brand-muted group-hover:text-brand-red transition-colors duration-300 tracking-widest">
                {step.num}
              </span>
            </div>

            {/* Content */}
            <div className="pt-1.5">
              <h3 className="font-display text-[30px] md:text-[36px] text-white tracking-wide leading-none mb-3">
                {step.title}
              </h3>
              <p className="text-brand-muted text-[15px] leading-relaxed max-w-[560px]">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatedSection>
    </Container>
  );
}
