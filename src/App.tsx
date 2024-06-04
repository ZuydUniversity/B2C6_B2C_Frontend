import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBarElements';
import Doctorpage from "./pages/docterpage";
import Patientpage from "./pages/patientpage";
import Root from "./components/root";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/Patientpage" element={<Patientpage />} />
        <Route path="/Docterpage" element={<Doctorpage />} />
      </Routes>
    </Router>
  );
};

export default App;
