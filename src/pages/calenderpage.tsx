import React, { useState } from "react";
import "./styles/calenderpagecss.css";

// Functie om de weeknummer te krijgen
const getWeekNumber = (date: Date): number => {
	if (isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}
	const firstJan = new Date(date.getFullYear(), 0, 1);
	const pastDaysOfYear = (date.valueOf() - firstJan.valueOf()) / 86400000;
	return Math.ceil((pastDaysOfYear + firstJan.getDay() + 1) / 7);
};

// Functie om de startdatum van een ISO week te krijgen
const getDateOfISOWeek = (week: number, year: number): Date => {
	if (week < 1 || week > 52) {
		throw new Error("Invalid week");
	}
	if (year < 1) {
		throw new Error("Invalid year");
	}
	const simple = new Date(year, 0, 1 + (week - 1) * 7);
	const dayOfWeek = simple.getDay();
	const ISOweekStart = simple;
	if (dayOfWeek <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
	else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
	return ISOweekStart;
};

// Functie om de startdatum van de week te krijgen
const getStartOfWeek = (date: Date): Date => {
	if (isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}
	const day = date.getDay();
	const diff = date.getDate() - day + (day === 0 ? -6 : 1);
	return new Date(date.setDate(diff));
};

const CalenderPage: React.FC = () => {
	const [currentWeek, setCurrentWeek] = useState<Date>(getStartOfWeek(new Date()));
	const [selectedWeek, setSelectedWeek] = useState<number>(getWeekNumber(new Date()));

	const days = ["Ma", "Di", "Wo", "Do", "Vr"];
	const times = Array.from({ length: 13 }, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);

	const handlePrevWeek = () => {
		const newDate = new Date(currentWeek);
		newDate.setDate(newDate.getDate() - 7);
		setCurrentWeek(newDate);
		setSelectedWeek(getWeekNumber(newDate));
	};

	const handleNextWeek = () => {
		const newDate = new Date(currentWeek);
		newDate.setDate(newDate.getDate() + 7);
		setCurrentWeek(newDate);
		setSelectedWeek(getWeekNumber(newDate));
	};

	const handleWeekChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const week = parseInt(event.target.value, 10);
		const newDate = getDateOfISOWeek(week, new Date().getFullYear());
		setCurrentWeek(newDate);
		setSelectedWeek(week);
	};

	const formatDate = (date: Date): string => {
		const day = String(date.getDate()).padStart(2, "0");
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
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
			<div role="presentation" aria-label="kalender-underline" className="kalender-underline"></div>
			<div className="kalender-header">
				<button className="arrow-button-left underline" onClick={handlePrevWeek}>
					&lt;
				</button>
				<h2>
					{formatDate(currentWeek)} - {formatDate(new Date(currentWeek.getTime() + 4 * 86400000))}, {currentWeek.getFullYear()}
				</h2>
				<button className="arrow-button-right underline" onClick={handleNextWeek}>
					&gt;
				</button>
			</div>
			<div role="presentation" aria-label="kalender-header-underline" className="kalender-header-underline"></div>
			<div className="week-toggle-button">
				<select className="workweek" value={selectedWeek} onChange={handleWeekChange} data-testid="week-select">
					{Array.from({ length: 52 }, (_, i) => (
						<option key={i + 1} value={i + 1}>
							Week {i + 1}
						</option>
					))}
				</select>
			</div>
			<div className="kalender-table-container">
				<table className="kalender-table">
					<thead>
						<tr>
							<th>Tijd</th>
							{days.map((day, index) => (
								<th key={index} data-testid={`day-${day}`}>
									{day}
									<br />
									{formatDate(dates[index])}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{times.map((time, index) => (
							<tr key={index}>
								<td>{time}</td>
								{dates.map((_, i) => (
									<td key={i}></td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<button className="add-button-kalender">Toevoegen</button>
		</div>
	);
};

export default CalenderPage;
