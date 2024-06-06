import * as React from "react";
import "./styles/artssessiepagecss.css";
import { FaPlus } from "react-icons/fa";


interface PatientSelectProps {
    onSelect: () => void;
  }
  
  const PatientSelect: React.FC<PatientSelectProps> = ({ onSelect }) => {
    return (
      <section className="flex-container">
        <button
          onClick={onSelect}
          className="select-patient-button flex-container"
          aria-label="Select patient"
        >
          <FaPlus className="select-patient-icon" aria-hidden="true"/>
          <span className="selecting patient">Selecteer patiënt</span>
        </button>
      </section>
    );
  };
  
  const MyComponent: React.FC = () => {
    const handleSelect = () => {

    };
  
    return (
      <main className="main-container">
        <header className="header-text">Sessie toevoegen</header>
        <h2 className="sub-header">Patiëntgegevens</h2>
        <hr className="divider" />
        <PatientSelect onSelect={handleSelect} />
      </main>
    );
  };
  
  export default MyComponent;