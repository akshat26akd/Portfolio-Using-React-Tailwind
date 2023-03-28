import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import NavBar from "./Navbar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Work_Exp from "./pages/Work_Exp";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import SocialLinks from "./pages/SocialLinks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <About />
    <Education />
    <Work_Exp />
    <Projects />
    <Skills />
    <Certifications />
    <Contact />
    <SocialLinks />
  </React.StrictMode>
);
