import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import Rootlink from './rootlink';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="rootlink">
          <Rootlink />
        </li>
        <li className="navbar-item">
          <Link to="/Patientpage" className="navbar-link">Patientpage</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Docterpage" className="navbar-link">Doctorpage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;