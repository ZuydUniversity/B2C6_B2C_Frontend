import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBarElements";
import Doctorpage from "./pages/docterpage";
import Patientpage from "./pages/patientpage";
import Root from "./components/root";
import LoginPage from "./pages/loginpage";

const App: React.FC = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  return (
    <Router>
      {!hideNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/Patientpage" element={<Patientpage />} />
        <Route path="/Docterpage" element={<Doctorpage />} />
        <Route
          path="/Login"
          element={<LoginPage setHideNavbar={setHideNavbar} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
