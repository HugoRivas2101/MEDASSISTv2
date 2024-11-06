import React, { useState } from 'react';
import './MainContent.css';
function MainContent() {
  return (
    <main className="main-content">
    <div className="content-item">
    <div className='title-datos-personales'>
    MEDICAMENTOS ASIGNADO
      </div>
      <div className='content-datos-personales'></div>
     </div>
    <div className="content-item">
    <div className='title-datos-personales'>
    ULTIMOS SIGNOS VITALES(TRIAJE)
      </div>
      <div className='content-datos-personales'></div></div>
  </main>
  );
}

export default MainContent;