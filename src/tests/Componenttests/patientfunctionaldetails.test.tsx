import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PatientFunctionalDetails from '../../components/patientfunctionaldetails';

describe('PatientFunctionalDetails Component', () => {
    test('renders the component and checks for static elements', () => {
        render(<PatientFunctionalDetails />);
        
        // Check if the component renders the header correctly
        expect(screen.getByText('Vandaag, 24 Juni')).toBeInTheDocument();

        expect(screen.getByText('Myometrie Resultaten')).toBeInTheDocument();

        expect(screen.getByText('CMAS resultaat')).toBeInTheDocument();

        expect(screen.getByText('Medische gegevens')).toBeInTheDocument();
        
        expect(screen.getByText('Hero Kalender')).toBeInTheDocument();
        
        // You can add more assertions here to test other static elements
    });

    // Add more tests here as needed
    });