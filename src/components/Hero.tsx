"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";
import { ease } from "@/lib/motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-[140px] pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background: subtle red glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-15%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(196,30,30,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Background: dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2A2A2A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.4,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border" />

      <div className="relative max-w-[1200px] mx-auto w-full">
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
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="font-display text-[clamp(80px,13vw,172px)] leading-[0.88] text-white mb-8"
        >
          MOTORES<br />
          <span className="text-brand-red">E</span> PILOTOS.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="text-[#999999] text-[17px] md:text-[19px] font-light max-w-[560px] mb-12 leading-[1.7]"
        >
          A Brave não é uma agência. Ela constrói a presença digital que faz
          o seu negócio aparecer e converter — no Google, no Maps, no ChatGPT.
        </motion.p>

        {/* CTA row — desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease }}
          className="hidden md:flex items-center gap-8 mb-16"
        >
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            FALAR COM YURI →
          </Button>
          <a
            href="#tese"
            className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.25em] hover:text-white transition-colors duration-200"
          >
            como funciona ↓
          </a>
        </motion.div>

        {/* Divider + badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="flex items-center gap-4"
        >
          <span className="block w-[48px] h-px bg-brand-red flex-shrink-0" />
          <span className="font-mono text-[10px] text-brand-red uppercase tracking-[0.25em]">
            10 vagas de inauguração abertas
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
