import Physiosessionresultspage from "../../pages/physiosessionresultspage";
import { render, screen } from "@testing-library/react";

describe("Physiosessionresultspage", () => {
	test("renders without crashing", () => {
		render(<Physiosessionresultspage />);
		expect(screen.getByText("Resultaten scan")).toBeInTheDocument();
	});

	test("renders the correct header text", () => {
		render(<Physiosessionresultspage />);
		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Resultaten scan");
	});

	test("renders the correct number of rows in the table", () => {
		render(<Physiosessionresultspage />);
		const rows = screen.getAllByRole("row");
	});

	test("renders a view button in each table row", () => {
		render(<Physiosessionresultspage />);
		const viewButtons = screen.getAllByText("🔍");
	});
});
