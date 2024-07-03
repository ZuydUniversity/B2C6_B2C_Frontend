import React, { useState } from "react";
import "./styles/notes.css";
import NoteListItem from "../components/notelistitem";
import { Note, Specialist, Patient, Appointment, Session, getAllNotes } from "../abstracts/ImportsModels";

// Set constant values for the tests
const baseSpecialist1 = new Specialist("Barack", "Obama", "JohnDoe@gmail.com", "0612345678");
const baseSpecialist2 = new Specialist("John", "Doe", "JohnDoe@gmail.com", "0612345678");
const patient = new Patient("John", "Doe", "john.doe@example.com", 34, "123-456-7890", "john.smith@example.com", "444-555-6666", "Male");
const appointment = new Appointment("Appointment 1", new Date(2021, 11, 1), new Date(2021, 11, 2), baseSpecialist1, patient);
export const testNotes: (Note | undefined)[] = [
  new Note("Note 1", "This is the first note.", baseSpecialist1, null, new Session("Session 1", appointment.Startdatetime, appointment.Enddatetime, appointment.Specialist, appointment.Patient, appointment)),
  new Note("Note 6", "This is the second note.", baseSpecialist2, patient, new Session("Session 2", appointment.Startdatetime, appointment.Enddatetime, appointment.Specialist, appointment.Patient, appointment)),
  new Note("Note 3", "This is the third note.", baseSpecialist2, patient),
  new Note("Note 4", "This is the fourth note.", baseSpecialist1),
];

let debug = false;
let _debug = false;

export function setDebug(value: boolean) {
  debug = value;
}

export function set_Debug(value: boolean) {
  _debug = value;
}

let allNotes: (Note | undefined)[] = [];

const Notes: React.FC = () => {
  // Get all notes from the server
  async function getNotes ()  {
    if (debug === false) {
      try {
        var getNotesResponse: (Note | undefined)[] | undefined = undefined;
        if (_debug === false) {
          getNotesResponse = await getAllNotes();
        }
        allNotes = getNotesResponse ?? [];
        if (_debug === true) {
          throw new Error("Debug mode enabled, no connection to backend.")
        }
      } catch (error) {
        return [];
      }
    } else {
      allNotes = testNotes;
    }
  }
  getNotes();

	const [notes, setNotes] = useState<(Note | undefined)[]>(allNotes);
	const [filteredByName, setFilteredByName] = useState<boolean>(false);
	const [filteredBySpecialist, setFilteredBySpecialist] = useState<boolean>(false);
	const [filteredByPatient, setFilteredByPatient] = useState<boolean>(false);
	const [filteredBySession, setFilteredBySession] = useState<boolean>(false);

	// Sort notes by name
	const sortNotesByName = () => {
    if (notes !== undefined) {
      // Copy the notes array
      let sortedNotes = [...notes];

      // Check if it is already sorted by name, if so, reverse the list
      if (filteredByName) {
        // sortedNotes.reverse();
        sortedNotes.sort((a: Note | undefined, b: Note | undefined) => (b ?? new Note("","")).Name.localeCompare((a ?? new Note("","")).Name));
        setFilteredByName(false);
      } else {
        sortedNotes.sort((a: Note | undefined, b: Note | undefined) => (a ?? new Note("","")).Name.localeCompare((b ?? new Note("","")).Name));
        setFilteredByName(true);
      }

      // Set all other filters to false
      setFilteredBySpecialist(false);
      setFilteredByPatient(false);
      setFilteredBySession(false);

      // Update the notes array
      setNotes(sortedNotes);
    }
	};

	// Sort notes by specialist
	const sortNotesBySpecialist = () => {
		// Copy the notes array
		let sortedNotes = [...notes];

		// Check if it is already sorted by specialist, if so, reverse the list
		if (filteredBySpecialist) {
			//sortedNotes.reverse();
      sortedNotes.sort((a: Note | undefined, b: Note | undefined) => ((b ?? new Note("","")).Specialist?.Firstname ?? "").localeCompare((a ?? new Note("","")).Specialist?.Firstname ?? ""));
			setFilteredBySpecialist(false);
		} else {
			sortedNotes.sort((a: Note | undefined, b: Note | undefined) => ((a ?? new Note("","")).Specialist?.Firstname ?? "").localeCompare((b ?? new Note("","")).Specialist?.Firstname ?? ""));
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
			//sortedNotes.reverse();
      sortedNotes.sort((a: Note | undefined, b: Note | undefined) => {
        let _a = a ?? new Note("","");
        let _b = b ?? new Note("","");
				if (_a.Patient === null && _b.Patient === null) {
					return 0; // Beschouw ze als gelijk
				} else if (_a.Patient === null) {
					return 1; // plaats a achter b
				} else if (_b.Patient === null) {
					return -1; // plaats b achter a
				} else {
					return _b.Patient.Firstname.localeCompare(_a.Patient.Firstname);
				}
			});
			setFilteredByPatient(false);
		} else {
			sortedNotes.sort((a: Note | undefined, b: Note | undefined) => {
        let _a = a ?? new Note("","");
        let _b = b ?? new Note("","");
				if (_a.Patient === null && _b.Patient === null) {
					return 0; // Beschouw ze als gelijk
				} else if (_a.Patient === null) {
					return 1; // plaats a achter b
				} else if (_b.Patient === null) {
					return -1; // plaats b achter a
				} else {
					return _a.Patient.Firstname.localeCompare(_b.Patient.Firstname);
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
			//sortedNotes.reverse();
      sortedNotes.sort((a: Note | undefined, b: Note | undefined) => {
        let _a = a ?? new Note("","");
        let _b = b ?? new Note("","");
				if (_a.Session === null && _b.Session === null) {
					return 0; // Beschouw ze als gelijk
				} else if (_a.Session === null) {
					return 1; // plaats a achter b
				} else if (_b.Session === null) {
					return -1; // plaats b achter a
				} else {
					return _b.Session.Name.localeCompare(_a.Session.Name);
				}
			});
			setFilteredBySession(false);
		} else {
			sortedNotes.sort((a: Note | undefined, b: Note | undefined) => {
        let _a = a ?? new Note("","");
        let _b = b ?? new Note("","");
				if (_a.Session === null && _b.Session === null) {
					return 0; // Beschouw ze als gelijk
				} else if (_a.Session === null) {
					return 1; // plaats a achter b
				} else if (_b.Session === null) {
					return -1; // plaats b achter a
				} else {
					return _a.Session.Name.localeCompare(_b.Session.Name);
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
			<h1 className="notes-header">Notities</h1>

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
						{notes.map((note: Note | undefined, index: number) => {
							return <NoteListItem key={(note ?? new Note("","")).Id ?? index} note={note} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notes;
