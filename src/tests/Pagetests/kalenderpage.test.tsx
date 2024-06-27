import React from "react";
import { render, fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import KalenderPage from "../../pages/kalenderpage";

// Cleanup the DOM after each test
afterEach(cleanup);

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

const getDateOfISOWeek = (week: number, year: number): Date => {
	const simple = new Date(year, 0, 1 + (week - 1) * 7);
	const dayOfWeek = simple.getDay();
	const ISOweekStart = simple;
	if (dayOfWeek <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
	else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
	return ISOweekStart;
};

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
		const startDateElement = screen.getAllByText((content, element) => element?.tagName.toLowerCase() === "th" && content.includes(formattedStartDate));
		expect(startDateElement.length).toBeGreaterThan(0);
	});

	it("navigates to the previous week", () => {
		render(<KalenderPage />);
		const prevButton = screen.getByRole("button", { name: /</ });
		fireEvent.click(prevButton);
		const previousWeekDate = getStartOfWeek(new Date());
		previousWeekDate.setDate(previousWeekDate.getDate() - 7);
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedPrevWeekDate = `${String(previousWeekDate.getDate()).padStart(2, "0")} ${monthNames[previousWeekDate.getMonth()]}`;
		const prevWeekDateElement = screen.getAllByText((content, element) => element?.tagName.toLowerCase() === "th" && content.includes(formattedPrevWeekDate));
		expect(prevWeekDateElement.length).toBeGreaterThan(0);
	});

	it("navigates to the next week", () => {
		render(<KalenderPage />);
		const nextButton = screen.getByRole("button", { name: />/ });
		fireEvent.click(nextButton);
		const nextWeekDate = getStartOfWeek(new Date());
		nextWeekDate.setDate(nextWeekDate.getDate() + 7);
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedNextWeekDate = `${String(nextWeekDate.getDate()).padStart(2, "0")} ${monthNames[nextWeekDate.getMonth()]}`;
		const nextWeekDateElement = screen.getAllByText((content, element) => element?.tagName.toLowerCase() === "th" && content.includes(formattedNextWeekDate));
		expect(nextWeekDateElement.length).toBeGreaterThan(0);
	});

	it("changes week number from dropdown", () => {
		render(<KalenderPage />);
		const weekSelect = screen.getByTestId("week-select");
		fireEvent.change(weekSelect, { target: { value: "10" } });
		const selectedWeekOption = screen.getByText("Week 10");
		expect(selectedWeekOption).toBeInTheDocument();
	});

	it("calls handlePrevWeek on previous week button click", () => {
		render(<KalenderPage />);
		const prevButton = screen.getByRole("button", { name: /</ });
		fireEvent.click(prevButton);
		const newDate = new Date();
		newDate.setDate(newDate.getDate() - 7);
		const currentWeekNumber = getWeekNumber(getStartOfWeek(newDate));
		const weekNumberOption = screen.getByText(`Week ${currentWeekNumber}`);
		expect(weekNumberOption).toBeInTheDocument();
	});

	it("calls handleNextWeek on next week button click", () => {
		render(<KalenderPage />);
		const nextButton = screen.getByRole("button", { name: />/ });
		fireEvent.click(nextButton);
		const newDate = new Date();
		newDate.setDate(newDate.getDate() + 7);
		const currentWeekNumber = getWeekNumber(getStartOfWeek(newDate));
		const weekNumberOption = screen.getByText(`Week ${currentWeekNumber}`);
		expect(weekNumberOption).toBeInTheDocument();
	});

	it("renders all days of the week correctly", async () => {
		render(<KalenderPage />);
		const days = ["Ma", "Di", "Wo", "Do", "Vr"];
		for (const day of days) {
			await waitFor(() => {
				const dayElement = screen.getByText((content, element) => {
					return element?.tagName.toLowerCase() === "th" && (element.textContent ?? "").includes(day);
				});
				expect(dayElement).toBeInTheDocument();
			});
		}
	});

	it("renders all times correctly", () => {
		render(<KalenderPage />);
		const times = Array.from({ length: 13 }, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);
		times.forEach((time) => {
			expect(screen.getByText(time)).toBeInTheDocument();
		});
	});
});
