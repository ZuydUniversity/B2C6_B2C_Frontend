// src/components/PatientList.tsx
import React from "react";
import "./componentstyles/patientlist.css";
import { Patient } from "../abstracts/ImportsModels";

export const patients = [
	new Patient("John", "Doe", "john.doe@example.com", 34, "123-456-7890", true, "Jane", "Doe", "jane.doe@example.com", "098-765-4321"),
	new Patient("Alice", "Smith", "alice.smith@example.com", 28, "111-222-3333", false, "Bob", "Smith", "bob.smith@example.com", "444-555-6666"),
	new Patient("David", "Johnson", "david.johnson@example.com", 45, "777-888-9999", true, "Emily", "Johnson", "emily.johnson@example.com", "000-111-2222"),
	// Add more patients as needed
];

interface PatientListProps {
	onPatientClick: (id: number) => void;
}

const PatientList: React.FC<PatientListProps> = ({ onPatientClick }) => {
	return (
		<div className="patientlist-container">
			<h4 className="patient-title">Alle patienten</h4>
			<div className="patientlist-header">
				<div className="patient-label-container">
					<div>naam</div>
					<div>email</div>
					<div>geslacht</div>
					<div>afspraken</div>
				</div>
			</div>
			{patients.map((patient) => (
				<div key={patient.Id} className="patient-row-wrapper">
					<div className="patient-row" id="patient-click-container" onClick={() => onPatientClick(patient.Id)}>
						<div className="patient-value-container">
							<div className="patient-value" id="patient-name">{`${patient.Firstname} ${patient.Lastname}`}</div>
							<div className="patient-value" id="patient-email">
								{patient.Email}
							</div>
							<div className="patient-value" id="patient-sex">
								{patient.Sex ? "Male" : "Female"}
							</div>
							<div className="patient-value" id="patient-appointment-count">
								{patient.Appointments.length}
							</div>
						</div>
					</div>
					<div className="extra-card">...</div>
				</div>
			))}
		</div>
	);
};

export default PatientList;
