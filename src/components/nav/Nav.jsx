import React from 'react';
import { FaHome } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { FaMessage } from 'react-icons/fa6';

import './nav.css';

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <FaHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <FaMessage />
      </a>
    </nav>
  );
};

export default Nav;
