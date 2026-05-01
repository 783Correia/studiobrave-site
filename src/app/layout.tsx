import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
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
  title: "Studio Brave — Aceleradores de Negócios",
  description:
    "Estrutura digital completa para empresários que já têm resultado — mas não parecem ter. Sites, tráfego, conteúdo e automação integrados em uma estratégia única.",
  openGraph: {
    title: "Studio Brave",
    description: "Não somos agência. Somos motores e pilotos.",
    url: "https://studiobrave.com.br",
    siteName: "Studio Brave",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
