import React from 'react';
import './componentstyles/patientdetails.css';
import { Patient, ContactPerson } from '../types/types';

interface PatientDetailsProps {
  patient: Patient;
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  // Placeholder contact person data; you might want to dynamically pass this data as well.
  const contactPerson: ContactPerson = {
    name: 'Jane Doe',
    phone: '123-456-7890',
    email: 'jane.doe@example.com',
  };

  return (
    <div className="patient-info-card">
      <div className="patient-info">
        <h2>Patiënt</h2>
        <div className="patient-details">
          <div><strong>Naam:</strong> {patient.name}</div>
          <div><strong>Leeftijd:</strong> {patient.age}</div>
          <div><strong>Diagnose:</strong> {patient.diagnosis}</div>
          <div><strong>Medicatie:</strong> {patient.medication}</div>
        </div>
      </div>
      <div className="contact-person-info">
        <h2>Contactpersoon</h2>
        <div className="contact-details">
          <div><strong>Naam:</strong> {contactPerson.name}</div>
          <div><strong>Telefoonnummer:</strong> {contactPerson.phone}</div>
          <div><strong>E-mailadres:</strong> {contactPerson.email}</div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
