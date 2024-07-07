import React from "react";
import "./componentstyles/dashboardsettings.css";
import SettingsElement from "./settingselement";

const LogboekSettings: React.FC = () => {
	return (
		<div className="settings-containers-background">
			<div className="settings-container">
				<SettingsElement status={false} title="Logboek setting" />
			</div>
		</div>
	);
};

export default LogboekSettings;
