import { render, screen } from "@testing-library/react";
import MeldingSettings from "../../components/meldingsettings";

describe("Dashboard settings component", () => {
	it("should render the Dashboard settings component", () => {
		render(<MeldingSettings />);
		const meldingSettings = document.getElementsByClassName("settings-element") as HTMLCollectionOf<HTMLElement>;
		expect(meldingSettings[0]).toBeInTheDocument();
	});
});
