"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PILLAR_ICONS = [
  // camadas — estrutura
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>,
  // rota — caminho do lead
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="6" cy="19" r="3" />
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
    <circle cx="18" cy="5" r="3" />
  </svg>,
  // ciclo — sistema
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>,
];

export default function Tese() {
  return (
    <Container className="py-28 md:py-40">
      <AnimatedSection>
        <SectionLabel className="text-brand-green-light">01 — O problema</SectionLabel>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-[clamp(34px,5vw,64px)] leading-[1.05] text-white mb-6 max-w-[16ch]">
          O problema não era o gestor.{" "}
          <span className="text-gradient-green">Era o site.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-brand-muted text-[15px] md:text-[16px] max-w-[520px] mb-16 leading-relaxed">
          Você investe em tráfego. O gestor é bom. As campanhas rodam.
          Mas o resultado não vem — e ninguém sabe por quê.
        </p>
      </AnimatedSection>

      {/* Diagnóstico em duas colunas */}
      <AnimatedSection variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <motion.div variants={fadeUp} className="card-glass p-10 md:p-12 cursor-default">
          <div className="h-px mb-8" style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03) 60%, transparent)"
          }} />
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-faint mb-6">
            Onde o dinheiro escapa
          </p>
          <p className="text-brand-text text-[16px] md:text-[17px] leading-relaxed mb-4">
            Anúncio direto pro WhatsApp traz curioso que pergunta preço e some.
          </p>
          <p className="text-brand-muted text-[14.5px] leading-relaxed">
            Anúncio com página, contexto e prova traz comprador que já decidiu.
            A diferença não é o investimento em mídia — é o que existe entre
            o clique e a conversa.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="card-glass p-10 md:p-12 cursor-default">
          <div className="h-px mb-8" style={{
            background: "linear-gradient(90deg, #10B981, rgba(16,185,129,0.1) 60%, transparent)"
          }} />
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-green-light mb-6">
            O que mudou em 2026
          </p>
          <p className="text-brand-text text-[16px] md:text-[17px] leading-relaxed mb-4">
            O Google responde antes de mostrar qualquer link.
            O ChatGPT decide antes do clique acontecer.
          </p>
          <p className="text-brand-muted text-[14.5px] leading-relaxed">
            Quem aparece nessa resposta tem site indexável, GMB completo e
            conteúdo estruturado. 99% das empresas brasileiras ainda não têm.{" "}
            <strong className="text-brand-text font-medium">Quem constrói primeiro, domina.</strong>
          </p>
        </motion.div>
      </AnimatedSection>

      {/* 3 pilares */}
      <AnimatedSection variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.num}
            variants={fadeUp}
            className="card-glass group p-8 md:p-10 cursor-default relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <span
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-brand-green-light transition-colors duration-300"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                {PILLAR_ICONS[i]}
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-brand-faint">
                {pillar.num}
              </span>
            </div>
            <h3 className="font-display text-[19px] text-white mb-3 leading-snug">
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
