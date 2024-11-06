import React from 'react';
import './HomePaciente.css';
import Navbar from "../../components/Navbar";
import LeftPaciente from './components/LeftPaciente';
import RightPaciente from './components/RightPaciente';
import MainContent from './components/MainContent';

function HomePaciente() {
  return (
    <div className="dashboard">
      {/* Header */}
      <Navbar />
      <div className='dashboard-container'>
           {/* paciente */}
           <LeftPaciente />
      {/* Main content */}
     <MainContent />
      

      {/* Right sidebar */}
      <RightPaciente />
      </div>
   
    </div>
  );
}

export default HomePaciente;
