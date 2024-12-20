import React, { useState } from "react";
import Sidebar from "../../components/SideBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "./Calendar.css";
import MedAssistCalendar from "./assets/calendar.png";
import MedAdd from "./assets/MAdd.png";
import RightArrow from "./assets/RightArrow.png";
import LeftArrow from "./assets/LeftArrow.png";
import Forward from "./assets/Forward.png";
import Today from "./assets/Today.png";
import Agenda from "./assets/Moleskine.png";
import CalendarView from "./CalendarView"; // Importamos el componente

function Calendar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState("Semana"); // Estado para la vista de calendario seleccionada

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
              <button
                className="today-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  background: "none",
                  width: "8vw",
                  fontFamily: "Mulish",
                }}
              >
                <img src={Today} alt="LogoCa" style={{ width: "40px" }} />
                <span>Hoy</span>
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "auto",
                  justifyContent: "center",
                }}
              >
                <div className="days-button">
                  <img
                    src={LeftArrow}
                    alt="LogoCa"
                    style={{ width: "30px", border: "none", background: "none" }}
                  />
                </div>
                <div className="days-button">
                  <img
                    src={RightArrow}
                    alt="LogoCa"
                    style={{ width: "30px", border: "none", background: "none" }}
                  />
                </div>
              </div>

              {/* Selector de fecha con DatePicker */}
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)} // Actualiza la fecha seleccionada
                dateFormat="dd 'de' MMMM" // Formato de la fecha a mostrar
                customInput={
                  <button
                    className="calendar-button"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                      background: "none",
                      width: "8vw",
                      fontFamily: "Mulish",
                    }}
                  >
                    <span>{format(selectedDate, "dd 'de' MMMM")}</span>
                    <img src={Forward} alt="LogoCa" style={{ width: "20px" }} />
                  </button>
                }
              />
            </div>
            <div className="relative" style={{ display: "flex", alignItems: "center", width: "7vw" }}>
              <img src={Agenda} alt="LogoCa" style={{ width: "40px" }} />
              {/* Selector de vista de calendario */}
              <select
                value={view}
                onChange={(e) => setView(e.target.value)}
                className="bg-input text-foreground border border-border rounded p-2 ml-2"
              >
                <option>Dia</option>
                <option>Semana</option>
                <option>Mes</option>
                <option>Agenda</option>
              </select>
            </div>
          </div>
        </header>

        {/* Content: Visualización del calendario */}
        <CalendarView />
      </div>
    </div>
  );
}

export default Calendar;