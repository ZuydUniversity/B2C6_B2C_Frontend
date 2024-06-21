import { render, screen, fireEvent } from "@testing-library/react";
import {
  Note,
  Specialist,
  Patient,
  Session,
  Appointment,
} from "../../abstracts/ImportsModels";
import Notes, { initialNotes } from "../../pages/notes";

// Test the sorting functions
describe("Tests sorting functions by Name", () => {
  it("Render the list of notes", () => {
    render(<Notes />);
    const notesListed = document.getElementsByClassName("note-list-container");
    expect(notesListed).not.toBeNull();

    // Check if collection of notes equals the set of initial notes
    for (var i = 0; i < notesListed.length; i++) {
      const note: Element = notesListed[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");
      const notePatientElement = note.querySelector(".note-patient");
      const noteSessionElement = note.querySelector(".note-session");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";
      const notePatient = notePatientElement
        ? notePatientElement.textContent
        : "";
      const noteSession = noteSessionElement
        ? noteSessionElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      expect(noteName).toBe(initialNotes[i].Name);
      expect(noteSpecialist).toBe(
        initialNotes[i].Specialist.Firstname +
          " " +
          initialNotes[i].Specialist.Lastname,
      );

      initialNotes[i].Patient === null
        ? expect(notePatient).toBe("-")
        : expect(notePatient).toBe(
            initialNotes[i].Patient?.Firstname +
              " " +
              initialNotes[i].Patient?.Lastname,
          );

      initialNotes[i].Session === null
        ? expect(noteSession).toBe("-")
        : expect(noteSession).toBe(initialNotes[i].Session?.Name);
    }
  });

  it("sortNotesByName sorts notes by name in ascending order", () => {
    render(<Notes />);

    const newInitialNotes = [...initialNotes].sort((a: Note, b: Note) =>
      a.Name.localeCompare(b.Name),
    );

    // Click the sort by name button
    const sortByNameButton = document.getElementById(
      "dropdown_arrow_name",
    ) as HTMLButtonElement;
    fireEvent.click(sortByNameButton);
    const notesListedSorted = document.getElementsByClassName(
      "note-list-container",
    );
    expect(notesListedSorted).not.toBeNull();

    // Check if the notes are still the same and in ascending order
    const orderedNotesNames = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
      const note: Element = notesListedSorted[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      expect(noteName).toBe(newInitialNotes[i].Name);

      orderedNotesNames.push(noteName);
    }

    // Check if the notes are in ascending order
    const sortedNotesNames = [...orderedNotesNames].sort();
    expect(orderedNotesNames).toEqual(sortedNotesNames);
  });

  it("sortNotesByName sorts notes by name in descending order", () => {
    render(<Notes />);

    const newInitialNotes = [...initialNotes]
      .sort((a: Note, b: Note) => a.Name.localeCompare(b.Name))
      .reverse();

    // Click the sort by name button
    const sortByNameButton = document.getElementById(
      "dropdown_arrow_name",
    ) as HTMLButtonElement;
    fireEvent.click(sortByNameButton); //Sort
    fireEvent.click(sortByNameButton); //Reverse
    const notesListedSorted = document.getElementsByClassName(
      "note-list-container",
    );
    expect(notesListedSorted).not.toBeNull();

    // Check if the notes are still the same and in descending order
    const orderedNotesNames = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
      const note: Element = notesListedSorted[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      expect(noteName).toBe(newInitialNotes[i].Name);

      orderedNotesNames.push(noteName);
    }

    // Check if the notes are in descending order
    const sortedNotesNames = [...orderedNotesNames].sort().reverse();
    expect(orderedNotesNames).toEqual(sortedNotesNames);
  });

  it("sortNotesBySpecialist sorts notes by name in ascending order", () => {
    render(<Notes />);

    const newInitialNotes = [...initialNotes].sort((a: Note, b: Note) =>
      a.Specialist.Firstname.localeCompare(b.Specialist.Firstname),
    );

    // Click the sort by name button
    const sortBySpecialistButton = document.getElementById(
      "dropdown_arrow_specialist",
    ) as HTMLButtonElement;
    fireEvent.click(sortBySpecialistButton);
    const notesListedSorted = document.getElementsByClassName(
      "note-list-container",
    );
    expect(notesListedSorted).not.toBeNull();

    // Check if the notes are still the same and in ascending order
    const orderedNotesSpecialist = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
      const note: Element = notesListedSorted[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      expect(noteSpecialist).toBe(
        newInitialNotes[i].Specialist.Firstname +
          " " +
          newInitialNotes[i].Specialist.Lastname,
      );

      orderedNotesSpecialist.push(noteSpecialist);
    }

    // Check if the notes are in ascending order
    const sortedNotesSpecialist = [...orderedNotesSpecialist].sort();
    expect(orderedNotesSpecialist).toEqual(sortedNotesSpecialist);
  });

  it("sortNotesBySpecialist sorts notes by name in descending order", () => {
    render(<Notes />);

    const newInitialNotes = [...initialNotes]
      .sort((a: Note, b: Note) =>
        a.Specialist.Firstname.localeCompare(b.Specialist.Firstname),
      )
      .reverse();

    // Click the sort by name button
    const sortBySpecialistButton = document.getElementById(
      "dropdown_arrow_specialist",
    ) as HTMLButtonElement;
    fireEvent.click(sortBySpecialistButton); //Sort
    fireEvent.click(sortBySpecialistButton); //Reverse
    const notesListedSorted = document.getElementsByClassName(
      "note-list-container",
    );
    expect(notesListedSorted).not.toBeNull();

    // Check if the notes are still the same and in descending order
    const orderedNotesSpecialist = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
      const note: Element = notesListedSorted[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      expect(noteSpecialist).toBe(
        newInitialNotes[i].Specialist.Firstname +
          " " +
          newInitialNotes[i].Specialist.Lastname,
      );

      orderedNotesSpecialist.push(noteSpecialist);
    }

    // Check if the notes are in descending order
    const sortedNotesSpecialists = [...orderedNotesSpecialist].sort().reverse();
    expect(orderedNotesSpecialist).toEqual(sortedNotesSpecialists);
  });

  it("sortNotesByPatient sorts notes by name in ascending order", () => {
    render(<Notes />);

    const newInitialNotes = [...initialNotes].sort((a: Note, b: Note) => {
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

    // Click the sort by name button
    const sortByPatientButton = document.getElementById(
      "dropdown_arrow_patient",
    ) as HTMLButtonElement;
    fireEvent.click(sortByPatientButton);
    const notesListedSorted = document.getElementsByClassName(
      "note-list-container",
    );
    expect(notesListedSorted).not.toBeNull();

    // Check if the notes are still the same and in ascending order
    const orderedNotesPatients = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
      const note: Element = notesListedSorted[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");
      const notePatientElement = note.querySelector(".note-patient");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";
      const notePatient = notePatientElement
        ? notePatientElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      newInitialNotes[i].Patient === null
        ? expect(notePatient).toBe("-")
        : expect(notePatient).toBe(
            newInitialNotes[i].Patient?.Firstname +
              " " +
              newInitialNotes[i].Patient?.Lastname,
          );

      orderedNotesPatients.push(notePatient);
    }

    // Check if the notes are in ascending order
    const sortedNotesPatients = [...orderedNotesPatients].sort();
    expect(orderedNotesPatients).toEqual(sortedNotesPatients);
  });

  it("sortNotesByPatient sorts notes by name in descending order", () => {
    render(<Notes />);

    const newInitialNotes = [...initialNotes].sort((a: Note, b: Note) => {
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

    // Click the sort by name button
    const sortByPatientButton = document.getElementById(
      "dropdown_arrow_patient",
    ) as HTMLButtonElement;
    fireEvent.click(sortByPatientButton); //Sort
    fireEvent.click(sortByPatientButton); //Reverse
    const notesListedSorted = document.getElementsByClassName(
      "note-list-container",
    );
    expect(notesListedSorted).not.toBeNull();

    // Check if the notes are still the same and in descending order
    const orderedNotesPatient = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
      const note: Element = notesListedSorted[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");
      const notePatientElement = note.querySelector(".note-patient");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";
      const notePatient = notePatientElement
        ? notePatientElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      newInitialNotes[i].Patient === null
        ? expect(notePatient).toBe("-")
        : expect(notePatient).toBe(
            newInitialNotes[i].Patient?.Firstname +
              " " +
              newInitialNotes[i].Patient?.Lastname,
          );

      orderedNotesPatient.push(notePatient);
    }

    // Check if the notes are in descending order
    const sortedNotesPatients = [...orderedNotesPatient].sort().reverse();
    expect(orderedNotesPatient).toEqual(sortedNotesPatients);
  });

  it("sortNotesBySession sorts notes by name in ascending order", () => {
    render(<Notes />);

    const newInitialNotes = [...initialNotes].sort((a: Note, b: Note) => {
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

    // Click the sort by name button
    const sortBySessionButton = document.getElementById(
      "dropdown_arrow_session",
    ) as HTMLButtonElement;
    fireEvent.click(sortBySessionButton);
    const notesListedSorted = document.getElementsByClassName(
      "note-list-container",
    );
    expect(notesListedSorted).not.toBeNull();

    // Check if the notes are still the same and in ascending order
    const orderedNotesSession = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
      const note: Element = notesListedSorted[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");
      const noteSessionElement = note.querySelector(".note-session");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";
      const noteSession = noteSessionElement
        ? noteSessionElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      newInitialNotes[i].Session === null
        ? expect(noteSession).toBe("-")
        : expect(noteSession).toBe(newInitialNotes[i].Session?.Name);

      orderedNotesSession.push(noteSession);
    }

    // Check if the notes are in ascending order
    const sortedNotesSessions = [...orderedNotesSession].sort();
    expect(orderedNotesSession).toEqual(sortedNotesSessions);
  });

  it("sortNotesBySession sorts notes by name in descending order", () => {
    render(<Notes />);

    const newInitialNotes = [...initialNotes]
      .sort((a: Note, b: Note) => {
        if (a.Session === null && b.Session === null) {
          return 0; // Beschouw ze als gelijk
        } else if (a.Session === null) {
          return 1; // plaats a achter b
        } else if (b.Session === null) {
          return -1; // plaats b achter a
        } else {
          return a.Session.Name.localeCompare(b.Session.Name);
        }
      })
      .reverse();

    // Click the sort by name button
    const sortBySessionButton = document.getElementById(
      "dropdown_arrow_session",
    ) as HTMLButtonElement;
    fireEvent.click(sortBySessionButton); //Sort
    fireEvent.click(sortBySessionButton); //Reverse
    const notesListedSorted = document.getElementsByClassName(
      "note-list-container",
    );
    expect(notesListedSorted).not.toBeNull();

    // Check if the notes are still the same and in descending order
    const orderedNotesSession = [];
    for (var i = 0; i < notesListedSorted.length; i++) {
      const note: Element = notesListedSorted[i];

      const noteNameElement = note.querySelector(".note-name");
      const noteSpecialistElement = note.querySelector(".note-specialist");
      const noteSessionElement = note.querySelector(".note-session");

      const noteName = noteNameElement ? noteNameElement.textContent : "";
      const noteSpecialist = noteSpecialistElement
        ? noteSpecialistElement.textContent
        : "";
      const noteSession = noteSessionElement
        ? noteSessionElement.textContent
        : "";

      expect(noteName).not.toBeNull();
      expect(noteSpecialist).not.toBeNull();

      newInitialNotes[i].Session === null
        ? expect(noteSession).toBe("-")
        : expect(noteSession).toBe(newInitialNotes[i].Session?.Name);

      orderedNotesSession.push(noteSession);
    }

    // Check if the notes are in descending order
    const sortedNotesSessions = [...orderedNotesSession].sort().reverse();
    expect(orderedNotesSession).toEqual(sortedNotesSessions);
  });
});
