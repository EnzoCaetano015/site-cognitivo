import React from "react";
import styles from "./ContactSection.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaVolumeUp } from "react-icons/fa";
import { speakText } from "../../utils/speech";
import { contato } from "../../utils/audio";


const ContactSection = () => {
    return (
        <section id="contact-section" className={styles.contact}>
            <div className={styles.header}>
                <span className={styles.tag}>Entre em Contato</span>
                <h2>Estamos Aqui para Ajudar <FaVolumeUp size={25} onClick={() => speakText(contato)} />
                </h2>
                <p>Tem dúvidas ou precisa de suporte? Fale conosco.</p>
            </div>

            <div className={styles.container}>
                {/* Informações de Contato */}


                {/* Formulário de Contato */}
                <div className={styles.formCard}>
                    <h3>Envie uma Mensagem</h3>
                    <form>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Seu nome completo" required />
                            <input type="email" placeholder="seu.email@exemplo.com" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="tel" placeholder="(00) 00000-0000" required />
                            <select required>
                                <option>Selecione o assunto</option>
                                <option>Layouts</option>
                                <option>Informações Gerais</option>
                                <option>Feedback</option>
                            </select>
                        </div>
                        <textarea placeholder="Digite sua mensagem aqui..." rows="4" required></textarea>
                        <button type="submit">
                            <FaPaperPlane /> Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
