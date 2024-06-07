import { Specialist, Patient, Appointment, Note, DoctorSession } from "../../abstracts/ImportsModels";

describe("DoctorSession", () => {
  const name = "new Session";
  const startdatetime = new Date();
  const enddatetime = new Date();
  const specialist = new Specialist("John", "Doe", "JohnDoe@gmail.com", "0612345678");
  const patient = new Patient("Jane", "Duge", "JaneDoe@gmail.com", 32, "0687654321", false, "John", "Duge", "JohnDuge@gmail.com", "0687654312");
  const appointment = new Appointment("cheeseAppointment", new Date(), new Date(), specialist, patient);

  it("should create a new doctorSession with all the provided properties", () => {
    const session = new DoctorSession(name, startdatetime, enddatetime, specialist, patient, appointment);

    expect(session.Id).toBe(0);
    expect(session.Name).toBe(name);
    expect(session.Startdatetime).toBe(startdatetime);
    expect(session.Enddatetime).toBe(enddatetime);
    expect(session.Specialist).toBe(specialist);
    expect(session.Patient).toBe(patient);
    expect(session.Appointment).toBe(appointment);
  });

  it("should create a new doctorSession with the provided notes", () => {
    const session = new DoctorSession(name, startdatetime, enddatetime, specialist, patient, appointment);
    const notes: Array<Note> = [
      new Note("note1", "description1", specialist, patient, session),
      new Note("note2", "description2", specialist, patient, session)
    ];

    expect(session.Notes).toBe([]);

    session.Notes = notes;

    expect(session.Notes).toBe(notes);
  });

  it("should update the doctorSession's specialist", () => {
    const session = new DoctorSession(name, startdatetime, enddatetime, specialist, patient, appointment);
    const newSpecialist = new Specialist("Thiery", "Baudet", "ThieryBaudet@gmail.com", "0612365487");

    expect(session.Specialist).toBe(specialist);

    session.Specialist = newSpecialist;

    expect(session.Specialist).toBe(newSpecialist);
  });

  it("should update the doctorSession's patient", () => {
    const session = new DoctorSession(name, startdatetime, enddatetime, specialist, patient, appointment);
    const newPatient = new Patient("Mark", "Rutte", "MarkRutte@gmail.com", 54, "0687654321", false, "Geert", "Wilders", "GeertWilders@hotmail.com", "0678645312");

    expect(session.Patient).toBe(patient);

    session.Patient = newPatient;

    expect(session.Patient).toBe(newPatient);
  });

  it("should update the doctorSession's appointment", () => {
    const session = new DoctorSession(name, startdatetime, enddatetime, specialist, patient, appointment);
    const newAppointment = new Appointment("newAppointment", new Date(), new Date(), specialist, patient);

    expect(session.Appointment).toBe(appointment);

    session.Appointment = newAppointment;

    expect(session.Appointment).toBe(newAppointment);
  });

  it("should update the doctorSession's timestamps", () => {
    const session = new DoctorSession(name, startdatetime, enddatetime, specialist, patient, appointment);
    const newStartdatetime = new Date();
    const newEnddatetime = new Date();
    newStartdatetime.setHours(15);
    newEnddatetime.setHours(16);

    expect(session.Startdatetime).toBe(startdatetime);
    expect(session.Enddatetime).toBe(enddatetime);

    session.Startdatetime = newStartdatetime;
    session.Enddatetime = newEnddatetime;

    expect(session.Startdatetime).toBe(newStartdatetime);
    expect(session.Enddatetime).toBe(newEnddatetime);
  });
});