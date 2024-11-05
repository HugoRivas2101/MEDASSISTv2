// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"; // Ruta al componente Login
import Chatbot from "./pages/chatbot/Chatbot";
import HomeDoctor from "./pages/home/HomeDoctor";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/home" element={<HomeDoctor/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
