// src/pages/PatientPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";
import CreatePatient from "../components/createpatient"

const PatientPage: React.FC = () => {
  const navigate = useNavigate();

  const handlePatientClick = (id: number) => {
    navigate(`/patient/${id}`);
  };

  return (
    <div className="patient-page">
      <h1>Patiëntenoverzicht</h1>
      <hr />
      <PatientList onPatientClick={handlePatientClick} />
      {/* <CreatePatient onCreateatientClick={handlePatientClick} /> */}
    </div>
  );
};

export default PatientPage;
