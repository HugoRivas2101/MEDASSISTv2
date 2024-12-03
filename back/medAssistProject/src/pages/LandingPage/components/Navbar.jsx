import React from 'react';
import './Navbarlanding.css';
import MedAssistlogo from '../../../assets/MedAssistLogo.png';

function Navbar() {
    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (id === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar-landing">
            <img 
                src={MedAssistlogo} 
                style={{ width: '3vw', cursor: 'pointer' }} 
                alt="Logo" 
                onClick={() => scrollToSection('#top')} 
            />
            <ul className="navbar-landing-list">
                <li className="navbar-landing-item" onClick={() => scrollToSection('#features')}>Acerca de</li>
                <li className="navbar-landing-item" onClick={() => scrollToSection('#key-features')}>Nuestros Servicios</li>
                <li className="navbar-landing-item" onClick={() => scrollToSection('#testimonials')}>Testimonios</li>
                <li className="navbar-landing-item" onClick={() => scrollToSection('#contact')}>Contáctanos</li>
            </ul>
        </nav>
    );
}

export default Navbar;
