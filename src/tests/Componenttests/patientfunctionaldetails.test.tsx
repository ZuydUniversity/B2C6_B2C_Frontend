import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PatientFunctionalDetails from '../../components/patientfunctionaldetails';

describe('PatientFunctionalDetails Component', () => {
  test('renders the component and checks for static elements', () => {
    render(<PatientFunctionalDetails />);
    
    // Check if the component renders the header correctly
    expect(screen.getByText('Vandaag, 24 Juni')).toBeInTheDocument();
    
    // Check for the presence of static elements like the "Functionele gegevens" header
    expect(screen.getByText('Functionele gegevens')).toBeInTheDocument();
    
    // You can add more assertions here to test other static elements
  });

  // Add more tests here as needed
});