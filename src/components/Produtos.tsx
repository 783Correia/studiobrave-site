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
    <Container className="py-28 md:py-40">
      <AnimatedSection>
        <SectionLabel className="text-brand-red">02 — SOLUÇÕES</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.88] text-white mb-4">
          UMA ESCADA.<br />
          NÃO UM CARDÁPIO.
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] md:text-[16px] max-w-[520px] mb-20 leading-relaxed">
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
            className="bg-brand-card p-8 md:p-10 flex flex-col group transition-colors duration-300 hover:bg-brand-card2 cursor-default"
            style={{ borderTop: "2px solid transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderTop = "2px solid #C41E1E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderTop = "2px solid transparent";
            }}
          >
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-[0.3em] mb-6">
              {product.tag}
            </span>

            <h3 className="font-display text-[32px] text-white tracking-wide leading-none mb-3">
              {product.name}
            </h3>

            <p className="text-brand-muted text-[13px] leading-snug mb-8">
              {product.tagline}
            </p>

            <div className="w-8 h-px bg-brand-red mb-8" />

            <ul className="flex flex-col gap-3.5 flex-1 list-none">
              {product.features.map((f) => (
                <li
                  key={f.text}
                  className="flex items-start gap-3 text-[13px] text-[#AAAAAA] leading-snug"
                >
                  <span className="text-brand-red text-[11px] mt-0.5 flex-shrink-0 font-bold">→</span>
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
              className="mt-10"
            >
              Quero conversar
            </Button>
          </motion.div>
        ))}
      </AnimatedSection>

      {/* Brave System — featured card */}
      <AnimatedSection className="relative bg-brand-card border-2 border-brand-red p-10 md:p-16 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-30%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(196,30,30,0.06) 0%, transparent 70%)",
          }}
        />

        <span className="absolute -top-px right-8 bg-brand-red text-white text-[10px] font-bold tracking-[0.3em] uppercase px-5 py-2">
          {BRAVE_SYSTEM.badge}
        </span>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <SectionLabel className="text-brand-red mb-5">{BRAVE_SYSTEM.tag}</SectionLabel>
            <h3 className="font-display text-[clamp(44px,5.5vw,72px)] text-white tracking-wide leading-none mb-6">
              {BRAVE_SYSTEM.name}
            </h3>
            <p className="text-brand-text text-[18px] md:text-[19px] font-medium leading-snug mb-4">
              {BRAVE_SYSTEM.tagline}
            </p>
            <p className="text-brand-muted text-[14px] leading-relaxed mb-12">
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
            <div className="w-full h-px bg-brand-border mb-10 md:hidden" />
            <ul className="flex flex-col gap-5 list-none">
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
