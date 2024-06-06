import { Specialist, Patient, Session } from "../abstracts/ImportsModels";

export class Appointment {
  Id!: number;
  Name!: string;
  Startdate!: Date;
  Enddate!: Date;
  Specialist!: Specialist;
  Patient!: Patient;
  Sessions!: Array<Session>;

  constructor(
    name: string,
    startdate: Date,
    enddate: Date,
    specialist: Specialist,
    patient: Patient,
  ) {
    this.Id = 0;
    this.Name = name;
    this.Startdate = startdate;
    this.Enddate = enddate;
    this.Specialist = specialist;
    this.Patient = patient;
    this.Sessions = [];
  }
}
