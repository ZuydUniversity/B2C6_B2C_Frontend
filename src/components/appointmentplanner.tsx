import React, { useState } from 'react';
import './componentstyles/appointmentplanner.css';

interface Appointment {
  id: number;
  title: string;
}

const AppointmentPlanner: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [title, setTitle] = useState('');

  const addAppointment = () => {
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      title,
    };
    setAppointments([...appointments, newAppointment]);
    setTitle('');
  };

  return (
    <div className="appointment-planner">
      <h1 className="title-with-underline">Afspraak toevoegen</h1>
      <h1 className="title-of-element">Titel</h1>
      <ul className="appointment-list">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="appointment-item">
            <h2>{appointment.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentPlanner;
