import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Entendendo Doenças Cognitivas</h1>
        <p>
          Informação, apoio e recursos para pacientes, familiares e cuidadores
          que enfrentam desafios cognitivos.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Saiba Mais</button>
          <button className={styles.secondaryButton}>Buscar Ajuda</button>
        </div>
        <div className={styles.labels}>
          <span className={styles.green}>🟢 Informação Confiável</span>
          <span className={styles.blue}>🔵 Suporte Especializado</span>
          <span className={styles.purple}>🟣 Comunidade de Apoio</span>
        </div>
      </div>
      <div className={styles.imagePlaceholder}></div>
    </section>
  );
};

export default HeroSection;
