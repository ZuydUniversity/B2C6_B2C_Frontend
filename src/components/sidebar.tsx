import React from "react";
import "./componentstyles/sidebar.css"; // Styling

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="Images/JDBLogo.png"
          className="logo-img"
          width="100"
          height="200"
          alt="JDB"
        />
      </div>
      <nav>
        <ul>
          <a href="/dashboard" className="url"><li className="dashboard-icon">Dashboard</li></a>
          <li className="calendar-icon">Kalender</li>
          <li className="documents-icon">Documenten</li>
          <a href="/patients" className="url"><li className="patients-icon">Patiëntenoverzicht</li></a>
        </ul>
        <hr />
        <ul>
          <li className="add-appointment-icon">Afspraak toevoegen</li>
          <li className="add-doctor-session-icon">Sessie toevoegen arts</li>
          <li className="add-physio-session-icon">
            Sessie toevoegen fysiotherapeut
          </li>
        </ul>
        <hr />
      </nav>
      <div className="settings-logout">
        <ul>
          <li className="settings-icon">Instellingen</li>
          <a href="/login" className="url"><li className="logout-icon">Uitloggen</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
