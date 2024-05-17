import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('http://localhost:8000/patients/');
      const data = await response.json();
      setPatients(data);
    };

    fetchPatients();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const patient = { name, age, gender };

    // Send a POST request to your backend
    const response = await fetch('http://localhost:8000/patients/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patient)
    });

    const data = await response.json();
    console.log(data);

    // Fetch the updated list of patients
    const response2 = await fetch('http://localhost:8000/patients/');
    const data2 = await response2.json();
    setPatients(data2);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={age} onChange={e => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" name="gender" value={gender} onChange={e => setGender(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>

      <h2>Patienterinos</h2>
      {patients.map(patient => (
        <div key={patient.id}>
          <h3>Naam: {patient.name}</h3>
          <p>Leeftijd: {patient.age}</p>
          <p>Geslacht: {patient.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default App;