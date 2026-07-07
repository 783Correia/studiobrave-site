"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeExpo } from "@/lib/motion";

const WPP = "5554996865236";
const STORAGE_KEY = "brave-briefing-v1";

type QType = "text" | "textarea" | "radio" | "checkbox";

type Question = {
  id: string;
  section: string;
  title: string;
  hint?: string;
  type: QType;
  options?: string[];
  placeholder?: string;
  inputMode?: "text" | "tel" | "email";
  showIf?: { id: string; value: string };
};

const QUESTIONS: Question[] = [
  // ── REALIDADE DO NEGÓCIO ──
  { id: "nome", section: "O negócio", type: "text", title: "Pra começar: seu nome e o da empresa.", placeholder: "Ex.: Maurício — Rodama" },
  { id: "historia", section: "O negócio", type: "textarea", title: "Apresenta a empresa como você apresentaria pro seu melhor cliente.", hint: "História, tempo de mercado, o que vocês fazem de melhor." },
  { id: "diferenciais", section: "O negócio", type: "textarea", title: "O que vocês fazem que a concorrência não consegue fazer igual?", hint: "Técnica, prazo, atendimento, história — o que segura o cliente com vocês." },
  { id: "origem_clientes", section: "O negócio", type: "checkbox", title: "Hoje, de onde vêm os clientes novos?", hint: "Marque tudo que acontece de verdade.", options: ["Indicação boca a boca", "Representantes", "Distribuidores/revendas", "Instagram/redes sociais", "Google/busca", "Feiras e eventos", "Carteira antiga — quase não entra cliente novo"] },
  { id: "processo_venda", section: "O negócio", type: "textarea", title: "Me descreve uma venda típica, do primeiro contato até o fechamento.", hint: "Quem atende, por onde chega, como orça, quanto tempo leva, quem decide." },
  { id: "perfis_cliente", section: "O negócio", type: "textarea", title: "Quem são os 2 ou 3 tipos de cliente mais importantes pro faturamento?", hint: "Ex.: revenda agrícola do interior, cooperativa, produtor direto…" },

  // ── MERCADO ──
  { id: "alcance", section: "Mercado", type: "textarea", title: "Onde estão seus clientes hoje — e onde você QUER chegar?", hint: "Regiões, estados, países. O que é realidade e o que é ambição." },
  { id: "concorrentes", section: "Mercado", type: "textarea", title: "Quais concorrentes incomodam — e o que eles fazem bem que vocês ainda não fazem?" },
  { id: "busca_google", section: "Mercado", type: "textarea", title: "Quando um cliente procura o que vocês vendem no Google, o que ele digita?", hint: "As palavras EXATAS que o comprador usa. Isso vale ouro pra vocês serem encontrados — inclusive pelas IAs (ChatGPT já recomenda empresas hoje)." },

  // ── CATÁLOGO ──
  { id: "tem_catalogo", section: "Catálogo", type: "radio", title: "O negócio trabalha com catálogo de produtos ou peças?", options: ["Sim", "Não"] },
  { id: "cat_linhas", section: "Catálogo", type: "textarea", title: "O que exatamente vocês vendem? Me dá o mapa das linhas de produto.", hint: "Tipos de peça, aplicações, marcas de máquina que atendem — do jeito que você explica pro cliente.", showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "cat_existe", section: "Catálogo", type: "radio", title: "Hoje, esse catálogo existe onde?", options: ["Planilha ou PDF organizado", "Num sistema/ERP", "Espalhado — parte em papel, parte na cabeça", "Não existe formalizado"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "cat_qtd", section: "Catálogo", type: "radio", title: "Quantos itens, aproximadamente?", options: ["Até 20", "20 a 50", "50 a 100", "Mais de 100"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "cat_fotos", section: "Catálogo", type: "radio", title: "Os produtos têm fotos de qualidade hoje?", options: ["Sim, com qualidade", "Algumas têm", "Não — precisaria fotografar"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "orcamento_hoje", section: "Catálogo", type: "textarea", title: "Como o cliente pede orçamento hoje — e o que costuma travar nesse processo?", hint: "WhatsApp? Telefone? Representante? Onde demora, onde se perde pedido.", showIf: { id: "tem_catalogo", value: "Sim" } },

  // ── PREÇOS E RELACIONAMENTO ──
  { id: "tem_area", section: "Preços e clientes", type: "radio", title: "O preço é igual pra todo mundo?", options: ["Não — cada tipo de cliente tem um preço (tabela por perfil)", "Sim, preço único", "Preço só sob consulta"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "login_perfis", section: "Preços e clientes", type: "checkbox", title: "Quais perfis de preço existem?", options: ["Atacadista", "Venda direta", "Representante", "Outro"], showIf: { id: "tem_area", value: "Não — cada tipo de cliente tem um preço (tabela por perfil)" } },
  { id: "login_acesso", section: "Preços e clientes", type: "radio", title: "Como um cliente novo passa a ter acesso à tabela dele?", options: ["A empresa cadastra e libera", "O cliente solicita e a empresa aprova", "Me orienta — quero o mais prático"], showIf: { id: "tem_area", value: "Não — cada tipo de cliente tem um preço (tabela por perfil)" } },
  { id: "login_admin", section: "Preços e clientes", type: "text", title: "Quem na empresa vai administrar preços, peças e clientes no dia a dia?", placeholder: "Nome e função", showIf: { id: "tem_catalogo", value: "Sim" } },

  // ── PRESENÇA ATUAL ──
  { id: "presenca_atual", section: "Presença atual", type: "checkbox", title: "O que existe HOJE de presença digital?", hint: "Sem vergonha — é diagnóstico, não julgamento.", options: ["Site no ar", "Google Meu Negócio/Maps", "Instagram ativo", "Catálogo digital (PDF que circula)", "Anúncios pagos rodando", "Praticamente nada"] },
  { id: "presenca_links", section: "Presença atual", type: "textarea", title: "Cola aqui os links do que existe: site, Instagram, Google Maps…", hint: "E me conta: o que funciona e o que te envergonha neles?" },
  { id: "medicao", section: "Presença atual", type: "radio", title: "Alguém mede de onde vêm os contatos que chegam?", options: ["Sim, temos números", "Mais ou menos — no feeling", "Ninguém mede nada"] },

  // ── VISÃO ──
  { id: "visao_12m", section: "Visão", type: "textarea", title: "Imagina que daqui 12 meses a estrutura digital funcionou perfeitamente. O que mudou no negócio?", hint: "Seja concreto: mais pedidos de onde? Menos dependência de quê? O que você quer poder dizer?" },
  { id: "medos", section: "Visão", type: "textarea", title: "O que NÃO pode acontecer de jeito nenhum nesse projeto?", hint: "Ex.: preço vazar pra concorrente, perder o jeito da marca, complicar a operação…" },
  { id: "mat_itens", section: "Visão", type: "checkbox", title: "Pra fechar: que material já existe pronto pra me enviar?", options: ["Logotipo em boa qualidade", "Fotos da empresa/equipe", "Fotos de produtos", "Vídeos", "Textos institucionais", "Catálogo em PDF/planilha"] },
  { id: "obs", section: "Visão", type: "textarea", title: "Algo mais que eu deveria saber antes de desenhar a estrutura?" },
];

type Answers = Record<string, string | string[]>;

function loadSaved(): { answers: Answers; idx: number } {
  if (typeof window === "undefined") return { answers: {}, idx: -1 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return { answers: p.answers ?? {}, idx: typeof p.idx === "number" ? p.idx : -1 };
    }
  } catch {}
  return { answers: {}, idx: -1 };
}

export default function BriefingQuiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [idx, setIdx] = useState(-1); // -1 = tela inicial
  const [hydrated, setHydrated] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const saved = loadSaved();
    setAnswers(saved.answers);
    setIdx(saved.idx);
    setHydrated(true);
  }, []);

  const visible = useMemo(
    () => QUESTIONS.filter((q) => !q.showIf || answers[q.showIf.id] === q.showIf.value),
    [answers]
  );
  const total = visible.length;
  const done = idx >= total;
  const q = !done && idx >= 0 ? visible[idx] : null;

  const persist = useCallback((a: Answers, i: number) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: a, idx: i })); } catch {}
  }, []);

  const setAnswer = (id: string, value: string | string[]) => {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    persist(next, idx);
  };

  const go = useCallback((to: number) => {
    setIdx(to);
    persist(answers, to);
  }, [answers, persist]);

  const advance = useCallback(() => go(Math.min(idx + 1, total)), [go, idx, total]);
  const back = useCallback(() => go(Math.max(idx - 1, 0)), [go, idx]);

  useEffect(() => {
    if (q?.type === "text") inputRef.current?.focus();
    if (q?.type === "textarea") textareaRef.current?.focus();
  }, [idx, q?.type]);

  const compile = () => {
    let out = "📋 BRIEFING — STUDIO BRAVE\n";
    let lastSection = "";
    for (const question of visible) {
      let v = answers[question.id];
      if (Array.isArray(v)) v = v.join(", ");
      if (!v || !String(v).trim()) continue;
      if (question.section !== lastSection) {
        out += `\n— ${question.section.toUpperCase()} —\n`;
        lastSection = question.section;
      }
      out += `• ${question.title}\n  → ${String(v).trim()}\n`;
    }
    return out;
  };

  const sendWhatsApp = () => window.open(`https://wa.me/${WPP}?text=${encodeURIComponent(compile())}`, "_blank");
  const download = () => {
    const blob = new Blob([compile()], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "briefing-studio-brave.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  if (!hydrated) return <div className="min-h-dvh bg-brand-black" />;

  return (
    <div className="min-h-dvh bg-brand-black text-brand-text flex flex-col overflow-hidden">
      {/* Progresso */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full origin-left"
          style={{ background: "linear-gradient(90deg,#10B981,#34D399)" }}
          animate={{ width: `${idx < 0 ? 0 : Math.min((idx / total) * 100, 100)}%` }}
          transition={{ duration: 0.4, ease: easeExpo }}
        />
      </div>

      {/* Atmosfera */}
      <div className="pointer-events-none fixed inset-0" style={{
        background: "radial-gradient(ellipse 80% 55% at 70% -10%, rgba(16,185,129,0.09) 0%, transparent 60%)",
      }} />

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-16 w-full max-w-[680px] mx-auto">
        <AnimatePresence mode="wait">

          {/* Tela inicial */}
          {idx === -1 && (
            <motion.div key="intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease: easeExpo }} className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green-light mb-6">Studio Brave · Diagnóstico de estrutura digital</p>
              <h1 className="font-display text-[clamp(30px,6vw,52px)] leading-[1.05] text-white mb-6">
                Antes de construir, eu preciso entender <span className="text-gradient-green">o seu negócio.</span>
              </h1>
              <p className="text-brand-muted text-[15.5px] max-w-[460px] mx-auto mb-10 leading-relaxed">
                Isso não é um formulário de site — é o diagnóstico de como sua empresa{" "}
                <span className="text-brand-text">é encontrada, entendida e compra</span> hoje: venda, catálogo, preços, Google, IA.
                Leva ~10 minutos e as respostas <span className="text-brand-green-light">salvam sozinhas</span> — pode parar e continuar depois.
              </p>
              <button
                onClick={() => go(0)}
                className="font-semibold text-[16px] px-9 py-4 rounded-lg text-[#04110B] transition-all duration-300 hover:brightness-110 cursor-pointer"
                style={{ background: "linear-gradient(135deg,#34D399,#10B981)", boxShadow: "0 0 28px rgba(16,185,129,0.3)" }}
              >
                Começar →
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-faint mt-6">Enter também funciona ↵</p>
            </motion.div>
          )}

          {/* Pergunta */}
          {q && (
            <motion.div key={q.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.35, ease: easeExpo }} className="w-full">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display text-[15px] text-brand-green-light">{idx + 1}<span className="text-brand-faint"> / {total}</span></span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-brand-faint">{q.section}</span>
              </div>

              <h2 className="font-display text-[clamp(22px,4vw,32px)] leading-[1.15] text-white mb-2">{q.title}</h2>
              {q.hint && <p className="text-brand-muted text-[13.5px] mb-6">{q.hint}</p>}
              {!q.hint && <div className="mb-6" />}

              {q.type === "text" && (
                <input
                  ref={inputRef}
                  type="text"
                  inputMode={q.inputMode === "tel" ? "tel" : q.inputMode === "email" ? "email" : "text"}
                  value={(answers[q.id] as string) ?? ""}
                  placeholder={q.placeholder ?? "Digite aqui…"}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); advance(); } }}
                  className="w-full bg-transparent text-[19px] text-white placeholder:text-brand-faint outline-none py-3 border-b-2 transition-colors"
                  style={{ borderColor: "rgba(16,185,129,0.4)" }}
                />
              )}

              {q.type === "textarea" && (
                <textarea
                  ref={textareaRef}
                  value={(answers[q.id] as string) ?? ""}
                  placeholder={q.placeholder ?? "Digite aqui… (Shift+Enter quebra linha)"}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); advance(); } }}
                  rows={4}
                  className="w-full bg-transparent text-[17px] text-white placeholder:text-brand-faint outline-none py-3 border-b-2 resize-none leading-relaxed"
                  style={{ borderColor: "rgba(16,185,129,0.4)" }}
                />
              )}

              {q.type === "radio" && (
                <div className="flex flex-col gap-2.5">
                  {q.options!.map((opt, i) => {
                    const selected = answers[q.id] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => { setAnswer(q.id, opt); setTimeout(advance, 280); }}
                        className="flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
                        style={{
                          background: selected ? "rgba(16,185,129,0.12)" : "rgba(255,255,255,0.03)",
                          border: `1px solid ${selected ? "rgba(16,185,129,0.6)" : "rgba(255,255,255,0.09)"}`,
                        }}
                      >
                        <span className="font-mono text-[11px] w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ background: selected ? "#10B981" : "rgba(255,255,255,0.07)", color: selected ? "#04110B" : "#8A8A85" }}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-[15px] text-brand-text leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === "checkbox" && (
                <div className="flex flex-col gap-2.5">
                  {q.options!.map((opt, i) => {
                    const arr = (answers[q.id] as string[]) ?? [];
                    const selected = arr.includes(opt);
                    return (
                      <button
                        key={opt}
                        onClick={() => setAnswer(q.id, selected ? arr.filter((v) => v !== opt) : [...arr, opt])}
                        className="flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
                        style={{
                          background: selected ? "rgba(16,185,129,0.12)" : "rgba(255,255,255,0.03)",
                          border: `1px solid ${selected ? "rgba(16,185,129,0.6)" : "rgba(255,255,255,0.09)"}`,
                        }}
                      >
                        <span className="font-mono text-[11px] w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ background: selected ? "#10B981" : "rgba(255,255,255,0.07)", color: selected ? "#04110B" : "#8A8A85" }}>
                          {selected ? "✓" : String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-[15px] text-brand-text leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Navegação */}
              <div className="flex items-center gap-4 mt-9">
                <button
                  onClick={advance}
                  className="font-semibold text-[15px] px-7 py-3.5 rounded-lg text-[#04110B] transition-all duration-300 hover:brightness-110 cursor-pointer"
                  style={{ background: "linear-gradient(135deg,#34D399,#10B981)" }}
                >
                  {idx === total - 1 ? "Finalizar →" : "OK →"}
                </button>
                {idx > 0 && (
                  <button onClick={back} className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-faint hover:text-white transition-colors cursor-pointer">
                    ← voltar
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Tela final */}
          {done && idx >= 0 && (
            <motion.div key="done" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: easeExpo }} className="text-center w-full max-w-[440px]">
              <div className="w-16 h-16 rounded-full mx-auto mb-7 flex items-center justify-center text-[26px] text-brand-green-light"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.4)" }}>✓</div>
              <h2 className="font-display text-[clamp(26px,5vw,38px)] leading-tight text-white mb-4">
                Briefing <span className="text-gradient-green">completo.</span>
              </h2>
              <p className="text-brand-muted text-[15px] mb-9 leading-relaxed">
                Agora é só enviar — suas respostas chegam formatadas direto no WhatsApp do Yuri.
              </p>
              <button
                onClick={sendWhatsApp}
                className="w-full font-semibold text-[16px] px-8 py-4 rounded-lg text-[#04110B] transition-all duration-300 hover:brightness-108 cursor-pointer"
                style={{ background: "#25D366" }}
              >
                Enviar pro WhatsApp do Yuri →
              </button>
              <button
                onClick={download}
                className="w-full font-mono text-[11px] uppercase tracking-[0.2em] text-brand-muted hover:text-white mt-4 py-3.5 rounded-lg transition-colors cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.12)", background: "transparent" }}
              >
                Baixar cópia (.txt)
              </button>
              <button onClick={() => go(total - 1)} className="block mx-auto font-mono text-[10px] uppercase tracking-[0.2em] text-brand-faint hover:text-white mt-7 transition-colors cursor-pointer bg-transparent border-0">
                ← revisar respostas
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="relative text-center pb-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-faint">
          Studio <span className="text-brand-green-light">Brave</span> · estrutura digital
        </p>
      </footer>
    </div>
  );
}
