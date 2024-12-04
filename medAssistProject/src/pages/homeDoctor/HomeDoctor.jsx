import React, { useState,useEffect} from "react";
import inicioImage from "./assets/imagenperfil.png";
import "./HomeDoctor.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Codigobarras from './assets/codbarras.png';
import Agenda from './assets/calendaar.png';
import CheckMarck from './assets/CheckMark.png';
import users from './assets/users.png';
import axios from 'axios'; // Importa Axios

import { text } from "@fortawesome/fontawesome-svg-core";

function HomeDoctor() {
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
    <div className="home-doctor-general">
      <Navbar />
      <main className="home-doctor-centrar">
        <main className="home-doctor-container">
          <div className="home-doctor-perfil">
            <span style={{ display: 'flex', flexDirection: 'column' , alignItems: 'center',}}>

            <h3>{userInfo.nombres}</h3>
            </span>
            <img src={inicioImage} alt="perfil" style={{ width: '10vh', height: '10vh' }}/>
            <div className="datos-doctoor-home">
              <span className="home-doctor-titulo-datos">Información personal</span>
              <div className="home-doctor-datos">
                <ul>Nombre: {userInfo.nombres}</ul>
                <ul>DNI: {userInfo.dni}</ul>
                <ul>Teléfono: {userInfo.telefono}</ul>
                <ul>Correo: {userInfo.correo}</ul>
                <ul>Sexo: {userInfo.sexo}</ul>
              </div>
              <div className="paciente-item3">
                <img src={Codigobarras} alt="imagen de perfil" style={{ width: '80%', height: '5vh' }} />
              </div>

            </div>

          </div>
          <div className="home-doctor-panel">
            <div className="home-doctor-bienvenida">
              <h1>¡Bienvenido {userInfo.nombres.split(' ')[0]}!</h1>
            </div>
            <div className="home-doctor-parrafo">
              <p>
                MedAssist es una plataforma que integra todas las herramientas
                necesarias para tener un diagnóstico online. Puedes ver tu
                calendario de citas, acceso a un historial médico, tener
                comunicación con el doctor e incluso preguntarle a una IA para
                tu diagnóstico inicial. Además, puedes dar seguimiento al
                calendario de citas de otros usuarios, ya sean pacientes o
                doctores.
              </p>
            </div>
            <div className="home-doctor-opciones">
              <div className="home-doctor-opcion"  onClick={() => window.location.href = '/chatbot'}>
                <img src={CheckMarck} alt="perfil" />
                <p>Diagnóstico Rápido con IA</p>
              </div>
              <div className="home-doctor-opcion" onClick={() => window.location.href = '/calendar'}>
                <img src={Agenda} alt="perfil" />
                <p>Visualizar Mis Citas</p>
              </div>
              <div className="home-doctor-opcion" onClick={() => window.location.href = '/historialMedico'}>
                <img src={users} alt="perfil" />
                <p>Mi Historial Médico</p>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}

export default HomeDoctor;
