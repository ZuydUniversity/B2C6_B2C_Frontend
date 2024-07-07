import React from 'react';
import { useState } from 'react';
import './styles/stylesheetsettings.css';
import MiniKalender from "../components/minikalender";
import SettingSwitch from '../components/switchsetting';

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
                    <nav className='settings-navbar'>
                        <ul>
                            <li className={selectedItem === 'Profiel' ? 'active' : ''} onClick={() => handleNavClick('Profiel')}>Profiel</li>
                            <li className={selectedItem === 'Meldingen' ? 'active' : ''} onClick={() => handleNavClick('Meldingen')}>Meldingen</li>
                            <li className={selectedItem === 'Logboek' ? 'active' : ''} onClick={() => handleNavClick('Logboek')}>Logboek</li>
                            <li className={selectedItem === 'Dashboard Instellingen' ? 'active' : ''} onClick={() => handleNavClick('Dashboard Instellingen')}>Dashboard Instellingen</li>
                        </ul>
                    </nav>
                    <div className='settings-component-styling'>
                        {selectedItem === 'Profiel' && <div>profiel</div>} 
                        {selectedItem === 'Meldingen' && <div>meldingen</div>}
                        {selectedItem === 'Logboek' && <div>Logboek Component</div>}
                        {selectedItem === 'Dashboard Instellingen' && <div>Dashboard Instellingen Component</div>}
                    </div>
                </div>
                <div>
                    <MiniKalender/>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;



