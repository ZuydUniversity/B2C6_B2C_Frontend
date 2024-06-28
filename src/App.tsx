import React, { ReactNode, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/aboutuspage";
import PatientPage from "./pages/patientpage";
import ArtsPage from "./pages/artspage";
import DashboardPage from "./pages/dashboardpage";
import PatientOverview from "./pages/patientoverview";
import Sidebar from "./components/sidebar";
import LoginPage from "./pages/loginpage";
import NotFoundPage from "./pages/notfoundpage";
import KalenderPage from "./pages/kalenderpage";
import Notes from "./pages/notes";
import { ArtsSession } from "./pages/artssessionpage";
import PhysioSessionPage from "./pages/physiosessionpage";
import ActiveArtsSession from "./pages/activeartssessionpage";
import Physiosessionresultspage from "./pages/physiosessionresultspage";
import PrivateRoute from "./PrivateRouter";

import "typeface-montserrat";
import "./App.css";

const App: React.FC = () => {
	const [hideNavbar, setHideNavbar] = useState(false);

	return (
		<Router>
			<div className="app-container">
				{!hideNavbar && <Sidebar />}
				<div className="main-content">
					<Routes>
						<Route path="/" element={<Navigate to="/login" replace />} />
						<Route path="/login" element={<LoginPage setHideNavbar={setHideNavbar} />} />
						<Route path="/aboutus" element={<PrivateRoute element={<AboutUsPage />} />} />
						<Route path="/patients" element={<PrivateRoute element={<PatientPage />} />} />
						<Route path="/patient/:id" element={<PrivateRoute element={<PatientOverview />} />} />
						<Route path="/artsen" element={<PrivateRoute element={<ArtsPage />} />} />
						<Route path="/dashboard" element={<PrivateRoute element={<DashboardPage />} />} />
						<Route path="/notes" element={<PrivateRoute element={<Notes />} />} />
						<Route path="/artsession" element={<PrivateRoute element={<ArtsSession />} />} />
						<Route path="/physiosession" element={<PrivateRoute element={<PhysioSessionPage />} />} />
						<Route path="/activeartssession" element={<PrivateRoute element={<ActiveArtsSession />} />} />
						<Route path="/physiosessionresults" element={<PrivateRoute element={<Physiosessionresultspage />} />} />
						<Route path="*" element={<NotFoundPage setHideNavbar={setHideNavbar} />} />
						<Route path="/kalender" element={<KalenderPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
