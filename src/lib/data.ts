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
    title: "Estrutura antes de execução",
    desc: "Não criamos conteúdo sem antes organizar o que será dito, para quem e por quê. Execução sem estrutura é desperdício.",
  },
  {
    num: "02",
    title: "Percepção é ativo",
    desc: "A forma como seu negócio aparece determina o tipo de cliente que atrai — e quanto consegue cobrar.",
  },
  {
    num: "03",
    title: "Sistema fecha o ciclo",
    desc: "CRM, automação e IA para que nenhum relacionamento seja perdido por falta de processo.",
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
    tag: "Entrada — R$ 3.500",
    name: "Brave Start",
    tagline: "Presença digital com posicionamento certo desde o primeiro dia.",
    featured: false,
    badge: null,
    features: [
      { text: "Brave Presence — site posicionado com copy estratégica" },
      { text: "Brave Bridge — formulário integrado ao WhatsApp" },
      { text: "SEO técnico + deploy + domínio configurado" },
      { text: "Entrega em 7–10 dias úteis" },
    ],
  },
  {
    tag: "Organização — R$ 5.500",
    name: "Brave Core",
    tagline: "Lead que chega ao WhatsApp já sabe o que você faz e por que te escolher.",
    featured: false,
    badge: null,
    features: [
      { text: "Brave Presence — site posicionado com copy estratégica" },
      { text: "Brave Path — 1 LP para o serviço principal" },
      { text: "Brave Bridge — formulário integrado ao WhatsApp com contexto" },
      { text: "Brave DNA — briefing montado pela Brave, você só aprova" },
      { text: "Brave Report — relatório real no 30° dia" },
      { text: "Garantia: site no ar em 10 dias úteis ou devolução integral" },
    ],
  },
  {
    tag: "Gestão — R$ 2.500/mês",
    name: "Brave Scale",
    tagline: "Gestão contínua para o negócio crescer sem você precisar gerenciar o digital.",
    featured: false,
    badge: null,
    features: [
      { text: "Brave Search — SEO + GMB + 2 posts de blog por mês" },
      { text: "Brave Path — 1 LP nova por trimestre" },
      { text: "Brave Report — relatório mensal com CPL real" },
      { text: "Reunião mensal de 30 minutos com dado na mão" },
      { text: "Garantia: 30% mais leads em 60 dias ou mês 3 gratuito" },
    ],
  },
];

export const BRAVE_SYSTEM = {
  tag: "Sistema — R$ 8.000 setup + R$ 3.500/mês",
  name: "Brave System",
  tagline: "Não deixa dinheiro na mesa. Nenhum lead se perde por falta de processo.",
  badge: "Topo da cadeia",
  desc: "Não é um plano. É infraestrutura — com setup e retainer mensal. Para o empresário que já tem volume de lead mas perde no follow-up. O maior problema não é atrair cliente: é não perder o que já chegou.",
  features: [
    { text: "Tudo do Brave Scale" },
    { text: "Brave Engine — CRM configurado para o fluxo do seu negócio" },
    { text: "Automações de follow-up e nutrição de lead" },
    { text: "IA para qualificação e acompanhamento de pipeline" },
    { text: "Brave Bridge avançado — integração completa com canais existentes" },
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
