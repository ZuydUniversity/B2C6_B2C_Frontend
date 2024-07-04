// KalenderPage.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import KalenderPage from '../../pages/calenderpage';

describe('KalenderPage', () => {
  test('renders the kalender title', () => {
    render(<KalenderPage />);
    const titleElement = screen.getByText(/Kalender/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the correct days of the week', () => {
    render(<KalenderPage />);
    const days = ["Ma", "Di", "Wo", "Do", "Vr"];
    days.forEach(day => {
      const dayElement = screen.getByTestId(`day-${day}`);
      expect(dayElement).toBeInTheDocument();
      expect(dayElement).toHaveTextContent(day);
    });
  });

  test('renders the week number select dropdown', () => {
    render(<KalenderPage />);
    const weekSelect = screen.getByTestId('week-select');
    expect(weekSelect).toBeInTheDocument();
  });

  test('changes to the previous week when left arrow is clicked', () => {
    render(<KalenderPage />);
    const initialWeekText = screen.getByRole('heading', { level: 2 }).textContent;

    const prevButton = screen.getByRole('button', { name: '<' });
    fireEvent.click(prevButton);

    const updatedWeekText = screen.getByRole('heading', { level: 2 }).textContent;
    expect(updatedWeekText).not.toBe(initialWeekText);
  });

  test('changes to the next week when right arrow is clicked', () => {
    render(<KalenderPage />);
    const initialWeekText = screen.getByRole('heading', { level: 2 }).textContent;

    const nextButton = screen.getByRole('button', { name: '>' });
    fireEvent.click(nextButton);

    const updatedWeekText = screen.getByRole('heading', { level: 2 }).textContent;
    expect(updatedWeekText).not.toBe(initialWeekText);
  });

  test('changes the week when a different week number is selected', () => {
    render(<KalenderPage />);
    const weekSelect = screen.getByTestId('week-select');
    const initialWeekText = screen.getByRole('heading', { level: 2 }).textContent;

    fireEvent.change(weekSelect, { target: { value: '10' } });

    const updatedWeekText = screen.getByRole('heading', { level: 2 }).textContent;
    expect(updatedWeekText).not.toBe(initialWeekText);
  });
});
