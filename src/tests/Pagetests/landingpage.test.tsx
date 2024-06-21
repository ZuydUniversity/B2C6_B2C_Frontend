import { render } from "@testing-library/react";
import LandingPage from "../../pages/landingpage";

test("Check if page renders", () => {
  const page = render(<LandingPage />);
  expect(
    page.getByText("Super Gave Artsen Connect Portaal."),
  ).toBeInTheDocument();
});
