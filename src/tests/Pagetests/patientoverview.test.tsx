import { render } from "@testing-library/react";
import PatientOverview from "../../pages/patientoverview";

describe("PatientOverview page tests", () => {
	it("should renders without crashing", () => {
		render(<PatientOverview />);
	});
});
