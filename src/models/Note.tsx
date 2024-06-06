import { Specialist, Patient, Session } from "../abstracts/ImportsModels";

export class Note {
  Id!: number;
  Name!: string;
  Description!: string;
  Specialist!: Specialist;
  Patient!: Patient;
  Session!: Session;

  constructor(
    name: string,
    description: string,
    specialist: Specialist,
    patient: Patient,
    session: Session,
  ) {
    this.Id = 0;
    this.Name = name;
    this.Description = description;
    this.Specialist = specialist;
    this.Patient = patient;
    this.Session = session;
  }
}
