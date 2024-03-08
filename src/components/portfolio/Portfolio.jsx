import React from 'react';
import './portfolio.css';
import Jefclarem from '../../assets/jefclarem.png';
import CalorieTracker from '../../assets/Calorie-tracker.png';
import CinemaApp from '../../assets/Cinema.png';
import RemoteJob from '../../assets/RemoteJob.png';
import SpaceTravellers from '../../assets/SpaceTravellers.png';
import MathMagician from '../../assets/Math-Magicians.png';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Jefclarem} alt="Anthony" />
          </div>
          <h3>This is a portfolio item heading</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/YOUR PROJECT URL"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jefclarem-logistics.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CalorieTracker} alt="Anthony" />
          </div>
          <h3>This is a portfolio item heading</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/YOUR PROJECT URL"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jefclarem-logistics.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CinemaApp} alt="Anthony" />
          </div>
          <h3>This is a portfolio item heading</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/YOUR PROJECT URL"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jefclarem-logistics.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RemoteJob} alt="Anthony" />
          </div>
          <h3>This is a portfolio item heading</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/YOUR PROJECT URL"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jefclarem-logistics.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SpaceTravellers} alt="Anthony" />
          </div>
          <h3>This is a portfolio item heading</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/YOUR PROJECT URL"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jefclarem-logistics.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MathMagician} alt="Anthony" />
          </div>
          <h3>This is a portfolio item heading</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/YOUR PROJECT URL"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jefclarem-logistics.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
