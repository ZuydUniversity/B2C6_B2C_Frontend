import React from "react";
import "./styles/patientcss.css";
import PatientList from "../components/patientlist";

const PatientPage: React.FC = () => {
  return (
    <div className="patient-page">
      <h1>Hallo, Dr. Johannes Doe</h1>
      <PatientList />
    </div>
  );
};

export default PatientPage;
