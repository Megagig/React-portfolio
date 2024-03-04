import React from 'react';
import CTA from './CTA.jsx';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials.jsx';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Anthony Obi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="profile" />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
