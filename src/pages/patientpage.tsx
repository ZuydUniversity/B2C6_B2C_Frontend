// src/pages/PatientPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";

const PatientPage: React.FC = () => {
  const navigate = useNavigate();

  const handlePatientClick = (id: number) => {
    navigate(`/patient/${id}`);
  };

  return (
    <div className="patient-page">
      {/* <1 id="title">Patiëntenoverzicht</h1> wordt gebruik voor een render test */}
      <h1 id="title">Patiëntenoverzicht</h1>
      <hr />
      <PatientList onPatientClick={handlePatientClick} />
    </div>
  );
};

export default PatientPage;
