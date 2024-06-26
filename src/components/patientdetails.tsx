// src/components/PatientDetails.tsx
import React from "react";
import "./componentstyles/patientdetails.css";
import { Patient } from "../abstracts/ImportsModels";

type ContactPerson = {
	Phonenumber: string;
	Email: string;
};

interface PatientDetailsProps {
	patient: Patient;
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
	const contactPerson: ContactPerson = {
		Phonenumber: patient.PhonenumberContact,
		Email: patient.EmailContact,
	};

	return (
		<div className="main-container">
			<div className="patient-details-container">
				<div className="patient-info-card">
					<h2>Patiënt</h2>
					<div className="patient-details">
						<div className="patient-info-pair">
							<span className="patient-label">Naam:</span>
							<span id="patient-name" className="patient-value">{`${patient.Firstname} ${patient.Lastname}`}</span>
						</div>
						<div className="patient-info-pair">
							<span className="patient-label">Email:</span>
							<span id="patient-email" className="patient-value">
								{patient.Email}
							</span>
						</div>
						<div className="patient-info-pair">
							<span className="patient-label">Leeftijd:</span>
							<span id="patient-age" className="patient-value">
								{patient.Age}
							</span>
						</div>
						<div className="patient-info-pair">
							<span className="patient-label">Telefoonnummer:</span>
							<span id="patient-phonenumber" className="patient-value">
								{patient.Phonenumber}
							</span>
						</div>
						<div className="patient-info-pair">
							<span className="patient-label">Geslacht:</span>
							<span id="patient-sex" className="patient-value">
								{patient.Sex ? "Male" : "Female"}
							</span>
						</div>
					</div>
				</div>
				<div className="contact-person-info">
					<h2>Contactpersoon</h2>
					<div className="contact-details">
						<div className="contact-info-pair">
							<span className="contact-label">Telefoonnummer:</span>
							<span id="contactperson-phonenumber" className="contact-value">
								{contactPerson.Phonenumber}
							</span>
						</div>
						<div className="contact-info-pair">
							<span className="contact-label">E-mailadres:</span>
							<span id="contactperson-email" className="contact-value">
								{contactPerson.Email}
							</span>
						</div>
					</div>
				</div>
				<div className="medication-info">
					<h2>Medicatie</h2>
					<div className="medication-details">
						<div className="medication-info-pair">
							<span className="medication-label">Medicijn:</span>
							<span className="medication-value">Gebruik</span>
						</div>
						{/* Add more medication details as needed */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PatientDetails;
