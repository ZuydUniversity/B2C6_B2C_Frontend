import React from "react";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";
import { Patient } from '../types/types';

const patients: Patient[] = [
  { id: 1, name: 'John Doe', age: 30, diagnosis: 'JDM', medication: 'x medicijn', appointments: '3', image: 'https://via.placeholder.com/150', nextAppointment: "02-01-2024" },
  { id: 2, name: 'Jane Smith', age: 45, diagnosis: 'Rheumatoid Arthritis', medication: 'y medicijn', appointments: '2', image: 'https://via.placeholder.com/150', nextAppointment: "10-01-2024" },
  { id: 3, name: 'Alice Johnson', age: 60, diagnosis: 'Diabetes', medication: 'z medicijn', appointments: '4', image: 'https://via.placeholder.com/150', nextAppointment: "15-01-2024" },
];

const PatientPage: React.FC = () => {
  return (
    <div className="patient-page">
      <h1>Hallo, Dr. Johannes Doe</h1>
      <PatientList patients={patients} />
    </div>
  );
};

export default PatientPage;
