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
      <h1 className="title-of-title-bar">Titel</h1>
      <div className="appointment-form">
        <input
          type="text"
          placeholder="Typ je titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
      </div>
      <h1 className="title-of-repetition">Herhaling</h1>
      <h1 className="title-of-repetition-optional">(Optioneel)</h1>
    </div>
  );
};

export default AppointmentPlanner;
