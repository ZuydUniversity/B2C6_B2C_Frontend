import React, { useState } from 'react';
import './componentstyles/appointmentplanner.css';

interface Appointment {
  id: number;
  title: string;
  repetition: string | null;
}

const CustomCheckbox: React.FC<{
  label: string;
  value: string;
  selectedValue: string | null;
  onChange: (value: string | null) => void;
}> = ({ label, value, selectedValue, onChange }) => {
  const handleClick = () => {
    if (selectedValue === value) {
      onChange(null);
    } else {
      onChange(value);
    }
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        value={value}
        checked={selectedValue === value}
        onChange={handleClick}
      />
      <span className={`checkbox ${selectedValue === value ? 'selected' : ''}`}></span>
      {label}
    </label>
  );
};

const AppointmentPlanner: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [title, setTitle] = useState('');
  const [repetition, setRepetition] = useState<string | null>(null);

  const addAppointment = () => {
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      title,
      repetition,
    };
    setAppointments([...appointments, newAppointment]);
    setTitle('');
    setRepetition(null);
  };

  return (
    <div className="appointment-planner">
      <div className="title-section">
        <h1 className="title-with-underline">Afspraak toevoegen</h1>
        <div className="appointment-form">
          <h2 className="title-of-title-bar">Titel afspraak</h2>
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
          <CustomCheckbox
            label="Dagelijks"
            value="daily"
            selectedValue={repetition}
            onChange={setRepetition}
          />
          <CustomCheckbox
            label="Wekelijks"
            value="weekly"
            selectedValue={repetition}
            onChange={setRepetition}
          />
          <CustomCheckbox
            label="Maandelijks"
            value="monthly"
            selectedValue={repetition}
            onChange={setRepetition}
          />
          <CustomCheckbox
            label="Jaarlijks"
            value="yearly"
            selectedValue={repetition}
            onChange={setRepetition}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPlanner;
