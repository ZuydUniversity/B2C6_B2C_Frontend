import { render } from "@testing-library/react";
import ArtsPage from "../../pages/artspage";

test("Check if page renders", () => {
	const page = render(<ArtsPage />);
	expect(page.getByText("Artsen Page")).toBeInTheDocument();
});
