import * as React from "react";
import "./styles/artssessiepagecss.css";

interface PatientSelectProps {
    onSelect: () => void;
  }
  
  const PatientSelect: React.FC<PatientSelectProps> = ({ onSelect }) => {
    return (
      <section className="flex-container">
        <button
          onClick={onSelect}
          className="flex gap-3"
          aria-label="Select patient"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/332fb6b9-3131-46e6-b393-53f233eef3ae?apiKey=625a4e4417524f8294fdf8a1fc2d2593&"
            alt="Select patient icon"
            className="shrink-0 aspect-square w-34px"
          />
          <span className="flex-auto my-auto">Selecteer patiënt</span>
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