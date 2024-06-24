import { fireEvent, render } from "@testing-library/react";
import ForgotPasswordPopup from "../../pages/forgotpasswordpopup";

describe("ForgotPasswordPopup page", () => {
  it("should render without crashing and change email", () => {
    render(<ForgotPasswordPopup onClose={() => {}} />);
    
    const emailInput = document.querySelector("#email") as HTMLInputElement;
    expect(emailInput).toBeInTheDocument();

    const currentEmail = emailInput.value;
    expect(currentEmail).toBe("");

    expect(emailInput.value).toBe("");
    const newEmail = "newEmail@gmail.com";
    emailInput.value = newEmail;
    expect(emailInput.value).toBe(newEmail);

    const form = document.querySelector("#reset-password-form") as HTMLFormElement;
    expect(form).toBeInTheDocument();
    fireEvent.submit(form);
    const formSubmit = form.onsubmit;
    expect(formSubmit).toBeDefined();
  });
});