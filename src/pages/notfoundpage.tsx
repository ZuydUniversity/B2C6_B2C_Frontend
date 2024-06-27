import React, { useEffect } from "react";
import "./styles/notfoundpage.css";

interface Props {
  setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotFoundPage: React.FC<Props> = ({ setHideNavbar }) => {
  useEffect(() => {
    setHideNavbar(true);

    return () => {
      setHideNavbar(false);
    };
  }, [setHideNavbar]);

  return (
    <div className="not-found-container">
      <img src="/images/404Error.jpg" alt="404 Error" className="error-image" />
      <br />
      <a href="/dashboard">
        <input type="button" value="Naar start" />
      </a>
    </div>
  );
};

export default NotFoundPage;
