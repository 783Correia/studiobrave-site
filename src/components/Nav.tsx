"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/data";
import Container from "@/components/ui/Container";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid #2A2A2A" : "1px solid transparent",
      }}
    >
      <Container as="nav" className="py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-[26px] tracking-[3px] text-white no-underline hover:opacity-80 transition-opacity duration-200">
          STUDIO <span className="text-brand-red">BRAVE</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-brand-muted text-[12px] uppercase tracking-[0.12em] font-medium no-underline transition-colors duration-200 hover:text-white group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-red transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[2px] px-5 py-2.5 transition-all duration-200 hover:brightness-110"
        >
          Ver se faz sentido
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-0"
          aria-label="Menu"
        >
          <span
            className="block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }}
          />
          <span
            className="block w-6 h-[1.5px] bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-brand-border overflow-hidden"
            style={{ background: "rgba(10,10,10,0.98)", backdropFilter: "blur(24px)" }}
          >
            <ul className="list-none px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-brand-text text-[16px] uppercase tracking-[0.1em] font-medium no-underline hover:text-brand-red transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-brand-red text-white text-[11px] font-bold uppercase tracking-[2px] px-5 py-3 hover:brightness-110 transition-all duration-200"
                >
                  Ver se faz sentido
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
