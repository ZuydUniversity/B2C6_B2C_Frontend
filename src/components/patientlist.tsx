import React from "react";
import { useNavigate } from "react-router-dom";
import "./componentstyles/patientlist.css";

const PatientList: React.FC = () => {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      geboortedatum: "01-01-1990",
      diagnosis: "JDM",
      medication: "x medicijn",
      appointments: "3",
    },
    {
      id: 2,
      name: "John Doe",
      geboortedatum: "01-01-1990",
      diagnosis: "JDM",
      medication: "x medicijn",
      appointments: "3",
    },
    {
      id: 3,
      name: "John Doe",
      geboortedatum: "01-01-1990",
      diagnosis: "JDM",
      medication: "x medicijn",
      appointments: "3",
    },
    {
      id: 4,
      name: "John Doe",
      geboortedatum: "01-01-1990",
      diagnosis: "JDM",
      medication: "x medicijn",
      appointments: "4",
    },
    {
      id: 5,
      name: "John Doe",
      geboortedatum: "01-01-1990",
      diagnosis: "JDM",
      medication: "x medicijn",
      appointments: "3",
    },
    {
      id: 6,
      name: "John Doe",
      geboortedatum: "01-01-1990",
      diagnosis: "JDM",
      medication: "x medicijn",
      appointments: "3",
    },
    {
      id: 7,
      name: "John Doe",
      geboortedatum: "01-01-1990",
      diagnosis: "JDM",
      medication: "x medicijn",
      appointments: "3",
    },
    {
      id: 8,
      name: "John Doe",
      geboortedatum: "01-01-1990",
      diagnosis: "JDM",
      medication: "x medicijn",
      appointments: "4",
    },
  ];

  const navigate = useNavigate();

  const openOverview = (patientId: number) => {
    navigate(`/patient/${patientId}`);
  };

  return (
    <div className="patientlist-container">
      <h4 className="patient-title">Alle patienten</h4>
      <div className="patientlist-header">
        <div className="patient-label-container">
          <div>naam</div>
          <div>geboorte datum</div>
          <div>diagnose</div>
          <div>afspraken</div>
        </div>
      </div>
      {patients.map((patient) => (
        <div key={patient.id} className="patient-row-wrapper">
          <div
            className="patient-row"
            onClick={() => openOverview(patient.id)}
          >
            <div className="patient-value-container">
              <div className="patient-value">{patient.name}</div>
              <div className="patient-value">{patient.geboortedatum}</div>
              <div className="patient-value">{patient.diagnosis}</div>
              <div className="patient-value">{patient.appointments}</div>
            </div>
          </div>
          <div className="extra-card">...</div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
