"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Processo() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.7", "end 0.75"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <Container className="py-28 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start">

        {/* Coluna fixa */}
        <div className="lg:sticky lg:top-28">
          <AnimatedSection>
            <SectionLabel className="text-brand-green-light">04 — Como funciona</SectionLabel>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display text-[clamp(34px,4.5vw,58px)] leading-[1.05] text-white mb-6 max-w-[14ch]">
              Do briefing ao no ar{" "}
              <span className="text-gradient-green">em 10 dias.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-brand-muted text-[15px] max-w-[400px] leading-relaxed mb-8">
              Sem reunião que não termina, sem esperar aprovação duas semanas,
              sem surpresa no final. Cada etapa tem prazo e entregável definido.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-faint">
              Garantia: no ar em 10 dias úteis<br />ou devolução integral
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <motion.div
          ref={listRef}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="relative flex flex-col"
        >
          {/* Trilho + preenchimento */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <motion.div
            className="absolute left-[19px] top-4 bottom-4 w-px origin-top"
            style={{
              scaleY: fill,
              background: "linear-gradient(to bottom, #34D399, #10B981)",
              boxShadow: "0 0 12px rgba(16,185,129,0.5)",
            }}
          />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className={`relative flex items-start gap-7 group ${i < PROCESS_STEPS.length - 1 ? "pb-13" : ""}`}
            >
              {/* Nó */}
              <div
                className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300"
                style={{
                  background: "#101012",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span className="font-mono text-[10px] tracking-widest text-brand-faint group-hover:text-brand-green-light transition-colors duration-300">
                  {step.num}
                </span>
              </div>

              <div className="pt-1.5 pb-2">
                <h3 className="font-display text-[20px] md:text-[23px] text-white leading-tight mb-2.5 transition-colors duration-300 group-hover:text-brand-green-light">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-[14px] leading-relaxed max-w-[480px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
