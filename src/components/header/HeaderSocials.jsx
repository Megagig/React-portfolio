import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/obi-anthony" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/megagig" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/megagigsolution" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
