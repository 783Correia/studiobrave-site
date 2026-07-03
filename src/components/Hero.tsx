"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL, CLIENTS } from "@/lib/data";
import { easeExpo } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import LineReveal from "@/components/ui/LineReveal";
import AIAnswerCard from "@/components/AIAnswerCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Camadas de atmosfera */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 70% -10%, rgba(16,185,129,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 10% 110%, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 20%, black 0%, transparent 85%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1280px] w-full mx-auto px-6 md:px-12 pt-[130px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-12 items-center w-full">

          {/* Coluna esquerda — mensagem */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easeExpo }}
              className="flex items-center gap-3 mb-9"
            >
              <span className="block w-8 h-px bg-brand-green" />
              <p className="font-mono text-[10px] text-brand-green-light uppercase tracking-[0.32em]">
                Estrutura digital · SEO · GEO
              </p>
            </motion.div>

            <LineReveal
              as="h1"
              delay={0.25}
              className="font-display text-[clamp(42px,5.8vw,84px)] leading-[1.0] text-white mb-8"
              lines={[
                <>O cliente já</>,
                <>
                  <span className="text-gradient-green">decidiu</span> antes
                </>,
                <>de clicar.</>,
              ]}
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: easeExpo }}
              className="text-[16px] md:text-[17px] max-w-[440px] mb-11 leading-[1.75] text-brand-muted"
            >
              O Google responde antes de mostrar links. O ChatGPT recomenda
              antes do clique. A Brave constrói a estrutura que faz essa
              resposta citar a <span className="text-brand-text">sua</span> empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: easeExpo }}
              className="flex flex-wrap items-center gap-6"
            >
              <Magnetic>
                <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="md">
                  Ver se faz sentido →
                </Button>
              </Magnetic>
              <a
                href="#cases"
                className="group font-mono text-[11px] uppercase tracking-[0.25em] text-brand-faint hover:text-white transition-colors duration-200"
              >
                resultados reais
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </motion.div>
          </div>

          {/* Coluna direita — demonstração da tese */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: easeExpo }}
            className="flex justify-center lg:justify-end"
          >
            <AIAnswerCard />
          </motion.div>
        </div>
      </div>

      {/* Faixa de clientes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-6 flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-faint w-full lg:w-auto text-center lg:text-left">
            Estruturas no ar por
          </span>
          {CLIENTS.map((c) => (
            <span
              key={c}
              className="font-display text-[15px] tracking-[0.02em]"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
