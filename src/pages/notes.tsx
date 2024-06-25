import React, { useState } from "react";
import "./styles/notes.css";
import NoteListItem from "../components/notelistitem";
import { Note, Specialist, Patient, Appointment, Session } from "../abstracts/ImportsModels";

// Set constant values for the tests
const baseSpecialist1 = new Specialist("Barack", "Obama", "JohnDoe@gmail.com", "0612345678");
const baseSpecialist2 = new Specialist("John", "Doe", "JohnDoe@gmail.com", "0612345678");

const patient = new Patient("Jane", "English", "Jane.English@yahoo.com", 25, "0612345678", false, "Tarzan", "English", "Tarzan.English@yahoo.com", "0612345678");

const appointment = new Appointment("Appointment 1", new Date(2021, 11, 1), new Date(2021, 11, 2), baseSpecialist1, patient);

const session1 = new Session("Session 1", appointment.Startdatetime, appointment.Enddatetime, appointment.Specialist, appointment.Patient, appointment);
const session2 = new Session("Session 2", appointment.Startdatetime, appointment.Enddatetime, appointment.Specialist, appointment.Patient, appointment);

export var initialNotes: Note[] = [
	new Note("Note 1", "This is the first note.", baseSpecialist1, null, session1),
	new Note("Note 6", "This is the second note.", baseSpecialist2, patient, session2),
	new Note("Note 3", "This is the third note.", baseSpecialist2, patient),
	new Note("Note 4", "This is the fourth note.", baseSpecialist1),
];

const Notes: React.FC = () => {
	const [notes, setNotes] = useState<Note[]>(initialNotes);
	const [filteredByName, setFilteredByName] = useState<boolean>(false);
	const [filteredBySpecialist, setFilteredBySpecialist] = useState<boolean>(false);
	const [filteredByPatient, setFilteredByPatient] = useState<boolean>(false);
	const [filteredBySession, setFilteredBySession] = useState<boolean>(false);

	// Sort notes by name
	const sortNotesByName = () => {
		// Copy the notes array
		let sortedNotes = [...notes];

		// Check if it is already sorted by name, if so, reverse the list
		if (filteredByName) {
			sortedNotes.reverse();
			setFilteredByName(false);
		} else {
			sortedNotes.sort((a: Note, b: Note) => a.Name.localeCompare(b.Name));
			setFilteredByName(true);
		}

		// Set all other filters to false
		setFilteredBySpecialist(false);
		setFilteredByPatient(false);
		setFilteredBySession(false);

		// Update the notes array
		setNotes(sortedNotes);
	};

	// Sort notes by specialist
	const sortNotesBySpecialist = () => {
		// Copy the notes array
		let sortedNotes = [...notes];

		// Check if it is already sorted by specialist, if so, reverse the list
		if (filteredBySpecialist) {
			sortedNotes.reverse();
			setFilteredBySpecialist(false);
		} else {
			sortedNotes.sort((a: Note, b: Note) => a.Specialist.Firstname.localeCompare(b.Specialist.Firstname));
			setFilteredBySpecialist(true);
		}

		// Set all other filters to false
		setFilteredByName(false);
		setFilteredByPatient(false);
		setFilteredBySession(false);

		// Update the notes array
		setNotes(sortedNotes);
	};

	// Sort notes by patient
	const sortNotesByPatient = () => {
		// Copy the notes array
		let sortedNotes = [...notes];

		// Check if it is already sorted by patient, if so, reverse the list
		if (filteredByPatient) {
			sortedNotes.reverse();
			setFilteredByPatient(false);
		} else {
			sortedNotes.sort((a: Note, b: Note) => {
				if (a.Patient === null && b.Patient === null) {
					return 0; // Beschouw ze als gelijk
				} else if (a.Patient === null) {
					return 1; // plaats a achter b
				} else if (b.Patient === null) {
					return -1; // plaats b achter a
				} else {
					return a.Patient.Firstname.localeCompare(b.Patient.Firstname);
				}
			});
			setFilteredByPatient(true);
		}

		// Set all other filters to false
		setFilteredByName(false);
		setFilteredBySpecialist(false);
		setFilteredBySession(false);

		// Update the notes array
		setNotes(sortedNotes);
	};

	// Sort notes by session
	const sortNotesBySession = () => {
		// Copy the notes array
		let sortedNotes = [...notes];

		// Check if it is already sorted by session, if so, reverse the list
		if (filteredBySession) {
			sortedNotes.reverse();
			setFilteredBySession(false);
		} else {
			sortedNotes.sort((a: Note, b: Note) => {
				if (a.Session === null && b.Session === null) {
					return 0; // Beschouw ze als gelijk
				} else if (a.Session === null) {
					return 1; // plaats a achter b
				} else if (b.Session === null) {
					return -1; // plaats b achter a
				} else {
					return a.Session.Name.localeCompare(b.Session.Name);
				}
			});
			setFilteredBySession(true);
		}

		// Set all other filters to false
		setFilteredByName(false);
		setFilteredBySpecialist(false);
		setFilteredByPatient(false);

		// Update the notes array
		setNotes(sortedNotes);
	};

	return (
		<div className="general-container">
			<div className="notes-background">
				{/* Title bar in container */}
				<div className="notes-title">
					<h1>
						Notities
						<hr className="notes-title-line" />
					</h1>
				</div>

				{/* Container for the list of notes (with border) */}
				<div className="notes-container">
					<div className="notes-container-inside">
						{/* Search bar? */}
						<div className="notes-filter-bar">
							Search bar here, maybe? Or a filter bar? Or both? Or neither? Who knows? Not me.
							<hr />
						</div>

						{/* Table sections */}
						<div className="notes-table-sections">
							<div className="notes-table-sections-title table-section-note">
								<h2>Notitie</h2>
								<button onClick={sortNotesByName} className="filter-by-button" id="dropdown_arrow_name">
									<img src={filteredByName ? "Images/dropdown_arrow_reverse.png" : "Images/dropdown_arrow.png"} alt="Arrow down" className="dropdown_arrow" />
								</button>
							</div>
							<div className="notes-table-sections-title table-section-specialist">
								<h2>Specialist</h2>
								<button onClick={sortNotesBySpecialist} className="filter-by-button" id="dropdown_arrow_specialist">
									<img src={filteredBySpecialist ? "Images/dropdown_arrow_reverse.png" : "Images/dropdown_arrow.png"} alt="Arrow down" className="dropdown_arrow" />
								</button>
							</div>
							<div className="notes-table-sections-title table-section-patient">
								<h2>Patiënt</h2>
								<button onClick={sortNotesByPatient} className="filter-by-button" id="dropdown_arrow_patient">
									<img src={filteredByPatient ? "Images/dropdown_arrow_reverse.png" : "Images/dropdown_arrow.png"} alt="Arrow down" className="dropdown_arrow" />
								</button>
							</div>
							<div className="notes-table-sections-title table-section-session">
								<h2>Sessie</h2>
								<button onClick={sortNotesBySession} className="filter-by-button" id="dropdown_arrow_session">
									<img src={filteredBySession ? "Images/dropdown_arrow_reverse.png" : "Images/dropdown_arrow.png"} alt="Arrow down" className="dropdown_arrow" />
								</button>
							</div>
						</div>

						{/* List of notes */}
						<div className="notes-list">
							{notes.map((note: Note, index: number) => {
								return <NoteListItem key={note.Id ?? index} note={note} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notes;
