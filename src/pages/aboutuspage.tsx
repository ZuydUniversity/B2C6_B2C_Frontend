import React from "react";
import "./styles/aboutuscss.css";

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      {/* <h1 id="title">About Us</h1> wordt gebruik */}
      <h1 id="title">About Us</h1>
      <p>Wie zijn wij?</p>
      <p>
        Wij zijn de klas B2C van de ICT Academie op Hogeschool zuyd. Onze klas
        is opgedeeld in 5 project teams die samen aan dit portaal werken.
      </p>
    </div>
  );
};

export default AboutUsPage;
