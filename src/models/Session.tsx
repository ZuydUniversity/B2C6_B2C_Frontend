import {
  Specialist,
  Patient,
  Note,
  Appointment,
} from "../abstracts/ImportsModels";

export class Session {
  Id!: number;
  Name!: string;
  Startdate!: Date;
  Enddate!: Date;
  Specialist!: Specialist;
  Patient!: Patient;
  Appointment!: Appointment;
  Notes!: Array<Note>;

  constructor(
    name: string,
    startdate: Date,
    enddate: Date,
    specialist: Specialist,
    patient: Patient,
    appointment: Appointment,
  ) {
    this.Id = 0;
    this.Name = name;
    this.Startdate = startdate;
    this.Enddate = enddate;
    this.Specialist = specialist;
    this.Patient = patient;
    this.Appointment = appointment;
    this.Notes = [];
  }
}
