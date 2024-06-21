import { Specialist, Patient, Session } from "../abstracts/ImportsModels";

export class Appointment {
	Id!: number;
	Name!: string;
	Startdatetime!: Date;
	Enddatetime!: Date;
	Specialist!: Specialist;
	Patient!: Patient;
	Sessions!: Array<Session>;

	constructor(name: string, startdatetime: Date, enddatetime: Date, specialist: Specialist, patient: Patient) {
		this.Id = 0;
		this.Name = name;
		this.Startdatetime = startdatetime;
		this.Enddatetime = enddatetime;
		this.Specialist = specialist;
		this.Patient = patient;
		this.Sessions = [];
	}
}
