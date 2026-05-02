"use client";

import { motion } from "framer-motion";
import { PRODUCTS, WHATSAPP_URL } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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
        02 — PRODUTOS
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-white mb-4"
      >
        10 VAGAS DE INAUGURAÇÃO
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-brand-muted text-[15px] md:text-[16px] max-w-[580px] mb-16 leading-relaxed"
      >
        Três planos. Cada um resolve um problema e abre espaço para o próximo.
        A verba de mídia é sempre separada — fica na sua conta, você tem
        controle total.
      </motion.p>

      {/* Cards grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border mb-6"
      >
        {PRODUCTS.map((product) => (
          <motion.div
            key={product.name}
            variants={fadeUp}
            className={`bg-brand-card p-8 md:p-10 relative flex flex-col ${
              product.featured ? "ring-2 ring-brand-red ring-inset" : ""
            }`}
          >
            {/* Badge */}
            {product.badge && (
              <span className="absolute -top-px right-6 bg-brand-red text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">
                {product.badge}
              </span>
            )}

            {/* Vagas */}
            <span className="font-mono text-[10px] text-brand-muted uppercase tracking-[0.2em] mb-4">
              {product.vagas}
            </span>

            {/* Name */}
            <h3 className="font-display text-[32px] text-white tracking-wide mb-6 leading-none">
              {product.name}
            </h3>

            {/* Divider */}
            <div className="w-full h-px bg-brand-border mb-8" />

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1 list-none">
              {product.features.map((f) => (
                <li
                  key={f.text}
                  className={`flex items-start gap-3 text-[13px] leading-snug ${
                    f.included ? "text-brand-text" : "text-[#3a3a3a]"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 text-[11px] mt-0.5 ${
                      f.included ? "text-brand-red" : "text-[#3a3a3a]"
                    }`}
                  >
                    {f.included ? "→" : "×"}
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex justify-center items-center text-[11px] font-bold uppercase tracking-[2px] px-4 py-3 transition-all duration-200 hover:brightness-110 ${
                product.featured
                  ? "bg-brand-red text-white"
                  : "border border-brand-border text-brand-muted hover:text-white hover:border-white"
              }`}
            >
              Quero saber mais
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Note */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-mono text-[11px] text-brand-muted leading-relaxed max-w-[640px]"
      >
        * Verba de mídia (Google Ads e Meta Ads) é sempre separada — fica na
        conta do cliente. Você tem controle total sobre o orçamento.
      </motion.p>
    </div>
  );
}
