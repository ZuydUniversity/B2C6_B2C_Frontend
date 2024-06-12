import React, { useState } from 'react';
import './styles/kalendercss.css';


interface Appointment {
  day: number;
  time: string;
  patient: string;
  imageUrl: string;
}

const Calendar: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { day: 4, time: '10:00 - 11:30', patient: 'Lenny Hermans', imageUrl: 'data:image/jpeg;base64,...' }
  ]);

  const handleDayClick = (day: number) => {
    // Logic to add an appointment
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Juni 14 - 18, 2021</h2>
        <button className="week-button">Werkweek</button>
      </div>
      <div className="calendar-grid">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="calendar-day">
            {['Ma', 'Di', 'Wo', 'Do', 'Vr'][index]} 14 juni
          </div>
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="calendar-slot" onClick={() => handleDayClick(index + 1)}></div>
        ))}
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="calendar-event"
            style={{ gridColumn: appointment.day, gridRow: '3 / span 2' }}
          >
            <div className="event-time">{appointment.time}</div>
            <div className="event-patient">
              <img src={appointment.imageUrl} alt={appointment.patient} />
              <span>{appointment.patient}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const KalenderPage: React.FC = () => {
  return (
    <div className="kalender-page">
      <Calendar />
    </div>
  );
};

export default KalenderPage;
