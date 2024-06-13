import React from 'react';
import './styles/kalendercss.css';
import { addDays, format, startOfWeek } from 'date-fns';
import { nl } from 'date-fns/locale/nl';

const days = ['Ma', 'Di', 'Wo', 'Do', 'Vr'];
const times = ['08:00', '09:00', '10:00', '11:00', '12:00'];

const KalenderPage: React.FC = () => {
  const today = new Date();
  const startOfWeekDate = startOfWeek(today, { weekStartsOn: 1 });

  const getWeekDates = () => {
    return days.map((_, index) => format(addDays(startOfWeekDate, index), 'd MMMM', { locale: nl }));
  };

  const weekDates = getWeekDates();

  return (
    <div className="kalender-container">
      <h1 className="kalender-title">Kalender</h1>
        <div className= "kalender-underline"></div>
      <div className="kalender-header">
        <div className= "kalender-header-underline"></div>
        <button className="arrow-button-right">{'<'}</button>
        <span className="date-range">{format(startOfWeekDate, 'MMMM d', { locale: nl })} - {format(addDays(startOfWeekDate, 4), 'd, yyyy', { locale: nl })}</span>
        <button className="arrow-button-left">{'>'}</button>
      </div>
      <div className="week-view">
        <div className="time-column">
          {times.map(time => (
            <div key={time} className="time-slot">
              {time}
            </div>
          ))}
        </div>
        {days.map((day, index) => (
          <div key={day} className="day-column">
            <div className="day-header">
              <span className="day">{day}</span>
              <span className="date">{weekDates[index]}</span>
            </div>
            {times.map(time => (
              <div key={time} className="time-slot">
                {/* Voeg hier afspraak slots toe */}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="add-button">Toevoegen</button>
    </div>
  );
};

export default KalenderPage;
