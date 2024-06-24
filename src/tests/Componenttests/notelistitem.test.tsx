import { render } from "@testing-library/react";
import { Note, Specialist, Patient, Session, Appointment } from "../../abstracts/ImportsModels";
import NoteListItem from "../../components/notelistitem";

// Set const values for the tests
const baseSpecialist1 = new Specialist("Barack", "Obama", "JohnDoe@gmail.com", "0612345678");

const patient = new Patient("Jane", "English", "Jane.English@yahoo.com", 25, "0612345678", false, "Tarzan", "English", "Tarzan.English@yahoo.com", "0612345678");

const appointment = new Appointment("Appointment 1", new Date(2021, 11, 1), new Date(2021, 11, 2), baseSpecialist1, patient);

const session1 = new Session("Session 1", appointment.Startdatetime, appointment.Enddatetime, appointment.Specialist, appointment.Patient, appointment);

const note1 = new Note("Note 1", "This is a note", baseSpecialist1, patient, session1);
const note2 = new Note("Note 2", "This is another note", baseSpecialist1);

// Test the Notes component
describe("Notes component", () => {
	it("should render the Notes component with all properties", () => {
		render(<NoteListItem key={note1.Id} note={note1} />);

		const noteListItem = document.getElementsByClassName("note-list-item")[0];
		expect(noteListItem).toBeInTheDocument();

		const noteName = document.getElementsByClassName("note-name")[0] as HTMLElement;
		expect(noteName.textContent).toBe(note1.Name);

		const noteSpecialist = document.getElementsByClassName("note-specialist")[0] as HTMLElement;
		expect(noteSpecialist.textContent).toBe(note1.Specialist.Firstname + " " + note1.Specialist.Lastname);

		const notePatient = document.getElementsByClassName("note-patient")[0] as HTMLElement;
		expect(notePatient.textContent).toBe(note1.Patient?.Firstname + " " + note1.Patient?.Lastname);

		const noteSession = document.getElementsByClassName("note-session")[0] as HTMLElement;
		expect(noteSession.textContent).toBe(note1.Session?.Name);
	});

  it("should render the Notes component without properties", () => {
    render(<NoteListItem key={note2.Id} note={note2} />);

    const noteListItem = document.getElementsByClassName("note-list-item")[0];
    expect(noteListItem).toBeInTheDocument();

    const noteName = document.getElementsByClassName("note-name")[0] as HTMLElement;
    expect(noteName.textContent).toBe(note2.Name);

    const noteSpecialist = document.getElementsByClassName("note-specialist")[0] as HTMLElement;
    expect(noteSpecialist.textContent).toBe(note2.Specialist.Firstname + " " + note2.Specialist.Lastname);

    const notePatient = document.getElementsByClassName("note-patient")[0] as HTMLElement;
    expect(notePatient.textContent).toBe("-");

    const noteSession = document.getElementsByClassName("note-session")[0] as HTMLElement;
    expect(noteSession.textContent).toBe("-");
  });
});
