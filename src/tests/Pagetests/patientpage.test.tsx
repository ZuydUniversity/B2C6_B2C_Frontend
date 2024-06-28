import PatientPage from "../../pages/patientpage";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

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
