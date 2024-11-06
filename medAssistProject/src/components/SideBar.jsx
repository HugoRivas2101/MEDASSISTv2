import React from 'react';
import './SideBar.css';

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
