import React, { useState } from 'react';
import './RightPaciente.css';
import MedAdd from '../assets/MAdd.png';
function RightPaciente() {
  return (
    <div className="right-sidebar">
      <button className="Program-reunion-button">
              <span>Programar una consulta</span>
              <img src={MedAdd} alt="LogoCa" style={{ width: "40px" }} />
            </button>
        {/* <button className="start-consultation">
          
        </button> */}
        <div className="scheduled-consults">
        <div className='title-datos-personales'>
    CONSULTAS AGENDADAS
      </div>
      <div className='content-datos-personales'></div>
        </div>
        <div className='consultas-init'>
          <div className="consults-initiated">
          <div className='title-datos-personales'>
          CONSULTAS INICIADAS
      </div>
      <div className='content-datos-personales'></div>
            
            </div>
          <div className="consult-number">18</div>
          <div className="consult-number">25</div>
        </div>
        
        <button className="ia-button">IA</button>
      </div>
  );
}

export default RightPaciente;