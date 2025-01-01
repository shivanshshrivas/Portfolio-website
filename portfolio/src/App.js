import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  const handleInView = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="app-container">
      <SectionWrapper
        id="hero"
        onEnter={() => handleInView("hero")}
        isActive={currentSection === "hero"}
      >
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper
        id="skills"
        onEnter={() => handleInView("skills")}
        isActive={currentSection === "skills"}
      >
        <Skills />
      </SectionWrapper>

      <SectionWrapper
        id="projects"
        onEnter={() => handleInView("projects")}
        isActive={currentSection === "projects"}
      >
        <Projects />
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        onEnter={() => handleInView("contact")}
        isActive={currentSection === "contact"}
      >
        <Contact />
      </SectionWrapper>
    </div>
  );
}

const SectionWrapper = ({ id, children, onEnter, isActive }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is in view
    triggerOnce: false,
  });

  if (inView && onEnter) {
    onEnter(id);
  }

  return (
    <div
      ref={ref}
      id={id}
      className={`section-wrapper ${isActive ? "active" : "inactive"}`}
    >
      {children}
    </div>
  );
};

export default App;
