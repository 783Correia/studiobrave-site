"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";
import { ease } from "@/lib/motion";
import Button from "@/components/ui/Button";

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
          STUDIO BRAVE · ESTRUTURA E SISTEMA DE NEGÓCIO · 2026
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
          className="text-brand-muted text-[18px] md:text-[20px] font-light max-w-[600px] mb-12 leading-relaxed"
        >
          A Brave não é uma agência. Ela estrutura a forma como o seu negócio
          é apresentado, operado e percebido no digital.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="flex items-center gap-4"
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
          className="md:hidden mt-10"
        >
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            fullWidth
          >
            FALAR COM YURI →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
