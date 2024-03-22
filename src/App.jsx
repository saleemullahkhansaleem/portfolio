import { useEffect, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Educations from "./pages/Educations";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import NavBar from "./componenets/NavBar";
import GoToTopButton from "./componenets/GoToTopButton/GoToTopButton";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      document.querySelectorAll("section").forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-zinc-900 text-white">
      <NavBar activeTab={activeSection} />
      <Home />
      <div className="w-full  bg-black">
        <Services />
      </div>
      <About />
      <div className="w-full  bg-black">
        <Projects />
      </div>
      <Experiences />
      <div className="w-full  bg-black">
        <Skills />
      </div>
      <Educations />
      <div className="w-full  bg-black">
        <Contact />
      </div>
      <GoToTopButton />
    </div>
  );
}

export default App;
