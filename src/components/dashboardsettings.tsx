import React from "react";
import "./componentstyles/dashboardsettings.css";
import SettingsElement from "./settingselement";

const DashboardSettings: React.FC = () => {
	return (
		<div className="settings-containers-background">
			<div className="settings-container">
				<SettingsElement status={false} title="Compact mode" />
				<SettingsElement status={false} title="Dark theme" />
			</div>
		</div>
	);
};

export default DashboardSettings;
