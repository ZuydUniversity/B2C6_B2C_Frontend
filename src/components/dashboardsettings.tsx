import React from "react";
import "./componentstyles/dashboardsettings.css";
import SettingSwitch from "./switchsetting";

const DashboardSettings: React.FC = () => {

  return (
    <div className="settings-containers-background">
      <div className="settings-container">
        <SettingSwitch status={false} />
      </div>
    </div>
  );
}

export default DashboardSettings;