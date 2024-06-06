import {
  Session,
  Specialist,
  Patient,
  Appointment,
} from "../abstracts/ImportsModels";

export class RadiologySession extends Session {
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
