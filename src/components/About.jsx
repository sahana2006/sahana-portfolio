import { motion } from "framer-motion";
import { focusAreas, personalInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="My Profile"
          description="B.Tech CSE student focused on full-stack development and applied AI."
        />

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <motion.div
              className="glass-panel about-panel h-100"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                I&apos;m {personalInfo.name}, a B.Tech CSE student at IIIT Sri City (CGPA {personalInfo.cgpa})
                specializing in full-stack development and applied machine learning.
              </p>
              <p>
                My work spans React frontends, Django REST backends, and AI features such as classification
                models, automated evaluation pipelines, and RAG-based assistants.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-5">
            <motion.div
              className="glass-panel about-panel h-100"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>Focus Areas</h3>
              <div className="interest-tags">
                {focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
