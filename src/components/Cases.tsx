"use client";

import { motion } from "framer-motion";
import { CASES } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Cases() {
  return (
    <Container className="py-24 md:py-32">
      <AnimatedSection>
        <SectionLabel className="text-brand-red">03 — RESULTADOS REAIS</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-4">
          NÃO É PROMESSA.<br />
          É O QUE JÁ ACONTECEU.
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] mb-16 max-w-[480px]">
          Cada número aqui é rastreável. Nenhuma estimativa.
        </p>
      </AnimatedSection>

      <AnimatedSection
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border"
      >
        {CASES.map((c) => (
          <motion.div
            key={c.client}
            variants={fadeUp}
            className="bg-brand-card p-8 md:p-10 flex flex-col"
          >
            <div className="mb-8">
              <span className="block font-display text-[20px] text-white tracking-wide leading-none mb-1">
                {c.client}
              </span>
              <span className="block font-mono text-[10px] text-brand-muted uppercase tracking-[0.15em]">
                {c.location}
              </span>
            </div>

            <p className="text-brand-muted text-[13px] mb-6 leading-snug">
              {c.segment}
            </p>

            <div className="mb-8">
              <span className="block font-mono text-[9px] text-brand-muted uppercase tracking-[0.2em] mb-2">
                Ação:
              </span>
              <p className="text-brand-muted text-[13px] leading-snug">
                {c.action}
              </p>
            </div>

            <div className="w-full h-px bg-brand-border mb-8 mt-auto" />

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
      </AnimatedSection>
    </Container>
  );
}
