import React from "react";
import Menu from "../Components/Menu/Menu";
import HeroSection from "../Components/HeroSection/HeroSection";
import Footer from "../Components/Footer/Footer";
import AboutSection from "../Components/AboutSection/AboutSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import ContactSection from "../Components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <Menu />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
