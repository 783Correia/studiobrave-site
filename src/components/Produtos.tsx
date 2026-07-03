"use client";

import { motion } from "framer-motion";
import { PRODUCTS, BRAVE_SYSTEM, ENTRY_PRODUCT, WHATSAPP_URL } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Produtos() {
  return (
    <Container className="py-28 md:py-40">
      <AnimatedSection>
        <SectionLabel className="text-brand-green-light">02 — Soluções</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(34px,5vw,64px)] leading-[1.05] text-white mb-4">
          Fundação. Presença.{" "}
          <span className="text-gradient-green">Sistema.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] md:text-[16px] max-w-[520px] mb-20 leading-relaxed">
          Não existe plano padrão. Existe o que faz sentido para o seu momento —
          projeto único, recorrência ou infraestrutura completa.
        </p>
      </AnimatedSection>

      {/* Produto de entrada — Playbook R$27 */}
      <AnimatedSection className="mb-4">
        <div className="card-glass p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-flex font-mono text-[9px] text-brand-green-light uppercase tracking-[0.3em] px-3 py-1.5"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  borderRadius: "6px",
                }}
              >
                {ENTRY_PRODUCT.tag}
              </span>
              <span className="font-display text-[26px] text-white leading-none">
                {ENTRY_PRODUCT.price}
              </span>
            </div>

            <h3 className="font-display text-[clamp(24px,3.2vw,34px)] text-white leading-tight mb-3">
              {ENTRY_PRODUCT.name}
            </h3>

            <p className="text-brand-muted text-[13px] md:text-[14px] leading-snug max-w-[560px] mb-6">
              {ENTRY_PRODUCT.tagline}
            </p>

            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2.5 list-none">
              {ENTRY_PRODUCT.features.map((f) => (
                <li key={f.text} className="flex items-start gap-2.5 text-[13px] text-brand-muted leading-snug">
                  <span className="text-brand-green-light text-[10px] mt-0.5 flex-shrink-0">→</span>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>

          <Button href={ENTRY_PRODUCT.href} size="md" className="w-full md:w-auto whitespace-nowrap">
            Quero o playbook · {ENTRY_PRODUCT.price}
          </Button>
        </div>
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
              className="inline-flex self-start font-mono text-[9px] text-brand-green-light uppercase tracking-[0.3em] mb-6 px-3 py-1.5"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: "6px",
              }}
            >
              {product.tag}
            </span>

            <h3 className="font-display text-[28px] text-white leading-tight mb-3">
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
                <li key={f.text} className="flex items-start gap-3 text-[13px] text-brand-muted leading-snug">
                  <span className="text-brand-green-light text-[10px] mt-0.5 flex-shrink-0">→</span>
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
              background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Badge */}
          <span
            className="absolute -top-px right-8 text-[#04110B] text-[9px] font-mono font-bold tracking-[0.35em] uppercase px-5 py-2"
            style={{ background: "#10B981", borderRadius: "0 0 6px 6px" }}
          >
            {BRAVE_SYSTEM.badge}
          </span>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <SectionLabel className="text-brand-green-light mb-5">{BRAVE_SYSTEM.tag}</SectionLabel>
              <h3 className="font-display text-[clamp(34px,4.5vw,56px)] text-white leading-none mb-6">
                {BRAVE_SYSTEM.name}
              </h3>
              <p className="text-brand-text text-[18px] md:text-[19px] font-medium leading-snug mb-4">
                {BRAVE_SYSTEM.tagline}
              </p>
              <p className="text-brand-muted text-[14px] leading-relaxed mb-12">
                {BRAVE_SYSTEM.desc}
              </p>
              <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="md">
                Ver se faz sentido →
              </Button>
            </div>

            <div>
              <div className="w-full h-px mb-10 md:hidden"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <ul className="flex flex-col gap-5 list-none">
                {BRAVE_SYSTEM.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-[14px] text-brand-text leading-snug">
                    <span className="text-brand-green-light text-[11px] mt-0.5 flex-shrink-0">→</span>
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
