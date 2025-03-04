import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Coluna Sobre Nós */}
                <div className={styles.column}>
                    <h3>Sobre Nós</h3>
                    <p>Dedicados a fornecer layouts e acessibilidade para pessoas com doenças cognitivas na internet.</p>
                    <div className={styles.socialIcons}>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>

                {/* Coluna Links Rápidos */}
                <div className={styles.column}>
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="#hero-section">Introdução</a></li>
                        <li><a href="#about-section">Sobre Nós</a></li>
                        <li><a href="#services-section">Serviços</a></li>
                        <li><a href="#contact-section">Contato</a></li>
                    </ul>
                </div>

                {/* Coluna Doenças */}
                <div className={styles.column}>
                    <h3>Doenças</h3>
                    <ul>
                        <li><a href="#services-section">Dislexia</a></li>
                        <li><a href="#services-section">Déficit de Atenção e Hiperatividade</a></li>
                        <li><a href="#services-section">Autismo</a></li>
                        <li><a href="#services-section">Alzheimer</a></li>
                        <li><a href="#services-section">Discalculia</a></li>
                        <li><a href="#services-section">Afasia</a></li>
                    </ul>
                </div>

                {/* Coluna Contato */}
                <div className={styles.column}>
                    <h3>Contato</h3>
                    <p><FaPhone /> (11) 1234-5678</p>
                    <p><FaEnvelope /> trabalhotcc489@gmail.com</p>
                    <p><FaMapMarkerAlt /> São Paulo, SP</p>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>© 2025 CogniWeb. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
