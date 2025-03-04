import React from "react";
import styles from "./AboutSection.module.css";
import { FaBrain, FaUsers, FaClock, FaAward, FaVolumeUp } from "react-icons/fa";
import { speakText } from "../../utils/speech";
import { sobre } from "../../utils/audio";

const AboutSection = () => {

    return (
        <section id="about-section" className={styles.about}>
            <h2>Nossa Missão e Compromisso <FaVolumeUp size={25} onClick={() => speakText(sobre)}/></h2>
            <p className={styles.subtitle}>
                Dedicados a proporcionar um design acessivel, informação e suporte para pessoas afetadas por doenças cognitivas
            </p>

            {/* Cards de Informações */}
            <div className={styles.stats}>
                <div className={styles.card}>
                    <FaBrain className={styles.icon} style={{ color: "#4a90e2" }} />
                    <h3>Design</h3>
                    <p>Desenvolvendo experiências digitais acessíveis</p>
                </div>

                <div className={styles.card}>
                    <FaUsers className={styles.icon} style={{ color: "#27ae60" }} />
                    <h3>Foco</h3>
                    <p>Impacto por soluções inclusivas</p>
                </div>

                <div className={styles.card}>
                    <FaClock className={styles.icon} style={{ color: "#9b59b6" }} />
                    <h3>acessibilidade</h3>
                    <p>suporte para acessibilidade</p>
                </div>

                <div className={styles.card}>
                    <FaAward className={styles.icon} style={{ color: "#f39c12" }} />
                    <h3>Constancia</h3>
                    <p>Inovação e inclusão digital</p>
                </div>
            </div>

            {/* Quem Somos e Nossa Abordagem */}
            <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <h3>Quem Somos</h3>
                    <p>
                        Somos uma equipe multidisciplinar focada na criação de layouts acessíveis para pessoas com doenças cognitivas. Nossa abordagem integrada combina design intuitivo, pesquisa avançada e usabilidade inclusiva.
                    </p>
                    <p>
                        Com mais de uma década de experiência, desenvolvemos metodologias inovadoras para aumentar a acessibilidade na web, sempre priorizando a navegação intuitiva e a inclusão digital.
                    </p>
                    <button className={styles.button}>Conheça Nossa Equipe</button>
                </div>

                <div className={styles.aboutText}>
                    <h3>Nossa Abordagem</h3>
                    <ul>
                        <li><strong>Design Inclusivo:</strong> Criamos interfaces intuitivas e acessíveis, considerando as dificuldades cognitivas e sensoriais dos usuários.</li>
                        <li><strong>Navegação Simplificada:</strong> Desenvolvemos layouts que facilitam a compreensão e interação, reduzindo barreiras digitais.</li>
                        <li><strong>Suporte Contínuo:</strong> Oferecemos orientações e ajustes constantes para garantir uma experiência acessível e eficaz para todos.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
