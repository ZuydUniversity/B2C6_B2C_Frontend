import React, { useState, useEffect } from "react";
import "./PatientPageStyles.css"; // Ensure you have corresponding CSS to style the components as per the design

type Patient = {
  id: number;
  name: string;
  age: number;
  diagnosis: string;
  medication: string;
  appointments: string;
};

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medication, setMedication] = useState("");
  const [appointments, setAppointments] = useState("");
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("API PUNT NOG DEFINIEREN");
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Failed to fetch patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const patient = { name, age, diagnosis, medication, appointments };

    // Send a POST request to your backend
    const response = await fetch("API PUNT NOG DEFINIEREN", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    });

    const data = await response.json();
    console.log(data);

    // Fetch the updated list of patients
    const response2 = await fetch("API PUNT NOG DEFINIEREN");
    const data2 = await response2.json();
    setPatients(data2);
  };

  return (
    <div className="main-content">
      <header>
        <h1>Hallo, Dr. Johannes Doe</h1>
      </header>
      <div className="content-box">
        <section className="patient-list">
          <h2>Afspraak maken</h2>
          <div className="patient-table">
            {patients.map((patient) => (
              <div className="patient-row" key={patient.id}>
                <div className="patient-info">
                  <img src="path/to/patient/photo.png" alt={patient.name} />
                  <div>
                    <p>
                      <strong>Naam:</strong> {patient.name}
                    </p>
                    <p>
                      <strong>Leeftijd:</strong> {patient.age} jaar
                    </p>
                    <p>
                      <strong>Diagnose:</strong> {patient.diagnosis}
                    </p>
                    <p>
                      <strong>Medicatie:</strong> {patient.medication}
                    </p>
                    <p>
                      <strong>Afspraken:</strong> {patient.appointments}
                    </p>
                  </div>
                </div>
                <div className="patient-actions">
                  <button>...</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="add-patient-form">
          <form onSubmit={handleSubmit}>
            <label>
              Naam:
              <input
                className="input-field"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Leeftijd:
              <input
                className="input-field"
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <br />
            <label>
              Diagnose:
              <input
                className="input-field"
                type="text"
                name="diagnosis"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
              />
            </label>
            <br />
            <label>
              Medicatie:
              <input
                className="input-field"
                type="text"
                name="medication"
                value={medication}
                onChange={(e) => setMedication(e.target.value)}
              />
            </label>
            <br />
            <label>
              Afspraken:
              <input
                className="input-field"
                type="text"
                name="appointments"
                value={appointments}
                onChange={(e) => setAppointments(e.target.value)}
              />
            </label>
            <br />
            <button className="hover" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
