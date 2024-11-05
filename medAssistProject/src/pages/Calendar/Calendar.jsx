import React, { useState } from "react";
import Sidebar from "../../components/SideBar";
import "./Calendar.css";
import MedAssistCalendar from "./assets/calendar.png";
import MedAdd from "./assets/MAdd.png";
import RightArrow from "./assets/RightArrow.png";
import LeftArrow from "./assets/LeftArrow.png";
import Forward from "./assets/Forward.png";
import Today from "./assets/Today.png";
import Agenda from "./assets/Moleskine.png";
function Calendar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="calendar-app">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <div className="header-controls">
            <div className="date-Calendar-logo">
              <img
                src={MedAssistCalendar}
                alt="LogoCa"
                className="logo-Calendar"
              />
              <span>Calendar</span>
            </div>
            <button className="logout-button">
              <span>Programar una consulta</span>
              <img src={MedAdd} alt="LogoCa" style={{ width: "40px" }} />
            </button>
          </div>
          <div className="date-controls">
            <div
              className="date-Calendar-details"
              style={{ display: "flex", alignItems: "center" }}
            >
              <button className="today-button" style={{display: "flex", alignItems: "center",border: "none",background: "none" ,width: "8vw" ,fontFamily:"Mulish"}}>
                <img src={Today} alt="LogoCa" style={{ width: "40px" }} />
                <span>Hoy</span>
              </button>
              <div style={{ display: "flex", alignItems: "center", width: "auto" ,justifyContent:"center"}}>
              <div className="days-button">
                <img src={LeftArrow} alt="LogoCa" style={{ width: "30px", border: "none",background: "none"}} />
              </div>
              <div className="days-button">
                <img src={RightArrow} alt="LogoCa" style={{ width: "30px" ,border: "none",background: "none"}} />
              </div>
              </div>
              <button className="calendar-button"  style={{display: "flex", alignItems: "center", border: "none",background: "none",width: "8vw",fontFamily:"Mulish"}}>
                <span>21 de Agosto</span>
                {/* aqui es donde le das click y te sale un mini calendario */}
                <img src={Forward} alt="LogoCa" style={{ width: "20px" }} />
              </button>
            </div>
            <div
              className="date-Calendar-logo"
              style={{ display: "flex", alignItems: "center", width: "7vw" }}
            >
              <img src={Agenda} alt="LogoCa" style={{ width: "40px" }} />
              <span>Semana</span>
              <img src={Forward} alt="LogoCa" style={{ width: "22px" }} />
            </div>
          </div>
        </header>

        {/* Content */}
        {/* aqui va el calendario */}
        <div className="content">
          <button className="ia-button">IA</button>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
