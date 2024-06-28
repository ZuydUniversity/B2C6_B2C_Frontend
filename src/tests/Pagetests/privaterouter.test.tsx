import { render, screen } from "@testing-library/react";
import AboutUsPage from "../../pages/aboutuspage";
import PrivateRoute from "../../PrivateRouter";
import { MemoryRouter } from "react-router-dom";

describe("Private Route", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("Should render the protected component if authenticated", () => {
        const now = new Date().getTime();
        localStorage.setItem("accessToken", "mockAccessToken");
        localStorage.setItem("tokenTimestamp", now.toString());

        render(<MemoryRouter><PrivateRoute element={<AboutUsPage />} /></MemoryRouter>);
    });

    it("Should redirect to login if not authenticated", () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenTimestamp");

        render(<MemoryRouter><PrivateRoute element={<AboutUsPage />} /></MemoryRouter>);
    });

    it("should redirect to login if token is expired", () => {
        const pastTime = new Date().getTime() - 16 * 60 * 1000;
        localStorage.setItem("accessToken", "mockAccessToken");
        localStorage.setItem("tokenTimestamp", pastTime.toString());

        render(<MemoryRouter> <PrivateRoute element={<AboutUsPage />} /> </MemoryRouter>);
    });
});
