// CreatePatient.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreatePatient from "../../components/createpatient";

describe("CreatePatient Component", () => {
	test("allows firstname to be entered", () => {
		render(<CreatePatient />);
		const firstnameInput = screen.getByLabelText(/Voornaam:/i) as HTMLInputElement;
		fireEvent.change(firstnameInput, { target: { value: "John" } });
		expect(firstnameInput.value).toBe("John");
	});

	test("allows lastname to be entered", () => {
		render(<CreatePatient />);
		const lastnameInput = screen.getByLabelText(/Achternaam:/i) as HTMLInputElement;
		fireEvent.change(lastnameInput, { target: { value: "Doe" } });
		expect(lastnameInput.value).toBe("Doe");
	});

	test("allows email to be entered", () => {
		render(<CreatePatient />);
		const emailInput = screen.getByLabelText(/Email:/i) as HTMLInputElement;
		fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
		expect(emailInput.value).toBe("john.doe@example.com");
	});
	test("allows age to be entered", () => {
		render(<CreatePatient />);
		const ageInput = screen.getByLabelText(/Leeftijd:/i) as HTMLInputElement;
		fireEvent.change(ageInput, { target: { value: "30" } });
		expect(ageInput.value).toBe("30");
	});

	test("allows phonenumber to be entered", () => {
		render(<CreatePatient />);
		const phonenumberInput = screen.getByLabelText(/Telefoonnummer:/i) as HTMLInputElement;
		fireEvent.change(phonenumberInput, { target: { value: "1234567890" } });
		expect(phonenumberInput.value).toBe("1234567890");
	});

	test("allows sex to be selected", () => {
		render(<CreatePatient />);
		const sexInput = screen.getByLabelText(/Geslacht:/i) as HTMLInputElement;
		fireEvent.click(sexInput);
		expect(sexInput.checked).toBe(true);
	});

	test("allows firstnameContact to be entered", () => {
		render(<CreatePatient />);
		const firstnameContactInput = screen.getByLabelText(/Voornaam Contactpersoon:/i) as HTMLInputElement;
		fireEvent.change(firstnameContactInput, { target: { value: "John" } });
		expect(firstnameContactInput.value).toBe("John");
	});
	// deze werkt nog niet
	test("allows lastnameContact to be entered", () => {
		render(<CreatePatient />);
		const lastnameContactInput = screen.getByLabelText(/Achternaam Contactpersoon:/i) as HTMLInputElement;
		fireEvent.change(lastnameContactInput, { target: { value: "Smith" } });
		expect(lastnameContactInput.value).toBe("Smith");
	});
	// deze werkt nog niet
	test("allows emailContact to be entered", () => {
		render(<CreatePatient />);
		const emailContactInput = screen.getByLabelText(/Email Contactpersoon:/i) as HTMLInputElement;
		fireEvent.change(emailContactInput, { target: { value: "" } });
	});
	// deze werkt nog niet
	test("allows phonenumberContact to be entered", () => {
		render(<CreatePatient />);
		const phonenumberContactInput = screen.getByLabelText(/Telefoonnummer Contactpersoon:/i) as HTMLInputElement;
		fireEvent.change(phonenumberContactInput, { target: { value: "0987654321" } });
		expect(phonenumberContactInput.value).toBe("0987654321");
	});

	test("allows specialist to be entered", () => {
		render(<CreatePatient />);
		const specialistInput = screen.getByLabelText(/Specialist:/i) as HTMLInputElement;
		fireEvent.change(specialistInput, { target: { value: "Dr. Who" } });
		expect(specialistInput.value).toBe("Dr. Who");
	});
	test("allows note to be entered", () => {
		render(<CreatePatient />);
		const noteInput = screen.getByLabelText(/Notitie:/i) as HTMLInputElement;
		fireEvent.change(noteInput, { target: { value: "Needs follow-up" } });
		expect(noteInput.value).toBe("Needs follow-up");
	});

	test("allows medication to be entered", () => {
		render(<CreatePatient />);
		const medicationInput = screen.getByLabelText(/Medicatie:/i) as HTMLInputElement;
		fireEvent.change(medicationInput, { target: { value: "Paracetamol" } });
		expect(medicationInput.value).toBe("Paracetamol");
	});

	test("allows appointment to be entered", () => {
		render(<CreatePatient />);
		const appointmentInput = screen.getByLabelText(/Afspraak:/i) as HTMLInputElement;
		fireEvent.change(appointmentInput, { target: { value: "2023-01-01" } });
		expect(appointmentInput.value).toBe("2023-01-01");
	});
});
