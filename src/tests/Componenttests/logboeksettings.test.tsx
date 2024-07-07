import { render, screen } from "@testing-library/react";
import LogboekSettings from "../../components/logboeksettings";

describe("Logboek settings component", () => {
  it("should render the Dashboard settings component", () => {
    render(<LogboekSettings />);
    const logboekSettings = document.getElementsByClassName("settings-element") as HTMLCollectionOf<HTMLElement>;
    expect(logboekSettings[0]).toBeInTheDocument();
  });
})