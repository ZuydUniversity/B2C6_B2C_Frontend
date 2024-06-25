import PhysioSessionPage from "../../pages/physiosessionpage";
import { render } from "@testing-library/react";

test("Check if page renders", () => {
	const page = render(<PhysioSessionPage />);
	expect(page.getByText("Selecteer patiënt")).toBeInTheDocument();
});
