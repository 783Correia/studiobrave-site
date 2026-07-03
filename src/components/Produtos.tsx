"use client";

import { motion } from "framer-motion";
import { PRODUCTS, BRAVE_SYSTEM, ENTRY_PRODUCT, WHATSAPP_URL } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-[3px] text-brand-green-light" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Produtos() {
  return (
    <Container className="py-28 md:py-40">
      <AnimatedSection>
        <SectionLabel className="text-brand-green-light">02 — Soluções</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(34px,5vw,64px)] leading-[1.05] text-white mb-6">
          Fundação. Presença.{" "}
          <span className="text-gradient-green">Sistema.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] md:text-[16px] max-w-[520px] mb-16 leading-relaxed">
          Não existe plano padrão. Existe o que faz sentido para o seu
          momento — projeto único, recorrência ou infraestrutura completa.
        </p>
      </AnimatedSection>

      {/* Escada: 2 tiers + System em destaque */}
      <AnimatedSection variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch mb-4">
        {PRODUCTS.map((product) => (
          <motion.div
            key={product.name}
            variants={fadeUp}
            className="card-glass p-8 md:p-9 flex flex-col cursor-default"
          >
            <span
              className="inline-flex self-start font-mono text-[9px] text-brand-green-light uppercase tracking-[0.3em] mb-6 px-3 py-1.5 rounded-md"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              {product.tag}
            </span>

            <h3 className="font-display text-[26px] text-white leading-tight mb-3">
              {product.name}
            </h3>

            <p className="text-brand-muted text-[13.5px] leading-snug mb-8">
              {product.tagline}
            </p>

            <div className="h-px mb-8"
              style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }}
            />

            <ul className="flex flex-col gap-3.5 flex-1 list-none">
              {product.features.map((f) => (
                <li key={f.text} className="flex items-start gap-3 text-[13px] text-brand-muted leading-snug">
                  <CheckIcon />
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
              className="mt-9 self-start"
            >
              Ver se faz sentido
            </Button>
          </motion.div>
        ))}

        {/* Brave System — topo da escada */}
        <motion.div
          variants={fadeUp}
          className="relative p-[1px] rounded-xl"
          style={{
            background:
              "linear-gradient(160deg, rgba(16,185,129,0.6) 0%, rgba(16,185,129,0.12) 40%, rgba(255,255,255,0.08) 100%)",
          }}
        >
          <div
            className="relative h-full rounded-[11px] p-8 md:p-9 flex flex-col overflow-hidden"
            style={{ background: "#101012" }}
          >
            {/* Glow interno */}
            <div
              className="absolute pointer-events-none animate-glow-b"
              style={{
                top: "-35%", right: "-25%",
                width: 380, height: 380,
                background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative flex items-center justify-between mb-6">
              <span
                className="inline-flex font-mono text-[9px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-md text-[#04110B] font-bold"
                style={{ background: "#10B981" }}
              >
                {BRAVE_SYSTEM.badge}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-faint">
                {BRAVE_SYSTEM.tag}
              </span>
            </div>

            <h3 className="relative font-display text-[30px] text-white leading-tight mb-3">
              {BRAVE_SYSTEM.name}
            </h3>

            <p className="relative text-brand-text text-[14.5px] font-medium leading-snug mb-3">
              {BRAVE_SYSTEM.tagline}
            </p>
            <p className="relative text-brand-muted text-[13px] leading-relaxed mb-8">
              CRM, automações e IA integrada ao fluxo real do negócio —
              setup único + retainer mensal.
            </p>

            <div className="relative h-px mb-8"
              style={{ background: "linear-gradient(90deg, rgba(16,185,129,0.4), transparent)" }}
            />

            <ul className="relative flex flex-col gap-3.5 flex-1 list-none">
              {BRAVE_SYSTEM.features.map((f) => (
                <li key={f.text} className="flex items-start gap-3 text-[13px] text-brand-text leading-snug">
                  <CheckIcon />
                  {f.text}
                </li>
              ))}
            </ul>

            <div className="relative mt-9">
              <Magnetic strength={0.15}>
                <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="sm">
                  Ver se faz sentido →
                </Button>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Playbook R$27 — porta de entrada */}
      <AnimatedSection>
        <a
          href={ENTRY_PRODUCT.href}
          className="card-glass group flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-7 md:p-8"
        >
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="font-display text-[30px] text-brand-green-light leading-none">
              {ENTRY_PRODUCT.price}
            </span>
            <span
              className="inline-flex font-mono text-[9px] text-brand-faint uppercase tracking-[0.25em] px-3 py-1.5 rounded-md"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              {ENTRY_PRODUCT.tag}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-display text-[18px] text-white leading-snug mb-1">
              {ENTRY_PRODUCT.name}
            </h3>
            <p className="text-brand-muted text-[13px] leading-snug max-w-[560px]">
              Antes de contratar agência, entenda o jogo — o playbook de como
              sua empresa é encontrada e recomendada no Google e nas IAs.
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-green-light flex items-center gap-2 flex-shrink-0">
            Quero o playbook
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </a>
      </AnimatedSection>
    </Container>
  );
}
