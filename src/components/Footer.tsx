import { WHATSAPP_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, #0a0a0b 0%, rgba(16,185,129,0.06) 35%, rgba(16,185,129,0.14) 65%, rgba(16,185,129,0.24) 100%)",
      }}
    >
      {/* Top: CTA pill + links */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Nav */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Por quê existimos", href: "#tese" },
              { label: "Soluções",           href: "#produtos" },
              { label: "Resultados",         href: "#cases" },
              { label: "Como funciona",      href: "#processo" },
              { label: "Playbook · R$27",    href: "/novojogo", accent: true },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[12px] uppercase tracking-[0.2em] transition-colors duration-200 hover:text-white"
                style={{ color: l.accent ? "#34D399" : "rgba(255,255,255,0.55)" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA pill — center */}
          <div className="flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-mono text-[12px] uppercase tracking-[0.25em] transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 999,
                padding: "18px 40px",
                color: "rgba(255,255,255,0.7)",
                width: "100%",
                maxWidth: 320,
              }}
            >
              <span>Ver se faz sentido</span>
              <span style={{ color: "#34D399" }}>↗</span>
            </a>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-1"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              Contato
            </p>
            <p className="font-mono text-[12px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Lagoa Vermelha, RS · Brasil
            </p>
            <a
              href="mailto:contato@studiobrave.com.br"
              className="font-mono text-[12px] transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              contato@studiobrave.com.br
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] transition-colors hover:text-white"
              style={{ color: "#34D399" }}
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </div>

      {/* Massive brand name */}
      <div
        className="overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p
          className="font-display text-white text-center leading-[0.95] select-none whitespace-nowrap"
          style={{ fontSize: "clamp(40px, 9vw, 150px)", paddingBottom: "0.08em" }}
        >
          STUDIO BRAVE
        </p>
      </div>

      {/* Copyright strip */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <p className="font-mono text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 Studio Brave. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[10px] hidden md:block" style={{ color: "rgba(255,255,255,0.2)" }}>
            studiobrave.com.br
          </p>
        </div>
      </div>
    </footer>
  );
}
