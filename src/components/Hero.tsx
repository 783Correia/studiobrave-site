"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/data";
import { ease } from "@/lib/motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-[140px] pb-20 px-6 md:px-12 overflow-hidden">

      {/* Orb 1 — top right */}
      <div
        className="absolute pointer-events-none animate-glow-a"
        style={{
          top: "-5%",
          right: "-10%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(196,30,30,0.09) 0%, transparent 60%)",
        }}
      />

      {/* Orb 2 — bottom left */}
      <div
        className="absolute pointer-events-none animate-glow-b"
        style={{
          bottom: "0%",
          left: "-8%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(196,30,30,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.22,
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 100%)",
        }}
      />

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "38%",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(196,30,30,0.15) 30%, rgba(196,30,30,0.15) 70%, transparent 100%)",
        }}
      />

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
      />

      <div className="relative max-w-[1200px] mx-auto w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-6 h-px bg-brand-red" />
          <p className="font-mono text-[11px] text-brand-red uppercase tracking-[0.3em]">
            STUDIO BRAVE · PRESENÇA DIGITAL · 2026
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="font-display text-[clamp(68px,10.5vw,148px)] leading-[0.88] text-white mb-8"
        >
          O CLIENTE JÁ<br />
          <span className="text-gradient-red">DECIDIU</span><br />
          ANTES DE CLICAR.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="text-[#888] text-[17px] md:text-[18px] font-light max-w-[520px] mb-12 leading-[1.75]"
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
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="md">
            VER SE FAZ SENTIDO →
          </Button>
          <a
            href="#tese"
            className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.25em] hover:text-white transition-colors duration-200"
          >
            ver resultados ↓
          </a>
        </motion.div>

        {/* Proof strip — glass */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="inline-flex flex-wrap items-center gap-0"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "10px",
            padding: "12px 20px",
          }}
        >
          {[
            { val: "+68%", label: "conversão" },
            { val: "R$17,50", label: "custo por lead" },
            { val: "10 dias", label: "do zero ao ar" },
          ].map((stat, i) => (
            <div key={stat.val} className="flex items-center">
              {i > 0 && (
                <span className="block w-px h-8 mx-5"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />
              )}
              <div>
                <span className="block font-display text-[20px] text-white leading-none">{stat.val}</span>
                <span className="block font-mono text-[9px] text-brand-muted uppercase tracking-[0.18em] mt-0.5">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="md:hidden mt-10"
        >
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="md" fullWidth>
            VER SE FAZ SENTIDO →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
