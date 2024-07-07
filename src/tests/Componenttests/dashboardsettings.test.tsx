import { render, screen } from "@testing-library/react";
import DashboardSettings from "../../components/dashboardsettings";

describe("Dashboard settings component", () => {
  it("should render the Dashboard settings component", () => {
    render(<DashboardSettings />);
    const dashboardSettings = document.getElementsByClassName("settings-element") as HTMLCollectionOf<HTMLElement>;
    expect(dashboardSettings[0]).toBeInTheDocument();
  });
})