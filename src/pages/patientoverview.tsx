import React from "react";
import { useParams } from "react-router-dom";
import "./styles/patientoverviewcss.css";
import PatientDetails from "../components/patientdetails";
import { Patient } from '../types/types';

const patients: Patient[] = [
  { id: 1, name: 'John Doe', age: 30, diagnosis: 'JDM', medication: 'x medicijn', appointments: '3', image: 'https://via.placeholder.com/150', nextAppointment: "02-01-2024" },
  { id: 2, name: 'Jane Smith', age: 45, diagnosis: 'Rheumatoid Arthritis', medication: 'y medicijn', appointments: '2', image: 'https://via.placeholder.com/150', nextAppointment: "10-01-2024" },
  { id: 3, name: 'Alice Johnson', age: 60, diagnosis: 'Diabetes', medication: 'z medicijn', appointments: '4', image: 'https://via.placeholder.com/150', nextAppointment: "15-01-2024" },
];

const PatientOverview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const patientId = parseInt(id || '', 10);
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
