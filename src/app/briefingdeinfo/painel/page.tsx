import type { Metadata } from "next";
import BriefingPainel from "@/components/BriefingPainel";

export const metadata: Metadata = {
  title: "Painel de Briefings — Studio Brave",
  robots: { index: false, follow: false },
};

export default function PainelPage() {
  return <BriefingPainel />;
}
