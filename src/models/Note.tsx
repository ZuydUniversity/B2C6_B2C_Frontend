import { Specialist, Patient, Session } from "../abstracts/ImportsModels";

export class Note {
	Id!: number | null;
	Name!: string;
	Description!: string;
	Specialist!: Specialist;
	Patient!: Patient | null;
	Session!: Session | null;

	constructor(name: string, description: string, specialist: Specialist, patient: Patient | null = null, session: Session | null = null) {
		this.Id = null;
		this.Name = name;
		this.Description = description;
		this.Specialist = specialist;
		this.Patient = patient;
		this.Session = session;
	}
}
