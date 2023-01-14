import NavBar from "./NavBar";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import SocialLinks from "./pages/SocialLinks";
import Contact from "./pages/Contact";
import Work_Exp from "./pages/Work_Exp";
import Projects from "./pages/Projects";

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
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
