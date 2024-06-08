import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/aboutuspage";
import PatientPage from "./pages/patientpage";
import ArtsPage from "./pages/artspage";
import LandingPage from "./pages/landingpage";
import PatientOverview from "./pages/patientoverview";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/patients" element={<PatientPage />} />
        <Route path="/patient/:id" element={<PatientOverview />} />
        <Route path="/artsen" element={<ArtsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
