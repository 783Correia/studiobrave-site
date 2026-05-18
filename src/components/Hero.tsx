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
          STUDIO BRAVE · PRESENÇA DIGITAL · 2026
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="font-display text-[clamp(72px,11vw,152px)] leading-[0.88] text-white mb-8"
        >
          O CLIENTE JÁ<br />
          <span className="text-brand-red">DECIDIU</span><br />
          ANTES DE CLICAR.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="text-[#999999] text-[17px] md:text-[19px] font-light max-w-[560px] mb-12 leading-[1.7]"
        >
          Em 2026, 60% das buscas terminam sem clique. O Google responde com IA
          antes de mostrar qualquer site. A Studio Brave constrói a estrutura que
          aparece nessa resposta — e converte quem já chegou decidido.
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
            VER SE FAZ SENTIDO →
          </Button>
          <a
            href="#tese"
            className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.25em] hover:text-white transition-colors duration-200"
          >
            ver resultados ↓
          </a>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          {[
            { val: "+68%", label: "conversão" },
            { val: "R$17,50", label: "custo por lead" },
            { val: "10 dias", label: "do zero ao no ar" },
          ].map((stat) => (
            <div key={stat.val} className="flex items-center gap-3">
              <span className="block w-[1px] h-6 bg-brand-border hidden sm:block" />
              <div>
                <span className="block font-display text-[22px] text-white leading-none">{stat.val}</span>
                <span className="block font-mono text-[9px] text-brand-muted uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="md:hidden mt-10 flex flex-col gap-4"
        >
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            fullWidth
          >
            VER SE FAZ SENTIDO →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
