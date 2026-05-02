export const WHATSAPP_URL =
  "https://wa.me/5554XXXXXXXX?text=Quero+saber+mais+sobre+a+Studio+Brave";

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
    tag: "Entrada",
    name: "Brave Start",
    tagline: "Sua presença digital com o posicionamento certo desde o primeiro dia.",
    featured: false,
    badge: null,
    features: [
      { text: "Site completo com posicionamento visual" },
      { text: "Copy de apresentação estratégica" },
      { text: "Deploy + domínio configurado" },
      { text: "SEO técnico" },
      { text: "Entrega em 7–10 dias úteis" },
    ],
  },
  {
    tag: "Organização",
    name: "Brave Core",
    tagline: "Organize como seu negócio é apresentado e percebido em cada canal.",
    featured: false,
    badge: null,
    features: [
      { text: "Tudo do Brave Start" },
      { text: "Mapeamento de posicionamento" },
      { text: "Arquitetura de presença digital" },
      { text: "Narrativa de marca consistente" },
      { text: "Coerência entre todos os canais" },
    ],
  },
  {
    tag: "Gestão",
    name: "Brave Scale",
    tagline: "Acompanhamento contínuo para manter o negócio crescendo no digital.",
    featured: false,
    badge: null,
    features: [
      { text: "Tudo do Brave Core" },
      { text: "Gestão editorial mensal por objetivo" },
      { text: "Criativos e tráfego pago gerenciado" },
      { text: "Relatório mensal com CPL real" },
      { text: "Reunião mensal de 30 minutos" },
    ],
  },
];

export const BRAVE_SYSTEM = {
  tag: "Sistema",
  name: "Brave System",
  tagline: "Organiza o processo de relacionamento. Não deixa dinheiro na mesa.",
  badge: "Topo da cadeia",
  desc: "Não é um plano. É um projeto de infraestrutura — com setup e retainer mensal. Para empresários que entendem que o maior problema não é atrair cliente: é não perder o que já chegou.",
  features: [
    { text: "Tudo do Brave Scale" },
    { text: "CRM configurado para o fluxo do seu negócio" },
    { text: "Automações de follow-up e nutrição" },
    { text: "IA para qualificação e acompanhamento de leads" },
    { text: "Integração com canais existentes" },
    { text: "Relatório de pipeline e taxa de conversão" },
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
    location: "Passo Fundo/RS",
    segment: "Distribuidora de embalagens",
    action: "Estrutura digital completa + criativos certos para rodar",
    result: "560%",
    resultLabel: "crescimento no faturamento",
    resultSub: "R$25k → R$165k no mesmo mês",
  },
  {
    client: "Jacó Locadora",
    location: "Lagoa Vermelha/RS",
    segment: "Locadora de equipamentos",
    action: "Site refeito + criativos + comunicação alinhada",
    result: "#1",
    resultLabel: "no Google em 24h",
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
    desc: "Personalizada. Com diagnóstico, solução, entregáveis, cronograma e investimento. Prazo de validade: 7 dias.",
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
