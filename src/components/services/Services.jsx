import React from 'react';
import './services.css';
import { FaCheck } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Responsive Web Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>HTML/CSS Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>JavaScript Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Progressive Web App (PWA) Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Frontend Testing</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>User Interface (UI) Development</p>
            </li>
          </ul>
        </article>
        {/* END OF  FRONTEND DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Responsive Web Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>HTML/CSS Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>JavaScript Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Progressive Web App (PWA) Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Frontend Testing</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>User Interface (UI) Development</p>
            </li>
          </ul>
        </article>
        {/* END OF  BACKEND DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Wordpress Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Responsive Web Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>HTML/CSS Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>JavaScript Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Progressive Web App (PWA) Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Frontend Testing</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>User Interface (UI) Development</p>
            </li>
          </ul>
        </article>
        {/* END OF WORDPRESS DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Hybrid/Cross Platform Apps</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Responsive Web Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>HTML/CSS Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>JavaScript Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Progressive Web App (PWA) Development</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Frontend Testing</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>User Interface (UI) Development</p>
            </li>
          </ul>
        </article>
        {/* END OF HYBRID DEVELOPMENT*/}
      </div>
    </section>
  );
};

export default Services;
