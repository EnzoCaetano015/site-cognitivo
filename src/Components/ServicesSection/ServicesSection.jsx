import React from "react";
import styles from "./ServicesSection.module.css";
import { FaBookOpen, FaBolt, FaPuzzlePiece, FaHourglassHalf, FaSortNumericUpAlt, FaCommentDots, FaVolumeUp } from "react-icons/fa";
import { speakText } from "../../utils/speech";
import { serviços } from "../../utils/audio";

const services = [
    {
        title: "Dislexia",
        description: "Transtorno de aprendizagem que afeta a leitura e a escrita, dificultando a interpretação de palavras e textos.",
        icon: <FaBookOpen style={{ color: "#4a90e2" }} />,
        items: ["Fontes sem serifa e espaçamento entre letras e linhas.", "Evite textos justificados e use alinhamento à esquerda ", "Opção de leitura em áudio para conteúdos textuais."],
    },
    {
        title: "Déficit de Atenção e Hiperatividade",
        description: " Dificuldade em manter a atenção, controlar impulsos e lidar com informações muito densas.",
        icon: <FaBolt style={{ color: "#27ae60" }} />,
        items: ["design limpo e organizado, evitando excesso de informações", "Destaque informações importantes com cores e ícones", "Evite animações exageradas que possam distrair o usuário."],
    },
    {
        title: "Autismo",
        description: "Transtorno do neurodesenvolvimento que pode afetar a comunicação, interação social e processamento sensorial.",
        icon: <FaPuzzlePiece style={{ color: "#9b59b6" }} />,
        items: ["Evite sons e animações automáticas", "Forneça layouts previsíveis e opções para personalizar a experiência do usuário.", "Inclua suporte a leitura pictográfica"],
    },
    {
        title: "Alzheimer",
        description: "Doença neurodegenerativa progressiva que causa perda de memória, desorientação e dificuldades cognitivas.",
        icon: <FaHourglassHalf style={{ color: "#f39c12" }} />,
        items: ["Utilize menus e botões grandes e bem visíveis.", "Reforce a navegação com instruções claras e repetição de informações", "modo de contraste alto para melhor legibilidade."],
    },
    {
        title: "Discalculia",
        description: "Dificuldade no entendimento de números e operações matemáticas.",
        icon: <FaSortNumericUpAlt style={{ color: "#e74c3c" }} />,
        items: [" representações visuais como gráficos e diagramas para facilitar a compreensão de dados", "Evite o uso excessivo de números e forneça descrições textuais", "Disponibilize alternativas para cálculos, como explicações passo a passo"],
    },
    {
        title: "Afasia",
        description: "Transtorno de linguagem causado por danos cerebrais, dificultando a comunicação verbal e escrita.",
        icon: <FaCommentDots style={{ color: "#1abc9c" }} />,
        items: ["Use linguagem simples e frases curtas", "Ofereça suporte a ícones e imagens", "Disponibilize a opção de conversão de texto para fala "],
    },
];


const ServicesSection = () => {
    return (
        <section id="services-section" className={styles.services}>
            <div className={styles.header}>
                <span className={styles.tag}>Nossos Serviços</span>
                <h2>Cuidado Especializado para Cada Necessidade <FaVolumeUp size={25} onClick={() => speakText(serviços)}/></h2>
                <p>Desenvolvemos soluções intuitivas para tornar a web mais acessível e inclusiva para todos.</p>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul>
                            {service.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
