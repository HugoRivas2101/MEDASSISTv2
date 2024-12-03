import React, { useState } from "react";
import Sidebar from "../../components/SideBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";  // Importar idioma español
import "./Calendar.css";
import MedAssistCalendar from "./assets/calendar.png";
import MedAdd from "./assets/MAdd.png";
import RightArrow from "./assets/RightArrow.png";
import LeftArrow from "./assets/LeftArrow.png";
import Forward from "./assets/Forward.png";
import Today from "./assets/Today.png";
import Agenda from "./assets/Moleskine.png";
import CalendarView from "./CalendarView"; // Importamos el componente
import Navbar from "../../components/Navbar";

registerLocale("es", es);  // Registrar el idioma español

function Calendar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState("Semana"); // Estado para la vista de calendario seleccionada

  return (
    <div className="calendar-app">
      {/* Sidebar */}
      <Navbar />

      {/* Main content */}
      <div className="calendar-main-content">
        {/* Header */}
        <header className="calendar-header">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          
        </header>

        {/* Content: Visualización del calendario */}
        <div className="calendar-view-container">
          <CalendarView view={view} selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
