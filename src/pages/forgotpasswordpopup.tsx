import React, { useState } from "react";
import "./styles/forgotpasswordpopup.css";

interface ForgotPasswordPopupProps {
  onClose: () => void;
}

const ForgotPasswordPopup: React.FC<ForgotPasswordPopupProps> = ({
  onClose,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h1>wachtwoord vergeten</h1>
          <p>
            Indien je je wachtwoord bent vergeten, kun je deze wijzigen via
            mail. Vul onderstaande gegevens in en volg vervolgens de instructies
            in de e-mail om je wachtwoord eenvoudig te wijzigen.
          </p>
          <label htmlFor="email">Vul hier je e-mailadres in</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="e-mail"
          />
          <div className="button-group">
            <button type="button" onClick={onClose} className="cancel-button">
              Annuleren
            </button>
            <button type="submit" className="submit-button">
              Verstuur
            </button>
          </div>
        </form>
        <p className="source">
          Bron:{" "}
          <a href="https://www.hetwkz-kind.nl/hoe-zit-dat/het-ziekenhuis/kinderraad/">
            https://www.hetwkz-kind.nl/hoe-zit-dat/het-ziekenhuis/kinderraad/
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
