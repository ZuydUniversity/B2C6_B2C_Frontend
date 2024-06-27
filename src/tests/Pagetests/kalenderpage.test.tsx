import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import KalenderPage from "../../pages/kalenderpage";

// Cleanup the DOM after each test
afterEach(cleanup);

describe("KalenderPage", () => {
	it("renders without crashing", () => {
		render(<KalenderPage />);
	});

	it("displays the correct page title", () => {
		render(<KalenderPage />);
		const pageTitle = screen.getByText("Kalender");
		expect(pageTitle).toBeInTheDocument();
	});

	it("renders the current week number correctly", () => {
		render(<KalenderPage />);
		const currentWeekNumber = getWeekNumber(new Date());
		const weekNumberOption = screen.getByText(`Week ${currentWeekNumber}`);
		expect(weekNumberOption).toBeInTheDocument();
	});

	it("renders the start date of the current week correctly", () => {
		render(<KalenderPage />);
		const startDate = getStartOfWeek(new Date());
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedStartDate = `${String(startDate.getDate()).padStart(2, "0")} ${monthNames[startDate.getMonth()]}`;
		const startDateElement = screen.getAllByText(formattedStartDate);
		expect(startDateElement.length).toBeGreaterThan(0);
	});

	it("navigates to the previous week", () => {
		render(<KalenderPage />);
		const prevButton = screen.getByRole("kalender-header-button", { name: /</ });
		fireEvent.click(prevButton);
		const previousWeekDate = new Date();
		previousWeekDate.setDate(previousWeekDate.getDate() - previousWeekDate.getDay() + (previousWeekDate.getDay() === 0 ? -6 : 1) - 7);
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedPrevWeekDate = `${String(previousWeekDate.getDate()).padStart(2, "0")} ${monthNames[previousWeekDate.getMonth()]}`;
		const prevWeekDateElement = screen.getAllByText(formattedPrevWeekDate);
		expect(prevWeekDateElement.length).toBeGreaterThan(0);
	});

	it("navigates to the next week", () => {
		render(<KalenderPage />);
		const nextButton = screen.getByRole("kalender-header-button", { name: />/ });
		fireEvent.click(nextButton);
		const nextWeekDate = new Date();
		nextWeekDate.setDate(nextWeekDate.getDate() - nextWeekDate.getDay() + (nextWeekDate.getDay() === 0 ? -6 : 1) + 7);
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedNextWeekDate = `${String(nextWeekDate.getDate()).padStart(2, "0")} ${monthNames[nextWeekDate.getMonth()]}`;
		const nextWeekDateElement = screen.getAllByText(formattedNextWeekDate);
		expect(nextWeekDateElement.length).toBeGreaterThan(0);
	});

	it("changes week number from dropdown", () => {
		render(<KalenderPage />);
		const weekSelect = screen.getByTestId("week-toggle-button");
		fireEvent.change(weekSelect, { target: { value: "10" } });
		const selectedWeekOption = screen.getByText("Week 10");
		expect(selectedWeekOption).toBeInTheDocument();
	});
});

// Helper functions used in the tests
const getWeekNumber = (date: Date): number => {
	const firstJan = new Date(date.getFullYear(), 0, 1);
	const pastDaysOfYear = (date.valueOf() - firstJan.valueOf()) / 86400000;
	return Math.ceil((pastDaysOfYear + firstJan.getDay() + 1) / 7);
};

const getStartOfWeek = (date: Date): Date => {
	const day = date.getDay();
	const diff = date.getDate() - day + (day === 0 ? -6 : 1);
	return new Date(date.setDate(diff));
};
