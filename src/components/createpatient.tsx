import React, { useState, useRef } from "react";
import "./componentstyles/createpatient.css";
import { closePatientForm } from "../scripts/functions";

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
	const firstnameRef = useRef(null);
	const lastnameRef = useRef(null);
	const emailRef = useRef(null);
	const handleSubmitPatient = async (event: React.FormEvent) => {
		event.preventDefault();
		const newPatient = {
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
		  Specialist: specialist,
		  Note: note,
		  Medication: medication,
		  Appointment: appointment,
		};
	  
		// Replace 'http://localhost:8000/patients' with FastAPI endpoint URL
		const apiUrl = 'http://localhost:8000/patients';
	  
		try {
		  const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPatient),
		  });
	  
		  if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		  }
	  
		  console.log('Patient created successfully');
		} catch (error) {
		  console.error('Failed to create patient:', error);
		}
	  };

	return (
		<div className="modal">
			<div className="form-container">
				<form onSubmit={handleSubmit} className="add-patient-form">
					<span className="close-btn" onClick={closePatientForm}>
						X
					</span>
					<label>
						Voornaam:
						<input ref={firstnameRef} className="input-field" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
					</label>
					<label>
						Achternaam:
						<input ref={lastnameRef} className="input-field" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
					</label>
					<label>
						Email:
						<input className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</label>
					<label>
						Leeftijd:
						<input className="input-field" type="number" value={age} onChange={(e) => setAge(+e.target.value)} />
					</label>
					<label>
						Telefoonnummer:
						<input className="input-field" type="tel" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
					</label>
					<br />
					<label>
						Geslacht:
						<div className="radio-group">
							<label>
								<input type="radio" name="sex" value="male" checked={!sex} onChange={() => setSex(false)} />
								Man
							</label>
							<label>
								<input type="radio" name="sex" value="female" checked={sex} onChange={() => setSex(true)} />
								Vrouw
							</label>
						</div>
					</label>
					<br />
					<label>
						Voornaam Contactpersoon:
						<input className="input-field" type="text" value={firstnameContact} onChange={(e) => setFirstnameContact(e.target.value)} />
					</label>
					<label>
						Achternaam Contactpersoon:
						<input className="input-field" type="text" value={lastnameContact} onChange={(e) => setLastnameContact(e.target.value)} />
					</label>
					<label>
						Email Contactpersoon:
						<input className="input-field" type="email" value={emailContact} onChange={(e) => setEmailContact(e.target.value)} />
					</label>
					<label>
						Telefoonnummer Contactpersoon:
						<input className="input-field" type="tel" value={phonenumberContact} onChange={(e) => setPhonenumberContact(e.target.value)} />
					</label>
					<label>
						Specialist:
						<input className="input-field" type="text" value={specialist} onChange={(e) => setSpecialist(e.target.value)} />
					</label>
					<label>
						Notitie:
						<input className="input-field" type="text" value={note} onChange={(e) => setNote(e.target.value)} />
					</label>
					<label>
						Medicatie:
						<input className="input-field" type="text" value={medication} onChange={(e) => setMedication(e.target.value)} />
					</label>
					<label>
						Afspraak:
						<input className="input-field" type="text" value={appointment} onChange={(e) => setAppointment(e.target.value)} />
					</label>
					<button type="submit">Maak patiënt</button>
				</form>
			</div>
		</div>
	);
	
};

export default CreatePatient;
