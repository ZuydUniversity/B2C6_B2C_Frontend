import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AppointmentPlanner from "../../components/appointmentplanner";

describe('AppointmentPlanner component', () => {
  beforeEach(() => {
    render(<AppointmentPlanner />);
  });

  it('should render the component', () => {
    const titleElement = screen.getByText('Afspraak toevoegen');
    expect(titleElement).toBeInTheDocument();
  });

  it('should allow entering title and saving appointment', () => {
    // Vind het titel input element en vul het in
    const titleInput = screen.getByPlaceholderText('Typ je titel');
    fireEvent.change(titleInput, { target: { value: 'Mijn eerste afspraak' } });

    // Klik op de Opslaan knop
    const saveButton = screen.getByText('Opslaan');
    fireEvent.click(saveButton);

    // Verwacht dat het ingevoerde titel wordt weergegeven in de lijst van afspraken
    const savedAppointment = screen.getByText('Mijn eerste afspraak');
    expect(savedAppointment).toBeInTheDocument();
  });

  it('should allow selecting repetition options', () => {
    // Klik op de Wekelijks optie voor herhaling
    const weeklyCheckbox = screen.getByText('Wekelijks');
    fireEvent.click(weeklyCheckbox);

    // Verwacht dat de staat van herhaling is veranderd naar 'weekly'
    const repetitionState = screen.getByText('Herhaling:');
    expect(repetitionState).toHaveTextContent('Wekelijks');
  });

  it('should allow entering additional info for custom repetition', () => {
    render(<AppointmentPlanner />);

    // Zoek het label met de klasse custom-checkbox dat "Anders, namelijk:" bevat
    const customCheckboxLabel = screen.getByText('Anders, namelijk:', { selector: '.custom-checkbox' });
    expect(customCheckboxLabel).toBeInTheDocument();

    // Vind het selectievakje binnen het label
    const customCheckbox = customCheckboxLabel.querySelector('.checkbox');
    fireEvent.click(customCheckbox);

    // Vind het additionele info input element en vul het in
    const additionalInfoInput = screen.getByPlaceholderText(
      'Beschrijf hoe frequent de afspraak zal worden herhaald'
    );
    fireEvent.change(additionalInfoInput, { target: { value: 'Om de 2 weken' } });

    // Verwacht dat het ingevoerde additionele info wordt weergegeven in de afspraakdetails
    const savedInfo = screen.getByText('Om de 2 weken');
    expect(savedInfo).toBeInTheDocument();
  });

  it('should allow entering description for appointment', () => {
    // Vind de beschrijving textarea en vul het in
    const descriptionTextarea = screen.getByPlaceholderText('Typ de beschrijving');
    fireEvent.change(descriptionTextarea, { target: { value: 'Dit is een belangrijke afspraak.' } });

    // Verwacht dat de ingevoerde beschrijving wordt weergegeven in de afspraakdetails
    const savedDescription = screen.getByText('Dit is een belangrijke afspraak.');
    expect(savedDescription).toBeInTheDocument();
  });
});
