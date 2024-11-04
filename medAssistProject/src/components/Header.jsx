// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Asegúrate de crear estilos específicos para el header

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        MyLogo
      </Link>
      <nav>
        <Link to="/login">Inicio</Link>
        <Link to="/login">Chat</Link>
        <Link to="/login">Calendario</Link>
        <Link to="/login">Historial Medico</Link>
      </nav>
      <div className="header-user_esquina">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </header>
  );
}

export default Header;
