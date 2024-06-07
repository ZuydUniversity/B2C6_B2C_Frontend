import {
  Patient,
  Specialist,
  Note,
  Medication,
  Appointment,
} from "../../abstracts/ImportsModels";

describe("Patient", () => {
  const firstname = "John";
  const lastname = "Doe";
  const email = "JohnDoe@gmail.com";
  const age = 32;
  const phonenumber = "0687654321";
  const sex = true;
  const firstnameContact = "Jane";
  const lastnameContact = "Doe";
  const emailContact = "JaneDoe@gmail.com";
  const phonenumberContact = "0687654312";

  it("should create a new patient with all the provided properties", () => {
    const patient = new Patient(
      firstname,
      lastname,
      email,
      age,
      phonenumber,
      sex,
      firstnameContact,
      lastnameContact,
      emailContact,
      phonenumberContact,
    );

    expect(patient.Id).toBe(0);
    expect(patient.Firstname).toBe(firstname);
    expect(patient.Lastname).toBe(lastname);
    expect(patient.Email).toBe(email);
    expect(patient.Age).toBe(age);
    expect(patient.Phonenumber).toBe(phonenumber);
    expect(patient.Sex).toBe(sex);
    expect(patient.FirstnameContact).toBe(firstnameContact);
    expect(patient.LastnameContact).toBe(lastnameContact);
    expect(patient.EmailContact).toBe(emailContact);
    expect(patient.PhonenumberContact).toBe(phonenumberContact);
  });

  it("should create a new patient with the provided specialists, notes, medications and appointments", () => {
    const patient = new Patient(
      firstname,
      lastname,
      email,
      age,
      phonenumber,
      sex,
      firstnameContact,
      lastnameContact,
      emailContact,
      phonenumberContact,
    );

    const specialists: Array<Specialist> = [
      new Specialist("John", "Doe", "JohnDoe@gmail.com", "0612345678"),
    ];
    const appointments: Array<Appointment> = [
      new Appointment(
        "cheeseAppointment",
        new Date(),
        new Date(),
        specialists[0],
        patient,
      ),
    ];
    const notes: Array<Note> = [
      new Note("note1", "description1", specialists[0], patient),
      new Note("note2", "description2", specialists[0], patient),
    ];
    const medications: Array<Medication> = [
      new Medication("medication1", "description1", patient),
      new Medication("medication2", "description2", patient),
    ];

    expect(patient.Specialists).toBe([]);
    expect(patient.Notes).toBe([]);
    expect(patient.Medications).toBe([]);
    expect(patient.Appointments).toBe([]);

    patient.Specialists = specialists;
    patient.Notes = notes;
    patient.Medications = medications;
    patient.Appointments = appointments;

    expect(patient.Specialists).toBe(specialists);
    expect(patient.Notes).toBe(notes);
    expect(patient.Medications).toBe(medications);
    expect(patient.Appointments).toBe(appointments);
  });

  it("should update the patients personalinformation", () => {
    const patient = new Patient(
      firstname,
      lastname,
      email,
      age,
      phonenumber,
      sex,
      firstnameContact,
      lastnameContact,
      emailContact,
      phonenumberContact,
    );
    const newFirstname = "Jane";
    const newLastname = "Duge";
    const newEmail = "JaneDuge@bing.com";
    const newAge = 45;
    const newPhonenumber = "0687654312";

    expect(patient.Firstname).toBe(firstname);
    expect(patient.Lastname).toBe(lastname);
    expect(patient.Email).toBe(email);
    expect(patient.Age).toBe(age);
    expect(patient.Phonenumber).toBe(phonenumber);

    patient.Firstname = newFirstname;
    patient.Lastname = newLastname;
    patient.Email = newEmail;
    patient.Age = newAge;
    patient.Phonenumber = newPhonenumber;

    expect(patient.Firstname).toBe(newFirstname);
    expect(patient.Lastname).toBe(newLastname);
    expect(patient.Email).toBe(newEmail);
    expect(patient.Age).toBe(newAge);
    expect(patient.Phonenumber).toBe(newPhonenumber);
  });

  it("should update the patients contactinformation", () => {
    const patient = new Patient(
      firstname,
      lastname,
      email,
      age,
      phonenumber,
      sex,
      firstnameContact,
      lastnameContact,
      emailContact,
      phonenumberContact,
    );
    const newFirstnameContact = "Mark";
    const newLastnameContact = "Rutte";
    const newEmailContact = "MarkRutte@hotmail.com";
    const newPhonenumberContact = "0687654321";

    expect(patient.FirstnameContact).toBe(firstnameContact);
    expect(patient.LastnameContact).toBe(lastnameContact);
    expect(patient.EmailContact).toBe(emailContact);
    expect(patient.PhonenumberContact).toBe(phonenumberContact);

    patient.FirstnameContact = newFirstnameContact;
    patient.LastnameContact = newLastnameContact;
    patient.EmailContact = newEmailContact;
    patient.PhonenumberContact = newPhonenumberContact;

    expect(patient.FirstnameContact).toBe(newFirstnameContact);
    expect(patient.LastnameContact).toBe(newLastnameContact);
    expect(patient.EmailContact).toBe(newEmailContact);
    expect(patient.PhonenumberContact).toBe(newPhonenumberContact);
  });
});
