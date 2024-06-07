import React from "react";
import { useParams } from "react-router-dom";
import "./styles/patientoverviewcss.css";
import PatientDetails from "../components/patientdetails";
import { Patient } from '../types/types';

const patients: Patient[] = [
  { id: 1, name: 'John Doe', birthdate: '11/02/2008', diagnosis: 'JDM, monocycles', appointments: '2' },
  { id: 2, name: 'Jane Smith', birthdate: '11/02/2008', diagnosis: 'Kanker', appointments: '2' },
  { id: 3, name: 'Alice Johnson', birthdate: '11/02/2008', diagnosis: 'Chlamydia', appointments: '2' },
];

const PatientOverview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const patientId = id ? parseInt(id, 10) : NaN;
  const patient = patients.find(p => p.id === patientId);

  if (!patient) {
    return <div>Patiënt niet gevonden</div>;
  }

  return (
    <div className="patient-overview">
      <h1>Dashboard</h1>
      <PatientDetails patient={patient} />
    </div>
  );
};

export default PatientOverview;
