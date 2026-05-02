"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function CTA() {
  return (
    <section className="bg-brand-dark border-t border-brand-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-[1200px] mx-auto px-6 md:px-12 py-28 md:py-40 flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.3em] mb-8"
        >
          — Primeiro contato: 15 minutos. Sem compromisso.
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(56px,8vw,120px)] leading-[0.9] text-white mb-12"
        >
          PRONTO PARA<br />
          PARECER O QUE<br />
          <span className="text-brand-red">VOCÊ JÁ É?</span>
        </motion.h2>

        {/* CTA Button */}
        <motion.a
          variants={fadeUp}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-red text-white font-display text-xl md:text-2xl tracking-[0.1em] px-10 py-5 hover:brightness-110 transition-all duration-200 mb-6"
        >
          FALAR COM YURI NO WHATSAPP →
        </motion.a>

        {/* Footnote */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] text-brand-muted tracking-[0.1em]"
        >
          Resposta em até 24h em dias úteis.
        </motion.p>
      </motion.div>
    </section>
  );
}
