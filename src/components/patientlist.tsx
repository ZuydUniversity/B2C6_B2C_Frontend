import React from 'react';
import { Link } from 'react-router-dom';
import './componentstyles/patientlist.css';
import { Patient } from '../types/types';

interface PatientListProps {
  patients: Patient[];
}

const PatientList: React.FC<PatientListProps> = ({ patients }) => {
  return (
    <div className="patientlist-container">
      <h2 className="patientlist-title">Patienten met een afspraak</h2>
      {patients.map((patient) => (
        <div className="patient-row-wrapper" key={patient.id}>
          <div className="appointment-card">
            <span>Gepland</span>
            <span>{patient.nextAppointment}</span>
          </div>
          <div className="patient-row-container">
            <img src={patient.image} alt={patient.name} className="patient-image" />
            <ul className="patient-row">
              <div className='patientinfo-pair'>
                <span className="patient-label">Naam</span>
                <span className="patient-name">{patient.name}</span>
              </div>
              <div className='patientinfo-pair'>
                <span className="patient-label">Leeftijd</span>
                <span className="patient-age">{patient.age} jaar</span>
              </div>
              <div className='patientinfo-pair'>
                <span className="patient-label">Diagnose</span>
                <span className="patient-diagnosis">{patient.diagnosis}</span>
              </div>
              <div className='patientinfo-pair'>
                <span className="patient-label">Medicatie</span>
                <span className="patient-medication">{patient.medication}</span>
              </div>
              <div className='patientinfo-pair'>
                <span className="patient-label">Afspraken</span>
                <span className="patient-appointments">{patient.appointments}</span>
              </div>
            </ul>
          </div>
          <div className="options-card">
            <Link to={`/patient/${patient.id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
