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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
        <img src={MedAssistlogo} style={{ width: '3vw' }} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
      <img src={MedAssistlogo} style={{ width: '1vw' }} alt="Logo" />
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#inicio" onClick={() => window.location.href = '/home'}>Inicio</a></li>
        <li><a href="#Chat" onClick={() => window.location.href = '/chatbot'}>Chat</a></li>
        <li><a href="#Mi-Agenda" onClick={() => window.location.href = '/calendar'}>Mi Agenda</a></li>
        <li><a href="#Pacientes" onClick={() => window.location.href = '/homePaciente'}>Pacientes</a></li>
        <li><a href="#MedAI" onClick={() => window.location.href = '/chatbot'}>MedAI</a></li>
      </ul>
      <div className="user-info">
        <button className="user-button" onClick={toggleDropdown}>
          <img src={MedAssistAvatar} className="user-icon" style={{ width: '3vw' }} alt="LogoAvatar" />
          <span className="user-name">Hola, David</span>
          <img src={MAArrow} className="user-icon" style={{ width: '18px' }} alt="LogoAvatar" />
        </button>
        {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul className='dropdown-list'>
            <li onClick={() => console.log("Account clicked")}>Account</li>
            <li onClick={() => console.log("Settings clicked")}>Settings</li>
            <li onClick={() => console.log("Log Out clicked")}>Log Out</li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;