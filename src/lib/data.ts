export const WHATSAPP_URL =
  "https://wa.me/5554996865236?text=Quero+saber+mais+sobre+a+Studio+Brave";

export const NAV_LINKS = [
  { label: "Tese",     href: "#tese"     },
  { label: "Soluções", href: "#produtos"  },
  { label: "Cases",    href: "#cases"     },
  { label: "Processo", href: "#processo"  },
];

export const PILLARS = [
  {
    num: "01",
    title: "Estrutura que a IA indexa",
    desc: "Site rápido, GMB real, dados corretos em toda a web. É o que faz um negócio aparecer quando o cliente pesquisa no ChatGPT, Perplexity ou Google.",
  },
  {
    num: "02",
    title: "Percepção é ativo",
    desc: "A forma como seu negócio aparece determina o tipo de cliente que atrai — e quanto consegue cobrar. Parece pequeno no digital, perde para quem parece maior.",
  },
  {
    num: "03",
    title: "Sistema fecha o ciclo",
    desc: "CRM, automação e IA para que nenhum lead se perca. O maior problema não é atrair cliente — é não perder o que já chegou.",
  },
];

export type Feature = { text: string };

export type Product = {
  tag: string;
  name: string;
  tagline: string;
  featured: boolean;
  badge: string | null;
  features: Feature[];
};

export const PRODUCTS: Product[] = [
  {
    tag: "Projeto único",
    name: "Brave Foundation",
    tagline: "A base que faz o negócio aparecer onde o cliente busca — Google, Maps, ChatGPT.",
    featured: false,
    badge: null,
    features: [
      { text: "Site em Next.js — rápido, limpo, indexável por qualquer IA" },
      { text: "Google Meu Negócio completo — aparece no Maps e alimenta resposta local do ChatGPT" },
      { text: "SEO técnico + schema markup — estrutura que crawler de IA lê sem esforço" },
      { text: "GA4 + tracking completo — cada clique rastreado, cada lead identificado" },
      { text: "Formulário integrado ao WhatsApp — lead chega com contexto, não só perguntando preço" },
      { text: "Garantia: no ar em 10 dias úteis ou devolução integral" },
    ],
  },
  {
    tag: "Recorrência mensal",
    name: "Brave Presence",
    tagline: "Presença que cresce mês a mês — conteúdo, GMB e relatório com número real.",
    featured: false,
    badge: null,
    features: [
      { text: "Conteúdo SEO mensal — artigos estruturados que IA cita, Google ranqueia" },
      { text: "GMB atualizado — posts, fotos, respostas, dados corretos sempre" },
      { text: "1 LP nova por trimestre — página de serviço ou campanha" },
      { text: "Relatório real — conversão, ligação, clique, CPL — número rastreável" },
      { text: "Reunião 30 min/mês — diagnóstico, próximos passos" },
      { text: "Garantia: +30% nos leads em 60 dias ou mês 3 gratuito" },
    ],
  },
];

export const BRAVE_SYSTEM = {
  tag: "Infraestrutura completa",
  name: "Brave System",
  tagline: "Para quem cresce mas perde lead no pipeline.",
  badge: "Topo da cadeia",
  desc: "Tudo do Brave Presence mais CRM, automações e IA integrada ao fluxo real do negócio. Setup único + retainer mensal. Para o empresário que tem volume de lead mas vê dinheiro escapar no follow-up.",
  features: [
    { text: "Tudo do Brave Presence" },
    { text: "CRM configurado para o fluxo real do negócio" },
    { text: "Automações de follow-up e nutrição de lead" },
    { text: "IA para qualificação e acompanhamento de pipeline" },
    { text: "Relatório de pipeline + taxa de conversão real" },
    { text: "Revisão quinzenal de 30 minutos" },
  ],
};

export const CASES = [
  {
    client: "Torno Metal",
    location: "Passo Fundo/RS",
    segment: "Indústria de peças agrícolas",
    action: "Meta Ads + site + criativos alinhados por público",
    result: "R$ 17,50",
    resultLabel: "custo por lead qualificado",
  },
  {
    client: "Sales Embalagens",
    location: "Fortaleza/CE",
    segment: "Distribuidora de embalagens",
    action: "Estrutura digital completa + criativos certos para rodar",
    result: "560%",
    resultLabel: "crescimento no faturamento",
    resultSub: "R$25k → R$165k no mesmo mês",
  },
  {
    client: "Jaco Locadora",
    location: "Palhoça/SC",
    segment: "Locadora de equipamentos pesados",
    action: "Site + SEO + Google Meu Negócio estruturado",
    result: "12,68%",
    resultLabel: "conversão do site",
    resultSub: "102 ações GMB · 18 ligações em abril",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Primeiro Contato",
    desc: "15 minutos. Entendemos se faz sentido para os dois lados. Não é reunião de vendas. É filtro.",
  },
  {
    num: "02",
    title: "Diagnóstico",
    desc: "Analisamos o que você já tem: canais, posicionamento, processo de venda. Respondemos as perguntas certas antes de propor qualquer coisa.",
  },
  {
    num: "03",
    title: "Proposta",
    desc: "Personalizada. Com diagnóstico, solução, entregáveis, cronograma e condições. Prazo de validade: 7 dias.",
  },
  {
    num: "04",
    title: "Onboarding",
    desc: "Contrato assinado e entrada paga antes de qualquer execução. SLA definido. Acessos coletados. Briefing aprovado.",
  },
  {
    num: "05",
    title: "Execução e Relatório",
    desc: "Cada entregável tem um motivo de existir dentro do plano. Relatório mensal com dado real. Reunião de 30 minutos. Sem surpresa.",
  },
];
