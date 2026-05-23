import { useMemo, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
  experienceItems,
  personalInfo,
  projectCategories,
  projects,
  skills,
} from "./data/portfolioData";
import useActiveSection from "./hooks/useActiveSection";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const sectionIds = sections.map((section) => section.id);

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSection, navigateToSection] = useActiveSection(sectionIds);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="app-shell">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <div className="particle-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Navbar
        activeSection={activeSection}
        sections={sections}
        name={personalInfo.shortName}
        onNavigate={navigateToSection}
      />
      <main>
        <Hero />
        <About />
        <Skills skills={skills} />
        <Projects
          categories={projectCategories}
          filteredProjects={filteredProjects}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <Experience items={experienceItems} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
