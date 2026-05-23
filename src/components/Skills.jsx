import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMicrochip, FaServer, FaTools } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const iconMap = {
  code: FaCode,
  server: FaServer,
  cpu: FaMicrochip,
  tools: FaTools,
  terminal: FaLaptopCode,
};

function Skills({ skills }) {
  return (
    <section id="skills" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack"
          description="Frontend, backend, programming, and AI/ML tools I work with."
        />

        <div className="row g-4">
          {skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.icon];

            return (
              <div className="col-md-6 col-xl-4" key={skillGroup.title}>
                <motion.article
                  className="skill-card glass-panel h-100"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  <div className="skill-icon">
                    <Icon />
                  </div>
                  <h3>{skillGroup.title}</h3>
                  <div className="skill-tags">
                    {skillGroup.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
