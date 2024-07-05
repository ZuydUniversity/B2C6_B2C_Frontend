import React from "react";
import "./componentstyles/sidebar.css"; // Styling

const Sidebar: React.FC = () => {
	return (
		<div className="sidebar">
			<div className="logo">
				<img src="Images/JDBLogo.png" className="logo-img" width="100" height="200" alt="JDB" />
			</div>
			<nav>
				<ul>
					<a href="/dashboard" className="url">
						<li className="dashboard-icon">Dashboard</li>
					</a>
					<a href="/kalender" className="url">
						<li className="calendar-icon">Kalender</li>
					</a>
					<a href="/notes" className="url">
						<li className="notities-icon">Notities</li>
					</a>
					<a href="/patients" className="url">
						<li className="patients-icon">Patiëntenoverzicht</li>
					</a>
				</ul>
				<hr />
				<ul>
					<li className="add-appointment-icon">Afspraak toevoegen</li>
					<a href="/artsession" className="url">
						<li className="add-doctor-session-icon">Sessie toevoegen arts</li>
					</a>
					<a href="/physiosession" className="url">
						<li className="add-physio-session-icon">Sessie toevoegen fysiotherapeut</li>
					</a>
				</ul>
				<hr />
			</nav>
			<div className="settings-logout">
				<ul>
					<a href="/settings" className="url">
					<li className="settings-icon">Instellingen</li>
					</a>
					<a href="/login" className="url">
						<li className="logout-icon">Uitloggen</li>
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
