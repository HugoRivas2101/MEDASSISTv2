import React, { useState } from "react";
import "./Chatbot.css";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import VoiceRecognizer from "./assets/VoiceRecognizer"; // Importa el nuevo componente

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    try {
      const response = await api.post("/chatbot/tellme", { message: input });
      const botMessage = { sender: "bot", text: response.data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error al obtener la respuesta del chatbot", error);
    }
    setInput("");
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Por favor, selecciona un archivo");
      return;
    }

    const formData = new FormData();
    formData.append('imagen', selectedFile);

    try {
      const response = await api.post("/chatbot/imagen", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const botMessage = { 
        sender: "bot", 
        text: response.data.diagnostico 
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error al subir la imagen", error);
      const errorMessage = { 
        sender: "bot", 
        text: "Error al procesar la imagen" 
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const handleVoiceResult = (text) => {
    setInput(text);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <main className="chatbot-main">
      <Navbar />
      <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-bubble ${
                msg.sender === "user" ? "user" : "bot"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <chatbot-button onClick={handleSubmit}>Enviar</chatbot-button>
          <VoiceRecognizer
            onResult={handleVoiceResult}
            onStart={() => setIsListening(true)}
            onEnd={() => setIsListening(false)}
            isListening={isListening}
          />
        </div>
      </div>
    </main>
  );
}

export default Chatbot;