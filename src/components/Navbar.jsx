import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ sections, activeSection, name, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`portfolio-navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="nav-content">
          <a
            className={`brand-mark ${activeSection === "home" ? "active" : ""}`}
            href="#home"
            onClick={() => onNavigate("home")}
          >
            {name}.dev
          </a>

          <button
            type="button"
            className="menu-toggle d-lg-none"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            {sections.map((section) => (
              <a
                key={section.id}
                className={activeSection === section.id ? "active" : ""}
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? "page" : undefined}
                onClick={() => {
                  onNavigate(section.id);
                  handleNavClick();
                }}
              >
                <span className="nav-link-dot" />
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
