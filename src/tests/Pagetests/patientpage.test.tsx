import PatientPage from "../../pages/patientpage";
import { fireEvent, render } from "@testing-library/react";

test("Check if page renders", () => {
	const page = render(<PatientPage />);
	expect(page.getByText("Patiëntenoverzicht")).toBeInTheDocument();

	const patientRow = document.querySelector("#patient-click-container") as HTMLElement;
	expect(patientRow).toBeInTheDocument();
	const patientOnClick = patientRow.onclick;
	expect(patientOnClick).toBeDefined();

	// fireEvent.click(patientRow);
	// expect(patientOnClick).toHaveBeenCalled();
});
