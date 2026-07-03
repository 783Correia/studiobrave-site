"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AI_DEMOS } from "@/lib/data";

// Ciclo: digita a pergunta → "pensando" → resposta aparece → segura → próxima
type Phase = "typing" | "thinking" | "answering" | "holding";

export default function AIAnswerCard() {
  const reduced = useReducedMotion();
  const [demoIndex, setDemoIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const demo = AI_DEMOS[demoIndex];

  useEffect(() => {
    if (reduced) return; // versão estática pra quem prefere sem movimento
    const schedule = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    if (phase === "typing") {
      if (typed.length < demo.query.length) {
        schedule(() => setTyped(demo.query.slice(0, typed.length + 1)), 34 + Math.random() * 40);
      } else {
        schedule(() => setPhase("thinking"), 500);
      }
    } else if (phase === "thinking") {
      schedule(() => setPhase("answering"), 1100);
    } else if (phase === "answering") {
      schedule(() => setPhase("holding"), 4200);
    } else if (phase === "holding") {
      schedule(() => {
        setTyped("");
        setPhase("typing");
        setDemoIndex((i) => (i + 1) % AI_DEMOS.length);
      }, 2600);
    }

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [phase, typed, demo.query, reduced]);

  const showAnswer = reduced || phase === "answering" || phase === "holding";
  const queryText = reduced ? demo.query : typed;

  return (
    <div
      className="relative w-full max-w-[460px]"
      role="img"
      aria-label="Simulação de uma IA recomendando um cliente da Studio Brave"
    >
      {/* Glow atrás do card */}
      <div
        className="absolute -inset-8 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(16,185,129,0.14) 0%, transparent 65%)",
          filter: "blur(12px)",
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(17,17,18,0.85)",
          border: "1px solid rgba(255,255,255,0.09)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Barra do app */}
        <div
          className="flex items-center gap-2 px-5 py-3.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#3A3A3E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#3A3A3E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#3A3A3E" }} />
          <span className="ml-3 font-mono text-[10px] tracking-[0.2em] uppercase text-brand-faint">
            IA · busca por resposta
          </span>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-brand-green-light">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            ao vivo
          </span>
        </div>

        <div className="p-5 flex flex-col gap-4 min-h-[290px]">
          {/* Pergunta do usuário */}
          <div className="self-end max-w-[85%]">
            <div
              className="rounded-2xl rounded-br-md px-4 py-3 text-[13.5px] leading-snug text-brand-text"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              {queryText}
              {!reduced && phase === "typing" && (
                <span className="inline-block w-[2px] h-[1em] ml-0.5 align-middle bg-brand-green-light animate-pulse" />
              )}
            </div>
          </div>

          {/* Pensando… */}
          <AnimatePresence>
            {!reduced && phase === "thinking" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 px-1"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-brand-faint"
                    animate={{ opacity: [0.25, 1, 0.25] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Resposta da IA */}
          <AnimatePresence mode="wait">
            {showAnswer && (
              <motion.div
                key={demoIndex}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                transition={{ duration: 0.5 }}
                className="max-w-[92%]"
              >
                <p className="text-[13.5px] leading-relaxed text-brand-muted mb-3">
                  {demo.answer}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1.5 rounded-md text-brand-green-light"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.25)",
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    {demo.source}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-brand-faint">
                    fonte citada pela IA
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rodapé do card */}
        <div
          className="px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.18em] text-brand-faint"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          Clientes reais · respostas que IAs dão hoje — teste você mesmo
        </div>
      </div>
    </div>
  );
}
