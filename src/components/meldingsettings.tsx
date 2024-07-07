import React from "react";
import "./componentstyles/dashboardsettings.css";
import SettingsElement from "./settingselement";

const MeldingSettings: React.FC = () => {
	return (
		<div className="settings-containers-background">
			<div className="settings-container">
				<SettingsElement status={false} title="Meldingen ontvangen" />
			</div>
		</div>
	);
};

export default MeldingSettings;
