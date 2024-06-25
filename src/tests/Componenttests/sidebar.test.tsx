import { render } from "@testing-library/react";
import Sidebar from "../../components/sidebar";

describe("Sidebar component", () => {
	it("should render the component", () => {
		render(<Sidebar />);
		const logo = document.querySelector(".logo-img");
		expect(logo).toBeInTheDocument();
	});
});
