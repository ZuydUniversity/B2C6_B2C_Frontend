import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SettingsPage from "../../pages/settingspage";
import MiniKalender from "../../components/minikalender";
import ProfileSetting from '../../components/profilesetting';

jest.mock('../../components/minikalender', () => () => <div>MiniKalender Component</div>);

describe('SettingsPage', () => {
    test('renders the SettingsPage component', () => {
        render(<SettingsPage />);
        expect(screen.getByText('Instellingen')).toBeInTheDocument();
    });

    test('renders the navigation items and responds to clicks', () => {
        render(<SettingsPage />);
        
        // const profielNav = screen.getByText('Profiel');
        const profielNav = document.getElementById('Profiel') as HTMLElement;
        const meldingenNav = document.getElementById('Meldingen') as HTMLElement;
        const logboekNav = document.getElementById('Logboek') as HTMLElement;
        const dashboardNav = document.getElementById('Dashboard') as HTMLElement;
        
        // Check initial state
        expect(profielNav).toHaveClass('active');
        // You should check if the component has been rendered

        // Test clicking on Meldingen
        fireEvent.click(meldingenNav);
        expect(meldingenNav).toHaveClass('active');
        // You should check if the component has been rendered

        // Test clicking on Logboek
        fireEvent.click(logboekNav);
        expect(logboekNav).toHaveClass('active');
        // You should check if the component has been rendered

        // Test clicking on Dashboard Instellingen
        fireEvent.click(dashboardNav);
        expect(dashboardNav).toHaveClass('active');
        // You should check if the component has been rendered

        // Test clicking back to Profiel
        fireEvent.click(profielNav);
        expect(profielNav).toHaveClass('active');
        // You should check if the component has been rendered
    });
});
