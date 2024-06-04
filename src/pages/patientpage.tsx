// src/pages/PatientPage.tsx
import React from "react";
import "./styles/patientcss.css";

const PatientPage: React.FC = () => {
  return (
    <div className="patient-page">
      {/* <1 id="title">Patient Page</h1> wordt gebruik voor een render test */}
      <h1 id="title">Patient Page</h1>
      <p>
        Welkom op de patienten pagina, hier vind je alle informatie beschikbaar
        over onze patienten.
      </p>
    </div>
  );
};

export default PatientPage;
