import React from 'react';
import './footer.css';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="" id="footer">
      <a href="#" className="footer_logo">
        ABDEDEV
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#about">A propos</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com/in/abdessamad-bourhaleb">
          <SiLinkedin />
        </a>
        <a href="https://github.com/abde-exe">
          <SiGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; ABDEDEV 2022. </small>
      </div>
    </footer>
  );
};

export default Footer;
