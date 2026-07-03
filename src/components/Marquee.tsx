const ITEMS = [
  "Next.js · SSR indexável por IA",
  "Google Meu Negócio",
  "Schema Markup",
  "GA4 + Tracking completo",
  "SEO Técnico",
  "ChatGPT Visible",
  "Perplexity Ready",
  "Meta Ads",
  "Google Ads",
  "CRM Integrado",
  "Formulário → WhatsApp",
  "Site em 10 dias",
];

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.015)",
        padding: "18px 0",
      }}
    >
      {/* Fade left */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0a0a0b, transparent)" }}
      />
      {/* Fade right */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0a0a0b, transparent)" }}
      />

      <div
        className="marquee-track flex items-center gap-0 whitespace-nowrap"
        style={{ animation: "marquee-scroll 48s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-0">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-muted px-8">
              {item}
            </span>
            <span className="text-brand-green text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
