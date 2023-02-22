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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
