import React from "react";
import Menu from "../Components/Menu/Menu";
import Section from "../Components/Section/Section";
import HeroSection from "../Components/HeroSection/HeroSection";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Menu />
      <HeroSection />

      <Section
        title="Nossos Serviços"
        content="Oferecemos soluções incríveis para melhorar sua experiência."
        bgColor="#2ecc71"
      >
        <div>
          <ul>
            <li>Consultoria</li>
            <li>Desenvolvimento Web</li>
            <li>Marketing Digital</li>
          </ul>
        </div>
      </Section>
      <Section
        title="Depoimentos"
        content="Confira o que nossos clientes dizem sobre nós!"
        bgColor="#e74c3c"
      >
        <div>
          ola
        </div>
      </Section>
      <Section
        title="Contato"
        content="Entre em contato conosco para saber mais."
        bgColor="#f1c40f"
      >
        <div>
          ola
        </div>
      </Section>
      <Footer/>
    </>
  );
}
