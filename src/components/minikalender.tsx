import React, { useRef, useEffect, useState } from "react";
import "./componentstyles/minikalender.css";

interface MiniKalenderProps {
	initialDate?: Date;
}

const MiniKalender: React.FC<MiniKalenderProps> = ({ initialDate = new Date() }) => {
	const calendarRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);

	const [currentDate, setCurrentDate] = useState(initialDate);
	const [hoveredDay, setHoveredDay] = useState<number | null>(null);

	const daysOfWeek = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
	const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

	const handlePreviousMonth = () => {
		setCurrentDate((prevDate) => {
			const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
			return prevMonthDate;
		});
	};

	const handleNextMonth = () => {
		setCurrentDate((prevDate) => {
			const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
			return nextMonthDate;
		});
	};

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
			calendarDays.push(
				<div key={day} className="calendar-day" onMouseEnter={() => setHoveredDay(day)} onMouseLeave={() => setHoveredDay(null)}>
					{day}
					{hoveredDay === day && (
						<div className="popup">
							<div>Day {day}</div>
							<div>Additional Info</div>
						</div>
					)}
				</div>
			);
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
		<div className="calendar" ref={calendarRef}>
			<nav>
				<a href="/kalender" className="url">
					<div className="calendar-title" ref={titleRef}>
						Kalender
					</div>
				</a>
			</nav>
			<div className="calendar-header"></div>
			<div id="previous-month" className="calendar-left-button" onClick={handlePreviousMonth}>
				{"<"}
			</div>
			<div id="current-date" className="calendar-text">
				{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
			</div>
			<div id="next-month" className="calendar-right-button" onClick={handleNextMonth}>
				{">"}
			</div>
			<div className="days-of-week">
				{daysOfWeek.map((day) => (
					<div key={day} className="day-of-week">
						{day}
					</div>
				))}
			</div>
			<div className="calendar-body">{renderCalendar()}</div>
		</div>
	);
};

export default MiniKalender;
