import { Patient } from "../abstracts/ImportsModels";

export class Medication {
  Id!: number;
  Name!: string;
  Dosage!: string;
  Patients!: Array<Patient>;

  constructor(name: string, dosage: string) {
    this.Id = 0;
    this.Name = name;
    this.Dosage = dosage;
    this.Patients = [];
  }
}
