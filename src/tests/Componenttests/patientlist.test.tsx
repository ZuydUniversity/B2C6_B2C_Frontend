import { render } from "@testing-library/react";
import PatientList, { patients } from "../../components/patientlist";

describe("PatientList component", () => {
	it("should render the component", () => {
		render(<PatientList onPatientClick={() => { }} />);

		const patientList = document.getElementsByClassName("patient-row-wrapper") as HTMLCollectionOf<HTMLElement>;
		expect(patientList.length).toBe(patients.length);

		for (let i = 0; i < patients.length; i++) {
			const patient = patients[i];
			const patientElement = patientList[i] as HTMLElement;
			expect(patientElement).toBeInTheDocument();

			const patientRow = patientElement.querySelector(".patient-row") as HTMLElement;
			expect(patientRow).toBeInTheDocument();
			const patientOnClick = patientRow.onclick;
			expect(patientOnClick).toBeDefined();

			const patientName = patientElement.querySelector("#patient-name") as HTMLElement;
			expect(patientName.textContent).toBe(`${patient.Firstname} ${patient.Lastname}`);

			const patientEmail = patientElement.querySelector("#patient-email") as HTMLElement;
			expect(patientEmail.textContent).toBe(patient.Email);

			const patientSex = patientElement.querySelector("#patient-sex") as HTMLElement;
			const isGender = (patientSex.textContent === "Male" || patientSex.textContent === "Female");
			expect(isGender).toBe(true);

			const patientAppointmentCount = patientElement.querySelector("#patient-appointment-count") as HTMLElement;
			expect(patientAppointmentCount.textContent).toBe(patient.Appointments.length.toString());
		}
	});
});
