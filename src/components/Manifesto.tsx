"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

const TEXT =
  "Seu próximo cliente não vai comparar dez links. Ele vai perguntar — e aceitar a primeira resposta. A única questão é se essa resposta cita a sua empresa ou o seu concorrente.";

// Palavras que ganham cor ao revelar
const HIGHLIGHTS = new Set(["primeira", "resposta.", "sua"]);

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const highlighted = HIGHLIGHTS.has(word);
  return (
    <motion.span
      style={{ opacity }}
      className={highlighted ? "text-brand-green-light" : undefined}
    >
      {word}{" "}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = TEXT.split(" ");

  return (
    <section ref={ref} className="relative py-36 md:py-52">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand-faint mb-10">
          — A tese
        </p>
        {reduced ? (
          <p className="font-display text-[clamp(28px,4vw,52px)] leading-[1.25] text-white">
            {words.map((w, i) => (
              <span key={i} className={HIGHLIGHTS.has(w) ? "text-brand-green-light" : undefined}>
                {w}{" "}
              </span>
            ))}
          </p>
        ) : (
          <p className="font-display text-[clamp(28px,4vw,52px)] leading-[1.25] text-white">
            {words.map((w, i) => (
              <Word
                key={i}
                word={w}
                progress={scrollYProgress}
                range={[i / words.length, Math.min((i + 3) / words.length, 1)]}
              />
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
