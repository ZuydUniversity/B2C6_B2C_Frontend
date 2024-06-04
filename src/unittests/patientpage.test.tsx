import PatientPage from "../pages/patientpage";
import { render } from "@testing-library/react";

test("Check if page renders", () => {
  const page = render(<PatientPage />);
  expect(page.getByText("Patient Page")).toBeInTheDocument();
});
