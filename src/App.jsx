import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Certifications from "./components/Certifications/Certifications";
import CompatibilityPopUp from "./components/CompatibilityFolder/CompatibilityPopUp";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import ProjectDetails from "./components/ProjectShowCase/ProjectDetails";
import Projects from "./components/ProjectShowCase/Projects";
import BlogLearnings from "./components/BlogLearnings/BlogLearnings";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <CompatibilityPopUp />
        <main className="app-container">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/bloglearnings" element={<BlogLearnings />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
