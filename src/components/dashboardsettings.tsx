import React from "react";
import "./componentstyles/dashboardsettings.css";
import SettingSwitch from "./switchsetting";

const DashboardSettings: React.FC = () => {

  return (
    <div className="settings-containers-background">
      <div className="settings-container">
        <div className="settings-element">
          <p className="element-name">
            Dark Theme
          </p>
          <SettingSwitch status={false} />
        </div>
        <div className="settings-element">
          <p className="element-name">
            Compact Mode
          </p>
          <SettingSwitch status={false} />
        </div>
      </div>
    </div>
  );
}

export default DashboardSettings;