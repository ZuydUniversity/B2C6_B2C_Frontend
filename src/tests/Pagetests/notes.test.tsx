import { render, screen, fireEvent } from "@testing-library/react";
import { Note, Specialist, Patient, Session, Appointment } from "../../abstracts/ImportsModels";
import Notes, { setDebug, set_Debug, testNotes } from "../../pages/notes";

const baseSpecialist1 = new Specialist("Barack", "Obama", "JohnDoe@gmail.com", "0612345678");
const baseSpecialist2 = new Specialist("John", "Doe", "JohnDoe@gmail.com", "0612345678");
const patient = new Patient("John", "Doe", "john.doe@example.com", 34, "123-456-7890", "john.smith@example.com", "444-555-6666", "Male");
const appointment = new Appointment("Appointment 1", new Date(2021, 11, 1), new Date(2021, 11, 2), baseSpecialist1, patient);
var allNotes: Note[] = [
  new Note("Note 1", "This is the first note.", baseSpecialist1, null, new Session("Session 1", appointment.Startdatetime, appointment.Enddatetime, appointment.Specialist, appointment.Patient, appointment)),
  new Note("Note 6", "This is the second note.", baseSpecialist2, patient, new Session("Session 2", appointment.Startdatetime, appointment.Enddatetime, appointment.Specialist, appointment.Patient, appointment)),
  new Note("Note 3", "This is the third note.", baseSpecialist2, patient),
  new Note("Note 4", "This is the fourth note.", baseSpecialist1),
];

var _testNotes: (Note | undefined)[] = (testNotes ?? []).map((note) => note ?? new Note("", ""));
if (testNotes === undefined) {
  _testNotes = allNotes;
}

setDebug(true);
set_Debug(true);

