import React from "react";
import "./componentstyles/sessionscanner.css";

const Scanner: React.FC = () => {  
    return (
        <section className="scanner-container">
          <div className="scanner-card">
            <h1 className="scanner-title">Scanner</h1>
            <div className="scanner-preview" role="img" aria-label="Scanner preview area"></div>
            <h2 className="aspect-title">Aspect</h2>
            <div className="icon-container">
            </div>
          </div>
        </section>
    );
  };
  
export default Scanner;
