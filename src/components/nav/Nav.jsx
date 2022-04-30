import React, { useState } from 'react';
import './nav.css';
import { FiHome } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiBook } from 'react-icons/fi';
import { FiTool } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

const Nav = () => {
  const [activeNav, setactiveNav] = useState('#');
  return (
    <nav>
      <a href="" className={activeNav === '#' ? 'active' : ''}>
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setactiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <FiBook />
      </a>
      <a
        href="#services"
        onClick={() => setactiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <FiTool />
      </a>
      <a
        href="#contact"
        onClick={() => setactiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <FiMail />
      </a>
    </nav>
  );
};

export default Nav;
