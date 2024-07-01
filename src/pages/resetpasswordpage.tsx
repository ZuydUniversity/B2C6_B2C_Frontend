import React, { useEffect, useState } from "react";
import "./styles/resetpassword.css";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../abstracts/Constances";

interface Props {
	setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetPasswordPage: React.FC<Props> = ({ setHideNavbar }) => {
	const [new_password, setNewPassword] = useState("");
	const [check_password, setCheckPassword] = useState("");
	const [min_length, setMinLength] = useState(false);
	const [has_lower_case, setHasLowerCase] = useState(false);
	const [has_upper_case, setHasUpperCase] = useState(false);
	const [has_number, setHasNumber] = useState(false);
	const [has_special_character, setHasSpecialCharacter] = useState(false);
	const [is_verified, setIsVerified] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const searchParams = new URLSearchParams(useLocation().search);
	const token = searchParams.get("token");
	const navigate = useNavigate();

	useEffect(() => {
		setHideNavbar(true);

		return () => {
			setHideNavbar(false);
		};
	}, [setHideNavbar]);

	const checkSecurityPassword = (newEnteredPassword: string) => {
		setNewPassword(newEnteredPassword);

		setMinLength(newEnteredPassword.length >= 8);
		setHasLowerCase(/[a-z]/.test(newEnteredPassword));
		setHasUpperCase(/[A-Z]/.test(newEnteredPassword));
		setHasNumber(/\d/.test(newEnteredPassword));
		setHasSpecialCharacter(/[!@#$%^&*(),.?":{}|<>]/.test(newEnteredPassword));
		setIsVerified(newEnteredPassword === check_password && newEnteredPassword !== "");
	};

	const checkCheckPassword = (checkEnteredPassword: string) => {
		setCheckPassword(checkEnteredPassword);

		setIsVerified(new_password === checkEnteredPassword && checkEnteredPassword !== "");
	};

	const togglePasswordVisibility = () => {
		setShowNewPassword(!showNewPassword);
	};

	const cancelPasswordReset = () => {
		navigate("/login");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!min_length || !has_lower_case || !has_upper_case || !has_number || !has_special_character || !is_verified) {
			alert("Password entered is invalid make sure all requirements are met!");
		} else {
			const response = await fetch(apiUrl + "user/reset-password", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token: token,
					new_password: new_password,
				}),
			});

			if (response.ok) {
				alert("Password changed successfully!");
				navigate("/login");
			} else alert("Could not reset password!");
		}
	};

	return (
		<div className="main-contaier-reset-password">
			<form onSubmit={handleSubmit} className="reset-password-form">
				<h1>Reset Password</h1>

				<div className="new-password-container">
					<div className="label-wrapper">
						<label htmlFor="new-password-input">New Password</label>
					</div>
					<div className="new-password-input-container">
						<input
							id="new-password-input"
							className="password-input"
							type={showNewPassword ? "text" : "password"}
							value={new_password}
							onChange={(e) => {
								checkSecurityPassword(e.target.value);
							}}
						/>
						<span className={`password-toggle-icon ${showNewPassword ? "visible" : ""}`} onClick={togglePasswordVisibility}>
							<img src={showNewPassword ? "Icons/ShowPassword.svg" : "Icons/HidePassword.svg"} alt={showNewPassword ? "👁" : "‒"} />
						</span>
					</div>
				</div>

				<div className="check-password-container">
					<div className="label-wrapper">
						<label htmlFor="check-password-input">Verify Password</label>
					</div>
					<input
						id="check-password-input"
						className="password-input"
						type="password"
						value={check_password}
						onChange={(e) => {
							checkCheckPassword(e.target.value);
						}}
					/>
				</div>

				<p>Password requirements:</p>
				<ul className="password-validation-check">
					<li className={min_length ? "valid" : "invalid"}>At least 8 characters</li>
					<li className={has_lower_case ? "valid" : "invalid"}>At least one lowercase letter</li>
					<li className={has_upper_case ? "valid" : "invalid"}>At least one uppercase letter</li>
					<li className={has_number ? "valid" : "invalid"}>At least one number</li>
					<li className={has_special_character ? "valid" : "invalid"}>At least one special character</li>
					<li className={is_verified ? "valid" : "invalid"}>New password is Verify password</li>
				</ul>

				<div className="button-container">
					<button id="cancel-button" type="button" className="cancel-button" onClick={cancelPasswordReset}>
						Cancel
					</button>
					<button type="submit" className="reset-button ">
						Reset Password
					</button>
				</div>
			</form>
		</div>
	);
};

export default ResetPasswordPage;
