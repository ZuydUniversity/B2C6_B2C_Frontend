import React from 'react';
import './componentstyles/patientdetails.css';
import { Patient, ContactPerson } from '../types/types';

interface PatientDetailsProps {
  patient: Patient;
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  const contactPerson: ContactPerson = {
    name: 'Jane Doe',
    phone: '123-456-7890',
    email: 'jane.doe@example.com',
  };

  return (
    <div className="main-container">
      <div className="patient-details-container">
        <div className="patient-info-card">
          <h2>Patiënt</h2>
          <div className="patient-details">
            <div className="patient-info-pair">
              <span className="patient-label">Naam:</span>
              <span className="patient-value">{patient.name}</span>
            </div>
            <div className="patient-info-pair">
              <span className="patient-label">Geboorte datum:</span>
              <span className="patient-value">{patient.birthdate}</span>
            </div>
            <div className="patient-info-pair">
              <span className="patient-label">Diagnose:</span>
              <span className="patient-value">{patient.diagnosis}</span>
            </div>
            <div className="patient-info-pair">
              <span className="patient-label">Afspraken:</span>
              <span className="patient-value">{patient.appointments}</span>
            </div>
          </div>
        </div>
        <div className="contact-person-info">
          <h2>Contactpersoon</h2>
          <div className="contact-details">
            <div className="contact-info-pair">
              <span className="contact-label">Naam:</span>
              <span className="contact-value">{contactPerson.name}</span>
            </div>
            <div className="contact-info-pair">
              <span className="contact-label">Telefoonnummer:</span>
              <span className="contact-value">{contactPerson.phone}</span>
            </div>
            <div className="contact-info-pair">
              <span className="contact-label">E-mailadres:</span>
              <span className="contact-value">{contactPerson.email}</span>
            </div>
          </div>
        </div>
        <div className="medication-info">
          <h2>Medicatie</h2>
          <div className="medication-details">
            <div className="medication-info-pair">
              <span className="medication-label">Medicijn:</span>
              <span className="medication-value">Gebruik</span>
            </div>
            <div className="medication-info-pair">
              <span className="medication-label">Medicijn:</span>
              <span className="medication-value">Gebruik</span>
            </div>
            <div className="medication-info-pair">
              <span className="medication-label">Medicijn:</span>
              <span className="medication-value">Gebruik</span>
            </div>
            <div className="medication-info-pair">
              <span className="medication-label">Medicijn:</span>
              <span className="medication-value">Gebruik</span>
            </div>
            <div className="medication-info-pair">
              <span className="medication-label">Medicijn:</span>
              <span className="medication-value">Gebruik</span>
            </div>
            <div className="medication-info-pair">
              <span className="medication-label">Medicijn:</span>
              <span className="medication-value">Gebruik</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
