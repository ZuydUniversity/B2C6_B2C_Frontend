import React from "react";
import "./componentstyles/settingselement.css";
import SettingSwitch from "./switchsetting";

interface SettingStatus {
	status: boolean;
	title: string;
}

const SettingsElement: React.FC<SettingStatus> = ({ status, title }) => {
	return (
		<div className="settings-element">
			<p className="element-name">{title}</p>
			<SettingSwitch status={false} />
		</div>
	);
};

export default SettingsElement;
