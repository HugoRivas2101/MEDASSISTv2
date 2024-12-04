// frontend/src/components/Chatbot.js

import React, { useState } from "react";
import "./Chatbot.css";
import api from '../../services/api';  // Importa la configuración de Axios
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

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

  return (
    
    <main className="chatbot-main">
      <Navbar/> 
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-bubble ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input" >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
    </main>
  );
}

export default Chatbot;

