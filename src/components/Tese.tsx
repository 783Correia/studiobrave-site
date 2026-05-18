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
        <SectionLabel className="text-brand-red">01 — O PROBLEMA</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.88] text-white mb-16">
          O PROBLEMA<br />
          NÃO ERA O GESTOR.<br />
          <span className="text-brand-red">ERA O SITE.</span>
        </h2>
      </AnimatedSection>

      {/* Card — o problema real */}
      <AnimatedSection>
        <div
          className="bg-brand-card border border-brand-border p-10 md:p-14 mb-4 transition-colors duration-300 hover:bg-brand-card2"
          style={{ borderLeft: "4px solid #C41E1E" }}
        >
          <p className="text-brand-text text-[17px] md:text-[20px] leading-relaxed mb-5 font-light">
            Você investe em tráfego. O gestor é bom. As campanhas rodam.
            Mas o resultado não vem — e ninguém sabe por quê.
          </p>
          <p className="text-brand-muted text-[15px] leading-relaxed">
            Na maioria das vezes, o gargalo não está no anúncio.
            Está no destino. Site lento, sem estrutura de conversão,
            sem GMB configurado, sem rastreamento real.
            Você paga pelo clique e desperdiça 90% do que chegou.
          </p>
        </div>
      </AnimatedSection>

      {/* Card — o cenário 2026 */}
      <AnimatedSection>
        <div
          className="bg-brand-card2 border border-brand-border p-10 md:p-14 mb-24 transition-colors duration-300 hover:border-brand-border/60"
          style={{ borderLeft: "4px solid #333333" }}
        >
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
      <AnimatedSection
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border"
      >
        {PILLARS.map((pillar) => (
          <motion.div
            key={pillar.num}
            variants={fadeUp}
            className="bg-brand-card p-8 md:p-12 transition-colors duration-300 hover:bg-brand-card2 group cursor-default"
          >
            <span className="block font-display text-[72px] leading-none text-brand-border group-hover:text-brand-red/20 transition-colors duration-300 mb-4">
              {pillar.num}
            </span>
            <h3 className="font-display text-[24px] text-white tracking-wide mb-3">
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
