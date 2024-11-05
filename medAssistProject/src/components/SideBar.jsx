import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-item"></div>
      <div className="sidebar-item"></div>
      <div className="sidebar-item"></div>
      <div className="sidebar-item"></div>
      <div className="sidebar-item"></div>
    </div>
  );
}

export default Sidebar;
