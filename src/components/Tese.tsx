"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Tese() {
  return (
    <Container className="py-28 md:py-40">
      <AnimatedSection>
        <SectionLabel className="text-brand-green-light">01 — O problema</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(34px,5vw,64px)] leading-[1.05] text-white mb-16 max-w-[16ch]">
          O problema não era o gestor.{" "}
          <span className="text-gradient-green">Era o site.</span>
        </h2>
      </AnimatedSection>

      {/* Card — problema */}
      <AnimatedSection>
        <div className="card-glass p-10 md:p-14 mb-4 cursor-default">
          {/* Accent line top */}
          <div className="h-px mb-8" style={{
            background: "linear-gradient(90deg, #10B981, rgba(16,185,129,0.1) 60%, transparent)"
          }} />
          <p className="text-brand-text text-[17px] md:text-[20px] leading-relaxed mb-5 font-light">
            Você investe em tráfego. O gestor é bom. As campanhas rodam.
            Mas o resultado não vem — e ninguém sabe por quê.
          </p>
          <p className="text-brand-muted text-[15px] leading-relaxed">
            Anúncio → WhatsApp direto = curioso que pergunta preço e vai embora.
            Anúncio → LP → contexto → WhatsApp = comprador que já decidiu.
            A diferença não é o investimento em mídia — é o que há entre o clique e a conversa.
          </p>
        </div>
      </AnimatedSection>

      {/* Card — 2026 */}
      <AnimatedSection>
        <div className="card-glass p-10 md:p-14 mb-20 cursor-default">
          <div className="h-px mb-8" style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 60%, transparent)"
          }} />
          <SectionLabel className="mb-5">O que mudou em 2026</SectionLabel>
          <p className="text-brand-text text-[16px] md:text-[18px] leading-relaxed mb-4">
            O Google agora responde antes de mostrar qualquer link.
            O ChatGPT decide antes do clique acontecer.
          </p>
          <p className="text-brand-muted text-[15px] leading-relaxed">
            Quem aparece nessa resposta tem site indexável, GMB completo
            e conteúdo estruturado. 99% das empresas brasileiras não têm isso ainda.{" "}
            <strong className="text-brand-text font-medium">
              Quem construir primeiro, domina.
            </strong>
          </p>
        </div>
      </AnimatedSection>

      {/* 3 Pillars */}
      <AnimatedSection variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PILLARS.map((pillar) => (
          <motion.div
            key={pillar.num}
            variants={fadeUp}
            className="card-glass p-8 md:p-10 cursor-default"
          >
            <span className="block font-display text-[56px] leading-none text-gradient-green opacity-30 mb-4">
              {pillar.num}
            </span>
            <h3 className="font-display text-[20px] text-white mb-3">
              {pillar.title}
            </h3>
            <p className="text-brand-muted text-[14px] leading-relaxed">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </AnimatedSection>
    </Container>
  );
}
