// Scanner.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Scanner from "../../components/sessionscanner";

describe("Scanner component", () => {
  test("renders the Scanner component with initial image", () => {
    render(<Scanner />);
    
    // Check if the title is rendered correctly
    expect(screen.getByText(/Scanner/i)).toBeInTheDocument();
    
    // Check if the aspect title is rendered correctly
    expect(screen.getByText(/Aspect/i)).toBeInTheDocument();
    
    // Check if the image with the correct source is rendered
    const initialImage = screen.getByAltText(/Scanner preview 0/i);
    expect(initialImage).toBeInTheDocument();
    expect(initialImage).toHaveAttribute("src", "Images/diddy.png");
  });

  test("renders navigation buttons", () => {
    render(<Scanner />);
    
    // Check if navigation buttons are present
    const leftButton = screen.getByAltText(/Left icon/i);
    const rightButton = screen.getByAltText(/Right icon/i);
    
    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
  });

  test("initial image index is correct", () => {
    render(<Scanner />);
    
    // Check the initial image index is 0
    const image = screen.getByAltText(/Scanner preview 0/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "Images/diddy.png");
  });

  test("check image index after component mount", () => {
    render(<Scanner />);
    
    // The image source should be based on the initial state
    const image = screen.getByAltText(/Scanner preview 0/i);
    expect(image).toHaveAttribute("src", "Images/diddy.png");
  });
});
