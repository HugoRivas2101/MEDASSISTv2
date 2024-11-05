import React, { useState } from 'react';
import MedAssistlogo from '../assets/MedAssistLogo.png';
import './Navbar.css';
import MedAssistAvatar from '../assets/MedAssistAvatar.png';
import MAArrow from '../assets/MAArrow.png';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para desplazamiento suave
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={MedAssistlogo} style={{ width: '70px' }} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
      <img src={MedAssistlogo} style={{ width: '70px' }} alt="Logo" />
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')}>Inicio</a></li>
        <li><a href="#Chat" onClick={(e) => scrollToSection(e, '#Chat')}>Chat</a></li>
        <li><a href="#Mi-Agenda" onClick={(e) => scrollToSection(e, '#Mi-Agenda')}>Mi Agenda</a></li>
        <li><a href="#Pacientes" onClick={(e) => scrollToSection(e, '#Pacientes')}>Pacientes</a></li>
        <li><a href="#MedAI" onClick={(e) => scrollToSection(e, '#MedAI')}>MedAI</a></li>
      </ul>
      <div className="user-info">
        <button className="user-button">
          <img src={MedAssistAvatar} className="user-icon" style={{ width: '50px' }} alt="LogoAvatar" />
          <span className="user-name">Hola, David</span>
          <img src={MAArrow} className="user-icon" style={{ width: '18px' }} alt="LogoAvatar" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;