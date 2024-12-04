import React from "react";

function VoiceRecognizer({ onResult, onStart, onEnd, isListening }) {
  const startListening = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert("Tu navegador no soporta reconocimiento de voz.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.interimResults = false;

    recognition.onstart = () => {
      if (onStart) onStart();
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      if (onResult) onResult(spokenText);
    };

    recognition.onerror = (event) => {
      console.error("Error en el reconocimiento de voz:", event.error);
      if (onEnd) onEnd();
    };

    recognition.onend = () => {
      if (onEnd) onEnd();
    };

    recognition.start();
  };

  return (
    <button
      className={`voice-button ${isListening ? "listening" : ""}`}
      onClick={startListening}
    >
      🎤 {isListening ? "Escuchando..." : "Hablar"}
    </button>
  );
}

export default VoiceRecognizer;
