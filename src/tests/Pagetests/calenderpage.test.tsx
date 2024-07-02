import React from "react";
import { render, fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import CalenderPage from "../../pages/calenderpage";

// Cleanup the DOM after each test
afterEach(cleanup);

// Helper functions used in the tests
const getWeekNumber = (date: Date): number => {
	if (isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}
	const firstJan = new Date(date.getFullYear(), 0, 1);
	const pastDaysOfYear = (date.valueOf() - firstJan.valueOf()) / 86400000;
	return Math.ceil((pastDaysOfYear + firstJan.getDay() + 1) / 7);
};

const getStartOfWeek = (date: Date): Date => {
	if (isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}
	const day = date.getDay();
	const diff = date.getDate() - day + (day === 0 ? -6 : 1);
	return new Date(date.setDate(diff));
};

const getDateOfISOWeek = (week: number, year: number): Date => {
	if (week < 1 || week > 52) {
		throw new Error("Invalid week number");
	}
	if (year < 1) {
		throw new Error("Invalid year");
	}
	const simple = new Date(year, 0, 1 + (week - 1) * 7);
	const dayOfWeek = simple.getDay();
	const ISOweekStart = simple;
	if (dayOfWeek <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
	else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
	return ISOweekStart;
};

describe("CalenderPage", () => {
	it("renders without crashing", () => {
		render(<CalenderPage />);
	});

	it("displays the correct page title", () => {
		render(<CalenderPage />);
		const pageTitle = screen.getByText("Kalender");
		expect(pageTitle).toBeInTheDocument();
	});

	it("renders the current week number correctly", () => {
		render(<CalenderPage />);
		const currentWeekNumber = getWeekNumber(new Date());
		const weekNumberOption = screen.getByText(`Week ${currentWeekNumber}`);
		expect(weekNumberOption).toBeInTheDocument();
	});

	it("renders the start date of the current week correctly", () => {
		render(<CalenderPage />);
		const startDate = getStartOfWeek(new Date());
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedStartDate = `${String(startDate.getDate()).padStart(2, "0")} ${monthNames[startDate.getMonth()]}`;
		const startDateElement = screen.getAllByText((content, element) => (element && element.tagName.toLowerCase() === "th" && content.includes(formattedStartDate) ? true : false));
		expect(startDateElement.length).toBeGreaterThan(0);
	});

	it("renders the kalender-table-container correctly", () => {
		render(<CalenderPage />);
		const calenderTableContainer = screen.getByRole("presentation", { name: "kalender-table-container" });
		expect(calenderTableContainer).toBeInTheDocument();
	});

	it("renders the kalender-underline correctly", () => {
		render(<CalenderPage />);
		const kalenderUnderline = screen.getByRole("presentation", { name: "kalender-underline" });
		expect(kalenderUnderline).toBeInTheDocument();
	});

	it("renders the kalender-header-underline correctly", () => {
		render(<CalenderPage />);
		const kalenderHeaderUnderline = screen.getByRole("presentation", { name: "kalender-header-underline" });
		expect(kalenderHeaderUnderline).toBeInTheDocument();
	});

	it("renders the toevoegen button correctly", () => {
		render(<CalenderPage />);
		const toevoegenButton = screen.getByRole("button", { name: /toevoegen/i });
		expect(toevoegenButton).toBeInTheDocument();
	});

	it("navigates to the previous week", () => {
		render(<CalenderPage />);
		const prevButton = screen.getByRole("button", { name: /</ });
		fireEvent.click(prevButton);
		const previousWeekDate = getStartOfWeek(new Date());
		previousWeekDate.setDate(previousWeekDate.getDate() - 7);
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedPrevWeekDate = `${String(previousWeekDate.getDate()).padStart(2, "0")} ${monthNames[previousWeekDate.getMonth()]}`;
		const prevWeekDateElement = screen.getAllByText((content, element) => (element && element.tagName.toLowerCase() === "th" && content.includes(formattedPrevWeekDate) ? true : false));
		expect(prevWeekDateElement.length).toBeGreaterThan(0);
	});

	it("navigates to the next week", () => {
		render(<CalenderPage />);
		const nextButton = screen.getByRole("button", { name: />/ });
		fireEvent.click(nextButton);
		const nextWeekDate = getStartOfWeek(new Date());
		nextWeekDate.setDate(nextWeekDate.getDate() + 7);
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedNextWeekDate = `${String(nextWeekDate.getDate()).padStart(2, "0")} ${monthNames[nextWeekDate.getMonth()]}`;
		const nextWeekDateElement = screen.getAllByText((content, element) => (element && element.tagName.toLowerCase() === "th" && content.includes(formattedNextWeekDate) ? true : false));
		expect(nextWeekDateElement.length).toBeGreaterThan(0);
	});

	it("changes week number from dropdown", async () => {
		render(<CalenderPage />);
		const weekSelect = screen.getByTestId("week-select");
		fireEvent.change(weekSelect, { target: { value: "10" } });

		await waitFor(() => {
			const selectedWeekOption = screen.getByText("Week 10");
			expect(selectedWeekOption).toBeInTheDocument();
		});
	});

	it("calls handlePrevWeek on previous week button click", () => {
		render(<CalenderPage />);
		const prevButton = screen.getByRole("button", { name: /</ });
		fireEvent.click(prevButton);
		const newDate = new Date();
		newDate.setDate(newDate.getDate() - 7);
		const currentWeekNumber = getWeekNumber(getStartOfWeek(newDate));
		const weekNumberOption = screen.getByText(`Week ${currentWeekNumber}`);
		expect(weekNumberOption).toBeInTheDocument();
	});

	it("calls handleNextWeek on next week button click", () => {
		render(<CalenderPage />);
		const nextButton = screen.getByRole("button", { name: />/ });
		fireEvent.click(nextButton);
		const newDate = new Date();
		newDate.setDate(newDate.getDate() + 7);
		const currentWeekNumber = getWeekNumber(getStartOfWeek(newDate));
		const weekNumberOption = screen.getByText(`Week ${currentWeekNumber}`);
		expect(weekNumberOption).toBeInTheDocument();
	});

	it("calls handleWeekChange on week number change", async () => {
		render(<CalenderPage />);
		const weekSelect = screen.getByTestId("week-select");
		fireEvent.change(weekSelect, { target: { value: "10" } });

		await waitFor(() => {
			const selectedWeekOption = screen.getByText("Week 10");
			expect(selectedWeekOption).toBeInTheDocument();
		});
	});

	it("renders all days of the week correctly", async () => {
		render(<CalenderPage />);
		const days = ["Ma", "Di", "Wo", "Do", "Vr"];
		for (const day of days) {
			await waitFor(() => {
				const dayElement = screen.getByText((content, element) => (element && element.tagName.toLowerCase() === "th" && element.textContent?.includes(day) ? true : false));
				expect(dayElement).toBeInTheDocument();
			});
		}
	});

	it("renders all times correctly", () => {
		render(<CalenderPage />);
		const times = Array.from({ length: 13 }, (_, i) => `${String(i + 8).padStart(2, "0")}:00`);
		times.forEach((time) => {
			expect(screen.getByText(time)).toBeInTheDocument();
		});
	});

	it("handles edge cases for handleWeekChange with week 0", () => {
		render(<CalenderPage />);
		const weekSelect = screen.getByTestId("week-select");
		// Test for invalid week number (e.g., 0)
		fireEvent.change(weekSelect, { target: { value: "0" } });
		expect(screen.queryByText(/Week 0/i)).not.toBeInTheDocument();
	});

	it("handles edge cases for handleWeekChange with week 53", () => {
		render(<CalenderPage />);
		const weekSelect = screen.getByTestId("week-select");
		// Test for invalid week number (e.g., 53)
		fireEvent.change(weekSelect, { target: { value: "53" } });
		expect(screen.queryByText(/Week 53/i)).not.toBeInTheDocument();
	});
});

it("handles edge cases for invalid date", async () => {
	render(<CalenderPage />);
	expect(() => getWeekNumber(new Date("invalid-date"))).toThrow("Invalid date");
	expect(() => getStartOfWeek(new Date("invalid-date"))).toThrow("Invalid date");
	expect(() => getDateOfISOWeek(53, 2022)).toThrow("Invalid week number");
	expect(() => getDateOfISOWeek(1, -1)).toThrow("Invalid year");
});

// Negative tests for helper functions
describe("Negative tests", () => {
	it("handles invalid week number in handleWeekChange", async () => {
		render(<CalenderPage />);
		const weekSelect = screen.getByTestId("week-select");

		// Test for invalid week number (e.g., 0)
		fireEvent.change(weekSelect, { target: { value: "0" } });
		expect(screen.queryByText(/Week 0/i)).not.toBeInTheDocument();

		// Test for invalid week number (e.g., 53)
		fireEvent.change(weekSelect, { target: { value: "53" } });
		expect(screen.queryByText(/Week 53/i)).not.toBeInTheDocument();
	});
});

describe("Negative tests for helper functions", () => {
	it("handles invalid date in getWeekNumber", () => {
		expect(() => getWeekNumber(new Date("invalid-date"))).toThrow("Invalid date");
	});

	it("handles invalid date in getStartOfWeek", () => {
		expect(() => getStartOfWeek(new Date("invalid-date"))).toThrow("Invalid date");
	});

	it("handles invalid week and year in getDateOfISOWeek", () => {
		expect(() => getDateOfISOWeek(53, 2022)).toThrow("Invalid week number");
		expect(() => getDateOfISOWeek(1, -1)).toThrow("Invalid year");
	});
});

// Tests for helper functions
describe("Helper functions", () => {
	it("getWeekNumber works correctly", () => {
		expect(getWeekNumber(new Date("2022-01-01"))).toBe(1);
		expect(getWeekNumber(new Date("2022-01-02"))).toBe(2);
		expect(getWeekNumber(new Date("2022-12-31"))).toBe(53);
	});

	it("getStartOfWeek works correctly", () => {
		expect(getStartOfWeek(new Date("2022-01-05")).toISOString().split("T")[0]).toBe("2022-01-03");
		expect(getStartOfWeek(new Date("2022-12-31")).toISOString().split("T")[0]).toBe("2022-12-26");
	});

	it("getDateOfISOWeek works correctly", () => {
		expect(getDateOfISOWeek(1, 2022).toISOString().split("T")[0]).toBe("2022-01-03");
		expect(getDateOfISOWeek(52, 2022).toISOString().split("T")[0]).toBe("2022-12-26");
	});
});

it("navigates to the first and last week of the year", () => {
	render(<CalenderPage />);
	const prevButton = screen.getByRole("button", { name: /</ });
	const nextButton = screen.getByRole("button", { name: />/ });

	// Navigate to the first week of the year
	for (let i = 0; i < 52; i++) {
		fireEvent.click(prevButton);
	}
	expect(screen.getAllByText(/Week 1/i)).not.toHaveLength(0);

	// Navigate to the last week of the year
	for (let i = 0; i < 52; i++) {
		fireEvent.click(nextButton);
	}
	expect(screen.getAllByText(/Week 52/i)).not.toHaveLength(0);
});