// Test the sorting functions
describe("Tests sorting functions by Name", () => {
	it("Render the list of notes", () => {
		render(<Notes />);
		const notesListed = document.getElementsByClassName("note-list-container");
		expect(notesListed).not.toBeNull();

		// Check if collection of notes equals the set of initial notes
		for (var i = 0; i < notesListed.length; i++) {
      const testnote: Note = (_testNotes[i] ?? new Note("", ""));
			const note: Element = notesListed[i];

			const noteNameElement = note.querySelector(".note-name");
			const noteSpecialistElement = note.querySelector(".note-specialist");
			const notePatientElement = note.querySelector(".note-patient");
			const noteSessionElement = note.querySelector(".note-session");

			const noteName = noteNameElement ? noteNameElement.textContent : "";
			const noteSpecialist = noteSpecialistElement ? noteSpecialistElement.textContent : "";
			const notePatient = notePatientElement ? notePatientElement.textContent : "";
			const noteSession = noteSessionElement ? noteSessionElement.textContent : "";

			expect(noteName).not.toBeNull();
			expect(noteSpecialist).not.toBeNull();

			expect(noteName).toBe(testnote.Name);
			expect(noteSpecialist).toBe(testnote.Specialist?.Firstname + " " + testnote.Specialist?.Lastname);

			testnote.Patient === null ? expect(notePatient).toBe("-") : expect(notePatient).toBe(testnote.Patient?.Firstname + " " + testnote.Patient?.Lastname);

			testnote.Session === null ? expect(noteSession).toBe("-") : expect(noteSession).toBe(testnote.Session?.Name);
		}
	});

  it("should not assign debug value to true", () => {
    setDebug(false);
    render(<Notes />);
  });

  it("should not assign debug values to true", () => {
    setDebug(false);
    set_Debug(false);
    render(<Notes />);
  });

	it("sortNotesByName sorts notes by name in ascending order", () => {
		render(<Notes />);

		const newtestnote = [..._testNotes].sort((a: Note | undefined, b: Note | undefined) => (a ?? new Note("", "")).Name.localeCompare((b ?? new Note("", "")).Name));

		// Click the sort by name button
		const sortByNameButton = document.getElementById("dropdown_arrow_name") as HTMLButtonElement;
		fireEvent.click(sortByNameButton);
		const notesListedSorted = document.getElementsByClassName("note-list-container");
		expect(notesListedSorted).not.toBeNull();

		// Check if the notes are still the same and in ascending order
		const orderedNotesNames = [];
		for (var i = 0; i < notesListedSorted.length; i++) {
			const note: Element = notesListedSorted[i];

			const noteNameElement = note.querySelector(".note-name");
			const noteSpecialistElement = note.querySelector(".note-specialist");

			const noteName = noteNameElement ? noteNameElement.textContent : "";
			const noteSpecialist = noteSpecialistElement ? noteSpecialistElement.textContent : "";

			expect(noteName).not.toBeNull();
			expect(noteSpecialist).not.toBeNull();

			expect(noteName).toBe((newtestnote[i] ?? new Note("","")).Name);

			orderedNotesNames.push(noteName);
		}

		// Check if the notes are in ascending order
		const sortedNotesNames = [...orderedNotesNames].sort();
		expect(orderedNotesNames).toEqual(sortedNotesNames);
	});

	it("sortNotesByName sorts notes by name in descending order", () => {
		render(<Notes />);

		const newtestnote = [..._testNotes].sort((a: Note | undefined, b: Note | undefined) => (a ?? new Note("", "")).Name.localeCompare((b ?? new Note("", "")).Name)).reverse();

		// Click the sort by name button
		const sortByNameButton = document.getElementById("dropdown_arrow_name") as HTMLButtonElement;
		fireEvent.click(sortByNameButton); //Sort
		fireEvent.click(sortByNameButton); //Reverse
		const notesListedSorted = document.getElementsByClassName("note-list-container");
		expect(notesListedSorted).not.toBeNull();

		// Check if the notes are still the same and in descending order
		const orderedNotesNames = [];
		for (var i = 0; i < notesListedSorted.length; i++) {
			const note: Element = notesListedSorted[i];

			const noteNameElement = note.querySelector(".note-name");
			const noteSpecialistElement = note.querySelector(".note-specialist");

			const noteName = noteNameElement ? noteNameElement.textContent : "";
			const noteSpecialist = noteSpecialistElement ? noteSpecialistElement.textContent : "";

			expect(noteName).not.toBeNull();
			expect(noteSpecialist).not.toBeNull();

			expect(noteName).toBe((newtestnote[i] ?? new Note("", "")).Name);

			orderedNotesNames.push(noteName);
		}

		// Check if the notes are in descending order
		const sortedNotesNames = [...orderedNotesNames].sort().reverse();
		expect(orderedNotesNames).toEqual(sortedNotesNames);
	});

	it("sortNotesBySpecialist sorts notes by name in ascending order", () => {
		render(<Notes />);

		const newtestnote = [..._testNotes].sort((a: Note | undefined, b: Note | undefined) => ((a ?? new Note("", "")).Specialist && (b ?? new Note("", "")).Specialist ? (a?.Specialist?.Firstname || "").localeCompare((b?.Specialist?.Firstname || "")) : 0));

		// Click the sort by name button
		const sortBySpecialistButton = document.getElementById("dropdown_arrow_specialist") as HTMLButtonElement;
		fireEvent.click(sortBySpecialistButton);
		const notesListedSorted = document.getElementsByClassName("note-list-container");
		expect(notesListedSorted).not.toBeNull();

		// Check if the notes are still the same and in ascending order
		const orderedNotesSpecialist = [];
		for (var i = 0; i < notesListedSorted.length; i++) {
			const note: Element = notesListedSorted[i];

			const noteNameElement = note.querySelector(".note-name");
			const noteSpecialistElement = note.querySelector(".note-specialist");

			const noteName = noteNameElement ? noteNameElement.textContent : "";
			const noteSpecialist = noteSpecialistElement ? noteSpecialistElement.textContent : "";

			expect(noteName).not.toBeNull();
			expect(noteSpecialist).not.toBeNull();

			expect(noteSpecialist).toBe(((newtestnote[i] ?? new Note("","")).Specialist?.Firstname ?? "") + " " + ((newtestnote[i] ?? new Note("","")).Specialist?.Lastname ?? ""));

			orderedNotesSpecialist.push(noteSpecialist);
		}

		// Check if the notes are in ascending order
		const sortedNotesSpecialist = [...orderedNotesSpecialist].sort();
		expect(orderedNotesSpecialist).toEqual(sortedNotesSpecialist);
	});

	it("sortNotesBySpecialist sorts notes by name in descending order", () => {
		render(<Notes />);

		const newtestnote = [..._testNotes].sort((a: Note | undefined, b: Note | undefined) => ((a ?? new Note("","")).Specialist && (b ?? new Note("","")).Specialist ? (a?.Specialist?.Firstname ?? "").localeCompare(b?.Specialist?.Firstname ?? "") : 0)).reverse();

		// Click the sort by name button
		const sortBySpecialistButton = document.getElementById("dropdown_arrow_specialist") as HTMLButtonElement;
		fireEvent.click(sortBySpecialistButton); //Sort
		fireEvent.click(sortBySpecialistButton); //Reverse
		const notesListedSorted = document.getElementsByClassName("note-list-container");
		expect(notesListedSorted).not.toBeNull();

		// Check if the notes are still the same and in descending order
		const orderedNotesSpecialist = [];
		for (var i = 0; i < notesListedSorted.length; i++) {
			const note: Element = notesListedSorted[i];

			const noteNameElement = note.querySelector(".note-name");
			const noteSpecialistElement = note.querySelector(".note-specialist");

			const noteName = noteNameElement ? noteNameElement.textContent : "";
			const noteSpecialist = noteSpecialistElement ? noteSpecialistElement.textContent : "";

			expect(noteName).not.toBeNull();
			expect(noteSpecialist).not.toBeNull();

			expect(noteSpecialist).toBe(((newtestnote[i] ?? new Note("","")).Specialist?.Firstname ?? "") + " " + ((newtestnote[i] ?? new Note("","")).Specialist?.Lastname ?? ""));

			orderedNotesSpecialist.push(noteSpecialist);
		}

		// Check if the notes are in descending order
		const sortedNotesSpecialists = [...orderedNotesSpecialist].sort().reverse();
		expect(orderedNotesSpecialist).toEqual(sortedNotesSpecialists);
	});

	it("sortNotesByPatient sorts notes by name in ascending order", () => {
		render(<Notes />);

		const newtestnote = [..._testNotes].sort((a: Note | undefined, b: Note | undefined) => {
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

		// Click the sort by name button
		const sortByPatientButton = document.getElementById("dropdown_arrow_patient") as HTMLButtonElement;
		fireEvent.click(sortByPatientButton);
		const notesListedSorted = document.getElementsByClassName("note-list-container");
		expect(notesListedSorted).not.toBeNull();

		// Check if the notes are in ascending order
		const sortedNotesPatients = [...newtestnote].sort((a: Note | undefined, b: Note | undefined) => {
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
		expect(newtestnote).toEqual(sortedNotesPatients);
    // expect(orderedNotesPatients).toEqual(sortedNotesPatients.map((note) => note?.Patient ? note?.Patient?.Firstname + " " + note?.Patient?.Lastname : "-"));
	});

	it("sortNotesByPatient sorts notes by name in descending order", () => {
		setDebug(true);
    render(<Notes />);

		const newtestnote = [..._testNotes].sort((a: Note | undefined, b: Note | undefined) => {
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

		// Click the sort by name button
		const sortByPatientButton = document.getElementById("dropdown_arrow_patient") as HTMLButtonElement;
		fireEvent.click(sortByPatientButton); //Sort
		fireEvent.click(sortByPatientButton); //Reverse
		const notesListedSorted = document.getElementsByClassName("note-list-container");
		expect(notesListedSorted).not.toBeNull();

		// Check if the notes are in descending order
    const orderedNotesPatients = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
			const note: Element = notesListedSorted[i];

			const noteNameElement = note.querySelector(".note-name");
      const noteName = noteNameElement ? noteNameElement.textContent : "";
      expect(noteName).not.toBeNull();

			const noteSpecialistElement = note.querySelector(".note-specialist");
			const noteSpecialist = noteSpecialistElement ? noteSpecialistElement.textContent : "";
			expect(noteSpecialist).not.toBeNull();

			const patientName = note.querySelector(".note-patient")?.textContent;
      expect(patientName).not.toBeNull();
      orderedNotesPatients.push(patientName);
		}

    // Check if the notes are still the same and in descending order
    const sortedNotesPatients = [...newtestnote].sort((a: Note | undefined, b: Note | undefined) => {
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
    expect(newtestnote).toEqual(sortedNotesPatients);
    expect(orderedNotesPatients).toEqual(sortedNotesPatients.map((note) => note?.Patient ? note?.Patient?.Firstname + " " + note?.Patient?.Lastname : "-"));
	});

	it("sortNotesBySession sorts notes by name in ascending order", () => {
		render(<Notes />);

		const newtestnote = [..._testNotes].sort((a: Note | undefined, b: Note | undefined) => {
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

		// Click the sort by name button
		const sortBySessionButton = document.getElementById("dropdown_arrow_session") as HTMLButtonElement;
		fireEvent.click(sortBySessionButton);
		const notesListedSorted = document.getElementsByClassName("note-list-container");
		expect(notesListedSorted).not.toBeNull();

		// Check if the notes are still the same and in ascending order
		const orderedNotesSession = [];
		for (var i = 0; i < notesListedSorted.length; i++) {
			const note: Element = notesListedSorted[i];

			const noteNameElement = note.querySelector(".note-name");
      const noteName = noteNameElement ? noteNameElement.textContent : "";
      expect(noteName).not.toBeNull();

			const noteSpecialistElement = note.querySelector(".note-specialist");
      const noteSpecialist = noteSpecialistElement ? noteSpecialistElement.textContent : "";
      expect(noteSpecialist).not.toBeNull();

			const noteSessionElement = note.querySelector(".note-session");
			const noteSession = noteSessionElement ? noteSessionElement.textContent : "";

			if ((newtestnote[i] ?? new Note("","")).Session === null || (newtestnote[i] ?? new Note("","")).Session === undefined) {
				expect(noteSession).toBe("-");
			} else {
				expect(noteSession).toBe((newtestnote[i] ?? new Note("","")).Session?.Name);
			}

			orderedNotesSession.push(noteSession);
		}

		// Check if the notes are in ascending order
		const sortedNotesSessions = [...newtestnote].map((note) => ((note ?? new Note("","")).Session ? (note ?? new Note("","")).Session?.Name : "-"));
    const checkSortingList = [...newtestnote].sort((a: Note | undefined, b: Note | undefined) => {
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
		}).map((note) => ((note ?? new Note("","")).Session ? (note ?? new Note("","")).Session?.Name : "-"));
    expect(checkSortingList).toEqual(sortedNotesSessions);
    expect(orderedNotesSession).toEqual(sortedNotesSessions);
	});

	it("sortNotesBySession sorts notes by name in descending order", () => {
		render(<Notes />);

		const newtestnote = [..._testNotes]
			.sort((a: Note | undefined, b: Note | undefined) => {
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

		// Click the sort by name button
		const sortBySessionButton = document.getElementById("dropdown_arrow_session") as HTMLButtonElement;
		fireEvent.click(sortBySessionButton); //Sort
		fireEvent.click(sortBySessionButton); //Reverse
		const notesListedSorted = document.getElementsByClassName("note-list-container");
		expect(notesListedSorted).not.toBeNull();

		// Check if the notes are still the same and in descending order
		const orderedNotesSession = [];
		for (var i = 0; i < notesListedSorted.length; i++) {
			const note: Element = notesListedSorted[i];

			const noteNameElement = note.querySelector(".note-name");
      const noteName = noteNameElement ? noteNameElement.textContent : "";
      expect(noteName).not.toBeNull();

			const noteSpecialistElement = note.querySelector(".note-specialist");
      const noteSpecialist = noteSpecialistElement ? noteSpecialistElement.textContent : "";
      expect(noteSpecialist).not.toBeNull();

			const noteSessionElement = note.querySelector(".note-session");			
			const noteSession = noteSessionElement ? noteSessionElement.textContent : "";			

			if ((newtestnote[i] ?? new Note("","")).Session === null || undefined) {
				expect(noteSession).toBe("-");
			} else {
				expect(noteSession).toBe((newtestnote[i] ?? new Note("","")).Session?.Name);
			}

			orderedNotesSession.push(noteSession);
		}

		// Check if the notes are in descending order
		const sortedNotesSessions = [...newtestnote].map((note) => ((note ?? new Note("","")).Session ? (note ?? new Note("","")).Session?.Name : "-"));
    const checkSortingList = [...newtestnote].sort((a: Note | undefined, b: Note | undefined) => {
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
		}).map((note) => ((note ?? new Note("","")).Session ? (note ?? new Note("","")).Session?.Name : "-"));
		expect(checkSortingList).toEqual(sortedNotesSessions);
    expect(orderedNotesSession).toEqual(sortedNotesSessions);
	});
});
