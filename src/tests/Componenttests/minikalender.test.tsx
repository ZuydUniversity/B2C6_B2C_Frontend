import { render, screen } from "@testing-library/react";
import { Note, Specialist, Patient, Session, Appointment } from "../../abstracts/ImportsModels";
import MiniKalender from "../../components/minikalender";

describe("MiniKalender component", () => {
  it("should render the component", () => {
    render(<MiniKalender />);
    const element = screen.getByText("Kalender");
    expect(element).toBeInTheDocument();
  });
});