import React, { useState, useEffect } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { format } from "date-fns"; 

function CalendarView({ view, selectedDate }) {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    // Cargar eventos desde una API o base de datos
    setEvents([
      {
        event_id: 1,
        title: "Reunión con cliente",
        start: new Date(2024, 11, 5, 10, 0),
        end: new Date(2024, 11, 5, 11, 0),
        recurring: null, // Si el evento no es recurrente
      },
      {
        event_id: 2,
        title: "Cita médica",
        start: new Date(2024, 11, 6, 15, 30),
        end: new Date(2024, 11, 6, 16, 30),
        recurring: null,
      },
    ]);
  }, [selectedDate]);

  const handleEventChange = (event, action) => {
    // Actualizar el estado de los eventos después de añadir, editar o eliminar
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

  return (
    <div className="calendar-view">
      <Scheduler
        view={view.toLowerCase()} // Asegúrate de que la vista esté en minúsculas (día, semana, mes)
        events={events}
        selectedDate={selectedDate}
        onConfirm={handleEventChange} // Confirmar un evento (editar o añadir)
        onDelete={handleEventChange} // Eliminar evento
        onEventClick={(event) => console.log("Evento clickeado", event)} // Manejar clics en los eventos
        onViewChange={(newView) => console.log("Vista cambiada a:", newView)} // Cambiar vista
        onSelectedDateChange={(date) => console.log("Fecha seleccionada:", date)} // Cambiar fecha seleccionada
      />
    </div>
  );
}

export default CalendarView;
