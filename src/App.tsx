import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Notebook from "./pages/notebook/Notebook";
import Summary from "./pages/notebook/Summary";
import Drivetrain from "./pages/notebook/Drivetrain";
import CodeDevelopment from "./pages/notebook/CodeDevelopment";
import Team from "./pages/notebook/Team";
import Contact from "./pages/Contact";
import Sponsor from "./pages/notebook/Sponsor";
import NotebookNotImplemented from "./pages/notebook/UnderConstruction";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/notebook/summary" element={<Summary />} />
        <Route path="/notebook/drivetrain" element={<Drivetrain />} />
        <Route path="/notebook/code" element={<CodeDevelopment />} />
        <Route path="/notebook/team" element={<Team />} />
        <Route path="/notebook/sponsor" element={<Sponsor />} />
        <Route path="/notebook/not-implemented" element={<NotebookNotImplemented />} />
      </Routes>
    </Router>
  );
}

export default App;
