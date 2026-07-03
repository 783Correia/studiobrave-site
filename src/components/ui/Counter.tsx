"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface CounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      motionValue.jump(value);
      return;
    }
    motionValue.set(value);
  }, [inView, value, reduced, motionValue]);

  useEffect(() => {
    const format = (v: number) =>
      prefix +
      v.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) +
      suffix;

    // estado inicial antes do spring emitir
    if (ref.current) ref.current.textContent = format(reduced ? value : 0);

    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = format(v);
    });
  }, [spring, prefix, suffix, decimals, reduced, value]);

  return <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }} />;
}
