"use client";

import { motion } from "framer-motion";
import { CASES } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Cases() {
  return (
    <Container className="py-28 md:py-40">
      <AnimatedSection>
        <SectionLabel className="text-brand-red">03 — RESULTADOS REAIS</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.88] text-white mb-4">
          NÃO É PROMESSA.<br />
          É O QUE JÁ ACONTECEU.
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] mb-20 max-w-[480px]">
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
            className="bg-brand-card p-8 md:p-10 flex flex-col group transition-colors duration-300 hover:bg-brand-card2 cursor-default"
          >
            {/* Client info */}
            <div className="mb-6">
              <span className="block font-display text-[22px] text-white tracking-wide leading-none mb-1.5">
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
              <span className="block font-mono text-[9px] text-brand-muted uppercase tracking-[0.25em] mb-2">
                O que fizemos:
              </span>
              <p className="text-[#888888] text-[13px] leading-snug">
                {c.action}
              </p>
            </div>

            <div className="mt-auto">
              <div className="w-8 h-[2px] bg-brand-red mb-6 group-hover:w-16 transition-all duration-500" />
              <span className="block font-display text-[80px] md:text-[96px] text-brand-red leading-[0.85] mb-2">
                {c.result}
              </span>
              <span className="block font-mono text-[10px] text-brand-muted uppercase tracking-[0.15em]">
                {c.resultLabel}
              </span>
              {"resultSub" in c && c.resultSub && (
                <span className="block font-mono text-[10px] text-brand-red mt-1.5 tracking-[0.1em]">
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
