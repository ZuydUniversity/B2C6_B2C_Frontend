import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./componentstyles/createpatient.css";
import { Patient } from "../abstracts/ImportsModels";


const CreatePatient: React.FC = () => {

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
    <div className="maincontainercn">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h1 className="titlecn">Maak een nieuwe patiënt aan</h1>

        <form onSubmit={handleSubmit} className="form-grid-container">
        
        <label className="firstnamecn label" htmlFor="firstname">Voornaam:</label>
        <input className="firstnamecn input"
          id="firstname"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}/>
  
        
          
          <label className="lastnamecn" htmlFor="lastname">Achternaam:</label>
          <input
          className="lastnamecn input"
            id="lastname"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        
        
          <label className="emailcn" htmlFor="email">Email:</label>
          <input
            className="emailcn input"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
        
          <label className="agecn" htmlFor="age">Leeftijd:</label>
          <input
            className="agecn input"
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(+e.target.value)}
          />
        
        
          <label className="phonenumbercn" htmlFor="phonenumber">Telefoonnummer:</label>
          <input
            className="phonenumbercn input"
            id="phonenumber"
            type="tel"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        
        
          
          <label className="sexcn"> Geslacht:</label>
          <div className="malebuttoncn"> 
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              checked={!sex}
              onChange={() => setSex(false)}
            />
            <label className="malecn" htmlFor="male">Man</label>
          </div>
          <div> 
          </div>
          <div className="femalebuttoncn">
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              checked={sex}
              onChange={() => setSex(true)}
            />
            <label className="femalecn" htmlFor="female">Vrouw</label>
          </div>
        

        
          <label className="firstnamecontactcn" htmlFor="firstnameContact">Voornaam Contactpersoon:</label>
          <input
          className="firstnamecontactcn input"
            id="firstnameContact"
            type="text"
            value={firstnameContact}
            onChange={(e) => setFirstnameContact(e.target.value)}
          />
        
        
          <label className="lastnamecontactcn" htmlFor="lastnameContact">Achternaam Contactpersoon:</label>
          <input
            className="lastnamecontactcn input"
            id="lastnameContact"
            type="text"
            value={lastnameContact}
            onChange={(e) => setLastnameContact(e.target.value)}
          />
        
        
          <label className="emailcontactcn" htmlFor="emailContact">Email Contactpersoon:</label>
          <input
            className="emailcontactcn input"
            id="emailContact"
            type="email"
            value={emailContact}
            onChange={(e) => setEmailContact(e.target.value)}
          />
        
        
          <label className="phonenumbercontactcn" htmlFor="phonenumberContact">
            Telefoonnummer Contactpersoon:
          </label>
          <input
            className="phonenumbercontactcn input"
            id="phonenumberContact"
            type="tel"
            value={phonenumberContact}
            onChange={(e) => setPhonenumberContact(e.target.value)}
          />
        
        
          <label className="specialistcn" htmlFor="specialist">Specialist:</label>
          <input
            className="specialistcn input"
            id="specialist"
            type="text"
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
          />
        
        
          <label className="notecn" htmlFor="note">Notitie:</label>
          <input
            className="notecn input"
            id="note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        
        
          <label className="medicationcn" htmlFor="medication">Medicatie:</label>
          <input
            className="medicationcn input"
            id="medication"
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          />
        
        
          <label className="appointmentcn" htmlFor="appointment">Afspraak:</label>
          <input
            className="appointmentcn input"
            id="appointment"
            type="text"
            value={appointment}
            onChange={(e) => setAppointment(e.target.value)}
          />
        
        <br />
        
        <button className="submitcn" type="submit">Maak patiënt aan</button>
  
      </form>
      </form>
    </div>
      
    </div>
    
  );
};

export default CreatePatient;
