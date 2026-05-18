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
          FUNDAÇÃO.<br />
          PRESENÇA.<br />
          SISTEMA.
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] md:text-[16px] max-w-[520px] mb-20 leading-relaxed">
          Não existe plano padrão. Existe o que faz sentido para o seu momento —
          projeto único, recorrência ou infraestrutura completa.
        </p>
      </AnimatedSection>

      {/* 2 cards */}
      <AnimatedSection variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {PRODUCTS.map((product) => (
          <motion.div
            key={product.name}
            variants={fadeUp}
            className="card-glass p-8 md:p-10 flex flex-col cursor-default"
          >
            {/* Tag pill */}
            <span
              className="inline-flex self-start font-mono text-[9px] text-brand-red uppercase tracking-[0.3em] mb-6 px-3 py-1.5"
              style={{
                background: "rgba(196,30,30,0.1)",
                border: "1px solid rgba(196,30,30,0.2)",
                borderRadius: "6px",
              }}
            >
              {product.tag}
            </span>

            <h3 className="font-display text-[34px] text-white tracking-wide leading-none mb-3">
              {product.name}
            </h3>

            <p className="text-brand-muted text-[13px] leading-snug mb-8">
              {product.tagline}
            </p>

            <div className="h-px mb-8"
              style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }}
            />

            <ul className="flex flex-col gap-3.5 flex-1 list-none">
              {product.features.map((f) => (
                <li key={f.text} className="flex items-start gap-3 text-[13px] text-[#999] leading-snug">
                  <span className="text-brand-red text-[10px] mt-0.5 flex-shrink-0">→</span>
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
              className="mt-10 self-start"
            >
              Ver se faz sentido
            </Button>
          </motion.div>
        ))}
      </AnimatedSection>

      {/* Brave System — featured */}
      <AnimatedSection>
        <div className="card-glass-featured relative p-10 md:p-16 overflow-hidden">
          {/* Glow */}
          <div className="absolute pointer-events-none animate-glow-b"
            style={{
              top: "-30%", right: "-10%",
              width: "500px", height: "500px",
              background: "radial-gradient(circle, rgba(196,30,30,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Badge */}
          <span
            className="absolute -top-px right-8 text-white text-[9px] font-mono font-bold tracking-[0.35em] uppercase px-5 py-2"
            style={{ background: "#C41E1E", borderRadius: "0 0 6px 6px" }}
          >
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
              <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="md">
                VER SE FAZ SENTIDO →
              </Button>
            </div>

            <div>
              <div className="w-full h-px mb-10 md:hidden"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <ul className="flex flex-col gap-5 list-none">
                {BRAVE_SYSTEM.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-[14px] text-brand-text leading-snug">
                    <span className="text-brand-red text-[11px] mt-0.5 flex-shrink-0">→</span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
