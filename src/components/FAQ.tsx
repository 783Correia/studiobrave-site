"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ as FAQ_ITEMS } from "@/lib/data";
import { fadeUp, stagger, ease } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = `faq-panel-${index}`;

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer bg-transparent border-0 group"
      >
        <span className="flex items-baseline gap-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-brand-faint flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-[17px] md:text-[19px] text-white leading-snug group-hover:text-brand-green-light transition-colors duration-250">
            {q}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease }}
          className="flex-shrink-0 text-brand-green-light text-[20px] leading-none w-5 text-center"
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <p className="text-brand-muted text-[14.5px] leading-relaxed max-w-[640px] pb-7 pl-[42px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <Container className="py-28 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-28">
          <AnimatedSection>
            <SectionLabel className="text-brand-green-light">05 — Perguntas diretas</SectionLabel>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.05] text-white mb-6 max-w-[12ch]">
              O que todo empresário{" "}
              <span className="text-gradient-green">pergunta.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-brand-muted text-[15px] max-w-[360px] leading-relaxed">
              Respostas sem rodeio — as mesmas que a IA lê quando alguém
              pergunta sobre a Brave.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection variants={stagger} className="flex flex-col">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div key={item.q} variants={fadeUp}>
              <Item q={item.q} a={item.a} index={i} />
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </Container>
  );
}
