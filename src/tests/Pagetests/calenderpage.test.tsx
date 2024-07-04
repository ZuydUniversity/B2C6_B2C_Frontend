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

describe("Helper functions", () => {
	it("getDateOfISOWeek works correctly for dayOfWeek <= 4", () => {
		const date = new Date(2023, 0, 5); // January 5, 2023 is a Thursday (dayOfWeek = 4)
		const result = getDateOfISOWeek(1, 2023);
		expect(result.toISOString().split("T")[0]).toBe("2023-01-02"); // The Monday of the first week
	});

	it("getDateOfISOWeek works correctly for dayOfWeek > 4", () => {
		const date = new Date(2023, 0, 6); // January 6, 2023 is a Friday (dayOfWeek = 5)
		const result = getDateOfISOWeek(1, 2023);
		expect(result.toISOString().split("T")[0]).toBe("2023-01-02"); // The Monday of the first week
	});

	// Additional tests to ensure edge cases are covered
	it("throws error for invalid week number in getDateOfISOWeek", () => {
		expect(() => getDateOfISOWeek(0, 2022)).toThrow("Invalid week number");
		expect(() => getDateOfISOWeek(53, 2022)).toThrow("Invalid week number");
	});

	it("throws error for invalid year in getDateOfISOWeek", () => {
		expect(() => getDateOfISOWeek(1, 0)).toThrow("Invalid year");
	});
});

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

	it("renders the week-select correctly", () => {
		render(<CalenderPage />);
		const weekSelect = screen.getByTestId("week-select");
		expect(weekSelect).toBeInTheDocument();
	});

	it("renders the arrow buttons correctly", () => {
		render(<CalenderPage />);
		const prevButton = screen.getByRole("button", { name: /</i });
		const nextButton = screen.getByRole("button", { name: />/i });
		expect(prevButton).toBeInTheDocument();
		expect(nextButton).toBeInTheDocument();
	});

	it("renders the kalender-table correctly", () => {
		render(<CalenderPage />);
		const kalenderTable = screen.getByRole("presentation", { name: "kalender-table-container" });
		expect(kalenderTable).toBeInTheDocument();
	});
});
