import * as React from "react";
import "./styles/artssession.css"; //So the sessionpages have the same styling

// Define hardcoded patient data
const patients = [
	{
		name: "Joep Doe",
		age: "10 jaar",
		imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&",
	},
	{
		name: "Joep Doe",
		age: "10 jaar",
		imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&",
	},
	{
		name: "Joep Doe",
		age: "10 jaar",
		imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cbc49fe5e5cad6f542ab1afdfa1a584a22b1d760a502af4d81ca29d57f2d10c?apiKey=070967f8f2f74db686d34af20d021ec7&",
	},
	// Add more patients as needed
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
		window.location.href = "/activephysiosession"; //BAD PRACTICE <3
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
								<img src={patient.imageUrl} alt={patient.name} className="patient-image" />
								<div className="patient-details">
									<div className="patient-info">
										<div className="patient-info-section">
											<span className="patient-label">Naam:</span>
											<span className="patient-data">{patient.name}</span>
										</div>
										<div className="patient-info-section">
											<span className="patient-label">Leeftijd:</span>
											<span className="patient-data">{patient.age}</span>
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
