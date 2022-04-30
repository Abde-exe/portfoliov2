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
        <h5>Bonjour, je suis</h5>
        <h1>Abdessamad Bourhaleb</h1>
        <h1 className="text-light">Développeur Web + Mobile</h1>
        <a href="#contact" className="btn btn-primary">
          Contactez-moi
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
