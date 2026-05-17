"use client";

import { motion } from "framer-motion";
import { PRODUCTS, BRAVE_SYSTEM, WHATSAPP_URL } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Produtos() {
  return (
    <Container className="py-24 md:py-32">
      <AnimatedSection>
        <SectionLabel className="text-brand-red">02 — SOLUÇÕES</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-4">
          UMA ESCADA.<br />
          NÃO UM CARDÁPIO.
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] md:text-[16px] max-w-[560px] mb-16 leading-relaxed">
          Cada solução resolve um problema e prepara o terreno para a próxima.
          Não existe plano padrão — existe o que faz sentido para o seu momento.
        </p>
      </AnimatedSection>

      {/* Top 3 cards */}
      <AnimatedSection
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border mb-px"
      >
        {PRODUCTS.map((product) => (
          <motion.div
            key={product.name}
            variants={fadeUp}
            className="bg-brand-card p-8 md:p-10 flex flex-col"
          >
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-[0.25em] mb-5">
              {product.tag}
            </span>

            <h3 className="font-display text-[30px] text-white tracking-wide leading-none mb-3">
              {product.name}
            </h3>

            <p className="text-brand-muted text-[13px] leading-snug mb-8">
              {product.tagline}
            </p>

            <div className="w-full h-px bg-brand-border mb-8" />

            <ul className="flex flex-col gap-3 flex-1 list-none">
              {product.features.map((f) => (
                <li
                  key={f.text}
                  className="flex items-start gap-3 text-[13px] text-brand-text leading-snug"
                >
                  <span className="text-brand-red text-[11px] mt-0.5 flex-shrink-0">→</span>
                  {f.text}
                </li>
              ))}
            </ul>

            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              className="mt-8"
            >
              Quero conversar
            </Button>
          </motion.div>
        ))}
      </AnimatedSection>

      {/* Brave System — featured card */}
      <AnimatedSection className="relative bg-brand-card border-2 border-brand-red p-10 md:p-14">
        <span className="absolute -top-px right-8 bg-brand-red text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5">
          {BRAVE_SYSTEM.badge}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <SectionLabel className="text-brand-red mb-5">{BRAVE_SYSTEM.tag}</SectionLabel>
            <h3 className="font-display text-[clamp(40px,5vw,64px)] text-white tracking-wide leading-none mb-6">
              {BRAVE_SYSTEM.name}
            </h3>
            <p className="text-brand-text text-[17px] md:text-[18px] font-medium leading-snug mb-4">
              {BRAVE_SYSTEM.tagline}
            </p>
            <p className="text-brand-muted text-[14px] leading-relaxed mb-10">
              {BRAVE_SYSTEM.desc}
            </p>
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              QUERO SABER MAIS →
            </Button>
          </div>

          <div>
            <div className="w-full h-px bg-brand-border mb-8 md:hidden" />
            <ul className="flex flex-col gap-4 list-none">
              {BRAVE_SYSTEM.features.map((f) => (
                <li
                  key={f.text}
                  className="flex items-start gap-3 text-[14px] text-brand-text leading-snug"
                >
                  <span className="text-brand-red text-[12px] mt-0.5 flex-shrink-0 font-bold">→</span>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
