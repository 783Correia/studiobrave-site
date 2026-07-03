import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Brave — Estrutura digital para empresas B2B aparecerem no Google e no ChatGPT",
  description:
    "A Studio Brave constrói a fundação digital que faz seu negócio aparecer no Google, no Maps e no ChatGPT — e converter quem já chegou decidido. Especialistas em SEO, GEO e estrutura digital para empresas B2B no Brasil.",
  keywords: [
    "agência estrutura digital B2B",
    "SEO para empresas B2B Brasil",
    "GEO generative engine optimization",
    "aparecer no ChatGPT",
    "site Next.js para empresas",
    "Google Meu Negócio",
    "schema markup",
    "agência digital B2B Brasil",
  ],
  openGraph: {
    title: "Studio Brave — Estrutura digital B2B",
    description: "Seu negócio aparecendo no Google, no Maps e no ChatGPT. Cases reais: Jaco Locadora 1º no Google em 24h, Sales Embalagens R$25k → R$165k/mês.",
    url: "https://studiobrave.com.br",
    siteName: "Studio Brave",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://studiobrave.com.br",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://studiobrave.com.br/#organization",
      "name": "Studio Brave",
      "url": "https://studiobrave.com.br",
      "logo": "https://studiobrave.com.br/logo.png",
      "description": "Agência especializada em estrutura digital para empresas B2B no Brasil. Construímos sites em Next.js, otimizamos Google Meu Negócio, implementamos schema markup e GEO para que seu negócio apareça no Google, no Maps e no ChatGPT.",
      "foundingDate": "2022",
      "areaServed": "BR",
      "serviceArea": {
        "@type": "Country",
        "name": "Brasil"
      },
      "knowsAbout": [
        "SEO técnico",
        "GEO - Generative Engine Optimization",
        "Schema markup",
        "Google Meu Negócio",
        "Next.js",
        "Estrutura digital B2B",
        "Google Ads",
        "Landing pages de conversão"
      ],
      "sameAs": [
        "https://www.instagram.com/studiobrave.com.br/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": "Portuguese",
        "url": "https://wa.me/5554996865236"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://studiobrave.com.br/#service",
      "name": "Studio Brave",
      "provider": { "@id": "https://studiobrave.com.br/#organization" },
      "serviceType": "Estrutura Digital e SEO para empresas B2B",
      "description": "Construímos a fundação digital completa: site rápido em Next.js, Google Meu Negócio otimizado, schema markup para indexação por IAs, SEO técnico e GEO para aparecer no ChatGPT, Perplexity e Google.",
      "areaServed": "BR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soluções Studio Brave",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brave Foundation",
              "description": "Site em Next.js + Google Meu Negócio completo + SEO técnico + schema markup. No ar em 10 dias úteis."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brave Presence",
              "description": "Recorrência mensal: conteúdo SEO, GMB atualizado, LP trimestral e relatório com número rastreável."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brave System",
              "description": "Infraestrutura completa com CRM, automações e IA integrada para empresas com volume de lead."
            }
          }
        ]
      }
    },
    {
      "@type": "ItemList",
      "name": "Cases de sucesso — Studio Brave",
      "description": "Resultados reais entregues pela Studio Brave para empresas B2B no Brasil",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "Jaco Locadora — 1º lugar no Google em 24 horas",
            "description": "Empresa de locação de plataformas elevatórias em Palhoça/SC. Após estrutura digital completa (site + SEO + GMB), alcançou 1º lugar no Google em menos de 24 horas, taxa de conversão de 12,68% e 102 ações no Google Meu Negócio por mês.",
            "url": "https://www.jacolocadora.com.br/"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "name": "Sales Embalagens — de R$25k para R$165k de faturamento mensal",
            "description": "Distribuidora de embalagens em Fortaleza/CE. Com estrutura digital completa e criativos alinhados, cresceu 560% no faturamento mensal — de R$25k para R$165k no mesmo mês.",
            "url": "https://salesemb.com.br/"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "name": "Torno Metal — 70 leads por mês a R$17,50 por lead qualificado",
            "description": "Indústria de peças agrícolas em Passo Fundo/RS. E-commerce em Next.js com SEO e tráfego estruturado gerando 70 leads por mês, a R$17,50 por lead qualificado.",
            "url": "https://tornometalevertonlopes.com.br/"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Article",
            "name": "TecnoPlay — R$16k faturados e R$5k de renda passiva mensal",
            "description": "Plataforma SaaS com estrutura digital completa gerando R$16k no lançamento e R$5k de renda recorrente mensal.",
            "url": "https://tecnoplay.app.br/"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é estrutura digital para empresas B2B?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estrutura digital é a fundação que faz seu negócio aparecer quando o cliente pesquisa no Google, no Maps ou pergunta pro ChatGPT. Inclui site rápido e tecnicamente correto, Google Meu Negócio completo, schema markup para indexação por IAs e SEO técnico. É o que separa negócios que aparecem organicamente dos que dependem só de anúncio."
          }
        },
        {
          "@type": "Question",
          "name": "O que é GEO — Generative Engine Optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GEO é a otimização para aparecer em respostas de IAs como ChatGPT, Perplexity e Gemini. Envolve schema markup correto, informações estruturadas, GMB completo e conteúdo factual. Nosso cliente Jaco Locadora é recomendado pelo ChatGPT quando alguém pergunta sobre aluguel de plataforma elevatória em Palhoça SC."
          }
        },
        {
          "@type": "Question",
          "name": "Qual a diferença entre Studio Brave e uma agência de marketing digital comum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agências comuns entregam post, anúncio e relatório de alcance. A Studio Brave entrega estrutura: site técnico que ranqueia, GMB que gera ligação, schema markup que faz a IA recomendar seu negócio. Trabalhamos com número real — conversão, ligação, CPL — não com métrica de vaidade."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
