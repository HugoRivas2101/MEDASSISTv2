import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar Axios
import './MainContent.css';

function MainContent() {
  const [medications, setMedications] = useState([]); // Estado para almacenar la lista de medicamentos
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Realizar la solicitud HTTP al backend
  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/medicines', {
          withCredentials: true, // Incluir credenciales (cookies o tokens)
        });
        setMedications(response.data); // Guardar la lista de medicamentos
        setLoading(false); // Desactivar el indicador de carga
      } catch (error) {
        setError(error.message);
        setLoading(false); // Desactivar el indicador de carga
      }
    };

    fetchMedications();
  }, []); // Ejecutar solo una vez al montar el componente

  // Mostrar un indicador de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando medicamentos...</div>;
  }

  // Mostrar un mensaje de error si ocurre un problema
  if (error) {
    return <div>Error al cargar medicamentos: {error}</div>;
  }

  return (
    <main className="main-content">
      <div className="content-item">
        <div className="title-datos-personales">MEDICAMENTOS ASIGNADOS</div>
        <div className="content-datos-personales">
          {medications.length > 0 ? (
            <ul>
              {medications.map((medication) => (
                <li key={medication.id}>
                  <strong>{medication.nombre_medicamento}</strong> - {medication.dosis} - {medication.frecuencia}
                  <br />
                  <span>
                    Desde: {new Date(medication.fecha_inicio).toLocaleDateString()} hasta{' '}
                    {new Date(medication.fecha_fin).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tienes medicamentos asignados.</p>
          )}
        </div>
      </div>
      <div className="content-item">
        <div className="title-datos-personales">ULTIMOS SIGNOS VITALES (TRIAJE)</div>
        <div className="content-datos-personales">
          {/* Aquí puedes agregar la información de signos vitales */}
          <p>No hay datos disponibles.</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
