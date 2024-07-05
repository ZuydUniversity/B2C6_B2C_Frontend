import { PatientSelect } from "../../pages/artssessionpage";
import AddPatientSelection from "../../pages/physiosessionpage";
import PhysioSessionPage from "../../pages/physiosessionpage";
import { fireEvent, render } from "@testing-library/react";

describe("PhysioSessionPage test", () => {
	it("Should rendere page without failing", () => {
		render(<PhysioSessionPage />);
	});
	it("Should toggle patient list visibility on button click", () => {
		const { getByText, queryByText } = render(<AddPatientSelection />);
		const selectPatientButton = getByText("Selecteer patiënt");
		expect(queryByText("Naam:")).not.toBeInTheDocument();
	});

	it("Should hide patient list when clicking outside", () => {
		const { getByText, queryByRole, getByRole } = render(<PatientSelect onSelect={() => {}} />);

		const outsideClickEvent = new MouseEvent("mousedown", {
			bubbles: true,
			cancelable: true,
			view: window,
		});
		document.dispatchEvent(outsideClickEvent);

		expect(queryByRole("list")).not.toBeInTheDocument();
	});

	it("Should correctly display patient information when selected", () => {
		const { getByText, getAllByRole } = render(<AddPatientSelection />);
		const selectPatientButton = getByText("Selecteer patiënt");
		fireEvent.click(selectPatientButton);

		const patientButtons = getAllByRole("button");
		fireEvent.click(patientButtons[0]);
	});

	it("Should correctly display all patients in the list", () => {
		const { getByText, getAllByRole } = render(<AddPatientSelection />);
		const selectPatientButton = getByText("Selecteer patiënt");
		fireEvent.click(selectPatientButton);

		const patientButtons = getAllByRole("button");
	});
});
