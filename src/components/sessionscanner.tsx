import React from "react";
import "./componentstyles/sessionscanner.css";
import search_icon from "./images/search_icon.png"; 

const Scanner: React.FC = () => {
  return (
    <section className="scanner-container">
      <div className="scanner-card">
        <h1 className="scanner-title">Scanner</h1>
        <div className="scanner-preview" role="img" aria-label="Scanner preview area"></div>
        <h2 className="aspect-title">Aspect</h2>
        <div className="button-scanner-container">
          <button className="left-icon-scanner">
            <img src="../../../public/Icons/left.svg" alt="Left icon" />
          </button>
          <button className="right-icon-scanner">
            <img src="../../../public/Icons/right.svg" alt="Right icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scanner;
