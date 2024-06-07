import { Medication, Patient } from "../../abstracts/ImportsModels";

describe("Medication", () => {
  const name = "cheeseMedication";
  const dosage = "1 pill per day";
  const patient = new Patient("Jane", "Duge", "JaneDoe@gmail.com", 32, "0687654321", false, "John", "Duge", "JohnDuge@gmail.com", "0687654312");

  it("should create a new medication with all the provided properties", () => {
    const medication = new Medication(name, dosage, patient);

    expect(medication.Id).toBe(0);
    expect(medication.Name).toBe(name);
    expect(medication.Dosage).toBe(dosage);
    expect(medication.Patient).toBe(patient);
  });

  it("should update the medication's name", () => {
    const medication = new Medication(name, dosage, patient);
    const newName = "newMedication";

    expect(medication.Name).toBe(name);

    medication.Name = newName;

    expect(medication.Name).toBe(newName);
  });

  it("should update the medication's dosage", () => {
    const medication = new Medication(name, dosage, patient);
    const newDosage = "2 pills per day";

    expect(medication.Dosage).toBe(dosage);

    medication.Dosage = newDosage;

    expect(medication.Dosage).toBe(newDosage);
  });

  it("should update the medication's patient", () => {
    const medication = new Medication(name, dosage, patient);
    const newPatient = new Patient("Mark", "Rutte", "", 54, "0687654321", false, "Geert", "Wilders", "", "0678645312");

    expect(medication.Patient).toBe(patient);

    medication.Patient = newPatient;

    expect(medication.Patient).toBe(newPatient);
  });
});