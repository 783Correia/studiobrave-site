"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO, type PortfolioCase } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

function CaseCard({ project, index }: { project: PortfolioCase; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(16,185,129,0.35)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(16,185,129,0.12)" : "none",
        transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
        {/* Gradient overlay bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.1) 55%, transparent 100%)",
          }}
        />
        {/* Tag — bottom left of image */}
        <span
          className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.3em]"
          style={{
            background: "rgba(4,17,11,0.75)",
            border: "1px solid rgba(16,185,129,0.35)",
            borderRadius: 6,
            padding: "5px 10px",
            color: "#34D399",
          }}
        >
          {project.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2 gap-3">
          <h3 className="font-display text-[20px] text-white leading-none">
            {project.name}
          </h3>
          <span
            className="flex-shrink-0 text-[18px] transition-all duration-200"
            style={{
              color: hovered ? "#34D399" : "#4A4A46",
              transform: hovered ? "translate(3px, -3px)" : "none",
            }}
          >
            ↗
          </span>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 text-brand-faint">
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
  return (
    <section className="py-28 md:py-40" id="cases">
      <Container>
        <AnimatedSection>
          <SectionLabel className="text-brand-green-light">03 — Resultados reais</SectionLabel>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-display text-[clamp(34px,5vw,64px)] leading-[1.05] text-white mb-4 max-w-[18ch]">
            Não é promessa.{" "}
            <span className="text-gradient-green">É o que já aconteceu.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-brand-muted text-[15px] mb-20 max-w-[480px]">
            Cada número é rastreável. Cada projeto tem URL. Nenhuma estimativa.
          </p>
        </AnimatedSection>

        {/* Portfolio grid */}
        <AnimatedSection variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PORTFOLIO.map((project, i) => (
            <CaseCard key={project.name} project={project} index={i} />
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
