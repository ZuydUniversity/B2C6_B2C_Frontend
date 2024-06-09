import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/aboutuspage";
import PatientPage from "./pages/patientpage";
import ArtsPage from "./pages/artspage";
import LandingPage from "./pages/landingpage";
import DashboardPage from "./pages/dashboardpage";
import PatientOverview from "./pages/patientoverview";
import Sidebar from "./components/sidebar";
import LoginPage from "./pages/loginpage";

const App: React.FC = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/patients" element={<PatientPage />} />
            <Route path="/patient/:id" element={<PatientOverview />} />
            <Route path="/artsen" element={<ArtsPage />} />
            <Route path="/dashboardpage" element={<DashboardPage />} />
            <Route
              path="/Login"
              element={<LoginPage setHideNavbar={setHideNavbar} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
