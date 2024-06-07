import React, { useEffect, useState } from "react";
import "../styles/loginpage.css";
import ForgotPasswordPopup from "./forgotpasswordpopup"; // Ensure this path is correct

interface Props {
    setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<Props> = ({ setHideNavbar }) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    useEffect(() => {
        setHideNavbar(true);

        return () => {
            setHideNavbar(false);
        };
    }, [setHideNavbar]);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="login-page">
            <div className="login-form">
                <div className="main-login-form">
                    <h1>Inloggen</h1>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                id="personnel-number"
                                name="personnel-number"
                                placeholder="Personeels nummer"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="login-email"
                                name="login-email"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Wachtwoord"
                            />
                        </div>
                        <div className="form-group action-group">
                            <button type="submit">Log in</button>

                            <a href="#" onClick={openPopup}>Wachtwoord vergeten?</a>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <p>Mede mogelijk gemaakt door</p>
                    <div className="logos">
                        <img
                            src="/images/umcUtrechtLogo.png"
                            alt="UMC Utrecht Wilhelmina Kinderziekenhuis"
                        />
                        <img src="/images/JDBLogo.png" alt="JDB logo" />
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img
                    src="/images/loginImage.png"
                    alt="Group of people in orange hoodies"
                />
            </div>
            {showPopup && <ForgotPasswordPopup onClose={closePopup} />} {/* Show popup if showPopup is true */}
        </div>
    );
};

export default LoginPage;
