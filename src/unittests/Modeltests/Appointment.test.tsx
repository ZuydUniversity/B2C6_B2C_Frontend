import {
  Appointment,
  Specialist,
  Patient,
  Session,
} from "../../abstracts/ImportsModels";

describe("Appointment", () => {
  const name = "cheeseAppointment";
  const startdatetime = new Date();
  const enddatetime = new Date();
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

  it("should create a new appointment with all the provided properties", () => {
    const appointment = new Appointment(
      name,
      startdatetime,
      enddatetime,
      specialist,
      patient,
    );

    expect(appointment.Id).toBe(0);
    expect(appointment.Name).toBe(name);
    expect(appointment.Startdatetime).toBe(startdatetime);
    expect(appointment.Enddatetime).toBe(enddatetime);
    expect(appointment.Specialist).toBe(specialist);
    expect(appointment.Patient).toBe(patient);
  });

  it("should create a new appointment with the provided sessions", () => {
    const appointment = new Appointment(
      name,
      startdatetime,
      enddatetime,
      specialist,
      patient,
    );
    const sessions: Array<Session> = [
      new Session(
        "session1",
        new Date(),
        new Date(),
        specialist,
        patient,
        appointment,
      ),
      new Session(
        "session2",
        new Date(),
        new Date(),
        specialist,
        patient,
        appointment,
      ),
    ];

    expect(appointment.Sessions).toStrictEqual([]);

    appointment.Sessions = sessions;

    expect(appointment.Sessions).toBe(sessions);
  });

  it("should update the appointment's specialist", () => {
    const appointment = new Appointment(
      name,
      startdatetime,
      enddatetime,
      specialist,
      patient,
    );
    const newSpecialist = new Specialist(
      "Thiery",
      "Baudet",
      "ThieryBaudet@gmail.com",
      "0612365487",
    );

    expect(appointment.Specialist).toBe(specialist);

    appointment.Specialist = newSpecialist;

    expect(appointment.Specialist).toBe(newSpecialist);
  });

  it("should update the appointment's patient", () => {
    const appointment = new Appointment(
      name,
      startdatetime,
      enddatetime,
      specialist,
      patient,
    );
    const newPatient = new Patient(
      "Jerry",
      "Nuts",
      "JerryNuts@gmail.com",
      32,
      "0687653422",
      false,
      "Tom",
      "Nuts",
      "TomNuts@gmail.com",
      "0687651342",
    );

    expect(appointment.Patient).toBe(patient);

    appointment.Patient = newPatient;

    expect(appointment.Patient).toBe(newPatient);
  });

  it("should update the appointment's timestamps", () => {
    const appointment = new Appointment(
      name,
      startdatetime,
      enddatetime,
      specialist,
      patient,
    );
    const newStartdatetime = new Date();
    const newEnddatetime = new Date();
    newStartdatetime.setHours(12);
    newEnddatetime.setHours(13);

    expect(appointment.Startdatetime).toBe(startdatetime);
    expect(appointment.Enddatetime).toBe(enddatetime);

    appointment.Startdatetime = newStartdatetime;
    appointment.Enddatetime = newEnddatetime;

    expect(appointment.Startdatetime).toBe(newStartdatetime);
    expect(appointment.Enddatetime).toBe(newEnddatetime);
  });
});
