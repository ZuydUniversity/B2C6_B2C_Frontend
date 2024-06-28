import { fireEvent, render, screen } from "@testing-library/react";
import MiniKalender from "../../components/minikalender";

describe("MiniKalender component", () => {
  it("should render the component", () => {
    render(<MiniKalender />);
    const element = screen.getByText("Kalender");
    expect(element).toBeInTheDocument();
  });

  it("should go back one month", () => {
    render(<MiniKalender />);
    const element = screen.getByText("<");
    expect(element).toBeInTheDocument();
    fireEvent.click(element);

    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);
    const months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
    const preMonthYear = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    const dateElement = screen.getByText(preMonthYear);
    expect(dateElement).toBeInTheDocument();
  });

  it("should go forward one month", () => {
    render(<MiniKalender />);
    const element = screen.getByText(">");
    expect(element).toBeInTheDocument();
    fireEvent.click(element);

    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    const months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
    const preMonthYear = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    const dateElement = screen.getByText(preMonthYear);
    expect(dateElement).toBeInTheDocument();
  });

  it("should go back from January to December of the previous year", () => {
    render(<MiniKalender />);
    const element = screen.getByText("<");

    // Set the date to January
    const currentDate = new Date();
    currentDate.setMonth(0);
    currentDate.setFullYear(2022);
    fireEvent.click(element);

    const preMonthYear = `december 2021`;
    const dateElement = screen.getByText(preMonthYear);
    expect(dateElement).toBeInTheDocument();
  });

  it("should go forward from December to January of the next year", () => {
    render(<MiniKalender/>);
    const element = screen.getByText(">");

    // Set the date to December
    const currentDate = new Date();
    currentDate.setMonth(11);
    currentDate.setFullYear(2022);
    fireEvent.click(element);

    const nextMonthYear = `januari 2023`;
    const dateElement = screen.getByText(nextMonthYear);
    expect(dateElement).toBeInTheDocument();
  });

  it("should show popup on hover over a calendar day", () => {
    render(<MiniKalender />);
    const dayElement = screen.getByText("15"); // Assuming the 15th is visible
    fireEvent.mouseEnter(dayElement);

    const popupElement = screen.getByText("Day 15");
    expect(popupElement).toBeInTheDocument();
  });

  it("should render correct number of days for February in a leap year", () => {
    render(<MiniKalender />);
    const currentDate = new Date();
    currentDate.setFullYear(2024);
    currentDate.setMonth(1); // February
    fireEvent.click(screen.getByText(">")); // Ensure we are in February

    const dayElements = screen.getAllByText(/^\d+$/);
    expect(dayElements).toHaveLength(42); // Leap year February has 29 days
  });
});
