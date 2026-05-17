"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Tese() {
  return (
    <Container className="py-24 md:py-32">
      <AnimatedSection>
        <SectionLabel className="text-brand-red">01 — POR QUÊ EXISTIMOS</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-16">
          O NEGÓCIO É BOM.<br />
          MAS NÃO PARECE BOM.
        </h2>
      </AnimatedSection>

      {/* Card — o problema */}
      <AnimatedSection className="bg-brand-card border border-brand-border p-10 md:p-12 mb-6 border-l-[4px] border-l-brand-red">
        <p className="text-brand-text text-[16px] md:text-[18px] leading-relaxed mb-6">
          A maioria dos bons negócios parece pequena no digital. Não por falta
          de qualidade — mas por falta de estrutura.
        </p>
        <p className="text-brand-muted text-[15px] leading-relaxed">
          Empresários com resultado, faturamento e reputação que no digital
          parecem desorganizados ou amadores. Esse desalinhamento custa
          autoridade, custa confiança e mantém o empresário refém da indicação.
        </p>
      </AnimatedSection>

      {/* Card — a distinção */}
      <AnimatedSection className="bg-brand-card2 border border-brand-border p-10 md:p-12 mb-20 border-l-[4px] border-l-[#333333]">
        <SectionLabel className="mb-5">A diferença que muda o jogo</SectionLabel>
        <p className="text-brand-text text-[15px] md:text-[17px] leading-relaxed mb-4">
          Agência entrega post. Nós entregamos processo.
        </p>
        <p className="text-brand-muted text-[15px] leading-relaxed">
          Site, Instagram e tráfego são canais. O que determina o resultado é
          como o seu negócio é estruturado, percebido e operado em cima desses
          canais.{" "}
          <strong className="text-brand-text font-medium">
            Não vendemos marketing. Vendemos estrutura + percepção + sistema.
          </strong>
        </p>
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
            className="bg-brand-card p-8 md:p-10"
          >
            <span className="block font-display text-[64px] leading-none text-brand-border mb-4">
              {pillar.num}
            </span>
            <h3 className="font-display text-[22px] text-white tracking-wide mb-3">
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
