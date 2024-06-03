import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Dit is een testcase. De string 'renders Home link' is een beschrijving van wat deze testcase doet.
test("renders Home link", () => {
  // De renderfunctie wordt gebruikt om een ​​React-component in de DOM weer te geven om te testen.
  // In dit geval wordt de app-component weergegeven.
  render(<App />);

  // screen.getByText is een queryfunctie die wordt aangeboden door @testing-library/react.
  // Het retourneert het eerste overeenkomende knooppunt voor de opgegeven tekst, in dit geval 'Home'.
  // De 'i'-vlag maakt de zoekopdracht hoofdletterongevoelig.
  const linkElement = screen.getByRole("link", { name: /Home/i });

  // het is verwacht dat er een functie wordt geleverd door Jest (het testframework).
  // toBeInTheDocument is een aangepaste matcher van @testing-library/jest-dom.
  // Deze bewering controleert of het linkElement aanwezig is in het document.
  expect(linkElement).toBeInTheDocument();
});
