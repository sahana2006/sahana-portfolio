import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="Strong academics, applied AI curiosity, and a builder&apos;s full-stack mindset"
          description="I aim to build software that is useful, technically sharp, and polished enough to feel ready for real users."
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
                I&apos;m {personalInfo.name}, a B.Tech CSE student at IIIT Sri City with a CGPA of{" "}
                {personalInfo.cgpa}. I&apos;m deeply interested in full-stack development and AI/ML,
                and I enjoy building products that feel both intelligent and practical.
              </p>
              <p>
                I work across React, Django, machine learning pipelines, and RAG-based systems.
                What excites me most is creating impactful applications where clean frontend
                experiences meet solid backend design and meaningful AI capabilities.
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
                <span>React Development</span>
                <span>Django APIs</span>
                <span>Machine Learning</span>
                <span>RAG Systems</span>
                <span>Impactful Products</span>
                <span>Problem Solving</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
