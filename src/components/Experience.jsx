import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function Experience({ items }) {
  return (
    <section id="experience" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title="Highlights"
          description="Academic milestones and problem-solving progress."
        />

        <div className="timeline">
          {items.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              className="timeline-item glass-panel"
              initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
