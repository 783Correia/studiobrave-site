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
      {/* Green glow center */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)",
        }}
      />

      <AnimatedSection variants={stagger} className="relative">
        <Container className="py-32 md:py-48 flex flex-col items-center text-center">

          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.3em] mb-10"
          >
            — Aceite limitado. Poucos projetos por vez.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(38px,6vw,80px)] leading-[1.02] text-white mb-8 max-w-[16ch]"
          >
            Seu negócio aparece onde{" "}
            <span className="text-gradient-green">o cliente busca?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-brand-muted text-[16px] max-w-[480px] mb-14 leading-relaxed"
          >
            Se a resposta for "não sei" ou "acho que não" —
            tem dinheiro escapando agora. Uma conversa de 15 minutos
            mostra exatamente onde.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-5">
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Ver se faz sentido no WhatsApp →
            </Button>

            <p className="font-mono text-[10px] text-brand-muted tracking-[0.15em] uppercase">
              15 minutos · Sem compromisso · Resposta em até 24h
            </p>
          </motion.div>

        </Container>
      </AnimatedSection>
    </section>
  );
}
