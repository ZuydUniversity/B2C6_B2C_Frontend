import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ResetPasswordPage from "../../pages/resetpasswordpage";
import { MemoryRouter } from 'react-router-dom';

const mockSetHideNavbar = jest.fn();
const mockUseNavigate = jest.fn();
const mockAlert = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe("Reset Password Page", () => {
    beforeAll(() => {
        global.alert = mockAlert;
    });

    beforeEach(() => {
        mockUseNavigate.mockClear();
        mockAlert.mockClear();
    });

    it("Should render password reset page", () => {
        render(<MemoryRouter> <ResetPasswordPage setHideNavbar={mockSetHideNavbar} /> </MemoryRouter>);
    });

    it('toggles password visibility', () => {
        render(<MemoryRouter> <ResetPasswordPage setHideNavbar={mockSetHideNavbar} /> </MemoryRouter>);

        const passwordInput = screen.getByLabelText('New Password') as HTMLInputElement;
        const toggleIcon = screen.getByRole('img', { hidden: true });

        expect(passwordInput).toHaveAttribute('type', 'password');
        fireEvent.click(toggleIcon);
        expect(passwordInput).toHaveAttribute('type', 'text');
        fireEvent.click(toggleIcon);
        expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('validates password requirements', () => {
        render(<MemoryRouter> <ResetPasswordPage setHideNavbar={mockSetHideNavbar} /> </MemoryRouter>);

        const newPasswordInput = screen.getByLabelText('New Password');
        const verifyPasswordInput = screen.getByLabelText('Verify Password');

        fireEvent.change(newPasswordInput, { target: { value: 'Test123!' } });
        fireEvent.change(verifyPasswordInput, { target: { value: 'Test123!' } });

        expect(screen.getByText('At least 8 characters')).toHaveClass('valid');
        expect(screen.getByText('At least one lowercase letter')).toHaveClass('valid');
        expect(screen.getByText('At least one uppercase letter')).toHaveClass('valid');
        expect(screen.getByText('At least one number')).toHaveClass('valid');
        expect(screen.getByText('At least one special character')).toHaveClass('valid');
        expect(screen.getByText('New password is Verify password')).toHaveClass('valid');
    });

    it('Should display alert invalid password', async () => {
        render(<MemoryRouter> <ResetPasswordPage setHideNavbar={mockSetHideNavbar} /> </MemoryRouter>);

        const submitButton = screen.getByRole('button', { name: 'Reset Password' });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockAlert).toHaveBeenCalledWith("Password entered is invalid make sure all requirements are met!");
        });

    });

    it('should reset password successfully', async () => {
        render(<MemoryRouter> <ResetPasswordPage setHideNavbar={mockSetHideNavbar} /> </MemoryRouter>);

        jest.spyOn(window, 'fetch').mockResolvedValueOnce({
            ok: true,
        } as Response);

        const newPasswordInput = screen.getByLabelText('New Password');
        const verifyPasswordInput = screen.getByLabelText('Verify Password');

        fireEvent.change(newPasswordInput, { target: { value: 'Test123!' } });
        fireEvent.change(verifyPasswordInput, { target: { value: 'Test123!' } });

        const submitButton = screen.getByRole('button', { name: 'Reset Password' });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockAlert).toHaveBeenCalledWith("Password changed successfully!");
        });

        expect(mockUseNavigate).toHaveBeenCalledWith('/login');
    });

    it('should display alert for failed password reset', async () => {
        render(<MemoryRouter> <ResetPasswordPage setHideNavbar={mockSetHideNavbar} /> </MemoryRouter>);

        jest.spyOn(window, 'fetch').mockResolvedValueOnce({
            ok: false,
        } as Response);

        const newPasswordInput = screen.getByLabelText('New Password');
        const verifyPasswordInput = screen.getByLabelText('Verify Password');

        fireEvent.change(newPasswordInput, { target: { value: 'Test123!' } });
        fireEvent.change(verifyPasswordInput, { target: { value: 'Test123!' } });

        const submitButton = screen.getByRole('button', { name: 'Reset Password' });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockAlert).toHaveBeenCalledWith("Could not reset password!");
        });
    });

    it('Should go back to login page', () => {
        render(<MemoryRouter> <ResetPasswordPage setHideNavbar={mockSetHideNavbar} /> </MemoryRouter>);

        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        expect(mockUseNavigate).toHaveBeenCalled();
        expect(mockUseNavigate.mock.calls[0][0]).toBe('/login');

    });
});
