import React, { useState } from 'react';
import './LeftPaciente.css';
import ImagenPerfil from '../assets/imagenperfil.png';
import Codigobarras from '../assets/CodigoBarra.png';
function LeftPaciente() {
  return (
    <div className="left-paciente">
    <div className="paciente-item1">
      <div className='editar-perfil'>
        Editar<span className="edit-icon">✏️</span>
      </div>
      <div className='imagen-perfil'>
        <img src={ImagenPerfil} alt="imagen de perfil" style={{ width: '50%', height: '80%' }}/>
        <div className='nombre-perfil'> ¡ Hola ! <br/> David Martinez </div>
      </div>
      <div className='edad-perfil' style={{ fontWeight: 'bold'}}>09/02/1985 - 32 años</div>
      </div>
    <div className="paciente-item2">
      <div className='title-datos-personales'>
      DATOS PERSONALES
      </div>
      <div className='content-datos-personales'></div>
      
      </div>
    <div className="paciente-item3">
      <img src={Codigobarras} alt="imagen de perfil" style={{ width: '80%', height: '100%' }}/>
    </div>
  </div>
  );
}

export default LeftPaciente;