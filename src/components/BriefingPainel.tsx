"use client";

import { useEffect, useState } from "react";
import { QUESTIONS } from "@/components/BriefingQuiz";

type Item = { pathname: string; uploadedAt: string; size: number };
type Submission = { code: string; submittedAt: string; answers: Record<string, string | string[]> };

function toMarkdown(sub: Submission): string {
  let md = `# Briefing — ${sub.code}\n\n`;
  md += `> Respondido em ${new Date(sub.submittedAt).toLocaleString("pt-BR")} · via studiobrave.com.br/briefingdeinfo\n\n`;
  let lastSection = "";
  for (const q of QUESTIONS) {
    let v = sub.answers[q.id];
    if (Array.isArray(v)) v = v.join(", ");
    if (!v || !String(v).trim()) continue;
    if (q.section !== lastSection) {
      md += `\n## ${q.section}\n\n`;
      lastSection = q.section;
    }
    md += `**${q.title}**\n${String(v).trim()}\n\n`;
  }
  return md.trim() + "\n";
}

export default function BriefingPainel() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("brave-painel-key");
    if (saved) { setKey(saved); login(saved); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function api(payload: object) {
    const r = await fetch("/api/briefing/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error(String(r.status));
    return r.json();
  }

  async function login(k: string) {
    setError("");
    setLoading(true);
    try {
      const res = await api({ key: k, action: "list" });
      setItems(res.items);
      setAuthed(true);
      sessionStorage.setItem("brave-painel-key", k);
    } catch {
      setError("Chave incorreta.");
      sessionStorage.removeItem("brave-painel-key");
    } finally {
      setLoading(false);
    }
  }

  async function openItem(pathname: string) {
    setSelected(pathname);
    setMarkdown("");
    setCopied(false);
    setLoading(true);
    try {
      const res = await api({ key, action: "get", pathname });
      setMarkdown(toMarkdown(res.data as Submission));
    } catch {
      setMarkdown("Erro ao carregar este briefing.");
    } finally {
      setLoading(false);
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const label = (p: Item) => {
    const parts = p.pathname.replace("briefings/", "").split("/");
    const code = parts[0];
    const date = new Date(p.uploadedAt).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" });
    return { code, date };
  };

  return (
    <div className="min-h-dvh bg-brand-black text-brand-text px-6 py-14">
      <div className="max-w-[860px] mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green-light mb-2">Studio Brave · Painel interno</p>
        <h1 className="font-display text-[clamp(24px,4vw,36px)] text-white mb-10">Briefings recebidos</h1>

        {!authed ? (
          <div className="max-w-[380px]">
            <input
              type="password"
              value={key}
              placeholder="Chave de acesso"
              onChange={(e) => setKey(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") login(key); }}
              className="w-full bg-transparent text-[17px] text-white placeholder:text-brand-faint outline-none py-3 border-b-2"
              style={{ borderColor: error ? "#EF4444" : "rgba(16,185,129,0.4)" }}
            />
            {error && <p className="text-[13px] mt-2" style={{ color: "#F87171" }}>{error}</p>}
            <button
              onClick={() => login(key)}
              disabled={loading}
              className="mt-6 font-semibold text-[15px] px-8 py-3.5 rounded-lg text-[#04110B] cursor-pointer disabled:opacity-60"
              style={{ background: "linear-gradient(135deg,#34D399,#10B981)" }}
            >
              {loading ? "Entrando…" : "Entrar"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
            {/* Lista */}
            <div className="flex flex-col gap-2">
              {items.length === 0 && (
                <p className="text-brand-muted text-[14px]">Nenhum briefing recebido ainda.</p>
              )}
              {items.map((it) => {
                const { code, date } = label(it);
                const active = selected === it.pathname;
                return (
                  <button
                    key={it.pathname}
                    onClick={() => openItem(it.pathname)}
                    className="text-left px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-200"
                    style={{
                      background: active ? "rgba(16,185,129,0.1)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${active ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <span className="block font-display text-[16px] text-white">{code}</span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-brand-faint mt-1">{date}</span>
                  </button>
                );
              })}
            </div>

            {/* Conteúdo */}
            <div className="card-glass p-6 min-h-[300px]">
              {!selected && <p className="text-brand-muted text-[14px]">Selecione um briefing ao lado.</p>}
              {selected && loading && <p className="text-brand-muted text-[14px]">Carregando…</p>}
              {selected && !loading && markdown && (
                <>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-faint">Markdown pronto pra colar</p>
                    <button
                      onClick={copy}
                      className="font-semibold text-[13px] px-5 py-2.5 rounded-lg text-[#04110B] cursor-pointer"
                      style={{ background: copied ? "#34D399" : "linear-gradient(135deg,#34D399,#10B981)" }}
                    >
                      {copied ? "✓ Copiado" : "Copiar markdown"}
                    </button>
                  </div>
                  <textarea
                    readOnly
                    value={markdown}
                    className="w-full h-[520px] bg-transparent text-[13px] leading-relaxed text-brand-text outline-none resize-vertical font-mono"
                    style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 14 }}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
