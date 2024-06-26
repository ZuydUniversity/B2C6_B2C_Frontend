import PhysioSessionPage from "../../pages/physiosessionpage";
import { render, screen, fireEvent } from "@testing-library/react";

describe("PhysioSessionPage Tests", () => {
	test("renders header and sub-header correctly", () => {
		render(<PhysioSessionPage />);

		const headerText = screen.getByText("Sessie Toevoegen");
		expect(headerText).toBeInTheDocument();

		const subHeader = screen.getByText("Patiëntgegevens");
		expect(subHeader).toBeInTheDocument();
	});

	test("toggles patient list visibility on button click", () => {
		render(<PhysioSessionPage />);

		const selectPatientButton = screen.getByRole("button", { name: "Selecteer patiënt" });
		fireEvent.click(selectPatientButton);

		const patientList = screen.getByRole("list", { name: "patient-list" });
		expect(patientList).toBeInTheDocument();

		fireEvent.click(selectPatientButton);

		expect(patientList).not.toBeInTheDocument();
	});

	test("adds patient to session on button click", () => {
		render(<PhysioSessionPage />);

		const addButton = screen.getAllByRole("button", { name: "+" })[0];
		fireEvent.click(addButton);

		// Mock window.location.href and verify the redirect behavior
		expect(window.location.href).toBe("/activephysiosession");
	});

	test("closes patient list on outside click", () => {
		render(<PhysioSessionPage />);

		fireEvent.click(screen.getByRole("button", { name: "Selecteer patiënt" }));
		expect(screen.getByRole("list", { name: "patient-list" })).toBeInTheDocument();

		fireEvent.mouseDown(document); // Simulate click outside
		expect(screen.queryByRole("list", { name: "patient-list" })).not.toBeInTheDocument();
	});

	test("handles error scenario on failed API call", async () => {
		global.fetch = jest.fn().mockResolvedValueOnce({
			ok: false,
			json: async () => ({}),
		});

		render(<PhysioSessionPage />);

		fireEvent.click(screen.getByRole("button", { name: "Selecteer patiënt" }));
		expect(screen.queryByRole("list", { name: "patient-list" })).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "Selecteer patiënt" }));

		// Simulate API error
		await screen.findByText("Error: Unable to fetch patients");

		// Ensure error message is displayed
		expect(screen.getByText("Error: Unable to fetch patients")).toBeInTheDocument();
	});
});
