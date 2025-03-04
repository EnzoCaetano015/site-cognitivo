import styles from "./Menu.module.css";
import { speakText } from "../../utils/speech";
import { contato, home, serviços, sobre } from "../../utils/audio";

export default function Menu() {
  // Lista das seções e seus textos
  const sections = {
    "hero": { text: home, id: "hero-section" },
    "about": { text: sobre , id: "about-section" },
    "services": { text: serviços , id: "services-section" },
    "contact": { text: contato, id: "contact-section" }
  };

  const handleReadSection = (event) => {
    const selectedSection = event.target.value;
    if (sections[selectedSection]) {
      // Rolar até a seção correspondente
      document.getElementById(sections[selectedSection].id)?.scrollIntoView({ behavior: "smooth" });

      // Falar o texto
      speakText(sections[selectedSection].text);
    }
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}><a href="#hero-section">Introdução</a></li>
        <li className={styles.menuItem}><a href="#about-section">Sobre Nós</a></li>
        <li className={styles.menuItem}><a href="#services-section">Serviços</a></li>
        <li className={styles.menuItem}><a href="#contact-section">Contato</a></li>
      </ul>

      {/* Select para leitura das seções */}
      <select className={styles.select} onChange={handleReadSection}>
        <option value="">🔊 Ouvir uma Seção</option>
        <option value="hero">Introdução</option>
        <option value="about">Sobre Nós</option>
        <option value="services">Serviços</option>
        <option value="contact">Contato</option>
      </select>
    </nav>
  );
}
