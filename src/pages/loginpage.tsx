import React, { useEffect, useState } from "react";
import "../styles/loginpage.css";

interface Props {
    setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<Props> = ({ setHideNavbar }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setHideNavbar(true);

        return () => {
            setHideNavbar(false);
        };
    }, [setHideNavbar]);

    const handleLogin = async () => {
        try {

            const response = await fetch("http://127.0.0.1:8000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const accessToken = data.access_token;

                localStorage.setItem('accessToken', accessToken)
                window.location.href = "/";

            }
            else {
                setError("Incorrect email or password")
            }

        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-form">
                <div className="main-login-form">
                    <h1>Inloggen</h1>
                    <div>
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Wachtwoord"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group action-group">
                            <button onClick={handleLogin}>Log in</button>
                            <a href="#">Wachtwoord vergeten?</a>
                        </div>
                        {error && <p className="error-label">{error}</p>}
                    </div>

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
        </div>
    );
};

export default LoginPage;
