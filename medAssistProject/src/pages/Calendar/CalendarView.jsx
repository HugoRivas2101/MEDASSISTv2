 // CalendarView.jsx
 import React, { useState } from "react";

 function CalendarView() {
   // Generamos las 24 horas del día
   const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
 
   // Estado para el evento emergente
   const [showEventForm, setShowEventForm] = useState(false);
   const [selectedSlot, setSelectedSlot] = useState(null);
   const [events, setEvents] = useState([]);
   const [eventData, setEventData] = useState({
     title: "",
     startTime: "",
     endTime: "",
   });
 
   // Maneja la apertura del formulario
   const handleSlotClick = (dayIndex, hour) => {
     setSelectedSlot({ dayIndex, hour });
     setEventData({
       title: "",
       startTime: hour,
       endTime: `${parseInt(hour) + 1}:00`, // Hora de finalización por defecto
     });
     setShowEventForm(true);
   };
 
   // Maneja el cambio de los inputs en el formulario
   const handleChange = (e) => {
     const { name, value } = e.target;
     setEventData((prev) => ({ ...prev, [name]: value }));
   };
 
   // Calcula la diferencia en minutos entre dos horas
   const getTimeDifference = (start, end) => {
     const [startHour, startMinute] = start.split(":").map(Number);
     const [endHour, endMinute] = end.split(":").map(Number);
     return (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
   };
 
   // Calcula el estilo de altura y posición en función de la duración y el inicio
   const calculateEventStyle = (start, end) => {
     const duration = getTimeDifference(start, end);
     const startMinutes = parseInt(start.split(":")[1] || 0); // Minutos de inicio dentro de la hora
     const height = (duration / 60) * 4 * 16; // 1 hora = 4 rems (h-16 en Tailwind)
     const topOffset = (startMinutes / 60) * 4 * 16; // Calcula la posición vertical inicial
     return { height: `${height}px`, top: `${topOffset}px`};
   };
 
   // Maneja el guardado del evento
   const handleSaveEvent = () => {
     setEvents((prevEvents) => [
       ...prevEvents,
       { ...eventData, dayIndex: selectedSlot.dayIndex },
     ]);
     setShowEventForm(false);
     setSelectedSlot(null);
   };
 
   return (
     <div className="content calendar-view">
       <div className="container mx-auto p-4">
         {/* Encabezado del calendario con los días de la semana */}
         <div className="calendar-header grid grid-cols-8 border-t border-border">
           <div className="p-2 text-center font-semibold">Hora</div>
           <div className="p-2 text-center font-semibold border-l border-border">Domingo</div>
           <div className="p-2 text-center font-semibold border-l border-border">Lunes</div>
           <div className="p-2 text-center font-semibold border-l border-border">Martes</div>
           <div className="p-2 text-center font-semibold border-l border-border">Miércoles</div>
           <div className="p-2 text-center font-semibold border-l border-border">Jueves</div>
           <div className="p-2 text-center font-semibold border-l border-border">Viernes</div>
           <div className="p-2 text-center font-semibold border-l border-border">Sábado</div>
         </div>
 
         {/* Cuerpo del calendario con las horas y espacios para eventos */}
         <div className="grid grid-cols-8 border-b border-border calendar-body">
           {/* Columna de horas */}
           <div className="hour-column">
             {hours.map((hour, index) => (
               <div key={index} className="hour-cell p-2 border-t border-border text-center">
                 {hour}
               </div>
             ))}
           </div>
 
           {/* Columnas de días */}
           {[...Array(7)].map((_, dayIndex) => (
             <div key={dayIndex} className="day-column border-l border-border relative">
               {hours.map((hour, hourIndex) => (
                 <div
                   key={hourIndex}
                   className="hour-slot border-t border-border h-16 relative"
                   onClick={() => handleSlotClick(dayIndex, hour)}
                 >
                   {/* Muestra el evento en el slot correspondiente */}
                   {events
                     .filter(
                       (event) =>
                         event.dayIndex === dayIndex &&
                         parseInt(event.startTime.split(":")[0]) <= parseInt(hour) &&
                         parseInt(event.endTime.split(":")[0]) >= parseInt(hour)
                     )
                     .map((event, i) => (
                       <div
                         key={i}
                         className="event bg-blue-500 text-white p-1 rounded absolute left-0 w-full"
                         style={calculateEventStyle(event.startTime, event.endTime)}
                       >
                         {event.title} <br /> {event.startTime} - {event.endTime}
                       </div>
                     ))}
                 </div>
               ))}
             </div>
           ))}
         </div>
       </div>
 
       {/* Formulario emergente para agregar eventos */}
       {showEventForm && (
         <div className="event-form-overlay">
           <div className="event-form">
             <button onClick={() => setShowEventForm(false)}>×</button>
             <h3>Nuevo Evento</h3>
             <input
               type="text"
               name="title"
               placeholder="Nombre del evento"
               value={eventData.title}
               onChange={handleChange}
               className="form-input"
             />
             <input
               type="text"
               name="startTime"
               placeholder="Hora de inicio (ej: 9:15)"
               value={eventData.startTime}
               onChange={handleChange}
               className="form-input"
             />
             <input
               type="text"
               name="endTime"
               placeholder="Hora de fin (ej: 10:30)"
               value={eventData.endTime}
               onChange={handleChange}
               className="form-input"
             />
             <button onClick={handleSaveEvent} className="save-button">
               Guardar
             </button>
           </div>
         </div>
       )}
       <button className="ia-button">IA</button>
     </div>
   );
 }
 
 export default CalendarView;