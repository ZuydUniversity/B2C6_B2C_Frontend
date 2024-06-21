import { Patient } from "../abstracts/ImportsModels";

export class Medication {
	Id!: number;
	Name!: string;
	Dosage!: string;
	Patient!: Patient;

	constructor(name: string, dosage: string, patient: Patient) {
		this.Id = 0;
		this.Name = name;
		this.Dosage = dosage;
		this.Patient = patient;
	}
}
