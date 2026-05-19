import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container footer-content">
        <p>Copyright 2026 {personalInfo.name}.</p>
        <div className="footer-socials">
          <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
