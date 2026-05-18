import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal glass-panel"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" aria-label="Close modal" onClick={onClose}>
              <FaTimes />
            </button>
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <div className="project-tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-brand">
                <FaGithub />
                GitHub
              </a>
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-outline-brand">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ProjectModal;
