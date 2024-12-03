// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"; // Ruta al componente Login
import Chatbot from "./pages/chatbot/Chatbot";
import HomeDoctor from "./pages/homeDoctor/HomeDoctor";
import Calendar from "./pages/Calendar/Calendar";
import HomePaciente from "./pages/HomePaciente/HomePaciente";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/Landing";
import Helpcenter from "./pages/Helpcenter/Helpcenter";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/home" element={<HomeDoctor/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/homePaciente" element={<HomePaciente/>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/helpcenter" element={<Helpcenter/>}/>
      </Routes>
    </Router>
  );
}

export default App;
