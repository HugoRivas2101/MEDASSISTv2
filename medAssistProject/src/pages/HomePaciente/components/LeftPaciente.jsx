import React, { useState,useEffect } from 'react';
import './LeftPaciente.css';
import ImagenPerfil from '../assets/imagenperfil.png';
import Codigobarras from '../assets/CodigoBarra.png';
import userData from '../assets/data-personal.json';
function LeftPaciente() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Suponiendo que quieres mostrar el primer usuario
    const selectedUser = userData.personas[0];
    setUser(selectedUser);
  }, []);


  return (
    <div className="left-paciente">
    <div className="paciente-item1">
      <div className='editar-perfil'>
        Editar<span className="edit-icon">✏️</span>
      </div>
      <div className='imagen-perfil'>
        <img src={ImagenPerfil} alt="imagen de perfil" style={{ width: '50%', height: '80%' }}/>
        <div className='nombre-perfil'><br/>{user ? user.nombres : 'Cargando...'}</div>
      </div>
      <div className='edad-perfil' style={{ fontWeight: 'bold'}}>{user ? `09/02/1985 - ${user.edad} años` : 'Cargando...'}</div>
      </div>
    <div className="paciente-item2">
      <div className='title-datos-personales'>
      DATOS PERSONALES
      </div>
      <div className='content-datos-personales'></div>
      {user ? (
            <>
              <p><strong>DNI:</strong> {user.dni}</p>
              <p><strong>Teléfono:</strong> {user.telefono}</p>
              <p><strong>Domicilio:</strong> {user.domicilio}</p>
              <p><strong>Correo Electrónico:</strong> {user.correo_electronico}</p>
              <p><strong>Sexo:</strong> {user.sexo}</p>
            </>
          ) : (
            'Cargando datos...'
          )}
      </div>
    <div className="paciente-item3">
      <img src={Codigobarras} alt="imagen de perfil" style={{ width: '80%', height: '100%' }}/>
    </div>
  </div>
  );
}

export default LeftPaciente;