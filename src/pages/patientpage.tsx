// src/pages/PatientPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";
import CreatePatient from "../components/createpatient";

const PatientPage: React.FC = () => {
  const navigate = useNavigate();

  const handlePatientClick = (id: number) => {
    navigate(`/patient/${id}`);
  };
  const handleCreatePatient = () => {
    // Logic to handle patient creation
  };

  return (
    <div className="patient-page">
      <h1>Patiëntenoverzicht</h1>
      <hr />
      <div className="patientpaircontainer">
        <PatientList onPatientClick={handlePatientClick} />
        <CreatePatient/>
      </div>
      
    </div>
  );
};


export default PatientPage;
