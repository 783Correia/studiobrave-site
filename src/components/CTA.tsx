"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";

export default function CTA() {
  return (
    <section className="relative bg-brand-black overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Glow central */}
      <div
        className="absolute pointer-events-none animate-glow-a"
        style={{
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(900px, 120vw)",
          height: "min(900px, 120vw)",
          background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.03) 45%, transparent 65%)",
        }}
      />

      {/* Grid fino */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 90%)",
        }}
      />

      <AnimatedSection variants={stagger} className="relative">
        <Container className="py-32 md:py-44 flex flex-col items-center text-center">

          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] text-brand-faint uppercase tracking-[0.3em] mb-10"
          >
            Aceite limitado · poucos projetos por vez
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(36px,5.5vw,76px)] leading-[1.04] text-white mb-8 max-w-[17ch]"
          >
            Quando perguntarem por aí, a resposta vai{" "}
            <span className="text-gradient-green">citar você?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-brand-muted text-[16px] max-w-[460px] mb-14 leading-relaxed"
          >
            Se a resposta for &ldquo;não sei&rdquo; — tem dinheiro escapando agora.
            Uma conversa de 15 minutos mostra exatamente onde.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-6">
            <Magnetic strength={0.3}>
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Ver se faz sentido no WhatsApp →
              </Button>
            </Magnetic>

            <p className="font-mono text-[10px] text-brand-faint tracking-[0.15em] uppercase">
              15 minutos · sem compromisso · resposta em até 24h
            </p>
          </motion.div>

        </Container>
      </AnimatedSection>
    </section>
  );
}
