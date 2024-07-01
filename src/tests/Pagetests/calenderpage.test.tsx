import React from "react";
import { render, fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import CalenderPage from "../../pages/calenderpage";

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

	it("navigates to the previous week", async () => {
		render(<CalenderPage />);
		const prevButton = screen.getByRole("button", { name: /</ });
		fireEvent.click(prevButton);
		const previousWeekDate = getStartOfWeek(new Date());
		previousWeekDate.setDate(previousWeekDate.getDate() - 7);
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedPrevWeekDate = `${String(previousWeekDate.getDate()).padStart(2, "0")} ${monthNames[previousWeekDate.getMonth()]}`;
		await waitFor(() => {
			const prevWeekDateElement = screen.getAllByText((content, element) => (element && element.tagName.toLowerCase() === "th" && content.includes(formattedPrevWeekDate) ? true : false));
			expect(prevWeekDateElement.length).toBeGreaterThan(0);
		});
	});

	it("navigates to the next week", async () => {
		render(<CalenderPage />);
		const nextButton = screen.getByRole("button", { name: />/ });
		fireEvent.click(nextButton);
		const nextWeekDate = getStartOfWeek(new Date());
		nextWeekDate.setDate(nextWeekDate.getDate() + 7);
		const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
		const formattedNextWeekDate = `${String(nextWeekDate.getDate()).padStart(2, "0")} ${monthNames[nextWeekDate.getMonth()]}`;
		await waitFor(() => {
			const nextWeekDateElement = screen.getAllByText((content, element) => (element && element.tagName.toLowerCase() === "th" && content.includes(formattedNextWeekDate) ? true : false));
			expect(nextWeekDateElement.length).toBeGreaterThan(0);
		});
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

	it("calls handlePrevWeek on previous week button click", async () => {
		render(<CalenderPage />);
		const prevButton = screen.getByRole("button", { name: /</ });
		fireEvent.click(prevButton);
		const newDate = new Date();
		newDate.setDate(newDate.getDate() - 7);
		const currentWeekNumber = getWeekNumber(getStartOfWeek(newDate));
		await waitFor(() => {
			const weekNumberOption = screen.getByText(`Week ${currentWeekNumber}`);
			expect(weekNumberOption).toBeInTheDocument();
		});
	});

	it("calls handleNextWeek on next week button click", async () => {
		render(<CalenderPage />);
		const nextButton = screen.getByRole("button", { name: />/ });
		fireEvent.click(nextButton);
		const newDate = new Date();
		newDate.setDate(newDate.getDate() + 7);
		const currentWeekNumber = getWeekNumber(getStartOfWeek(newDate));
		await waitFor(() => {
			const weekNumberOption = screen.getByText(`Week ${currentWeekNumber}`);
			expect(weekNumberOption).toBeInTheDocument();
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

	it("handles edge cases for handlePrevWeek and handleNextWeek", async () => {
		render(<CalenderPage />);
		const prevButton = screen.getByRole("button", { name: /</ });
		const nextButton = screen.getByRole("button", { name: />/ });

		// Navigate to the first week of the year
		for (let i = 0; i < 52; i++) {
			fireEvent.click(prevButton);
		}

		// Navigate to the last week of the year
		for (let i = 0; i < 52; i++) {
			fireEvent.click(nextButton);
		}
		await waitFor(() => {
			expect(screen.getByText(/Week 52/i)).toBeInTheDocument();
		});
	});

	it("handles edge cases for handleWeekChange", async () => {
		render(<CalenderPage />);
		const weekSelect = screen.getByTestId("week-select");

		// Change to the middle week of the year
		fireEvent.change(weekSelect, { target: { value: "26" } });
		await waitFor(() => {
			expect(screen.getByText(/Week 26/i)).toBeInTheDocument();
		});

		// Change to the last week of the year
		fireEvent.change(weekSelect, { target: { value: "52" } });
		await waitFor(() => {
			expect(screen.getByText(/Week 52/i)).toBeInTheDocument();
		});
	});
});

// Tests for helper functions
describe("Helper functions", () => {
	it("getWeekNumber works correctly", () => {
		expect(getWeekNumber(new Date("2022-01-01"))).toBe(1);
		expect(getWeekNumber(new Date("2022-01-02"))).toBe(1);
		expect(getWeekNumber(new Date("2022-12-31"))).toBe(52);
	});

	it("getStartOfWeek works correctly", () => {
		expect(getStartOfWeek(new Date("2022-01-05")).toISOString().split("T")[0]).toBe("2022-01-03");
		expect(getStartOfWeek(new Date("2022-12-31")).toISOString().split("T")[0]).toBe("2022-12-26");
	});

	it("getDateOfISOWeek works correctly", () => {
		expect(getDateOfISOWeek(1, 2022).toISOString().split("T")[0]).toBe("2022-01-03");
		expect(getDateOfISOWeek(52, 2022).toISOString().split("T")[0]).toBe("2022-12-25");
	});
});
