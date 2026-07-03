"use client";

import { motion } from "framer-motion";
import { PORTFOLIO, WHATSAPP_URL, type PortfolioCase } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function CaseCard({ project, large }: { project: PortfolioCase; large?: boolean }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      className={`case-card group relative flex flex-col overflow-hidden rounded-2xl ${
        large ? "lg:col-span-4 lg:flex-row" : "lg:col-span-2"
      }`}
    >
      {/* Imagem */}
      <div
        className={`relative overflow-hidden ${large ? "lg:w-[55%] lg:order-2" : ""}`}
        style={{ height: large ? undefined : 200, minHeight: large ? 260 : undefined }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`Site de ${project.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: large
              ? "linear-gradient(to right, rgba(10,10,11,0.5) 0%, transparent 40%), linear-gradient(to top, rgba(10,10,11,0.5) 0%, transparent 40%)"
              : "linear-gradient(to top, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.1) 55%, transparent 100%)",
          }}
        />
        <span
          className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.28em] px-2.5 py-1.5 rounded-md text-brand-green-light"
          style={{
            background: "rgba(4,17,11,0.75)",
            border: "1px solid rgba(16,185,129,0.35)",
            backdropFilter: "blur(8px)",
          }}
        >
          {project.tag}
        </span>
      </div>

      {/* Conteúdo */}
      <div className={`flex flex-col p-6 ${large ? "lg:w-[45%] lg:p-10 lg:justify-center" : ""}`}>
        <div className="flex items-baseline gap-3 mb-1.5">
          <span
            className={`font-display leading-none text-brand-green-light ${
              large ? "text-[clamp(48px,5vw,76px)]" : "text-[30px]"
            }`}
          >
            {project.metric}
          </span>
        </div>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-brand-faint mb-5">
          {project.metricLabel}
        </span>

        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className={`font-display text-white leading-tight ${large ? "text-[24px]" : "text-[18px]"}`}>
            {project.name}
          </h3>
          <span className="flex-shrink-0 mt-0.5 text-brand-faint transition-all duration-300 group-hover:text-brand-green-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowIcon />
          </span>
        </div>

        <p className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-brand-faint mb-3">
          {project.segmento}
        </p>

        <p className="text-[13px] leading-relaxed text-brand-muted">
          {project.resultado}
        </p>
      </div>
    </motion.a>
  );
}

export default function Cases() {
  const featured = PORTFOLIO.find((p) => p.featured)!;
  const rest = PORTFOLIO.filter((p) => !p.featured);

  return (
    <section className="py-28 md:py-40">
      <Container>
        <AnimatedSection>
          <SectionLabel className="text-brand-green-light">03 — Resultados reais</SectionLabel>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-display text-[clamp(34px,5vw,64px)] leading-[1.05] text-white mb-6 max-w-[18ch]">
            Não é promessa.{" "}
            <span className="text-gradient-green">É o que já aconteceu.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-brand-muted text-[15px] mb-16 max-w-[480px]">
            Cada número é rastreável. Cada projeto tem URL no ar.
            Nenhuma estimativa.
          </p>
        </AnimatedSection>

        {/* Bento grid */}
        <AnimatedSection variants={stagger} className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          <CaseCard project={featured} large />
          <CaseCard project={rest[0]} />
          {rest.slice(1).map((p) => (
            <CaseCard key={p.name} project={p} />
          ))}

          {/* Última célula — convite */}
          <motion.a
            variants={fadeUp}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="case-card group relative flex flex-col items-start justify-between overflow-hidden rounded-2xl p-6 lg:col-span-2 min-h-[220px]"
            style={{
              background:
                "linear-gradient(160deg, rgba(16,185,129,0.09) 0%, rgba(16,185,129,0.02) 60%)",
            }}
          >
            <span className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-brand-green-light">
              Próximo case
            </span>
            <div>
              <h3 className="font-display text-[22px] text-white leading-snug mb-2 max-w-[16ch]">
                Esse espaço está reservado pro seu número.
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-muted flex items-center gap-2 group-hover:text-brand-green-light transition-colors duration-300">
                Começar a conversa
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </motion.a>
        </AnimatedSection>
      </Container>
    </section>
  );
}
