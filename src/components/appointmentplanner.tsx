import React, { useState } from 'react';
import './componentstyles/appointmentplanner.css';

interface Appointment {
  id: number;
  title: string;
  repetition: string;
}

const AppointmentPlanner: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [title, setTitle] = useState('');
  const [repetition, setRepetition] = useState('none');

  const addAppointment = () => {
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      title,
      repetition,
    };
    setAppointments([...appointments, newAppointment]);
    setTitle('');
    setRepetition('none');
  };

  return (
    <div className="appointment-planner">
      <div className="title-section">
        <h1 className="title-with-underline">Afspraak toevoegen</h1>
        <div className="appointment-form">
          <h2 className="title-of-title-bar">Titel</h2>
          <input
            type="text"
            placeholder="Typ je titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
          />
        </div>
      </div>
      <div className="repetition-section">
      <h2 className="title-of-repetition">Herhaling <span className="optional">(Optioneel)</span></h2>
        <div className="repetition-options">
          <label>
            <input
              type="radio"
              name="repetition"
              value="daily"
              checked={repetition === 'daily'}
              onChange={() => setRepetition('daily')}
            />
            Dagelijks
          </label>
          <label>
            <input
              type="radio"
              name="repetition"
              value="weekly"
              checked={repetition === 'weekly'}
              onChange={() => setRepetition('weekly')}
            />
            Wekelijks
          </label>
          <label>
            <input
              type="radio"
              name="repetition"
              value="monthly"
              checked={repetition === 'monthly'}
              onChange={() => setRepetition('monthly')}
            />
            Maandelijks
          </label>
          <label>
            <input
              type="radio"
              name="repetition"
              value="monthly"
              checked={repetition === 'yearly'}
              onChange={() => setRepetition('yearly')}
            />
            Jaarlijks
          </label>
          <h2 className="title-of-information-appointment">Gegevens</h2>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPlanner;
