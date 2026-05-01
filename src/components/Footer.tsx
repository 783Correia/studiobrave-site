export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-black">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Logo + tagline */}
        <div>
          <p className="font-display text-[36px] text-white tracking-[3px] leading-none mb-2">
            STUDIO <span className="text-brand-red">BRAVE</span>
          </p>
          <p className="font-mono text-[11px] text-brand-muted uppercase tracking-[0.2em]">
            Aceleradores de Negócios
          </p>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1">
          <p className="font-mono text-[12px] text-brand-muted">
            Fundador: Yuri Correia
          </p>
          <p className="font-mono text-[12px] text-brand-muted">
            Lagoa Vermelha, RS — Brasil
          </p>
          <a
            href="mailto:contato@studiobrave.com.br"
            className="font-mono text-[12px] text-brand-muted hover:text-brand-text transition-colors no-underline"
          >
            contato@studiobrave.com.br
          </a>
          <a
            href="https://studiobrave.com.br"
            className="font-mono text-[12px] text-brand-muted hover:text-brand-text transition-colors no-underline"
          >
            studiobrave.com.br
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-brand-border max-w-[1200px] mx-auto px-6 md:px-12 py-5">
        <p className="font-mono text-[11px] text-brand-muted">
          © 2026 Studio Brave. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
