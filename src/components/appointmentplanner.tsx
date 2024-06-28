import React, { useState } from "react";
import "./componentstyles/appointmentplanner.css";

interface Appointment {
	id: number;
	title: string;
	repetition: string;
	description: string;
}

const AppointmentPlanner: React.FC = () => {
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [title, setTitle] = useState("");
	const [repetition, setRepetition] = useState("none");
	const [additionalInfo, setAdditionalInfo] = useState("");
	const [description, setDescription] = useState("");

	const addAppointment = () => {
		const newAppointment: Appointment = {
			id: appointments.length + 1,
			title,
			repetition,
			description,
		};
		setAppointments([...appointments, newAppointment]);
		setTitle("");
		setRepetition("none");
		setAdditionalInfo("");
		setDescription("");
	};

	const handleCheckboxChange = (value: string) => {
		setRepetition(repetition === value ? "none" : value);
	};

	return (
		<div className="appointment-planner">
			<div className="title-section">
				<h1 className="title-with-underline">Afspraak toevoegen</h1>
				<div className="appointment-form">
					<h2 className="title-of-title-bar">Titel afspraak</h2>
					<input type="text" placeholder="Typ je titel" value={title} onChange={(e) => setTitle(e.target.value)} className="title-input" />
				</div>
			</div>
			<div className="repetition-section">
				<h2 className="title-of-repetition">
					Herhaling <span className="optional">(Optioneel)</span>
				</h2>
				<div className="repetition-options">
					<label className="custom-checkbox">
						<div className={`checkbox ${repetition === "daily" ? "selected" : ""}`} onClick={() => handleCheckboxChange("daily")}></div>
						Dagelijks
					</label>
					<label className="custom-checkbox">
						<div className={`checkbox ${repetition === "weekly" ? "selected" : ""}`} onClick={() => handleCheckboxChange("weekly")}></div>
						Wekelijks
					</label>
					<label className="custom-checkbox">
						<div className={`checkbox ${repetition === "monthly" ? "selected" : ""}`} onClick={() => handleCheckboxChange("monthly")}></div>
						Maandelijks
					</label>
					<label className="custom-checkbox">
						<div className={`checkbox ${repetition === "custom" ? "selected" : ""}`} onClick={() => handleCheckboxChange("custom")}></div>
						Anders, namelijk:
					</label>
				</div>
			</div>
			{repetition === "custom" && (
				<div className="additional-info-section">
					<input type="text" placeholder="Beschrijf hoe frequent de afspraak zal worden herhaald" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} className="title-input" />
				</div>
			)}
			<div className="description-section">
				<h2 className="title-of-title-bar">Beschrijving afspraak</h2>
				<textarea placeholder="Typ de beschrijving" value={description} onChange={(e) => setDescription(e.target.value)} className="description-textarea" />
			</div>
			<div className="patient-section">
				<h2 className="title-of-title-bar">Patiënt toevoegen</h2>
				<div className="add-patient"></div>
			</div>
			<button className="cancel-button"></button>
		</div>
	);
};

export default AppointmentPlanner;
