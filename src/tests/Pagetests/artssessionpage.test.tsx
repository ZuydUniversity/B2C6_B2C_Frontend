import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddPatientSelection from "../../components/AddPatientSelection";

describe("AddPatientSelection Component", () => {
	test("renders correctly", () => {
		render(<AddPatientSelection />);

		const mainContainer = screen.getByRole("main");
		expect(mainContainer).toBeInTheDocument();

		const headerText = screen.getByText("Sessie Toevoegen");
		expect(headerText).toBeInTheDocument();

		const subHeader = screen.getByText("Patiëntgegevens");
		expect(subHeader).toBeInTheDocument();

		const selectPatientButton = screen.getByRole("button", { name: "Selecteer patiënt" });
		expect(selectPatientButton).toBeInTheDocument();
	});

	test("toggles patient list visibility on button click", () => {
		render(<AddPatientSelection />);

		const selectPatientButton = screen.getByRole("button", { name: "Selecteer patiënt" });
		fireEvent.click(selectPatientButton);

		const patientList = screen.getByRole("list", { name: "patient-list" });
		expect(patientList).toBeInTheDocument();

		fireEvent.click(selectPatientButton);

		expect(patientList).not.toBeInTheDocument();
	});

	test("adds patient to session on button click", () => {
		render(<AddPatientSelection />);

		const addButton = screen.getAllByRole("button", { name: "+" })[0];
		fireEvent.click(addButton);

		// Here you might need to mock the window.location and verify the redirect behavior
		expect(window.location.href).toBe("/activeartssession");
	});

	test("closes patient list on outside click", () => {
		render(<AddPatientSelection />);

		fireEvent.click(screen.getByRole("button", { name: "Selecteer patiënt" }));
		expect(screen.getByRole("list", { name: "patient-list" })).toBeInTheDocument();

		fireEvent.mouseDown(document); // Simulate click outside
		expect(screen.queryByRole("list", { name: "patient-list" })).not.toBeInTheDocument();
	});
});
