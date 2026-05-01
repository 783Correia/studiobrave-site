export const WHATSAPP_URL =
  "https://wa.me/5554XXXXXXXX?text=Quero+saber+mais+sobre+a+Studio+Brave";

export const NAV_LINKS = [
  { label: "Tese",     href: "#tese"     },
  { label: "Produtos", href: "#produtos"  },
  { label: "Cases",    href: "#cases"     },
  { label: "Processo", href: "#processo"  },
];

export const HERO_STATS = [
  { num: "R$72k",      label: "Gerado em entrada" },
  { num: "R$26,5k/mês", label: "Recorrente ativo" },
  { num: "3 anos",     label: "de mercado"         },
  { num: "5+",         label: "clientes ativos com resultado" },
];

export const PILLARS = [
  {
    num: "01",
    title: "Não vendemos volume",
    desc: '"4 posts/semana" não é entregável. É objetivo de período.',
  },
  {
    num: "02",
    title: "Coerência entre canais",
    desc: "Não adianta newsletter no site e dancinha no Instagram.",
  },
  {
    num: "03",
    title: "Estratégia antes de execução",
    desc: "Entendemos o humano que decide antes de criar qualquer coisa.",
  },
];

export type Feature = {
  text: string;
  included: boolean;
};

export type Product = {
  vagas: string;
  name: string;
  priceEntry: string;
  priceMonthly: string;
  featured: boolean;
  badge: string | null;
  features: Feature[];
};

export const PRODUCTS: Product[] = [
  {
    vagas: "5 vagas",
    name: "Brave Start",
    priceEntry: "R$ 5.000",
    priceMonthly: "entrada única",
    featured: false,
    badge: null,
    features: [
      { text: "Site completo com posicionamento visual", included: true },
      { text: "Copy de apresentação",                    included: true },
      { text: "Deploy + domínio configurado",            included: true },
      { text: "SEO técnico básico",                      included: true },
      { text: "Prazo: 7–10 dias úteis",                  included: true },
      { text: "Gestão Instagram — não incluso",          included: false },
      { text: "Tráfego pago — não incluso",              included: false },
    ],
  },
  {
    vagas: "3 vagas",
    name: "Start + Scale",
    priceEntry: "R$ 5.000",
    priceMonthly: "+ R$ 3.500/mês",
    featured: false,
    badge: null,
    features: [
      { text: "Tudo do Brave Start",            included: true },
      { text: "Gestão do Instagram",            included: true },
      { text: "Calendário editorial mensal",    included: true },
      { text: "Criativos por objetivo",         included: true },
      { text: "Relatório mensal",               included: true },
      { text: "Reunião mensal 30 min",          included: true },
      { text: "Tráfego pago — não incluso",     included: false },
    ],
  },
  {
    vagas: "2 vagas",
    name: "Pacote Completo",
    priceEntry: "R$ 16.000",
    priceMonthly: "+ R$ 8.000/mês",
    featured: true,
    badge: "Recomendado",
    features: [
      { text: "Tudo do Start + Scale",          included: true },
      { text: "Landing page de conversão",      included: true },
      { text: "Tráfego pago gerenciado",        included: true },
      { text: "Tracking GA4 + Meta Pixel",      included: true },
      { text: "CRM + automação configurado",    included: true },
      { text: "Relatório mensal com CPL real",  included: true },
      { text: "Verba de mídia separada",        included: true },
    ],
  },
];

export const CASES = [
  {
    client: "Torno Metal",
    name: "Everton Lopes",
    location: "Passo Fundo/RS",
    segment: "Indústria de peças agrícolas",
    action: "Meta Ads + site + criativos alinhados por público",
    result: "R$ 17,50",
    resultLabel: "custo por lead qualificado",
  },
  {
    client: "Sales Embalagens",
    name: "Sales Embalagens",
    location: "Passo Fundo/RS",
    segment: "Distribuidora de embalagens",
    action: "Estrutura digital completa + criativos certos para rodar",
    result: "560%",
    resultLabel: "crescimento no faturamento",
    resultSub: "R$25k → R$165k no mesmo mês",
  },
  {
    client: "Jacó Locadora",
    name: "Jacó Locadora",
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
    desc: "Analisamos o que você já tem. Respondemos as perguntas certas antes de propor qualquer coisa.",
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
    desc: "Calendário editorial por objetivo de período. Relatório mensal com CPL real. Reunião mensal de 30 minutos. Sem surpresa.",
  },
];
