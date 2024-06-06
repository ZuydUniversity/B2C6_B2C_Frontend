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
      <h2 className="patientlist-title">Alle patiënten</h2>
      <div className="patientlist-header">
        <span>naam</span>
        <span>geboorte datum</span>
        <span>diagnose</span>
        <span>afspraken</span>
        <span></span>
      </div>
      {patients.map((patient) => (
        <div className="patient-row-wrapper" key={patient.id}>
          <div className="patient-row">
            <span className="patient-name">{patient.name}</span>
            <span className="patient-birthdate">{patient.birthdate}</span>
            <span className="patient-diagnosis">{patient.diagnosis}</span>
            <span className="patient-appointments">{patient.appointments}</span>
            <div className="options-card">
              <Link to={`/patient/${patient.id}`}>...</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
