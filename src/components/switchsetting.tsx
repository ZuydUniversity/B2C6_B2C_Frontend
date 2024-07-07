import React, { useState } from "react";
import "./componentstyles/switchsetting.css";

interface SettingStatus {
	status: boolean;
}

const SettingSwitch: React.FC<SettingStatus> = ({ status }) => {
	const [switchState, setSwitchState] = useState<boolean>(status);

	return (
		<label className="switch-container">
			<input
				id="switch-default-checkbox"
				type="checkbox"
				onClick={() => {
					setSwitchState(!switchState);
				}}
			></input>
			<span className="switch-slider"></span>
		</label>
	);
};

export default SettingSwitch;
