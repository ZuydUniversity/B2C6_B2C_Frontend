import { render, screen } from "@testing-library/react";
import SwitchSetting from "../../components/switchsetting";

describe("Switch setting component", () => {
  it("should render the Switch setting component as false", () => {
    render(<SwitchSetting status={false} />);
    const switchSetting = document.getElementById("switch-default-checkbox") as HTMLElement;
    expect(switchSetting).toBeInTheDocument();
  });

  it("should render the Switch setting component as true", () => {
    render(<SwitchSetting status={true} />);
    const switchSetting = document.getElementById("switch-default-checkbox") as HTMLElement;
    expect(switchSetting).toBeInTheDocument();
  });

  it("should render the Switch setting component as false and set it to true", () => {
    render(<SwitchSetting status={false} />);
    const switchSetting = document.getElementById("switch-default-checkbox") as HTMLElement;
    expect(switchSetting).toBeInTheDocument();
    switchSetting.click();
    expect(switchSetting).toBeInTheDocument();
  });
})