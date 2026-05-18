"use client";

import { motion } from "framer-motion";
import { CASES } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Cases() {
  return (
    <section className="py-28 md:py-40">
      <Container>
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
      </Container>

      {/* Editorial list — full width */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <AnimatedSection variants={stagger}>
          {CASES.map((c, i) => (
            <motion.div
              key={c.client}
              variants={fadeUp}
              className="group"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Container>
                <div className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1fr_1fr_auto] gap-6 md:gap-10 items-center py-10 md:py-12">

                  {/* Index */}
                  <span className="font-mono text-[11px] text-brand-muted self-start pt-1">
                    0{i + 1}
                  </span>

                  {/* Client */}
                  <div>
                    <h3
                      className="font-display text-[clamp(28px,4vw,52px)] text-white tracking-wide leading-none mb-2 transition-colors duration-300 group-hover:text-brand-red"
                    >
                      {c.client}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: "#444" }}
                    >
                      {c.location} · {c.segment}
                    </span>
                  </div>

                  {/* Action — hidden mobile */}
                  <p className="hidden md:block text-brand-muted text-[13px] leading-relaxed max-w-[260px] self-center">
                    {c.action}
                  </p>

                  {/* Result */}
                  <div className="text-right self-center">
                    <span className="block font-display text-[clamp(36px,5vw,72px)] text-gradient-red leading-none">
                      {c.result}
                    </span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.15em] mt-1"
                      style={{ color: "#555" }}
                    >
                      {c.resultLabel}
                    </span>
                    {"resultSub" in c && c.resultSub && (
                      <span className="block font-mono text-[9px] text-brand-red mt-1 tracking-[0.1em]">
                        {c.resultSub}
                      </span>
                    )}
                  </div>

                </div>
              </Container>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
