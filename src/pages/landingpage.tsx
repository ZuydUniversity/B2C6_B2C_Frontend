// src/LandingPage.tsx
import React, { useEffect } from "react";
import "./styles/landingpagecss.css";

const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "SGACP";
  }, []);
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Super Gave Artsen Connect Portaal.</h1>
        <p>SGACP</p>
        <p>Jou gezondheid, Onze verantwoordelijkheid</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Patienten Dossier</h2>
          <p>Het dossier van alle patienten voor de artsen.</p>
          <li className="rootlink">
            <a className="navbar-link" href="./patients">
              Patienten
            </a>
          </li>
        </div>
        <div className="feature">
          <h2>Artsen Dossier</h2>
          <p>Bekijk al onze artsen.</p>
          <li className="navbar-item">
            <a className="navbar-link" href="/artsen">
              Artsen
            </a>
          </li>
        </div>
        <div className="feature">
          <h2>About Us</h2>
          <p>Wie zijn wij en wat doen wij.</p>
          <li className="navbar-item">
            <a className="navbar-link" href="/aboutus">
              About Us
            </a>
          </li>
        </div>
        <div className="feature">
          <h2>Dashboard</h2>
          <p>Navigatie Dashboard</p>
          <li className="navbar-item">
            <a className="navbar-link" href="/dashboardpage">
              Dashboard
            </a>
          </li>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
