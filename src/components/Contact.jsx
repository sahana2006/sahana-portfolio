import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Open to internships, collaborations, and project discussions."
        />

        <motion.div
          className="glass-panel contact-panel contact-panel-centered mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <h3>Reach Out</h3>
          <p>
            Open to internships, collaborations, and opportunities across full-stack development,
            applied AI, and impactful product engineering.
          </p>
          <div className="contact-links contact-links-centered">
            <a href={`mailto:${personalInfo.email}`}>
              <FaEnvelope />
              {personalInfo.email}
            </a>
            <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub />
              {personalInfo.githubUsername}
            </a>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer">
              <FaLinkedin />
              {personalInfo.linkedinUsername}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
