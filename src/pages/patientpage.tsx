import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";
import { Patient } from '../types/types';

const patients: Patient[] = [
  { id: 1, name: 'John Doe', birthdate: '11/02/2008', diagnosis: 'JDM, monocycles', appointments: '2' },
  { id: 2, name: 'Jane Smith', birthdate: '11/02/2008', diagnosis: 'Kanker', appointments: '2' },
  { id: 3, name: 'Alice Johnson', birthdate: '11/02/2008', diagnosis: 'Chlamydia', appointments: '2' },
];

const PatientPage: React.FC = () => {
  const navigate = useNavigate();

  const handlePatientClick = (id: number) => {
    navigate(`/patient/${id}`);
  };

  return (
    <div className="patient-page">
      <h1>Patiëntenoverzicht</h1>
      <div onClick={() => handlePatientClick(1)}>
        {" "}
        {/* Example button for testing */}
        <PatientList />
      </div>
    </div>
  );
};

export default PatientPage;
