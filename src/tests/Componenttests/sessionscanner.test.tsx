// Scanner.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers
import Scanner from "../../components/sessionscanner"; // adjust the import path as needed

describe("Scanner component", () => {
	test("renders the Scanner component with initial image", () => {
		render(<Scanner />);

		// Check if the title is rendered correctly
		expect(screen.getByText(/Scanner/i)).toBeInTheDocument();

		// Check if the aspect title is rendered correctly
		expect(screen.getByText(/Aspect/i)).toBeInTheDocument();

		// Check if the image with the correct source is rendered
		const initialImage = screen.getByAltText(/Scanner preview 0/i);
		expect(initialImage).toBeInTheDocument();
		expect(initialImage).toHaveAttribute("src", "Images/diddy.png");
	});

	it("should go to the next image when right button is clicked", async () => {
		render(<Scanner />);
		const rightButton = screen.getByRole("button", { name: /Right icon/i });
		await userEvent.click(rightButton);
		expect(screen.getByAltText("Scanner preview 1")).toBeInTheDocument();
	});

	it("should go to the previous image when left button is clicked", async () => {
		render(<Scanner />);
		const leftButton = screen.getByRole("button", { name: /Left icon/i });
		await userEvent.click(leftButton);
		expect(screen.getByAltText("Scanner preview 2")).toBeInTheDocument(); // because it cycles back
	});

	it("should cycle to the last image if left button is clicked on the first image", async () => {
		render(<Scanner />);
		const leftButton = screen.getByRole("button", { name: /Left icon/i });
		await userEvent.click(leftButton);
		expect(screen.getByAltText("Scanner preview 2")).toBeInTheDocument();
	});

	it("should cycle to the first image if right button is clicked on the last image", async () => {
		render(<Scanner />);
		const rightButton = screen.getByRole("button", { name: /Right icon/i });

		// Simulate clicking right button until the last image
		await userEvent.click(rightButton);
		await userEvent.click(rightButton);
		await userEvent.click(rightButton); // Now at the last image

		// Clicking once more should cycle back to the first image
		await userEvent.click(rightButton);
		expect(screen.getByAltText("Scanner preview 0")).toBeInTheDocument();
	});
});
