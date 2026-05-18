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
  title: "Studio Brave — Presença digital que aparece e converte em 2026",
  description:
    "A Studio Brave constrói a fundação digital que faz seu negócio aparecer no Google, no Maps e no ChatGPT — e converter quem já chegou decidido.",
  openGraph: {
    title: "Studio Brave",
    description: "Presença digital que aparece e converte — no Google, no Maps, no ChatGPT.",
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
