import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar/Navbar";
import Certifications from "./pages/Certifications";
import CompatibilityPopUp from "./components/CompatibilityFolder/CompatibilityPopUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CompatibilityPopUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
