import PatientPage from "../../pages/patientpage";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

describe("PatientPage Test", () => {
	it("Should render patientpage properly", () => {
		const page = render(<PatientPage />);
		expect(page.getByText("Patiëntenoverzicht")).toBeInTheDocument();

		const patientRow = document.querySelector("#patient-click-container") as HTMLElement;
		expect(patientRow).toBeInTheDocument();
		const patientOnClick = patientRow.onclick as Function;
		expect(patientOnClick).toBeDefined();
		expect(patientOnClick).not.toThrowError();
	});
});

// test("Check if page renders", () => {
// 	const page = render(<PatientPage />);
// 	expect(page.getByText("Patiëntenoverzicht")).toBeInTheDocument();

// 	const patientRow = document.querySelector("#patient-click-container") as HTMLElement;
// 	expect(patientRow).toBeInTheDocument();
// 	const patientOnClick = patientRow.onclick as Function;
// 	expect(patientOnClick).toBeDefined();
// 	expect(patientOnClick).not.toThrowError();
// 	//test create patient button
// });
