import {
  Specialist,
  Patient,
  Note,
  Appointment,
} from "../abstracts/ImportsModels";

export class Session {
  Id!: number;
  Name!: string;
  Startdatetime!: Date;
  Enddatetime!: Date;
  Specialist!: Specialist;
  Patient!: Patient;
  Appointment!: Appointment;
  Notes!: Array<Note>;

  constructor(
    name: string,
    startdatetime: Date,
    enddatetime: Date,
    specialist: Specialist,
    patient: Patient,
    appointment: Appointment,
  ) {
    this.Id = 0;
    this.Name = name;
    this.Startdatetime = startdatetime;
    this.Enddatetime = enddatetime;
    this.Specialist = specialist;
    this.Patient = patient;
    this.Appointment = appointment;
    this.Notes = [];
  }
}
