import * as React from "react";
import "./styles/artssession.css";

interface PatientSelectProps {
	onSelect: () => void;
}

const PatientSelect: React.FC<PatientSelectProps> = ({ onSelect }) => {
	return (
		<section className="flex-container">
			<button onClick={onSelect} className="select-patient-button flex-container" aria-label="Select patient">
				<span className="selecting patient">Selecteer patiënt</span>
			</button>
		</section>
	);
};

const AddPatientSelection: React.FC = () => {
	const handleSelect = () => {};

	return (
		<main className="main-patient-container">
			<header className="header-text">Sessie Toevoegen</header>
			<hr className="divider" />
			<h2 className="sub-header">Patiëntgegevens</h2>
			<hr className="divider2" />
			<PatientSelect onSelect={handleSelect} />
		</main>
	);
};

export default AddPatientSelection;
