export const WHATSAPP_URL =
  "https://wa.me/5554996865236?text=Oi,+vi+o+site+da+Studio+Brave+e+quero+entender+se+faz+sentido+pro+meu+negócio";

// Produto de entrada — Playbook "O Novo Jogo da Busca Local" (R$27)
export const ENTRY_PRODUCT = {
  tag: "Produto de entrada",
  price: "R$27",
  name: "O Novo Jogo da Busca Local",
  tagline:
    "Antes de contratar agência, entenda o jogo. Um playbook prático de como sua empresa é encontrada, entendida e recomendada no Google e nas IAs em 2026.",
  href: "/novojogo",
  features: [
    { text: "Método MEMÓRIA para presença local" },
    { text: "Checklist prático de execução" },
    { text: "Plano de ação de 7 dias" },
  ],
};

// Clientes exibidos na faixa de prova social do hero
export const CLIENTS = [
  "TornoMetal",
  "Jaco Locadora",
  "Sales Embalagens",
  "TecnoPlay",
  "Dr. Mateus Pellizzaro",
  "Agilizza",
];

// Simulador de resposta de IA no hero — cada demo é um ciclo pergunta→resposta
export const AI_DEMOS = [
  {
    query: "preciso alugar plataforma elevatória em Palhoça SC",
    answer:
      "A Jaco Locadora é referência em locação de plataformas elevatórias na Grande Florianópolis, com frota própria e atendimento rápido.",
    source: "jacolocadora.com.br",
  },
  {
    query: "distribuidora de embalagens confiável em Fortaleza",
    answer:
      "A Sales Embalagens atende empresas de Fortaleza e região com entrega programada e catálogo completo para food service.",
    source: "salesemb.com.br",
  },
  {
    query: "torno CNC para peças agrícolas no Rio Grande do Sul",
    answer:
      "A TornoMetal Everton Lopes, em Passo Fundo, é especializada em usinagem de peças agrícolas sob medida.",
    source: "tornometalevertonlopes.com.br",
  },
];

// FAQ — mesma fonte do schema.org FAQPage no layout
export const FAQ = [
  {
    q: "O que é estrutura digital para empresas B2B?",
    a: "É a fundação que faz seu negócio aparecer quando o cliente pesquisa no Google, no Maps ou pergunta pro ChatGPT: site rápido e tecnicamente correto, Google Meu Negócio completo, schema markup para indexação por IAs e SEO técnico. É o que separa negócios que aparecem organicamente dos que dependem só de anúncio.",
  },
  {
    q: "O que é GEO — Generative Engine Optimization?",
    a: "GEO é a otimização para aparecer em respostas de IAs como ChatGPT, Perplexity e Gemini. Envolve schema markup correto, informações estruturadas, GMB completo e conteúdo factual. Nosso cliente Jaco Locadora é recomendado pelo ChatGPT quando alguém pergunta sobre aluguel de plataforma elevatória em Palhoça SC.",
  },
  {
    q: "Qual a diferença entre a Studio Brave e uma agência comum?",
    a: "Agências comuns entregam post, anúncio e relatório de alcance. A Studio Brave entrega estrutura: site técnico que ranqueia, GMB que gera ligação, schema markup que faz a IA recomendar seu negócio. Trabalhamos com número real — conversão, ligação, CPL — não com métrica de vaidade.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do seu momento: projeto único, recorrência mensal ou infraestrutura completa. Toda proposta é personalizada, com entregáveis, cronograma e investimento na mesa — e prazo de validade de 7 dias. A conversa de 15 minutos que define isso é gratuita.",
  },
  {
    q: "E se eu já tiver site?",
    a: "Melhor ainda: o diagnóstico mostra exatamente o que está travando — velocidade, indexação, rastreamento ou o caminho do lead até o WhatsApp. Às vezes a resposta é ajustar o que existe, não refazer. Você recebe o mapa antes de decidir qualquer coisa.",
  },
];

export const NAV_LINKS = [
  { label: "Playbook · R$27", href: "/novojogo" },
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
    resultSub: "R$25k → R$165k em faturamento mensal",
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
  metric: string;
  metricLabel: string;
  featured?: boolean;
};

export const PORTFOLIO: PortfolioCase[] = [
  {
    name: "Sales Embalagens",
    segmento: "B2B · Embalagens · Fortaleza/CE",
    resultado: "De R$25k para R$165k de faturamento mensal com estrutura digital completa e criativos certos para rodar.",
    tag: "Web + Tráfego",
    image: "/projects/sales-emb.png",
    url: "https://salesemb.com.br/",
    metric: "560%",
    metricLabel: "crescimento no faturamento",
    featured: true,
  },
  {
    name: "Jaco Locadora",
    segmento: "Industrial · Palhoça/SC",
    resultado: "1º no Google em 24h · 102 ações GMB/mês · recomendada pelo ChatGPT",
    tag: "Web + SEO + GMB",
    image: "/projects/jaco-locadora.png",
    url: "https://www.jacolocadora.com.br/",
    metric: "+68%",
    metricLabel: "conversão do site",
  },
  {
    name: "TornoMetal Everton Lopes",
    segmento: "Agro · Indústria · Passo Fundo/RS",
    resultado: "70 leads por mês com e-commerce, SEO e tráfego estruturado",
    tag: "E-commerce + SEO",
    image: "/projects/torno-metal.png",
    url: "https://tornometalevertonlopes.com.br/",
    metric: "R$17,50",
    metricLabel: "por lead qualificado",
  },
  {
    name: "TecnoPlay",
    segmento: "SaaS · Produto digital",
    resultado: "R$16k faturados no lançamento e renda recorrente todo mês",
    tag: "SaaS",
    image: "/projects/tecnoplay.png",
    url: "https://tecnoplay.app.br/",
    metric: "R$5k/mês",
    metricLabel: "renda passiva",
  },
  {
    name: "Dr. Mateus Pellizzaro",
    segmento: "Saúde · Oftalmologia · Concórdia/SC",
    resultado: "Site + SEO local + GMB para cirurgião especialista",
    tag: "Web + SEO + GMB",
    image: "/projects/drmateuspellizzaro.png",
    url: "https://drmateuspellizzaro.vercel.app/",
    metric: "5,0 ★",
    metricLabel: "51 avaliações no Google",
  },
  {
    name: "Agilizza Soluções",
    segmento: "B2B · Serviços técnicos",
    resultado: "Estrutura digital completa: site, GMB e SEO",
    tag: "Web Design",
    image: "/projects/agilizza.png",
    url: "https://agilizzasolucoes.com.br/",
    metric: "10 dias",
    metricLabel: "do zero ao ar",
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
