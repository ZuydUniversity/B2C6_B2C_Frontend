import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import EditNote from "../../pages/Editnotes"; // Ensure this path is correct
import { Note } from "../../abstracts/ImportsModels"; // Ensure this path is correct


describe("Edit Note Page", () => {
    const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
        window.history.pushState({}, "Test page", route);

        return render(
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    <Route path="/editnote" element={ui} />
                </Routes>
            </MemoryRouter>
        );
    };

    it("should render the edit note page", () => {
        renderWithRouter(<EditNote />, { route: "/editnote" });

        expect(screen.getByText("Bewerk Notitie")).toBeInTheDocument();
        expect(screen.getByText("Notitie")).toBeInTheDocument();
        expect(screen.getByText("Naam: Sample Note")).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("Jane Smith")).toBeInTheDocument();
        expect(screen.getByText("Therapy Session")).toBeInTheDocument();
    });

    it("should display the note details correctly", () => {
        renderWithRouter(<EditNote />, { route: "/editnote" });

        expect(screen.getByText("Naam: Sample Note")).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("Jane Smith")).toBeInTheDocument();
        expect(screen.getByText("Therapy Session")).toBeInTheDocument();
    });

    it("should submit the form and navigate to /notes", () => {
        const navigateMock = jest.fn();
        renderWithRouter(<EditNote />, { route: "/editnote" });

        fireEvent.change(screen.getByLabelText(/noteName/i), {
            target: { value: "Updated Note Name" },
        });

        fireEvent.submit(screen.getByText("Opslaan"));

        expect(navigateMock).toHaveBeenCalledWith("/notes");
    });
});
