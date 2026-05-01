import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Tese from "@/components/Tese";
import Produtos from "@/components/Produtos";
import Cases from "@/components/Cases";
import Processo from "@/components/Processo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section id="tese">
          <Tese />
        </section>
        <section id="produtos">
          <Produtos />
        </section>
        <section id="cases">
          <Cases />
        </section>
        <section id="processo">
          <Processo />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
