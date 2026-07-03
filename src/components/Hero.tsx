"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";
import { ease } from "@/lib/motion";
import Button from "@/components/ui/Button";

const FLOAT_CARDS = [
  { val: "+68%",    label: "conversão",      pos: "top-[30%] left-[3%]",    delay: 0.9  },
  { val: "R$17,50", label: "custo por lead", pos: "top-[22%] right-[3%]",   delay: 1.0  },
  { val: "10 dias", label: "do zero ao ar",  pos: "bottom-[28%] left-[4%]", delay: 1.1  },
  { val: "560%",    label: "crescimento",    pos: "bottom-[24%] right-[3%]", delay: 1.2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Planet orb */}
      <div
        className="absolute pointer-events-none animate-glow-a"
        style={{
          bottom: "-35%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(960px, 130vw)",
          height: "min(960px, 130vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 25%, rgba(16,185,129,0.22) 0%, rgba(6,95,70,0.11) 36%, rgba(4,47,36,0.04) 58%, transparent 70%)",
          boxShadow:
            "0 0 120px rgba(16,185,129,0.12), 0 -40px 140px rgba(16,185,129,0.08)",
        }}
      />

      {/* Ambient top-right orb */}
      <div
        className="absolute pointer-events-none animate-glow-b"
        style={{
          top: "-8%", right: "-6%",
          width: 480, height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.16,
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 30%, black 10%, transparent 100%)",
        }}
      />

      {/* Floating cards — desktop */}
      {FLOAT_CARDS.map((card) => (
        <motion.div
          key={card.val}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: card.delay, ease }}
          className={`absolute hidden lg:flex flex-col gap-0.5 ${card.pos}`}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 14,
            padding: "14px 20px",
            backdropFilter: "blur(16px)",
          }}
        >
          <span className="font-display text-[24px] text-brand-green-light leading-none">{card.val}</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] mt-1 text-brand-faint">
            {card.label}
          </span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="block w-5 h-px bg-brand-green" />
          <p className="font-mono text-[10px] text-brand-green-light uppercase tracking-[0.35em]">
            Studio Brave · Presença digital · 2026
          </p>
          <span className="block w-5 h-px bg-brand-green" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="font-display text-[clamp(40px,7vw,92px)] leading-[1.02] text-white mb-8 max-w-[13ch]"
        >
          O cliente já{" "}
          <span className="text-gradient-green">decidiu</span>{" "}
          antes de clicar.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="text-[16px] md:text-[17px] font-light max-w-[480px] mb-12 leading-[1.75] text-brand-muted"
        >
          O lead chegou no WhatsApp, perguntou preço e sumiu.
          Não foi o gestor que falhou — foi o caminho que estava faltando.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="md">
            Ver se faz sentido →
          </Button>
          <a
            href="#cases"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-faint hover:text-white transition-colors duration-200"
          >
            ver resultados ↓
          </a>
        </motion.div>

        {/* Mobile proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="lg:hidden flex flex-wrap justify-center gap-4 mt-12"
        >
          {FLOAT_CARDS.map((card) => (
            <div key={card.val}
              className="flex flex-col items-center px-5 py-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
              }}
            >
              <span className="font-display text-[20px] text-brand-green-light leading-none">{card.val}</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] mt-0.5 text-brand-faint">
                {card.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Massive brand name at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0, ease }}
        className="relative z-10 overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p
          className="font-display text-center leading-[0.95] select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(40px, 9vw, 150px)",
            color: "rgba(255,255,255,0.06)",
            paddingBottom: "0.08em",
          }}
        >
          STUDIO BRAVE
        </p>
      </motion.div>
    </section>
  );
}
