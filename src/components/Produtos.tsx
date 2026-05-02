"use client";

import { motion } from "framer-motion";
import { PRODUCTS, BRAVE_SYSTEM, WHATSAPP_URL } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Produtos() {
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
        02 — SOLUÇÕES
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-4"
      >
        UMA ESCADA.<br />
        NÃO UM CARDÁPIO.
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-brand-muted text-[15px] md:text-[16px] max-w-[560px] mb-16 leading-relaxed"
      >
        Cada solução resolve um problema e prepara o terreno para a próxima.
        Não existe plano padrão — existe o que faz sentido para o seu momento.
      </motion.p>

      {/* Top 3 cards — Start, Core, Scale */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border mb-px"
      >
        {PRODUCTS.map((product) => (
          <motion.div
            key={product.name}
            variants={fadeUp}
            className="bg-brand-card p-8 md:p-10 flex flex-col"
          >
            {/* Tag */}
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-[0.25em] mb-5">
              {product.tag}
            </span>

            {/* Name */}
            <h3 className="font-display text-[30px] text-white tracking-wide leading-none mb-3">
              {product.name}
            </h3>

            {/* Tagline */}
            <p className="text-brand-muted text-[13px] leading-snug mb-8">
              {product.tagline}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-brand-border mb-8" />

            {/* Features */}
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

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex justify-center items-center border border-brand-border text-brand-muted text-[11px] font-bold uppercase tracking-[2px] px-4 py-3 transition-all duration-200 hover:text-white hover:border-white"
            >
              Quero conversar
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Brave System — full width featured card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="relative bg-brand-card border-2 border-brand-red p-10 md:p-14"
      >
        {/* Badge */}
        <span className="absolute -top-px right-8 bg-brand-red text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5">
          {BRAVE_SYSTEM.badge}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <div>
            <span className="block font-mono text-[10px] text-brand-red uppercase tracking-[0.25em] mb-5">
              {BRAVE_SYSTEM.tag}
            </span>
            <h3 className="font-display text-[clamp(40px,5vw,64px)] text-white tracking-wide leading-none mb-6">
              {BRAVE_SYSTEM.name}
            </h3>
            <p className="text-brand-text text-[17px] md:text-[18px] font-medium leading-snug mb-4">
              {BRAVE_SYSTEM.tagline}
            </p>
            <p className="text-brand-muted text-[14px] leading-relaxed mb-10">
              {BRAVE_SYSTEM.desc}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand-red text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:brightness-110 transition-all duration-200"
            >
              QUERO SABER MAIS →
            </a>
          </div>

          {/* Right */}
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
      </motion.div>
    </div>
  );
}
