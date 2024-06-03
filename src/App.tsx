import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/aboutuspage';
import PatientPage from './pages/patientpage';
import DoctorPage from './pages/dockterpage';
import LandingPage from './pages/landingpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/patients" element={<PatientPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
      </Routes>
    </Router>
  );
}

export default App;