import { render } from "@testing-library/react";
import AboutUsPage from "../pages/aboutuspage";

test(
  "Check if page renders",
  () => {
    const page = render(<AboutUsPage/>);
    expect(page.getByText("About Us")).toBeInTheDocument();
  }
);