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
import PricingPage from "./pages/PricingPage";
import ClientFeedback from "./pages/ClientFeedback";

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
    <div className="bg-black text-white">
      <NavBar activeTab={activeSection} />
      <div className="bg-gradient-to-b from-zinc-900 from-70% relative">
        <div className="absolute inset-0 dotted-bg opacity-15 z-0"></div>
        <Home />
      </div>
      <div className="w-full bg-black">
        <Services />
      </div>
      <div className="bg-gradient-to-t from-zinc-900">
        <Projects />
      </div>
      <div className="w-full bg-zinc-900">
        <ClientFeedback />
      </div>
      <div className="bg-gradient-to-b from-zinc-900">
        <About />
      </div>
      <div className="w-full bg-black">
        <Skills />
      </div>
      {/* <div className="bg-gradient-to-b from-zinc-900">
        <Educations />
        </div>
        <div className="w-full bg-black">
        <PricingPage />
        </div> */}
      <div className="bg-gradient-to-t from-zinc-900">
        <Experiences />
      </div>
      <div className="w-full bg-black">
        <Contact />
      </div>
      <GoToTopButton />
    </div>
  );
}

export default App;
