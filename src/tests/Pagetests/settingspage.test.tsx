import { render } from "@testing-library/react";
import SettingsPage from "../../pages/settingspage";

test("Check if page renders", () => {
	const page = render(<SettingsPage />);
	expect(page.getByText("Settings")).toBeInTheDocument();
});
