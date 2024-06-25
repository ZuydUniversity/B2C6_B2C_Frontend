import React, { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginPage from "../../pages/loginpage";
import ForgotPasswordPopup from "../../pages/forgotpasswordpopup";
import { doc } from "prettier";

describe("Login Page", () => {
	const setHideNavbar = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
		global.fetch = jest.fn();
		(global.fetch as jest.Mock).mockClear();
	});

	it("should render login page", () => {
		render(<LoginPage setHideNavbar={setHideNavbar} />);
		expect(document.querySelector(".login-page")).toBeInTheDocument();
	});

	it("should show the navbar on mount and hide on unmount", () => {
		const { unmount } = render(<LoginPage setHideNavbar={setHideNavbar} />);
		expect(setHideNavbar).toHaveBeenCalledWith(true);
		unmount();
		expect(setHideNavbar).toHaveBeenCalledWith(false);
	});

	it("shows error message on failed login", async () => {
		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: false,
			json: async () => ({}),
		});

		render(<LoginPage setHideNavbar={setHideNavbar} />);

		fireEvent.change(screen.getByPlaceholderText("E-mail"), { target: { value: "cheese@swiss.com" } });
		fireEvent.change(screen.getByPlaceholderText("Wachtwoord"), { target: { value: "password" } });
		fireEvent.click(screen.getByText("Log in"));

		await waitFor(() => {
			expect(screen.getByText("Incorrect email or password")).toBeInTheDocument();
		});
	});

	it("should open forgot password popup", () => {
		render(<LoginPage setHideNavbar={setHideNavbar} />);

		fireEvent.click(document.querySelector("#password-forgotten-button") as Element);
		const popUpElement = document.querySelector(".popup-overlay") as Element;
		expect(popUpElement).toBeInTheDocument();
	});

	it("should close forgot password popup", () => {
		render(<LoginPage setHideNavbar={setHideNavbar} />);

		fireEvent.click(document.querySelector("#password-forgotten-button") as Element);
		const popUpElement = document.querySelector(".popup-overlay") as Element;
		expect(popUpElement).toBeInTheDocument();

		fireEvent.click(document.querySelector(".cancel-button") as Element);
		expect(popUpElement).not.toBeInTheDocument();
	});
});
