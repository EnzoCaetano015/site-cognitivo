export const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "pt-BR"; // Define o idioma
      speech.rate = 1; // Velocidade normal
      speech.pitch = 1; // Tom da voz
      window.speechSynthesis.speak(speech);
    } else {
      alert("Seu navegador não suporta leitura de texto.");
    }
  };