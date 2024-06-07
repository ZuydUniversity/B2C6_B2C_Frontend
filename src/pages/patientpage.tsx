import React from "react";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";

const PatientPage: React.FC = () => {
  return (
    <div className="patient-page">
      <h1>Patiëntenoverzicht</h1>
      <PatientList />
    </div>
  );
};

export default PatientPage;
