import {
  Specialist,
  Note,
  Appointment,
  Patient,
  Session,
} from "../../abstracts/ImportsModels";
import { Dictionary } from "../../abstracts/Dictionary";
import exp from "constants";

describe("Specialist", () => {
  const firstname = "John";
  const lastname = "Doe";
  const email = "JohnDoe@gmail.com";
  const phonenumber = "0612345678";
  const settings: Dictionary<boolean> = {
    isDarkMode: true,
  };

  it("should create a new specialist with all the provided properties", () => {
    const specialist = new Specialist(firstname, lastname, email, phonenumber);

    expect(specialist._id).toBe(0);
    expect(specialist.Firstname).toBe(firstname);
    expect(specialist.Lastname).toBe(lastname);
    expect(specialist.Email).toBe(email);
    expect(specialist.Phonenumber).toBe(phonenumber);
  });

  it("should create a new specialist without the provided settings, notes, sessions and appointments. Then update them", () => {
    const specialist = new Specialist(firstname, lastname, email, phonenumber);

    const notes: Array<Note> = [
      new Note("note1", "description1", specialist),
      new Note("note2", "description2", specialist),
    ];
    const patient = new Patient(
      "Jane",
      "Duge",
      "JaneDuge@gmail.com",
      32,
      "0687654321",
      false,
      "John",
      "Duge",
      "JohnDuge@hotmail.com",
      "0687654312",
    );
    const appointments: Array<Appointment> = [
      new Appointment(
        "appointment1",
        new Date(),
        new Date(),
        specialist,
        patient,
      ),
      new Appointment(
        "appointment2",
        new Date(),
        new Date(),
        specialist,
        patient,
      ),
    ];
    const sessions: Array<Session> = [
      new Session(
        "session1",
        new Date(),
        new Date(),
        specialist,
        patient,
        appointments[0],
      ),
      new Session(
        "session2",
        new Date(),
        new Date(),
        specialist,
        patient,
        appointments[1],
      ),
    ];

    expect(specialist.Settings).toStrictEqual({});
    expect(specialist.Notes).toStrictEqual([]);
    expect(specialist.Sessions).toStrictEqual([]);
    expect(specialist.Appointments).toStrictEqual([]);

    specialist.Settings = settings;
    specialist.Notes = notes;
    specialist.Sessions = sessions;
    specialist.Appointments = appointments;

    expect(specialist.Settings).toBe(settings);
    expect(specialist.Notes).toBe(notes);
    expect(specialist.Sessions).toBe(sessions);
    expect(specialist.Appointments).toBe(appointments);
  });

  it("should update the specialists contact information", () => {
    const specialist = new Specialist(firstname, lastname, email, phonenumber);
    const newEmail = "terminate@bing.com";
    const newPhonenumber = "0687654325";

    expect(specialist.Email).toBe(email);
    expect(specialist.Phonenumber).toBe(phonenumber);

    specialist.Email = newEmail;
    specialist.Phonenumber = newPhonenumber;

    expect(specialist.Email).toBe(newEmail);
    expect(specialist.Phonenumber).toBe(newPhonenumber);
  });
});
