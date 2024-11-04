import React, { useState } from "react";
import inicioImage from "./assets/inicio-img.jpeg";
import "./HomeDoctor.css";
import Header from "../../components/Header";
function HomeDoctor() {

  return (
    <main className="home-doctor-centrar">
    <main className="home-doctor-container">
      <div className="home-doctor-perfil">
        <h2>Doctor</h2>
        <h3>David Ruiz</h3>
        <img src={inicioImage} alt="perfil" />
        <div className="home-doctor-datos">
          <ul>Nombre: David</ul>
          <ul>Apellidos: Ruiz Goñi</ul>
          <ul>DNI: 73192192</ul>
          <ul>Teléfono: 987435432</ul>
          <ul>Correo: david.ruiz.g@uni.pe</ul>
          <ul>Especialidad: Cirujano</ul>
        </div>
      </div>
      <div className="home-doctor-panel">
        <div className="home-doctor-bienvenida">
          <h1>¡Bienvenido Dr. David!</h1>
        </div>
        <div className="home-doctor-parrafo">
          <p>
            MedAssist es una plataforma que integra todas las herramientas necesarias para tener un
            diagnóstico online. Puedes ver tu calendario de citas, acceso a un historial médico, tener
            comunicación con el doctor e incluso preguntarle a una IA para tu diagnóstico inicial. Además,
            puedes dar seguimiento al calendario de citas de otros usuarios, ya sean pacientes o doctores.
          </p>
        </div>
        <div className="home-doctor-opciones">
          <div className="home-doctor-opcion">
            <img src={inicioImage} alt="perfil" />
            <p>Diagnóstico Rápido con IA</p>
          </div>
          <div className="home-doctor-opcion">
            <img src={inicioImage} alt="perfil" />
            <p>Visualizar Mis Citas</p>
          </div>
          <div className="home-doctor-opcion">
            <img src={inicioImage} alt="perfil" />
            <p>Mis Pacientes</p>
          </div>
        </div>
      </div>
    </main>
    </main>
  );
}

export default HomeDoctor;
