import { render } from "@testing-library/react";
import ArtesPage from "../pages/artspage";

test(
  "Check if page renders",
  () => {
    const page = render(<ArtesPage/>);
    expect(page.getByText("Artsen Page")).toBeInTheDocument();
  }
);