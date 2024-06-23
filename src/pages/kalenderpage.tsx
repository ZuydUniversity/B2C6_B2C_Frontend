import React, { useState } from 'react';
import './styles/kalendercss.css';

const KalenderPage: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState<Date>(getStartOfWeek(new Date()));

  const days = ['Ma', 'Di', 'Wo', 'Do', 'Vr'];
  const times = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  const handlePrevWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)));
  };

  const handleNextWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)));
  };

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };

  const getDates = (startOfWeek: Date): Date[] => {
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = getDates(new Date(currentWeek));

  return (
    <div className="kalender">
      <h1 className="kalender-title">Kalender</h1>
      <div className="kalender-underline"></div>
      <div className="kalender-header">
        <button className="arrow-button-left" onClick={handlePrevWeek}>&lt;</button>
        <h2>{formatDate(currentWeek)} - {formatDate(new Date(currentWeek.getTime() + 4 * 86400000))}, {currentWeek.getFullYear()}</h2>
        <button className="arrow-button-right" onClick={handleNextWeek}>&gt;</button>
      </div>
      <div className="kalender-header-underline"></div>
      <div className="workweek">
        <button className="week-toggle-button">werkweek</button>
      </div>
      <div className="kalender-table-container">
        <table className="kalender-table">
          <thead>
            <tr>
              <th>Tijd</th>
              {days.map((day, index) => (
                <th key={index}>{day}<br />{formatDate(dates[index])}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, index) => (
              <tr key={index}>
                <td>{time}</td>
                {dates.map((_, i) => (
                  <td key={i} className={time === "11:00" && i === 0 ? "appointment" : ""}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-button">Toevoegen</button>
    </div>
  );
};

const getStartOfWeek = (date: Date): Date => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

export default KalenderPage;
