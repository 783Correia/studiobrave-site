"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-brand-dark border-t border-brand-border">
      <AnimatedSection
        variants={stagger}
        className="py-28 md:py-40"
      >
        <Container className="flex flex-col items-center text-center">
          <motion.div variants={fadeUp}>
            <SectionLabel>— Primeiro contato: 15 minutos. Sem compromisso.</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(56px,8vw,120px)] leading-[0.9] text-white mb-12"
          >
            PRONTO PARA<br />
            PARECER O QUE<br />
            <span className="text-brand-red">VOCÊ JÁ É?</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="mb-6">
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              FALAR COM YURI NO WHATSAPP →
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] text-brand-muted tracking-[0.1em]"
          >
            Resposta em até 24h em dias úteis.
          </motion.p>
        </Container>
      </AnimatedSection>
    </section>
  );
}
