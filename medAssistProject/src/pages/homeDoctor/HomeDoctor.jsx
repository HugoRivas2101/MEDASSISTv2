import React, { useState } from "react";
import inicioImage from "./assets/imagenperfil.png";
import "./HomeDoctor.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Codigobarras from './assets/codbarras.png';
import Agenda from './assets/calendaar.png';
import CheckMarck from './assets/checkmark.png';
import users from './assets/users.png';
import { text } from "@fortawesome/fontawesome-svg-core";

function HomeDoctor() {
  
  return (
    <div className="home-doctor-general">
      <Navbar />
      <main className="home-doctor-centrar">
        <main className="home-doctor-container">
          <div className="home-doctor-perfil">
            <span style={{ display: 'flex', flexDirection: 'column' , alignItems: 'center',}}>
            <h2>Doctor</h2>
            <h3>David Ruiz</h3>
            </span>
            <img src={inicioImage} alt="perfil" style={{ width: '10vh', height: '10vh' }}/>
            <div className="datos-doctoor-home">
              <span className="home-doctor-titulo-datos">Información personal</span>
              <div className="home-doctor-datos">
                <ul>Nombre: David</ul>
                <ul>Apellidos: Ruiz Goñi</ul>
                <ul>DNI: 73192192</ul>
                <ul>Teléfono: 987435432</ul>
                <ul>Correo: david.ruiz.g@uni.pe</ul>
                <ul>Especialidad: Cirujano</ul>
              </div>
              <div className="paciente-item3">
                <img src={Codigobarras} alt="imagen de perfil" style={{ width: '80%', height: '5vh' }} />
              </div>

            </div>

          </div>
          <div className="home-doctor-panel">
            <div className="home-doctor-bienvenida">
              <h1>¡Bienvenido Dr. David!</h1>
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
              <div className="home-doctor-opcion">
                <img src={users} alt="perfil" />
                <p>Mis Pacientes</p>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}

export default HomeDoctor;
