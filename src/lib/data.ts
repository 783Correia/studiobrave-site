export const WHATSAPP_URL =
  "https://wa.me/5554996865236?text=Oi,+vi+o+site+da+Studio+Brave+e+quero+entender+se+faz+sentido+pro+meu+negócio";

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
    title: "Lead qualificado não pergunta preço",
    desc: "Anúncio direto no WhatsApp traz curioso que pergunta preço e vai embora. Anúncio com LP e contexto traz comprador que já decidiu. A Brave constrói o caminho — não só o criativo.",
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
    tagline: "Site no ar em 10 dias, GMB configurado, estrutura indexável por IA. O cliente te acha antes de perguntar preço.",
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
    tagline: "Conteúdo que o Google ranqueia e a IA cita, com número rastreável no 30° dia.",
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
  tagline: "Para quem já tem volume de lead e vê dinheiro escapar antes do fechamento.",
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

export type PortfolioCase = {
  name: string;
  segmento: string;
  resultado: string;
  tag: string;
  image: string;
  url: string;
};

export const PORTFOLIO: PortfolioCase[] = [
  {
    name: "Jaco Locadora",
    segmento: "Industrial · Plataformas elevatórias",
    resultado: "+68% conversão · 1º no Google em 24h · 102 ações GMB/mês",
    tag: "Web + SEO + GMB",
    image: "/projects/jaco-locadora.png",
    url: "https://www.jacolocadora.com.br/",
  },
  {
    name: "Sales Embalagens",
    segmento: "B2B · Embalagens",
    resultado: "R$35k → R$165k de faturamento mensal",
    tag: "Web + Tráfego",
    image: "/projects/sales-emb.png",
    url: "https://salesemb.com.br/",
  },
  {
    name: "Torno Metal Everton Lopes",
    segmento: "Agro · Indústria · B2B",
    resultado: "70 leads qualificados por mês a R$8,34 cada",
    tag: "E-commerce + SEO",
    image: "/projects/torno-metal.png",
    url: "https://tornometalevertonlopes.com.br/",
  },
  {
    name: "TecnoPlay",
    segmento: "SaaS · Produto digital",
    resultado: "R$16k faturados · R$5k de renda mensal passiva",
    tag: "SaaS",
    image: "/projects/tecnoplay.png",
    url: "https://tecnoplay.app.br/",
  },
  {
    name: "Dr. Mateus Pellizzaro",
    segmento: "Saúde · Oftalmologia",
    resultado: "5,0 no Google · Design premium médico · Autoridade digital para cirurgião especialista",
    tag: "Web Design",
    image: "/projects/drmateuspellizzaro.png",
    url: "https://drmateuspellizzaro.vercel.app/",
  },
  {
    name: "Agilizza Soluções",
    segmento: "B2B · Serviços técnicos",
    resultado: "Estrutura digital completa com site, GMB e SEO para empresa de soluções técnicas",
    tag: "Web Design",
    image: "/projects/agilizza.png",
    url: "https://agilizzasolucoes.com.br/",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Conversa de 15 minutos",
    desc: "Entendemos se faz sentido para os dois lados. Não é reunião de vendas — é filtro. A Brave não aceita todo cliente. Só quem o sistema faz sentido de verdade.",
  },
  {
    num: "02",
    title: "Diagnóstico do que existe",
    desc: "Analisamos site, GMB, rastreamento, posicionamento e processo de vendas. Mapeamos exatamente onde o lead está escapando e o que precisa mudar primeiro.",
  },
  {
    num: "03",
    title: "Proposta com número",
    desc: "Proposta personalizada com entregáveis, cronograma e investimento. Sem pacote genérico. Prazo de validade: 7 dias. Você decide com tudo na mesa.",
  },
  {
    num: "04",
    title: "Contrato e início",
    desc: "Contrato assinado, entrada paga, acessos coletados. A execução começa no próximo dia útil. DNA do negócio montado — toda entrega futura usa essa memória.",
  },
  {
    num: "05",
    title: "No ar em 10 dias",
    desc: "Site no ar, GMB configurado, tracking rodando, funil ativo. Relatório no 30° dia com dado real: conversão, ligação, CPL. Reunião de 30 minutos com número na mão.",
  },
];
