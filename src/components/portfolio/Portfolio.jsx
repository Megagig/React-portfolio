import React from 'react';
import './portfolio.css';
import Jefclarem from '../../assets/jefclarem.png';
import CalorieTracker from '../../assets/Calorie-tracker.png';
import CinemaApp from '../../assets/Cinema.png';
import RemoteJob from '../../assets/RemoteJob.png';
import SpaceTravellers from '../../assets/SpaceTravellers.png';
import MathMagician from '../../assets/Math-Magicians.png';

const data = [
  {
    id: 1,
    image: Jefclarem,
    title: 'Company website for Jefclarem Integrated Logistics LTD.',
    Github: 'https://github.com/Megagig/Jefclarem_logistics',
    demo: 'http://jefclarem-logistics.vercel.app/',
  },
  {
    id: 2,
    image: CalorieTracker,
    title: 'All-in-one food tracker and health app ',
    Github: 'https://github.com/Megagig/Calorie-Tracker',
    demo: 'https://megagig-calorietracker.netlify.app/',
  },
  {
    id: 3,
    image: CinemaApp,
    title: 'A Movie and Tv Web Application',
    Github: 'https://github.com/Megagig/Cinema-Cafe-App',
    demo: 'https://cinema-cafe-app.vercel.app/',
  },
  {
    id: 4,
    image: RemoteJob,
    title: 'Remote Job App',
    Github: 'https://github.com/Megagig/Remote-Job-App',
    demo: 'https://remote-job-app.onrender.com/',
  },
  {
    id: 5,
    image: SpaceTravellers,
    title: 'Space Travellers Hub',
    Github: 'https://github.com/Megagig/space-travellers',
    demo: 'https://space-travellers-1pm9.onrender.com/',
  },
  {
    id: 6,
    image: MathMagician,
    title: 'The Math Magicians App',
    Github: 'https://github.com/Megagig/math-magicians',
    demo: 'https://math-magicians-8cw7.onrender.com/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container"></div>
    </section>
  );
};

export default Portfolio;
