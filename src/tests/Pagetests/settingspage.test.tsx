import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SettingsPage from "../../pages/settingspage";
import MiniKalender from "../../components/minikalender";

jest.mock('../../components/minikalender', () => () => <div>MiniKalender Component</div>);

describe('SettingsPage', () => {
    test('renders the SettingsPage component', () => {
        render(<SettingsPage />);
        expect(screen.getByText('Instellingen')).toBeInTheDocument();
    });

    test('renders the navigation items and responds to clicks', () => {
        render(<SettingsPage />);
        
        const profielNav = screen.getByText('Profiel');
        const meldingenNav = screen.getByText('Meldingen');
        const logboekNav = screen.getByText('Logboek');
        const dashboardNav = screen.getByText('Dashboard Instellingen');
        
        // Check initial state
        expect(profielNav).toHaveClass('active');
        expect(screen.getByText('MiniKalender Component')).toBeInTheDocument();

        // Test clicking on Meldingen
        fireEvent.click(meldingenNav);
        expect(meldingenNav).toHaveClass('active');
        expect(screen.queryByText('MiniKalender Component')).not.toBeInTheDocument();
        expect(screen.getByText('Profiel Component')).toBeInTheDocument();  // Empty div

        // Test clicking on Logboek
        fireEvent.click(logboekNav);
        expect(logboekNav).toHaveClass('active');
        expect(screen.getByText('Logboek Component')).toBeInTheDocument();

        // Test clicking on Dashboard Instellingen
        fireEvent.click(dashboardNav);
        expect(dashboardNav).toHaveClass('active');
        expect(screen.getByText('Dashboard Instellingen Component')).toBeInTheDocument();

        // Test clicking back to Profiel
        fireEvent.click(profielNav);
        expect(profielNav).toHaveClass('active');
        expect(screen.getByText('MiniKalender Component')).toBeInTheDocument();
    });
});
