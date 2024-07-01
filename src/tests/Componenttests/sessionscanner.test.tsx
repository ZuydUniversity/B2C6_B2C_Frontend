import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import Scanner from "../../components/sessionscanner"; // adjust the import path as needed

describe("Scanner component", () => {
  it("should render the component", () => {
    render(<Scanner />);
    expect(screen.getByRole("heading", { name: /Scanner/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Scanner preview area/i })).toBeInTheDocument();
    expect(screen.getByAltText("Scanner preview 0")).toBeInTheDocument();
    expect(screen.getByText("Aspect")).toBeInTheDocument();
  });

  it("should go to the next image when right button is clicked", async () => {
    render(<Scanner />);
    const rightButton = screen.getByRole("button", { name: /Right icon/i });
    await userEvent.click(rightButton);
    expect(screen.getByAltText("Scanner preview 1")).toBeInTheDocument();
  });

  it("should go to the previous image when left button is clicked", async () => {
    render(<Scanner />);
    const leftButton = screen.getByRole("button", { name: /Left icon/i });
    await userEvent.click(leftButton);
    expect(screen.getByAltText("Scanner preview 2")).toBeInTheDocument(); // because it cycles back
  });

  it("should cycle to the last image if left button is clicked on the first image", async () => {
    render(<Scanner />);
    const leftButton = screen.getByRole("button", { name: /Left icon/i });
    await userEvent.click(leftButton);
    expect(screen.getByAltText("Scanner preview 2")).toBeInTheDocument();
  });

  it("should cycle to the first image if right button is clicked on the last image", async () => {
    render(<Scanner />);
    const rightButton = screen.getByRole("button", { name: /Right icon/i });

    // Simulate clicking right button until the last image
    await userEvent.click(rightButton);
    await userEvent.click(rightButton);
    await userEvent.click(rightButton); // Now at the last image

    // Clicking once more should cycle back to the first image
    await userEvent.click(rightButton);
    expect(screen.getByAltText("Scanner preview 0")).toBeInTheDocument();
  });
});
