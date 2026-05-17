"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative bg-brand-black border-t border-brand-border overflow-hidden">
      {/* Red glow center */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(196,30,30,0.08) 0%, transparent 65%)",
        }}
      />

      <AnimatedSection variants={stagger} className="relative">
        <Container className="py-32 md:py-48 flex flex-col items-center text-center">
          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.3em] mb-10"
          >
            — Primeiro contato: 15 minutos. Sem compromisso.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(60px,9vw,132px)] leading-[0.88] text-white mb-14"
          >
            PRONTO PARA<br />
            PARECER O QUE<br />
            <span className="text-brand-red">VOCÊ JÁ É?</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-5">
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              FALAR COM YURI NO WHATSAPP →
            </Button>

            <p className="font-mono text-[10px] text-brand-muted tracking-[0.15em] uppercase">
              Resposta em até 24h · Sem compromisso
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-24 pt-12 border-t border-brand-border w-full grid grid-cols-3 gap-8"
          >
            {[
              { num: "3+", label: "Clientes ativos" },
              { num: "96+", label: "Agentes IA no sistema" },
              { num: "100%", label: "Foco em resultado" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-display text-[48px] md:text-[64px] text-white leading-none">
                  {stat.num}
                </span>
                <span className="font-mono text-[10px] text-brand-muted uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </Container>
      </AnimatedSection>
    </section>
  );
}
