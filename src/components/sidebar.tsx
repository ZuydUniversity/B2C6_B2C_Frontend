import React from 'react';
import './Sidebar.css'; // We'll create this CSS file for styling

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="path-to-logo" alt="JDB" className="logo-img" />
        <span className="logo-text">Juveniele Dermatomyositis Board</span>
      </div>
      <nav>
        <ul>
          <li><i className="icon dashboard-icon"></i>Dashboard</li>
          <li><i className="icon calendar-icon"></i>Kalender</li>
          <li><i className="icon documents-icon"></i>Documenten</li>
          <li><i className="icon patients-icon"></i>Patiëntenoverzicht</li>
        </ul>
        <hr />
        <ul>
          <li><i className="icon add-appointment-icon"></i>Afspraak toevoegen</li>
          <li><i className="icon add-doctor-session-icon"></i>Sessie toevoegen arts</li>
          <li><i className="icon add-physio-session-icon"></i>Sessie toevoegen fysiotherapeut</li>
        </ul>
      </nav>
      <div className="settings-logout">
        <ul>
          <li><i className="icon settings-icon"></i>Instellingen</li>
          <li><i className="icon logout-icon"></i>Uitloggen</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;