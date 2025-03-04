import React from "react";
import styles from "./HeroSection.module.css";
import { speakText } from "../../utils/speech";
import { FaVolumeUp } from "react-icons/fa";
import { home } from "../../utils/audio";

function link(link = "") {
  window.open(link, "_blank")
}

const HeroSection = () => {

  

  return (
    <section id="hero-section" className={styles.hero}>
      <div className={styles.content}>
        <h1>Design Acessível para Todos</h1>
        <p>
          Criando experiências digitais intuitivas, claras e acessíveis para pessoas com desafios cognitivos.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Saiba Mais</button>
          <button className={styles.secondaryButton} onClick={() => link("https://www.instagram.com/clinica_criar?igsh=MWwxMW41cGwxNXg2dw==")}>Buscar Ajuda</button>
          <FaVolumeUp size={35} onClick={() => speakText(home)}/>
        </div>
        <div className={styles.labels}>
          <span className={styles.green}>🟢 Desenvolvimento Confiável</span>
          <span className={styles.blue}>🔵 Trabalho Especializado</span>
          <span className={styles.purple}>🟣 Layouts de Apoio</span>
        </div>
      </div>
      <div className={styles.imagePlaceholder}></div>
    </section>
  );
};

export default HeroSection;
