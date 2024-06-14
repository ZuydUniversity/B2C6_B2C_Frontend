import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./componentstyles/HIERZOAANPASSENLATER.css";
import { Patient } from "../abstracts/ImportsModels";

const CreatePatient: React.FC = () => {
  // Add connections to other models here...
  const [id, setId] = useState<number>(0);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [sex, setSex] = useState<boolean>(false);
  const [firstnameContact, setFirstnameContact] = useState<string>("");
  const [lastnameContact, setLastnameContact] = useState<string>("");
  const [emailContact, setEmailContact] = useState<string>("");
  const [phonenumberContact, setPhonenumberContact] = useState<string>("");
  const [specialist, setSpecialist] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [medication, setMedication] = useState<string>("");
  const [appointment, setAppointment] = useState<string>("");
  
  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newPatient = {
      Id: id,
      Firstname: firstname,
      Lastname: lastname,
      Email: email,
      Age: age,
      Phonenumber: phonenumber,
      Sex: sex,
      FirstnameContact: firstnameContact,
      LastnameContact: lastnameContact,
      EmailContact: emailContact,
      PhonenumberContact: phonenumberContact,
      Specialists: [],
      Notes: [],
      Medications: [],
      Appointments: [],
    };
    console.log("Patiënt aangemaakt:", newPatient);
    // Reset form (add connection models here...)
    setId(0);
    setFirstname("");
    setLastname("");
    setEmail("");
    setAge(0);
    setPhonenumber("");
    setSex(false);
    setFirstnameContact("");
    setLastnameContact("");
    setEmailContact("");
    setPhonenumberContact("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          type="number"
          value={id}
          onChange={(e) => setId(+e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="firstname">Voornaam:</label>
        <input
          id="firstname"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastname">Achternaam:</label>
        <input
          id="lastname"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Leeftijd:</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(+e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phonenumber">Telefoonnummer:</label>
        <input
          id="phonenumber"
          type="tel"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </div>
      <div>
        <label>Geslacht:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            checked={!sex}
            onChange={() => setSex(false)}
          />
          <label htmlFor="male">Man</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            checked={sex}
            onChange={() => setSex(true)}
          />
          <label htmlFor="female">Vrouw</label>
        </div>
      </div>

      <div>
        <label htmlFor="firstnameContact">Voornaam Contactpersoon:</label>
        <input
          id="firstnameContact"
          type="text"
          value={firstnameContact}
          onChange={(e) => setFirstnameContact(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastnameContact">Achternaam Contactpersoon:</label>
        <input
          id="lastnameContact"
          type="text"
          value={lastnameContact}
          onChange={(e) => setLastnameContact(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="emailContact">Email Contactpersoon:</label>
        <input
          id="emailContact"
          type="email"
          value={emailContact}
          onChange={(e) => setEmailContact(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phonenumberContact">
          Telefoonnummer Contactpersoon:
        </label>
        <input
          id="phonenumberContact"
          type="tel"
          value={phonenumberContact}
          onChange={(e) => setPhonenumberContact(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="specialist">Specialist:</label>
        <input
          id="specialist"
          type="text"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="note">Notitie:</label>
        <input
          id="note"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="medication">Medicatie:</label>
        <input
          id="medication"
          type="text"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="appointment">Afspraak:</label>
        <input
          id="appointment"
          type="text"
          value={appointment}
          onChange={(e) => setAppointment(e.target.value)}
        />
      </div>
      <br />
      <br />

      <button type="submit">Patiënt Aanmaken</button>
    </form>
  );
};

export default CreatePatient;
