import React, { useState, useEffect} from "react";
import "./MainContent.css";
import userData from '../assets/data-vital.json';

function MainContent() {

  const [signoVital, setSignoVital] = useState([]);

  useEffect(() => {
    // Cargar datos de signos vitales desde el JSON
    //setSignosVitales(userData.signos_vitales);
    setSignoVital(userData.signos_vitales[0]);
  }, []);


  return (
    <main className="main-content">
      <div className="content-item">
        <div className="title-datos-personales">MEDICAMENTOS ASIGNADO</div>
        <div className="content-datos-personales">

          
        </div>
      </div>
      <div className="content-item">
        <div className="title-datos-personales">
          ULTIMOS SIGNOS VITALES(TRIAJE)
        </div>
        <div className="content-datos-personales">
        {signoVital ? (
            <div className="signo-vital-item">
              <p><strong>Altura:</strong> {signoVital.altura}</p>
              <p><strong>Peso:</strong> {signoVital.peso}</p>
              <p><strong>Índice de Masa Corporal:</strong> {signoVital.masa_corporal}</p>
              <p><strong>Temperatura:</strong> {signoVital.temperatura}</p>
              <p><strong>Frecuencia Respiratoria:</strong> {signoVital.frecuencia_respiratoria}</p>
              <p><strong>Presión Arterial:</strong> {signoVital.presion_arterial}</p>
              <p><strong>Frecuencia Cardíaca:</strong> {signoVital.frecuencia_cardiaca}</p>
            </div>
          ) : (
            <p>No hay datos de signos vitales disponibles.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default MainContent;
