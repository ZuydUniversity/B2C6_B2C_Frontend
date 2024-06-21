import { Specialist, Patient, Appointment, Session } from "../abstracts/ImportsModels";

export class DoctorSession extends Session {
	constructor(name: string, startdatetime: Date, enddatetime: Date, specialist: Specialist, patient: Patient, appointment: Appointment) {
		super(name, startdatetime, enddatetime, specialist, patient, appointment);
		this.Notes = [];
	}
}
