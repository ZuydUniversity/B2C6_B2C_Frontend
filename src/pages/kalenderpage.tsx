import React, { useState } from 'react';
import './styles/kalendercss.css';

const Calendar: React.FC = () => {
  const [appointments, setAppointments] = useState([]);

  const handleDayClick = (day: number) => {
    // Logic to add an appointment
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button left-nav">{'<'}</button>
        <h2>Juni 14 - 18, 2021</h2>
        <button className="nav-button right-nav">{'>'}</button>
      </div>
      <div className="calendar-header-underline"></div>
      <div className="calendar-grid">
        {['Ma', 'Di', 'Wo', 'Do', 'Vr'].map((day, index) => (
          <div key={index} className="calendar-day">
            {day} 14 juni
          </div>
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="calendar-slot" onClick={() => handleDayClick(index + 1)}></div>
        ))}
      </div>
    </div>
  );
};

const KalenderPage: React.FC = () => {
  return (
    <div className="kalender-page">
      <div className="kalender-title">
        <h1>Kalender</h1>
        <div className="underline"></div>
      </div>
      <Calendar />
    </div>
  );
};

export default KalenderPage;
