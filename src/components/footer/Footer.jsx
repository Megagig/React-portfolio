import React from 'react';
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MEGAGIG
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
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
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram">
          <FaInstagram />
        </a>
        <a href="https://twitter">
          <FaTwitter />
        </a>
        <a href="https://linkedin">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2024 MEGAGIG, All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
