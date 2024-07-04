import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "../../components/searchbar";

describe("SearchBar Component", () => {
	test("renders the input element", () => {
		render(<SearchBar onSearch={jest.fn()} />);
		const inputElement = screen.getByPlaceholderText(/search.../i);
		expect(inputElement).toBeInTheDocument();
	});

	test("calls onSearch with the input value when typing", () => {
		const handleSearch = jest.fn();
		render(<SearchBar onSearch={handleSearch} />);
		const inputElement = screen.getByPlaceholderText(/search.../i);

		fireEvent.change(inputElement, { target: { value: "test query" } });

		expect(handleSearch).toHaveBeenCalledTimes(1);
		expect(handleSearch).toHaveBeenCalledWith("test query");
	});

	test("updates the input value when typing", () => {
		render(<SearchBar onSearch={jest.fn()} />);
		const inputElement = screen.getByPlaceholderText(/search.../i);

		fireEvent.change(inputElement, { target: { value: "another query" } });

		expect(inputElement).toHaveValue("another query");
	});
});
