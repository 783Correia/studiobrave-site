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

      {/* Quote card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-brand-card border border-brand-border p-10 md:p-12 mb-6"
        style={{ borderLeft: "4px solid #C41E1E" }}
      >
        <p className="text-brand-text text-[16px] md:text-[18px] leading-relaxed mb-6">
          Empresários que já têm resultado, faturamento e reputação — mas que no
          digital parecem pequenos, desorganizados ou amadores.
        </p>
        <p className="text-brand-muted text-[15px] leading-relaxed">
          Esse desalinhamento gera perda de autoridade, perda de confiança e
          dependência excessiva de indicação.
        </p>
      </motion.div>

      {/* H2H card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="bg-brand-card2 border border-brand-border p-10 md:p-12 mb-20"
        style={{ borderLeft: "4px solid #333333" }}
      >
        <p className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.2em] mb-4">
          Toda venda é H2H
        </p>
        <p className="text-brand-text text-[15px] md:text-[16px] leading-relaxed mb-4">
          Marketing digital é ferramenta de aquisição de clientes. Instagram,
          tráfego, site — são meios de distribuição de mensagem.
        </p>
        <p className="text-brand-muted text-[15px] leading-relaxed">
          No final de qualquer funil, B2B ou B2C, tem um humano decidindo.{" "}
          <strong className="text-brand-text font-medium">
            Toda venda é H2H.
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
