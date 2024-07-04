// KalenderPage.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalenderPage from '../../pages/calenderpage';

describe('CalenderPage', () => {
  test('renders the calender title', () => {
    render(<CalenderPage />);
    const titleElement = screen.getByText(/Kalender/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the correct days of the week', () => {
    render(<CalenderPage />);
    const days = ["Ma", "Di", "Wo", "Do", "Vr"];
    days.forEach(day => {
      const dayElement = screen.getByTestId(`day-${day}`);
      expect(dayElement).toBeInTheDocument();
      expect(dayElement).toHaveTextContent(day);
    });
  });

  test('renders the week number select dropdown', () => {
    render(<CalenderPage />);
    const weekSelect = screen.getByTestId('week-select');
    expect(weekSelect).toBeInTheDocument();
  });

  test('changes to the previous week when left arrow is clicked', () => {
    render(<CalenderPage />);
    const initialWeekText = screen.getByRole('heading', { level: 2 }).textContent;

    const prevButton = screen.getByRole('button', { name: '<' });
    fireEvent.click(prevButton);

    const updatedWeekText = screen.getByRole('heading', { level: 2 }).textContent;
    expect(updatedWeekText).not.toBe(initialWeekText);
  });

  test('getDateOfISOWeek handles week adjustment correctly', () => {
    const date = getDateOfISOWeek(11, 2022);
  });

  test('changes to the next week when right arrow is clicked', () => {
    render(<CalenderPage />);
    const initialWeekText = screen.getByRole('heading', { level: 2 }).textContent;

    const nextButton = screen.getByRole('button', { name: '>' });
    fireEvent.click(nextButton);

    const updatedWeekText = screen.getByRole('heading', { level: 2 }).textContent;
    expect(updatedWeekText).not.toBe(initialWeekText);
  });

  test('changes the week when a different week number is selected', () => {
    render(<CalenderPage />);
    const weekSelect = screen.getByTestId('week-select');
    const initialWeekText = screen.getByRole('heading', { level: 2 }).textContent;

    fireEvent.change(weekSelect, { target: { value: '10' } });

    const updatedWeekText = screen.getByRole('heading', { level: 2 }).textContent;
    expect(updatedWeekText).not.toBe(initialWeekText);
  });

  test('getWeekNumber returns correct week number', () => {
    const date = new Date('2022-03-16'); // A specific date
    const weekNumber = getWeekNumber(date);
    expect(weekNumber).toBe(12); // Week number based on the date
  });

  test('getDateOfISOWeek returns correct start date of the ISO week', () => {
    const date = getDateOfISOWeek(11, 2022); // Get date for week 11 of 2022
    // Correcting for timezone difference by using toISOString()
    expect(date.toISOString().slice(0, 10)).toBe('2022-03-14'); // Start date of week 11 in 2022
  });

  test('getStartOfWeek returns correct start date of the week', () => {
    const date = new Date('2022-03-16'); // A specific date
    const startOfWeek = getStartOfWeek(date);
    // Correcting for timezone difference by using toISOString()
    expect(startOfWeek.toISOString().slice(0, 10)).toBe('2022-03-14'); // Start of the week for the given date
  });
});

const getWeekNumber = (date: Date): number => {
  const firstJan = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.valueOf() - firstJan.valueOf()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstJan.getDay() + 1) / 7);
};

const getDateOfISOWeek = (week: number, year: number): Date => {
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const dayOfWeek = simple.getDay();
  const ISOweekStart = simple;
  if (dayOfWeek <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return new Date(Date.UTC(ISOweekStart.getFullYear(), ISOweekStart.getMonth(), ISOweekStart.getDate()));
};

const getStartOfWeek = (date: Date): Date => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), diff));
};
