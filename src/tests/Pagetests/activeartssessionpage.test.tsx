import { render } from "@testing-library/react";
import { ActiveArtsSession, PatientInfo } from "../../pages/activeartssessionpage";

describe("ActiveArtsSession test", () => {
    it("should render the component", () => {
        render(<ActiveArtsSession />)
    });

    it("Should render patientinfo", () => {
        render(<PatientInfo name="Joep Doe" age="10 jaar" diagnosis="JDM (monocyclische)" medication="x medicijn" appointmentsCount={4} />)

        const patientSessionInfoElement = document.querySelector('.patient-session-info-value') as HTMLElement;
        const medicationElement = patientSessionInfoElement.querySelector('.medication-label') as HTMLElement;
        expect(medicationElement.innerHTML).toBe("x medicijn");

    });
});