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
          <span className="text-gradient-red">É O QUE JÁ ACONTECEU.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] mb-20 max-w-[480px]">
          Cada número é rastreável. Nenhuma estimativa.
        </p>
      </AnimatedSection>

      <AnimatedSection variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CASES.map((c) => (
          <motion.div
            key={c.client}
            variants={fadeUp}
            className="card-glass p-8 md:p-10 flex flex-col cursor-default"
          >
            {/* Top accent */}
            <div className="h-px mb-6" style={{
              background: "linear-gradient(90deg, #C41E1E, rgba(196,30,30,0.08) 70%, transparent)"
            }} />

            {/* Client info */}
            <div className="mb-5">
              <span className="block font-display text-[20px] text-white tracking-wide leading-none mb-1">
                {c.client}
              </span>
              <span className="block font-mono text-[10px] text-brand-muted uppercase tracking-[0.15em]">
                {c.location}
              </span>
            </div>

            <p className="text-brand-muted text-[13px] mb-5 leading-snug">{c.segment}</p>

            <div className="mb-6">
              <span className="block font-mono text-[9px] text-brand-muted uppercase tracking-[0.25em] mb-1.5">
                O que fizemos
              </span>
              <p className="text-[#888] text-[13px] leading-snug">{c.action}</p>
            </div>

            <div className="mt-auto">
              <div className="w-6 h-[1px] mb-5"
                style={{ background: "linear-gradient(90deg, #C41E1E, transparent)" }}
              />
              <span
                className="block font-display text-[72px] md:text-[88px] leading-[0.85] mb-2 text-gradient-red"
              >
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
