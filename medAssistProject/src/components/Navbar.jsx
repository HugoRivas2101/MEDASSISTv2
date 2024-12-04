import React, { useState, useEffect } from 'react';
import MedAssistlogo from '../assets/MedAssistLogo.png';
import './Navbar.css';
import MedAssistAvatar from '../assets/MedAssistAvatar.png';
import MAArrow from '../assets/MAArrow.png';
import axios from 'axios'; // Importa Axios
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
// 
const [userName, setUserName] = useState(''); // Estado para almacenar el nombre del usuario
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Realizar la solicitud HTTP al backend usando Axios
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/info', {
          withCredentials: true, // Incluye cookies para autenticación
        });
        setUserName(response.data.nombres); // Guardar el nombre del usuario en el estado
        setLoading(false); // Desactivar el indicador de carga
      } catch (error) {
        setError(error.message);
        setLoading(false); // Desactivar el indicador de carga
      }
    };

    fetchUserInfo();
  }, []); // El efecto se ejecuta solo al montar el componente

  // Mostrar un indicador de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Mostrar un mensaje de error si ocurre un problema
  if (error) {
    return <div>Error: {error}</div>;
  }
  


// 




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
        <li><a href="#Mi Historial médico" onClick={() => window.location.href = '/historialmedico'}>Mi Historial médico</a></li>
        <li><a href="#MedAI" onClick={() => window.location.href = '/chatbot'}>MedAI</a></li>
      </ul>
      <div className="user-info">
        <button className="user-button" onClick={toggleDropdown}>
          <img src={MedAssistAvatar} className="user-icon" style={{ width: '3vw' }} alt="LogoAvatar" />
          <span className="user-name">Hola, {userName.split(' ')[0]}</span>
          <img src={MAArrow} className="user-icon" style={{ width: '18px' }} alt="LogoAvatar" />
        </button>
        {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul className='dropdown-list'>
            <li onClick={() => console.log("Account clicked")}>Account</li>
            <li onClick={() => console.log("Settings clicked")}>Settings</li>
            <li onClick={() => window.location.href = '/'}>Log Out</li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;