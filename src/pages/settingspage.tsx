import React from 'react';
import { useState } from 'react';
import './styles/stylesheetsettings.css';
import MiniKalender from "../components/minikalender";
import DashboardSettings from '../components/dashboardsettings';
import ProfileSetting from '../components/profilesetting';
import MeldingSettings from '../components/meldingsettings';
import LogboekSettings from '../components/logboeksettings';

const SettingsPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>('Profiel');
    
    const handleNavClick = (item: string) => {
        setSelectedItem(item);
    };

    return (
        <div className="settings-page">
            <main>
                <h1 className='settings-page'>Instellingen</h1>
                <div className='settings-layout-styling'>
                    <MiniKalender/>
                    <nav className='settings-navbar'>
                        <ul>
                            <li className={selectedItem === 'Profiel' ? 'active' : ''} onClick={() => handleNavClick('Profiel')}>Profiel</li>
                            <li className={selectedItem === 'Meldingen' ? 'active' : ''} onClick={() => handleNavClick('Meldingen')}>Meldingen</li>
                            <li className={selectedItem === 'Logboek' ? 'active' : ''} onClick={() => handleNavClick('Logboek')}>Logboek</li>
                            <li className={selectedItem === 'Dashboard Instellingen' ? 'active' : ''} onClick={() => handleNavClick('Dashboard Instellingen')}>Dashboard Instellingen</li>
                        </ul>
                    </nav>
                    <div className='settings-component-styling'>
                        {selectedItem === 'Profiel' && <ProfileSetting/>} 
                        {selectedItem === 'Meldingen' && <MeldingSettings/>}
                        {selectedItem === 'Logboek' && <LogboekSettings/>}
                        {selectedItem === 'Dashboard Instellingen' && <DashboardSettings/> }
                    </div>
                </div>
                <div>
                    
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;



