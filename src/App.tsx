import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctorpage from "./pages/docterpage";
import Patientpage from "./pages/patientpage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Patientpage" element={<Patientpage />} />
        <Route path="/Docterpage" element={<Doctorpage />} />
      </Routes>
    </Router>
  );
};

export default App;
