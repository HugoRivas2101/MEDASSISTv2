import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faRobot, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ isOpen }) {
  const menuItems = [
    { icon: faHouse, label: 'Inicio' },
    { icon: faCalendarDays, label: 'Mi Agenda' },
    { icon: faRobot, label: 'MedAI' },
    { icon: faCommentDots, label: 'Chat' },
    { icon: faUser, label: 'Pacientes' }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {menuItems.map((item, index) => (
        <div key={index} className="sidebar-item">
          <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
          <span className="sidebar-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
