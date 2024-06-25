// src/pages/PatientPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";
import CreatePatient from "../components/createpatient";

const PatientPage: React.FC = () => {
	const navigate = useNavigate();
	const [showCreatePatient, setShowCreatePatient] = useState(false);

	const handlePatientClick = (id: number) => {
		navigate(`/patient/${id}`);
	};
	const handleCreatePatient = () => {
		setShowCreatePatient(!showCreatePatient);
	};

	return (
		<div className="patient-page">
			<h1>Patiëntenoverzicht</h1>
			<hr />
			<div>
				<PatientList onPatientClick={handlePatientClick} />
				<button className="createpatient-button" onClick={handleCreatePatient}>
					Nieuwe patiënt
				</button>
				{showCreatePatient && <CreatePatient />}
			</div>
		</div>
	);
};

export default PatientPage;
