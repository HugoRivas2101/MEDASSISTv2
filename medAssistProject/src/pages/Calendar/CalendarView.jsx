import React, { useState, useEffect } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { es } from "date-fns/locale"; // Importar el idioma español de date-fns

function CalendarView({ view, selectedDate }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Cargar eventos desde una API o base de datos
    setEvents([
      {
        event_id: 1,
        title: "Medicina General",
        subtitle: "Juan Pérez",
        start: new Date(2024, 11, 5, 10, 0),
        end: new Date(2024, 11, 5, 11, 0),
        recurring: null, // Si el evento no es recurrente
      },
      {
        event_id: 2,
        title: "Pediatría",
        subtitle: "Ana Gómez",
        start: new Date(2024, 11, 6, 15, 30),
        end: new Date(2024, 11, 6, 16, 30),
        recurring: null,
      },
      {
        event_id: 3,
        title: "Cardiologia",
        subtitle: "Ana Maria",
        start: new Date(2024, 11, 5, 13, 30),
        end: new Date(2024, 11, 5, 14, 30),
        recurring: null,
      },
      {
        event_id: 4,
        title: "Psicologia",
        subtitle: "Pedro",
        start: new Date(2024, 11, 4, 12, 30),
        end: new Date(2024, 11, 4, 13, 30),
        recurring: null,
      },
    ]);
  }, [selectedDate]);

  const handleEventChange = (event, action) => {
    if (action === "edit" || action === "add") {
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents];
        const index = updatedEvents.findIndex((e) => e.event_id === event.event_id);
        if (index !== -1) {
          updatedEvents[index] = event;
        } else {
          updatedEvents.push(event);
        }
        return updatedEvents;
      });
    } else if (action === "delete") {
      setEvents((prevEvents) =>
        prevEvents.filter((e) => e.event_id !== event.event_id)
      );
    }
  };

  const translations = {
    navigation: {
      month: "Mes",
      week: "Semana",
      day: "Día",
      today: "Hoy",
      agenda: "Agenda",
    },
    form: {
      addTitle: "Agregar Cita Médica",
      editTitle: "Editar Cita Médica",
      confirm: "Confirmar",
      delete: "Eliminar",
      cancel: "Cancelar",
    },
    event: {
      title: "Área de Medicina",
      subtitle: "Nombre con quien se tiene la cita",
      start: "Inicio",
      end: "Fin",
      allDay: "Todo el día",
    },
    validation: {
      required: "Requerido",
    },
    moreEvents: "Más...",
    noDataToDisplay: "No hay datos para mostrar",
    loading: "Cargando...",
  };

  return (
    <div className="calendar-view">
      <Scheduler
        view={view.toLowerCase()}
        events={events}
        selectedDate={selectedDate}
        onConfirm={handleEventChange}
        onDelete={handleEventChange}
        onEventClick={(event) => console.log("Evento clickeado", event)}
        onViewChange={(newView) => console.log("Vista cambiada a:", newView)}
        onSelectedDateChange={(date) => console.log("Fecha seleccionada:", date)}
        translations={translations}
        locale={es}
      />
    </div>
  );
}

export default CalendarView;
