import React from 'react';
import './header.css';
import './CTA.jsx';
import CTA from './CTA.jsx';
import ME from '../../assets/img/photo.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Bonjour je suis</h5>
        <h1>Abdessamad Bourhaleb</h1>
        <h5 className="text-light">Développeur Web et Mobile</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
