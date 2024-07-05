import { Patient } from "../abstracts/ImportsModels";

export class Medication {
	Id!: number;
	Name!: string;
	Patient!: Patient;

	constructor(name: string, patient: Patient) {
		this.Id = 0;
		this.Name = name;
		this.Patient = patient;
	}
}
