import { render } from "@testing-library/react";
import { Patient } from "../../abstracts/ImportsModels";
import PatientDetails from "../../components/patientdetails";

// Set const values for the tests
const patient = new Patient("Johnny", "English", "Johnny.English@gmail.com", 37, "0612345678", "Timmy.English@gmail.com", "0689378469");

describe("PatientDetails component", () => {
	it("should render the PatientDetails component with all properties", () => {
		render(<PatientDetails patient={patient} />);

		const name = document.getElementById("patient-name") as HTMLElement;
		expect(name.textContent).toBe(patient.Firstname + " " + patient.Lastname);

		const email = document.getElementById("patient-email") as HTMLElement;
		expect(email.textContent).toBe(patient.Email);

		const age = document.getElementById("patient-age") as HTMLElement;
		expect(age.textContent).toBe(patient.Age.toString());

		const phonenumber = document.getElementById("patient-phonenumber") as HTMLElement;
		expect(phonenumber.textContent).toBe(patient.Phonenumber);

		const sex = document.getElementById("patient-sex") as HTMLElement;
		expect(sex.textContent).toBe(patient.Sex ? "Male" : "Female");

		const contactEmail = document.getElementById("contactperson-email") as HTMLElement;
		expect(contactEmail.textContent).toBe(patient.EmailContact);

		const contactPhonenumber = document.getElementById("contactperson-phonenumber") as HTMLElement;
		expect(contactPhonenumber.textContent).toBe(patient.PhonenumberContact);
	});
});
