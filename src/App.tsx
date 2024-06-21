import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/aboutuspage";
import PatientPage from "./pages/patientpage";
import ArtsPage from "./pages/artspage";
import DashboardPage from "./pages/dashboardpage";
import PatientOverview from "./pages/patientoverview";
import Sidebar from "./components/sidebar";
import LoginPage from "./pages/loginpage";
import NotFoundPage from "./pages/notfoundpage";
import Notes from "./pages/notes";
import ArtsSessionPage from "./pages/artssessionpage";

const App: React.FC = () => {
	const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {!hideNavbar && <Sidebar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route
              path="/login"
              element={<LoginPage setHideNavbar={setHideNavbar} />}
            />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/patients" element={<PatientPage />} />
            <Route path="/patient/:id" element={<PatientOverview />} />
            <Route path="/artsen" element={<ArtsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/artsession" element={<ArtsSessionPage />} />
            <Route
              path="*"
              element={<NotFoundPage setHideNavbar={setHideNavbar} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
