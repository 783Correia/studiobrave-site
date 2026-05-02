"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-[140px] pb-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="font-mono text-[11px] text-brand-red uppercase tracking-[0.3em] mb-8"
        >
          STUDIO BRAVE · ACELERADORES DE NEGÓCIOS · 2026
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="font-display text-[clamp(72px,12vw,160px)] leading-[0.9] text-white mb-8"
        >
          MOTORES<br />
          E PILOTOS.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="text-brand-muted text-[18px] md:text-[20px] font-light max-w-[560px] mb-12 leading-relaxed"
        >
          Não somos agência. Somos a estrutura digital que faz o seu negócio
          parecer o que ele já é.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="block w-[60px] h-px bg-brand-red flex-shrink-0" />
          <span className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em]">
            — 10 vagas de inauguração abertas
          </span>
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="md:hidden mt-8"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center bg-brand-red text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:brightness-110 transition-all"
          >
            FALAR COM YURI →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
