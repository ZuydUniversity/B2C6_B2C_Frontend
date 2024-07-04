import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import EditNote from "../../pages/Editnotes"; // Adjust the import path as necessary
import Notes from "../../pages/notes"; // Adjust the import path as necessary
import { Note, Specialist, Patient, Session, Appointment } from "../../abstracts/ImportsModels";

const baseSpecialist1 = new Specialist("Barack", "Obama", "JohnDoe@gmail.com", "0612345678");
const patient = new Patient("John", "Doe", "john.doe@example.com", 34, "123-456-7890", "john.smith@example.com", "444-555-6666", "Male");
const appointment = new Appointment("Appointment 1", new Date(2021, 11, 1), new Date(2021, 11, 2), baseSpecialist1, patient);
const session1 = new Session("Session 1", appointment.Startdatetime, appointment.Enddatetime, appointment.Specialist, appointment.Patient, appointment);
const note = new Note("Note 1", "This is the first note.", baseSpecialist1, patient, session1);

describe("EditNote component", () => {
    it("should render the EditNote component with the note details", () => {
        const { getByText, getByDisplayValue } = render(
            <MemoryRouter initialEntries={[{ pathname: "/edit-note", state: { note } }]}>
                <Routes>
                    <Route path="/edit-note" element={<EditNote />} />
                </Routes>
            </MemoryRouter>
        );

        expect(getByText("Bewerk Notitie")).toBeInTheDocument();
        expect(getByText("Naam:")).toBeInTheDocument();
        expect(getByText("Specialist")).toBeInTheDocument();
        expect(getByText("Patiënt")).toBeInTheDocument();
        expect(getByText("Sessie")).toBeInTheDocument();
        expect(getByText(note.Name)).toBeInTheDocument();
        expect(getByText(`${note.Specialist?.Firstname ?? ''} ${note.Specialist?.Lastname ?? ''}`)).toBeInTheDocument();
        expect(getByText(`${note.Patient?.Firstname ?? ''} ${note.Patient?.Lastname ?? ''}`)).toBeInTheDocument();
        expect(getByText(note.Session?.Name ?? '')).toBeInTheDocument();
        expect(getByDisplayValue(note.Name)).toBeInTheDocument();
    });

    it("should navigate back to Notes page on form submission", () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={[{ pathname: "/edit-note", state: { note } }]}>
                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="/edit-note" element={<EditNote />} />
                </Routes>
            </MemoryRouter>
        );

        const saveButton = getByText("Opslaan");
        fireEvent.click(saveButton);

        expect(getByText("Notities")).toBeInTheDocument(); // Check if it navigates back to the Notes page
    });
});
