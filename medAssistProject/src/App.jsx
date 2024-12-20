// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"; // Ruta al componente Login
import Chatbot from "./pages/chatbot/Chatbot";
import HomeDoctor from "./pages/homeDoctor/HomeDoctor";
import Calendar from "./pages/Calendar/Calendar";
import Historialmedico from "./pages/Historial/Historialmedico";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/Landing";
import Register from "./pages/register/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/home" element={<HomeDoctor/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/historialmedico" element={<Historialmedico/>}/>
        {/* <Route path="/landing" element={<LandingPage/>}/> */}
        
      </Routes>
    </Router>
  );
}

export default App;
