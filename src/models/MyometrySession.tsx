import {
  Specialist,
  Patient,
  Appointment,
  Session,
} from "../abstracts/ImportsModels";

export class MyometrySession extends Session {
  constructor(
    name: string,
    startdate: Date,
    enddate: Date,
    specialist: Specialist,
    patient: Patient,
    appointment: Appointment,
  ) {
    super(name, startdate, enddate, specialist, patient, appointment);
  }
}
