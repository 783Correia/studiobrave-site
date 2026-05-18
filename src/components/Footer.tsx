import Container from "@/components/ui/Container";
import { WHATSAPP_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-black">
      <Container className="py-16 flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Logo + tagline */}
        <div>
          <p className="font-display text-[40px] text-white tracking-[3px] leading-none mb-3">
            STUDIO <span className="text-brand-red">BRAVE</span>
          </p>
          <p className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.2em]">
            Estrutura · Percepção · Sistema
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] text-brand-muted uppercase tracking-[0.25em] mb-2">Menu</p>
          {[
            { label: "Por quê existimos", href: "#tese" },
            { label: "Soluções", href: "#produtos" },
            { label: "Resultados", href: "#cases" },
            { label: "Como funciona", href: "#processo" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[13px] text-brand-muted hover:text-white transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] text-brand-muted uppercase tracking-[0.25em] mb-2">Contato</p>
          <p className="font-mono text-[13px] text-brand-muted">
            Yuri Correia · Lagoa Vermelha, RS
          </p>
          <a
            href="mailto:contato@studiobrave.com.br"
            className="font-mono text-[13px] text-brand-muted hover:text-white transition-colors no-underline"
          >
            contato@studiobrave.com.br
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-brand-red hover:text-brand-red-light transition-colors no-underline"
          >
            WhatsApp ↗
          </a>
        </div>
      </Container>

      {/* Copyright */}
      <div className="border-t border-brand-border">
        <Container className="py-5 flex items-center justify-between">
          <p className="font-mono text-[11px] text-brand-muted">
            © 2026 Studio Brave. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[11px] text-brand-muted hidden md:block">
            Lagoa Vermelha · RS · Brasil
          </p>
        </Container>
      </div>
    </footer>
  );
}
