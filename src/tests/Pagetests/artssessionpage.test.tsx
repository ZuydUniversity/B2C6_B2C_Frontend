import { fireEvent, render, screen } from "@testing-library/react";
import { ArtsSession, PatientSelect } from "../../pages/artssessionpage";

describe("ArtsSession page tests", () => {
	test("renders without crashing", () => {
		render(<ArtsSession />);
		const artsSessionElement = document.querySelector(".main-patient-container");
		expect(artsSessionElement).toBeInTheDocument();

		const artsSessionElement2 = document.querySelector(".flex-container");
		expect(artsSessionElement2).toBeInTheDocument();

		const selectPatientButton = document.querySelector(".select-patient-button") as HTMLButtonElement;
		expect(selectPatientButton).toBeInTheDocument();
		expect(selectPatientButton.onclick).toBeDefined();
	});

	test("should render the component", () => {
		render(<PatientSelect onSelect={jest.fn()} />);
	});

	test('toggles the patient list visibility when the button is clicked', () => {
		render(<PatientSelect onSelect={jest.fn()} />);
		const button = screen.getByRole('button', { name: /Select patient/i });

		// Initially, the patient list should not be visible
		expect(screen.queryByRole('list')).not.toBeInTheDocument();

		// Click to show the patient list
		fireEvent.click(button);
		expect(screen.getByRole('list')).toBeInTheDocument();

		// Click again to hide the patient list
		fireEvent.click(button);
		expect(screen.queryByRole('list')).not.toBeInTheDocument();
	});
});
