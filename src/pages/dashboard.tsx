import React, {useState} from 'react';

import "./styles/dashboardcss.css";

const Dashboard: React.FC = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
    return (
        <div className={`container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar">
          <h2>JDB</h2>
          <ul>
            <li>Dashboard</li>
            <li>Kalender</li>
            <li>Documenten</li>
            <li>Patiëntenoverzicht</li>
            <li>Afspraak toevoegen</li>
            <li>Sessie toevoegen arts</li>
            <li>Sessie toevoegen fysiotherapeut</li>
          </ul>
          <ul>
            <li>Instellingen</li>
            <li>Uitloggen</li>
          </ul>
        </div>
        <div className="main-content">
          <div className="header">
            <button onClick={toggleSidebar}>
              {isSidebarCollapsed ? '>>' : '<<'}
            </button>
            <h1>Hallo, Dr. Johannes Doe</h1>
          </div>
          <div className="patient-list">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="patient" key={index}>
                <div className="patient-info">
                  <img src="https://via.placeholder.com/50" alt="Patient" />
                  <div>
                    <p><strong>Naam:</strong> Joep Doe</p>
                    <p><strong>Leeftijd:</strong> 10 jaar</p>
                    <p><strong>Diagnose:</strong> JDM (monocyclische)</p>
                    <p><strong>Medicatie:</strong> x medicijn</p>
                    <p><strong>Afspraken:</strong> 4</p>
                  </div>
                </div>
                <div className="patient-actions">
                  <button>...</button>
                </div>
              </div>
            ))}
          </div>
          <div className="note">
            <h3>Notitie</h3>
            <textarea placeholder="Type iets..." ></textarea>
          </div>
        </div>
      </div>
    );
  }
export default Dashboard;