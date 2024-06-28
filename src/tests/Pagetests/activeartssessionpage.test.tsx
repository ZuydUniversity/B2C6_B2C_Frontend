import { render, screen } from "@testing-library/react";
import { ActiveArtsSession, PatientInfo } from "../../pages/activeartssessionpage";

describe("ActiveArtsSession test", () => {
	it("should render the component", () => {
		render(<ActiveArtsSession />);
	});

	it("Should render patientinfo", () => {
		render(<PatientInfo name="Joep Doe" age="10 jaar" diagnosis="JDM (monocyclische)" medication="x medicijn" appointmentsCount={4} />);
	});
});
