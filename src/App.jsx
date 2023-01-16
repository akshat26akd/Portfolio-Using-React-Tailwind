import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Work_Exp from "./pages/Work_Exp";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import SocialLinks from "./pages/SocialLinks";

function App() {
  return (
    <div>
      <NavBar/>
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
