import {
  Note,
  Specialist,
  Patient,
  Appointment,
  Session,
} from "../../abstracts/ImportsModels";

describe("Note", () => {
  const name = "new Note";
  const description = "This is a new note";
  const specialist = new Specialist(
    "John",
    "Doe",
    "JohnDoe@gmail.com",
    "0612345678",
  );
  const patient = new Patient(
    "Jane",
    "Duge",
    "JaneDoe@gmail.com",
    32,
    "0687654321",
    false,
    "John",
    "Duge",
    "JohnDuge@gmail.com",
    "0687654312",
  );
  const appointment = new Appointment(
    "cheeseAppointment",
    new Date(),
    new Date(),
    specialist,
    patient,
  );
  const session = new Session(
    name,
    new Date(),
    new Date(),
    specialist,
    patient,
    appointment,
  );

  it("should create a new note with all the provided and required properties", () => {
    const note = new Note(name, description, specialist);

    expect(note.Id).toBe(null);
    expect(note.Name).toBe(name);
    expect(note.Description).toBe(description);
    expect(note.Specialist).toBe(specialist);
    expect(note.Patient).toBe(null);
    expect(note.Session).toBe(null);
  });

  it("should create a new note with all the provided properties", () => {
    const note = new Note(name, description, specialist, patient, session);

    expect(note.Id).toBe(null);
    expect(note.Name).toBe(name);
    expect(note.Description).toBe(description);
    expect(note.Specialist).toBe(specialist);
    expect(note.Patient).toBe(patient);
  });

  it("should update the note's name", () => {
    const note = new Note(name, description, specialist);
    const newName = "new Note";

    expect(note.Name).toBe(name);

    note.Name = newName;

    expect(note.Name).toBe(newName);
  });

  it("should update the note's description", () => {
    const note = new Note(name, description, specialist);
    const newDescription = "This is a new description";

    expect(note.Description).toBe(description);

    note.Description = newDescription;

    expect(note.Description).toBe(newDescription);
  });

  it("should update the note's specialist", () => {
    const note = new Note(name, description, specialist);
    const newSpecialist = new Specialist(
      "Thiery",
      "Baudet",
      "ThieryBaudet@gmail.com",
      "0612365487",
    );

    expect(note.Specialist).toBe(specialist);

    note.Specialist = newSpecialist;

    expect(note.Specialist).toBe(newSpecialist);
  });

  it("should update the note's patient", () => {
    const note = new Note(name, description, specialist);
    const newPatient = new Patient(
      "Mark",
      "Rutte",
      "MarkRutte@gmail.com",
      54,
      "0687654321",
      false,
      "Geert",
      "Wilders",
      "GeertWilders@hotmail.com",
      "0678645312",
    );

    expect(note.Patient).toBe(null);

    note.Patient = newPatient;

    expect(note.Patient).toBe(newPatient);
  });

  it("should update the note's session", () => {
    const note = new Note(name, description, specialist);
    const newSession = new Session(
      "newSession",
      new Date(),
      new Date(),
      specialist,
      patient,
      appointment,
    );

    expect(note.Session).toBe(null);

    note.Session = newSession;

    expect(note.Session).toBe(newSession);
  });
});
