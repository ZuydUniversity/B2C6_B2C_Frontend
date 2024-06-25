import React, { useState } from "react";
import "./componentstyles/switchsetting.css";

interface SettingStatus {
  status: boolean
}

const SettingSwitch: React.FC<SettingStatus> = ({status}) => {
  const [switchState, setSwitchState] = useState<boolean>(false);

  return (
    <div className="switch-container">
      <a id="switch-default-checkbox" type="checkbox" onClick={() => {setSwitchState(!switchState)}}></a>
      <span className="switch-slider"></span>
    </div>
  );
}

export default SettingSwitch;