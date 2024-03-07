import React from 'react';
import './about.css';
import ME from '../../assets/me.png';
import { FaAward } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Anthony" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>150+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
            Passionate pharmacist turned full-stack developer, proficient in
            JavaScript, React, Ruby, and Ruby on Rails. Specializing in Node.js,
            Express, and Next.js. I blend healthcare expertise with coding
            finesse to create seamless and innovative web solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
