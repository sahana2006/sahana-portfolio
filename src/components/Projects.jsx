import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

function Projects({ categories, filteredProjects, selectedCategory, onSelectCategory }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Full-stack and AI projects from coursework and personal builds."
        />

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? "active" : ""}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div className="col-md-6 col-xl-4" key={project.title}>
              <motion.article
                className="project-card glass-panel h-100"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.01 }}
              >
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links" aria-label={`${project.title} links`}>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  ) : null}
                </div>
                <button
                  type="button"
                  className="btn btn-outline-brand mt-3"
                  onClick={() => setActiveProject(project)}
                >
                  View Details
                </button>
              </motion.article>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

export default Projects;
