import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Manifesto from "@/components/Manifesto";
import Marquee from "@/components/Marquee";
import Tese from "@/components/Tese";
import Produtos from "@/components/Produtos";
import Cases from "@/components/Cases";
import Processo from "@/components/Processo";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Manifesto />
        <section id="tese">
          <Tese />
        </section>
        <Marquee />
        <section id="produtos">
          <Produtos />
        </section>
        <section id="cases">
          <Cases />
        </section>
        <section id="processo">
          <Processo />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
