import React from "react";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";
import { Patient } from '../types/types';

const patients: Patient[] = [
  { id: 1, name: 'John Doe', birthdate: '11/02/2008', diagnosis: 'JDM, monocycles', appointments: '2' },
  { id: 2, name: 'Jane Smith', birthdate: '11/02/2008', diagnosis: 'JDM, monocycles', appointments: '2' },
  { id: 3, name: 'Alice Johnson', birthdate: '11/02/2008', diagnosis: 'JDM, monocycles', appointments: '2' },
];

const PatientPage: React.FC = () => {
  return (
    <div className="patient-page">
      <h1>Patiëntenoverzicht</h1>
      <PatientList patients={patients} />
    </div>
  );
};

export default PatientPage;
