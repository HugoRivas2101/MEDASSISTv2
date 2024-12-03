import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa Axios
import './LeftPaciente.css';
import ImagenPerfil from '../assets/imagenperfil.png';
import Codigobarras from '../assets/CodigoBarra.png';

function LeftPaciente() {
  const [userInfo, setUserInfo] = useState(null); // Estado para almacenar la información del usuario
  const [loading, setLoading] = useState(true); // Estado para mostrar un indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Realizar la solicitud HTTP al backend usando Axios
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/info', {
          withCredentials: true, // Incluye cookies para autenticación
        });
        setUserInfo(response.data); // Guardar los datos en el estado
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

  return (
    <div className="left-paciente">
      <div className="paciente-item1">
        <div className="editar-perfil">
          Editar<span className="edit-icon">✏️</span>
        </div>
        <div className="imagen-perfil">
          <img
            src={ImagenPerfil}
            alt="imagen de perfil"
            style={{ width: '50%', height: '80%' }}
          />
          <div className="nombre-perfil">
            ¡ Hola ! <br /> {userInfo.nombres}
          </div>
        </div>
        <div className="edad-perfil" style={{ fontWeight: 'bold' }}>
          {userInfo.edad} años
        </div>
      </div>
      <div className="paciente-item2">
        <div className="title-datos-personales">DATOS PERSONALES</div>
        <div className="content-datos-personales">
          <p>
            <strong>DNI:</strong> {userInfo.dni}
          </p>
          <p>
            <strong>Teléfono:</strong> {userInfo.telefono}
          </p>
          <p>
            <strong>Domicilio:</strong> {userInfo.domicilio}
          </p>
          <p>
            <strong>Sexo:</strong> {userInfo.sexo}
          </p>
        </div>
      </div>
      <div className="paciente-item3">
        <img
          src={Codigobarras}
          alt="imagen de código de barras"
          style={{ width: '80%', height: '100%' }}
        />
      </div>
    </div>
  );
}

export default LeftPaciente;
