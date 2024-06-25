import { fireEvent, render, screen } from "@testing-library/react";
import { Note, Specialist, Patient, Session, Appointment } from "../../abstracts/ImportsModels";
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
});
