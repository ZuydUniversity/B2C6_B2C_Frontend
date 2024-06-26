import PhysioSessionPage from "../../pages/physiosessionpage";
import { render } from "@testing-library/react";

describe("AddPatientSelection Page Tests", () => {
	test("renders header and sub-header correctly", () => {
		render(<AddPatientSelection />);

		const headerText = screen.getByText("Sessie Toevoegen");
		expect(headerText).toBeInTheDocument();

		const subHeader = screen.getByText("Patiëntgegevens");
		expect(subHeader).toBeInTheDocument();
	});

	test("Check if page renders", () => {
		const page = render(<PhysioSessionPage />);
		expect(page.getByText("Selecteer patiënt")).toBeInTheDocument();
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
		expect(window.location.href).toBe("/activephysiosession");
	});

	test("closes patient list on outside click", () => {
		render(<AddPatientSelection />);

		fireEvent.click(screen.getByRole("button", { name: "Selecteer patiënt" }));
		expect(screen.getByRole("list", { name: "patient-list" })).toBeInTheDocument();

		fireEvent.mouseDown(document); // Simulate click outside
		expect(screen.queryByRole("list", { name: "patient-list" })).not.toBeInTheDocument();
	});

});