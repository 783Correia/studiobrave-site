"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Tese() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">
      {/* Eyebrow */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-mono text-[11px] text-brand-red uppercase tracking-[0.3em] mb-6"
      >
        01 — POR QUÊ EXISTIMOS
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-16"
      >
        O NEGÓCIO É BOM.<br />
        MAS NÃO PARECE BOM.
      </motion.h2>

      {/* Card — o problema */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-brand-card border border-brand-border p-10 md:p-12 mb-6"
        style={{ borderLeft: "4px solid #C41E1E" }}
      >
        <p className="text-brand-text text-[16px] md:text-[18px] leading-relaxed mb-6">
          A maioria dos bons negócios parece pequena no digital. Não por falta
          de qualidade — mas por falta de estrutura.
        </p>
        <p className="text-brand-muted text-[15px] leading-relaxed">
          Empresários com resultado, faturamento e reputação que no digital
          parecem desorganizados ou amadores. Esse desalinhamento custa
          autoridade, custa confiança e mantém o empresário refém da indicação.
        </p>
      </motion.div>

      {/* Card — a distinção */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-brand-card2 border border-brand-border p-10 md:p-12 mb-20"
        style={{ borderLeft: "4px solid #333333" }}
      >
        <p className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.2em] mb-5">
          A diferença que muda o jogo
        </p>
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
      </motion.div>

      {/* 3 Pillars */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
      </motion.div>
    </div>
  );
}
