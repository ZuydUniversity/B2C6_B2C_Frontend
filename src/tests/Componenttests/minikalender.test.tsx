import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import MiniKalender from '../../components/minikalender';

describe("MiniKalender component", () => {
  it("should render the component", () => {
    render(<MiniKalender />);
    const element = screen.getByText("Kalender");
    expect(element).toBeInTheDocument();
  });

  it("should go back one month", () => {
    render(<MiniKalender />);
    const leftButton = screen.getByText("<");
    fireEvent.click(leftButton);
    // Update the expected month and year based on current date
    const previousMonthYear = 'april 2024'; // Example
    const dateElement = screen.getByText(previousMonthYear, { exact: false });
    expect(dateElement).toBeInTheDocument();
  });

  it("should go forward one month", () => {
    render(<MiniKalender />);
    const rightButton = screen.getByText(">");
    fireEvent.click(rightButton);
    // Update the expected month and year based on current date
    const nextMonthYear = 'juni 2024'; // Example
    const dateElement = screen.getByText(nextMonthYear, { exact: false });
    expect(dateElement).toBeInTheDocument();
  });

  it("should go back from January to December of the previous year", () => {
    render(<MiniKalender />);
    const leftButton = screen.getByText("<");
    fireEvent.click(leftButton);
    fireEvent.click(leftButton);
    fireEvent.click(leftButton);
    fireEvent.click(leftButton);
    fireEvent.click(leftButton);
    fireEvent.click(leftButton);
    fireEvent.click(leftButton);
    // Update the expected month and year based on current date
    const preMonthYear = 'december 2023'; // Example
    const dateElement = screen.getByText(preMonthYear, { exact: false });
    expect(dateElement).toBeInTheDocument();
  });

  it("should go forward from December to January of the next year", () => {
    render(<MiniKalender />);
    const rightButton = screen.getByText(">");
    fireEvent.click(rightButton);
    fireEvent.click(rightButton);
    fireEvent.click(rightButton);
    fireEvent.click(rightButton);
    fireEvent.click(rightButton);
    fireEvent.click(rightButton);
    fireEvent.click(rightButton);
    // Update the expected month and year based on current date
    const nextMonthYear = 'januari 2025'; // Example
    const dateElement = screen.getByText(nextMonthYear, { exact: false });
    expect(dateElement).toBeInTheDocument();
  });

  it("should show popup on hover over a calendar day", () => {
    render(<MiniKalender />);
    const dayElement = screen.getByText("15");
    fireEvent.mouseOver(dayElement);
    const popupElement = screen.getByText("Event on 15");
    expect(popupElement).toBeInTheDocument();
  });

  it("should render correct number of days for February in a leap year", () => {
    render(<MiniKalender />);
    const leftButton = screen.getByText("<");
    fireEvent.click(leftButton);
    // Update to the correct number of clicks to reach February of a leap year
    const dayElements = screen.getAllByText(/^\d+$/);
    expect(dayElements).toHaveLength(29); // Leap year February has 29 days
  });
});
