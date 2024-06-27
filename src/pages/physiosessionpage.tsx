import * as React from "react";
import "./styles/artssession.css"; //So the sessionpages have the same styling
import { Patient } from "../models/Patient";

// Define hardcoded patient data
const patients = [
	new Patient("John", "Doe", "john.doe@example.com", 34, "123-456-7890", "jane.doe@example.com", "098-765-4321", "Male", "https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&"),
	new Patient("Alice", "Smith", "alice.smith@example.com", 28, "111-222-3333", "bob.smith@example.com", "444-555-6666", "Female", "https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&"),
	new Patient("David", "Johnson", "david.johnson@example.com", 45, "777-888-9999", "emily.johnson@example.com", "000-111-2222", "Male", "https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&"),
];

interface PatientSelectProps {
	onSelect: () => void;
}

const PatientSelect: React.FC<PatientSelectProps> = ({ onSelect }) => {
	const [showPatients, setShowPatients] = React.useState(false);

	const handleOpenListClick = () => {
		onSelect(); // Call the parent component's onSelect function
		setShowPatients(!showPatients); // Toggle to show/hide patient list
	};

	const handleOutsideClick = (e: MouseEvent) => {
		// Check if click is outside the patient list
		const target = e.target as HTMLElement;
		if (!target.closest(".patient-list")) {
			setShowPatients(false); // Hide patient list
		}
	};

	const addPatientToSession = () => {
		window.location.href = "/activephysiosession"; //BAD PRACTICE <3 --> WHY THA FUCK DID YOU DO IT THEN!!!
	};

	React.useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<section className="flex-container">
			<button onClick={handleOpenListClick} className="select-patient-button" aria-label="Select patient">
				<span className="add-patient-to-session-icon selecting patient">Selecteer patiënt</span>
			</button>
			{showPatients && (
				<ul className="patient-list">
					{patients.map((patient, index) => (
						<React.Fragment key={index}>
							<li className="patient-item">
								<img src={patient.ImagePath} alt={patient.Firstname} className="patient-image" />
								<div className="patient-details">
									<div className="patient-info">
										<div className="patient-info-section">
											<span className="patient-label">Naam:</span>
											<span className="patient-data">{patient.Firstname}</span>
										</div>
										<div className="patient-info-section">
											<span className="patient-label">Leeftijd:</span>
											<span className="patient-data">{patient.Age}</span>
										</div>
									</div>
								</div>
								<button onClick={addPatientToSession} className="add-button">
									+
								</button>
							</li>
							{index < patients.length - 1 && <hr className="patient-divider" />}
						</React.Fragment>
					))}
				</ul>
			)}
		</section>
	);
};

const AddPatientSelection: React.FC = () => {
	const handleSelect = () => { };

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
