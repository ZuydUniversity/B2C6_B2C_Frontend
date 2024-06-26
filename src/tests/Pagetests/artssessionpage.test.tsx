import { fireEvent, render } from "@testing-library/react";
import ArtsSession from "../../pages/artssessionpage";

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
});
