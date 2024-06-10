// src/pages/PatientOverview.tsx
import React from "react";
import { useParams } from "react-router-dom";
import "./styles/patientoverviewcss.css";
import PatientDetails from "../components/patientdetails";
import { Patient } from "../abstracts/ImportsModels";

const patients = [
  new Patient(
    "John",
    "Doe",
    "john.doe@example.com",
    34,
    "123-456-7890",
    true,
    "Jane",
    "Doe",
    "jane.doe@example.com",
    "098-765-4321",
  ),
  new Patient(
    "Jane",
    "Smith",
    "jane.smith@example.com",
    28,
    "111-222-3333",
    false,
    "John",
    "Smith",
    "john.smith@example.com",
    "444-555-6666",
  ),
  new Patient(
    "Alice",
    "Johnson",
    "alice.johnson@example.com",
    45,
    "777-888-9999",
    true,
    "Bob",
    "Johnson",
    "bob.johnson@example.com",
    "000-111-2222",
  ),
  // Add more patients as needed
];

const PatientOverview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const patientId = id ? parseInt(id, 10) : NaN;
  const patient = patients.find((p) => p.Id === patientId);

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
