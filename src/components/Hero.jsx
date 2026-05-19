import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import useTypingEffect from "../hooks/useTypingEffect";

const roles = [
  "I build AI-powered applications",
  "I design full-stack systems",
  "I love solving real-world problems",
];

function Hero() {
  const typedRole = useTypingEffect(roles);

  return (
    <section id="home" className="hero-section section-spacing">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-badge">
                {personalInfo.location} | {personalInfo.education}
              </span>
              <h1 className="hero-title">
                Hi, I&apos;m {personalInfo.name}
                <span className="hero-gradient"> building intelligent products with code.</span>
              </h1>
              <p className="hero-subtitle">
                <span className="hero-static-role">{personalInfo.heroSubtitle}</span>
              </p>
              <p className="hero-subtitle hero-typing-line">
                <span className="typed-role">{typedRole}</span>
                <span className="typing-caret">|</span>
              </p>
              <p className="hero-description">
                Full Stack Developer and AI/ML enthusiast focused on impactful applications,
                modern interfaces, and full-stack systems that bring real-world ideas to life.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-brand">
                  View Projects
                  <FaArrowRight />
                </a>
                {/* <a href={personalInfo.resumePath} download className="btn btn-outline-brand">
                  <FaDownload />
                  Download Resume
                </a> */}
              </div>

              <div className="hero-socials">
                <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5">
            <motion.div
              className="hero-card glass-panel"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="status-chip">
                <span className="status-dot" />
                {personalInfo.role}
              </div>
              <div className="hero-metric-grid">
                <div>
                  <strong>{personalInfo.cgpa}</strong>
                  <span>CGPA</span>
                </div>
                <div>
                  <strong>IIIT</strong>
                  <span>Sri City</span>
                </div>
                <div>
                  <strong>RAG</strong>
                  <span>System building</span>
                </div>
                <div>
                  <strong>DSA</strong>
                  <span>Strong foundation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
