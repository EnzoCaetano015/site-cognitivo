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
                    <p> Dedicados a fornecer informações e suporte sobre doenças cognitivas para pacientes, familiares e cuidadores.</p>
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
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Nossos Serviços</a></li>
                        <li><a href="#">Recursos</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                {/* Coluna Doenças */}
                <div className={styles.column}>
                    <h3>Doenças</h3>
                    <ul>
                        <li><a href="#">Alzheimer</a></li>
                        <li><a href="#">Parkinson</a></li>
                        <li><a href="#">Demência</a></li>
                        <li><a href="#">Outras Doenças</a></li>
                    </ul>
                </div>

                {/* Coluna Contato */}
                <div className={styles.column}>
                    <h3>Contato</h3>
                    <p><FaPhone /> (11) 1234-5678</p>
                    <p><FaEnvelope /> contato@exemplo.com</p>
                    <p><FaMapMarkerAlt /> São Paulo, SP</p>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>© 2025 Centro de Doenças Cognitivas. Todos os direitos reservados.</p>
                <div>
                    <a href="#">Política de Privacidade</a> | <a href="#">Termos de Uso</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
