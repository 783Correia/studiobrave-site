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
        <SectionLabel className="text-brand-green-light">04 — Como funciona</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(34px,5vw,64px)] leading-[1.05] text-white mb-6 max-w-[16ch]">
          Do briefing ao no ar{" "}
          <span className="text-gradient-green">em 10 dias.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] md:text-[16px] max-w-[480px] mb-24 leading-relaxed">
          Sem reunião que não termina, sem esperar aprovação duas semanas,
          sem surpresa no final. Cada etapa tem prazo e entregável definido.
        </p>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection variants={stagger} className="relative flex flex-col gap-0">
        {/* Vertical line */}
        <div
          className="absolute left-5 top-5 bottom-5 w-px pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(255,255,255,0.05) 80%, transparent)" }}
        />

        {PROCESS_STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            variants={fadeUp}
            className={`relative flex items-start gap-8 group ${i < PROCESS_STEPS.length - 1 ? "pb-14" : ""}`}
          >
            {/* Node */}
            <div
              className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
              }}
            >
              <span
                className="font-mono text-[10px] tracking-widest transition-colors duration-300 text-brand-faint"
              >
                {step.num}
              </span>

              {/* Glow ring on hover — CSS group-hover via inline style trick */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 0 1px rgba(16,185,129,0.5), 0 0 16px rgba(16,185,129,0.2)",
                }}
              />
            </div>

            {/* Content */}
            <div className="pt-1.5 pb-2">
              <h3
                className="font-display text-[22px] md:text-[26px] text-white leading-tight mb-3 transition-colors duration-300 group-hover:text-brand-green-light"
              >
                {step.title}
              </h3>
              <p className="text-brand-muted text-[14px] leading-relaxed max-w-[520px]">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatedSection>
    </Container>
  );
}
