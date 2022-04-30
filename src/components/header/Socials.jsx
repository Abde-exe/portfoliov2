import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
function Socials() {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com/in/abdessamad-bourhaleb" target="_blank">
        <SiLinkedin />
      </a>
      <a href="https://github.com/abde-exe" target="_blank">
        <SiGithub />
      </a>
    </div>
  );
}

export default Socials;
