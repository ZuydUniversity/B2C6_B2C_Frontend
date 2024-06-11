import React from "react";
import './componentstyles/minikalender.css';

const MiniKalender: React.FC = () => {
  const currentDate = new Date();
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const nextMonthDays = 42 - (daysInMonth + firstDayOfMonth); 
  
    const calendarDays = [];
  
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      calendarDays.push(
        <div key={`prev-${i}`} className="calendar-day prev-month">
          <span className="day-number">{prevMonthDays - i}</span>
        </div>
      );
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(<div key={day} className="calendar-day">{day}</div>);
    }
  
    for (let i = 1; i <= nextMonthDays; i++) {
      calendarDays.push(
        <div key={`next-${i}`} className="calendar-day next-month">
          <span className="day-number">{i}</span>
        </div>
      );
    }

  
    return calendarDays;
  };

  return (
    <div className="calendar">
      <div className="calendar-title">Kalender</div>
      <div className="calendar-header"></div>
      <div className="calendar-left-button">{'<'}</div>
      <div className="calendar-text">
        <div>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</div>
      </div>
      <div className="calendar-right-button">{'>'}</div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">{day}</div>
        ))}
      </div>
      <div className="calendar-body">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default MiniKalender;