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
  { id: "nome", section: "Você", type: "text", title: "Pra começar: seu nome e o da empresa.", placeholder: "Ex.: Maurício — Rodama" },
  { id: "historia", section: "O negócio", type: "textarea", title: "Conta a empresa em poucas linhas — como você a apresentaria a um cliente novo.", hint: "História, tempo de mercado, o que fazem de melhor." },
  { id: "diferenciais", section: "O negócio", type: "textarea", title: "Quais os 3 maiores diferenciais de vocês frente à concorrência?" },
  { id: "lema", section: "O negócio", type: "text", title: "Alguma frase ou lema que a marca usa?", hint: "Se não tiver, deixa em branco — criamos juntos." },
  { id: "objetivo", section: "O negócio", type: "radio", title: "Qual o principal objetivo do site?", options: ["Credibilidade — apresentar a empresa com peso", "Gerar contatos e orçamentos", "Mostrar catálogo de produtos", "Tudo isso junto"] },
  { id: "ref_sites", section: "Referências", type: "textarea", title: "Sites que você acha bem feitos — do seu mercado ou não.", hint: "Pode colar os links." },
  { id: "ref_concorrentes", section: "Referências", type: "textarea", title: "Concorrentes diretos que valem a pena eu estudar." },
  { id: "ref_naoquero", section: "Referências", type: "textarea", title: "Algo que você viu por aí e NÃO quer no seu site?" },
  { id: "tem_catalogo", section: "Catálogo", type: "radio", title: "O projeto tem catálogo de produtos ou peças?", options: ["Sim", "Não"] },
  { id: "cat_org", section: "Catálogo", type: "radio", title: "Como o cliente deve navegar no catálogo?", options: ["Por tipo de produto/peça", "Por marca ou aplicação", "Os dois — com filtros"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "cat_qtd", section: "Catálogo", type: "radio", title: "Quantos produtos, aproximadamente, no lançamento?", options: ["Até 20", "20 a 50", "50 a 100", "Mais de 100"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "cat_fotos", section: "Catálogo", type: "radio", title: "Os produtos têm fotos boas hoje?", options: ["Sim, com qualidade", "Algumas têm", "Não — precisamos fotografar"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "cat_planilha", section: "Catálogo", type: "radio", title: "Existe planilha ou PDF com códigos, descrições e preços?", hint: "Esse material é o que destrava o prazo de entrega.", options: ["Sim, pronto pra enviar", "Existe, mas precisa organizar", "Precisa ser montado do zero"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "tem_area", section: "Área restrita", type: "radio", title: "Os preços são restritos — cada tipo de cliente vê um preço diferente?", options: ["Sim, preço por perfil de cliente (com login)", "Não, preço aberto pra todo mundo", "O site não mostra preço"], showIf: { id: "tem_catalogo", value: "Sim" } },
  { id: "login_perfis", section: "Área restrita", type: "checkbox", title: "Quais perfis de cliente existem?", options: ["Atacadista", "Venda direta", "Representante", "Outro"], showIf: { id: "tem_area", value: "Sim, preço por perfil de cliente (com login)" } },
  { id: "login_acesso", section: "Área restrita", type: "radio", title: "Como o cliente ganha acesso aos preços?", options: ["A empresa cria o login e envia", "O cliente solicita no site e a empresa aprova", "Me orienta — quero o mais prático"], showIf: { id: "tem_area", value: "Sim, preço por perfil de cliente (com login)" } },
  { id: "login_admin", section: "Área restrita", type: "text", title: "Quem na empresa vai administrar preços e clientes no painel?", placeholder: "Nome e função", showIf: { id: "tem_area", value: "Sim, preço por perfil de cliente (com login)" } },
  { id: "mat_itens", section: "Material", type: "checkbox", title: "O que você já tem pronto pra me enviar?", options: ["Logotipo em boa qualidade", "Fotos da empresa/equipe", "Fotos de produtos", "Vídeos", "Textos institucionais", "Catálogo em PDF/planilha"] },
  { id: "mat_dominio", section: "Material", type: "text", title: "Já tem domínio ou site no ar? Qual endereço — e quem tem o acesso?", placeholder: "Ex.: www.suaempresa.com.br" },
  { id: "mat_marca", section: "Material", type: "textarea", title: "Sobre o visual: cores que você gosta, cores que odeia, estilo que combina com a marca." },
  { id: "idiomas", section: "Alcance", type: "radio", title: "O site precisa de mais de um idioma?", options: ["Só português", "Português + inglês", "Português + espanhol", "Português + inglês + espanhol"] },
  { id: "contato_whats", section: "Contato", type: "text", inputMode: "tel", title: "Qual WhatsApp deve receber os contatos que chegarem pelo site?" },
  { id: "contato_email", section: "Contato", type: "text", inputMode: "email", title: "Qual e-mail comercial deve aparecer no site?" },
  { id: "ctr_email", section: "Contrato", type: "text", inputMode: "email", title: "Seu e-mail pra assinatura eletrônica do contrato." },
  { id: "ctr_tel", section: "Contrato", type: "text", inputMode: "tel", title: "Seu telefone." },
  { id: "ctr_venc", section: "Contrato", type: "radio", title: "Melhor dia do mês pro vencimento da mensalidade?", options: ["Dia 5", "Dia 10", "Dia 15", "Dia 20", "Dia 25"] },
  { id: "obs", section: "Fechamento", type: "textarea", title: "Pra fechar: algo mais que eu deveria saber antes de começar?" },
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
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green-light mb-6">Studio Brave · Briefing do projeto</p>
              <h1 className="font-display text-[clamp(30px,6vw,52px)] leading-[1.05] text-white mb-6">
                Vamos desenhar sua <span className="text-gradient-green">estrutura digital.</span>
              </h1>
              <p className="text-brand-muted text-[15.5px] max-w-[420px] mx-auto mb-10 leading-relaxed">
                Uma pergunta por vez, leva uns 7 minutos. Suas respostas{" "}
                <span className="text-brand-green-light">salvam sozinhas</span> — pode parar e continuar depois, deste mesmo aparelho.
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
