// src/pages/PatientPage.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import "./styles/stylesheetpatient.css";
import PatientList from "../components/patientlist";

const PatientPage: React.FC = () => {
	const [navigate, setNavigate] = React.useState(false);
	var navigationId = 0;

	const handlePatientClick = (id: number) => {
		navigationId = id;
		return setNavigate(true);
	};

	if (navigate) {
		return <Navigate to={`/patient/${navigationId}`} />;
	}

	return (
		<div className="patient-page">
			<h1 id="title">Patiëntenoverzicht</h1>
			<hr />
			<PatientList onPatientClick={handlePatientClick} />
		</div>
	);
};

export default PatientPage;
