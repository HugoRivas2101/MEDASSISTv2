import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar Axios
import './MainContent.css';
import altura from "../assets/limite-de-altura.png";
import peso from "../assets/perdida-de-peso.png";
import temperatura from "../assets/alta-temperatura.png";	
import corazon from "../assets/corazon.png";
import presion from "../assets/presion-arterial-baja.png";
import imc from "../assets/imc.png";
import respiratorio from "../assets/disnea.png"
function MainContent() { 
  const [medications, setMedications] = useState([]); // Estado para medicamentos
  const [vitalSigns, setVitalSigns] = useState(null); // Estado para signos vitales
  const [loadingMedications, setLoadingMedications] = useState(true); // Indicador de carga para medicamentos
  const [loadingVitalSigns, setLoadingVitalSigns] = useState(true); // Indicador de carga para signos vitales
  const [errorMedications, setErrorMedications] = useState(null); // Error en medicamentos
  const [errorVitalSigns, setErrorVitalSigns] = useState(null); // Error en signos vitales

  // Solicitar medicamentos
  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/medicines', {
          withCredentials: true, // Incluir credenciales (cookies o tokens)
        });
        setMedications(response.data);
        setLoadingMedications(false);
      } catch (error) {
        setErrorMedications(error.message);
        setLoadingMedications(false);
      }
    };

    fetchMedications();
  }, []);

  // Solicitar signos vitales
  useEffect(() => {
    const fetchVitalSigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/signs', {
          withCredentials: true, // Incluir credenciales (cookies o tokens)
        });
        setVitalSigns(response.data);
        setLoadingVitalSigns(false);
      } catch (error) {
        setErrorVitalSigns(error.message);
        setLoadingVitalSigns(false);
      }
    };

    fetchVitalSigns();
  }, []);

  // Mostrar carga o errores de medicamentos
  if (loadingMedications) {
    return <div>Cargando medicamentos...</div>;
  }
  if (errorMedications) {
    return <div>Error al cargar medicamentos: {errorMedications}</div>;
  }

  // Mostrar carga o errores de signos vitales
  if (loadingVitalSigns) {
    return <div>Cargando signos vitales...</div>;
  }
  if (errorVitalSigns) {
    return <div>Error al cargar signos vitales: {errorVitalSigns}</div>;
  }
  const isImcHigh = vitalSigns && vitalSigns.imc > 30;

  return (
    <main className="main-content">
      <div className="content-item">
        <div className="title-datos-personales">MEDICAMENTOS ASIGNADOS</div>
        <div className="content-datos-personales">
          {medications.length > 0 ? (
            <ul>
              {medications.map((medication) => (
                <div key={medication.id}>
                  <strong>{medication.nombre_medicamento}</strong> - {medication.dosis} - {medication.frecuencia}
                  <br />
                  <span>
                    Desde: {new Date(medication.fecha_inicio).toLocaleDateString()} hasta{' '}
                    {new Date(medication.fecha_fin).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </ul>
          ) : (
            <p>No tienes medicamentos asignados.</p>
          )}
        </div>
      </div>
      <div className="content-item">
        <div className={`title-datos-personales ${isImcHigh ? 'high-imc' : ''}`}> ULTIMO DIÁGNOSTICO (TRIAJE)</div>
        <div className="content-datos-personales">
          {vitalSigns ? (
            <div className="vital-signs-grid">

              <div className="signos-vitales-MC">
              <img
                src={altura}
                alt="imagen de perfil"
                style={{ width: "30px", height: "30px" }}
              />
                <strong>Altura:</strong> {vitalSigns.altura} m
              </div>
              <div className="signos-vitales-MC">
              <img
                src={peso}
                alt="imagen de perfil"
                style={{ width: "30px", height: "30px" }}
              />
                <strong>Peso:</strong> {vitalSigns.peso} kg
              </div>
              <div className="signos-vitales-MC">
              <img
                src={imc}
                alt="imagen de perfil"
                style={{ width: "30px", height: "30px" }}
              />
                <strong>IMC:</strong> {vitalSigns.imc}
              </div>
              <div className="signos-vitales-MC">
              <img
                src={temperatura}
                alt="imagen de perfil"
                style={{ width: "30px", height: "30px" }}
              />
                <strong>Temperatura:</strong> {vitalSigns.temperatura} °C
              </div>
              <div className="signos-vitales-MC">
              <img
                src={respiratorio}
                alt="imagen de perfil"
                style={{ width: "30px", height: "30px" }}
              />
                <strong>Frecuencia Respiratoria:</strong> {vitalSigns.frecuencia_respiratoria} rpm
              </div>
              <div className="signos-vitales-MC">
              <img
                src={presion}
                alt="imagen de perfil"
                style={{ width: "30px", height: "30px" }}
              />
                <strong>Presión Arterial:</strong> {vitalSigns.presion_arterial}
              </div>
              <div className="signos-vitales-MC">
              <img
                src={corazon}
                alt="imagen de perfil"
                style={{ width: "30px", height: "30px" }}
              />
                <strong>Frecuencia Cardíaca:</strong> {vitalSigns.frecuencia_cardiaca} bpm
              </div>
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
