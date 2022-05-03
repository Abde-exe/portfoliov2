import React from 'react';
import './header.css';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className="container header_container" data-aos="fade-down">
        <h3>Bonjour, je suis</h3>
        <div data-aos="fade-right">
          <h1>Abdessamad Bourhaleb</h1>
        </div>
        <h2 className="text-light" data-aos="fade-left">
          Développeur Web <span>+</span> Mobile
        </h2>
        <p></p>
        <a href="#about" className="scroll_down">
          Découvrir
        </a>
        <Socials />
        {/* <div className="me">
          <img src={ME} alt="" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
