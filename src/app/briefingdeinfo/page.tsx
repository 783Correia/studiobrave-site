import type { Metadata } from "next";
import BriefingQuiz from "@/components/BriefingQuiz";

export const metadata: Metadata = {
  title: "Briefing do Projeto — Studio Brave",
  description: "Responda o briefing interativo do seu projeto de estrutura digital.",
  robots: { index: false, follow: false },
};

export default function BriefingPage() {
  return <BriefingQuiz />;
}
