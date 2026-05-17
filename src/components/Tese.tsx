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
        <SectionLabel className="text-brand-red">01 — POR QUÊ EXISTIMOS</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.88] text-white mb-16">
          O NEGÓCIO É BOM.<br />
          MAS NÃO PARECE BOM.
        </h2>
      </AnimatedSection>

      {/* Card — o problema */}
      <AnimatedSection>
        <div
          className="bg-brand-card border border-brand-border p-10 md:p-14 mb-4 transition-colors duration-300 hover:bg-brand-card2"
          style={{ borderLeft: "4px solid #C41E1E" }}
        >
          <p className="text-brand-text text-[17px] md:text-[19px] leading-relaxed mb-5 font-light">
            A maioria dos bons negócios parece pequena no digital. Não por falta
            de qualidade — mas por falta de estrutura.
          </p>
          <p className="text-brand-muted text-[15px] leading-relaxed">
            Empresários com resultado, faturamento e reputação que no digital
            parecem desorganizados ou amadores. Esse desalinhamento custa
            autoridade, custa confiança e mantém o empresário refém da indicação.
          </p>
        </div>
      </AnimatedSection>

      {/* Card — a distinção */}
      <AnimatedSection>
        <div
          className="bg-brand-card2 border border-brand-border p-10 md:p-14 mb-24 transition-colors duration-300 hover:border-brand-border/60"
          style={{ borderLeft: "4px solid #333333" }}
        >
          <SectionLabel className="mb-5">A diferença que muda o jogo</SectionLabel>
          <p className="text-brand-text text-[16px] md:text-[18px] leading-relaxed mb-4">
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
