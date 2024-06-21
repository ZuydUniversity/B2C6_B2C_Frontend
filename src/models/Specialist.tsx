import { Patient, Note, Session, Appointment, User } from "../abstracts/ImportsModels";

export class Specialist extends User {
	Patients!: Array<Patient>;
	Notes!: Array<Note>;
	Sessions!: Array<Session>;
	Appointments!: Array<Appointment>;

	constructor(firstname: string, lastname: string, email: string, phonenumber: string) {
		super(firstname, lastname, email, phonenumber);
		this.Patients = [];
		this.Notes = [];
		this.Sessions = [];
		this.Appointments = [];
	}
}
