import React from 'react';
import './testimonials.css';
import Abel from '../../assets/Abel.jpeg';
import Obinna from '../../assets/Obinna.jpeg';
import Osinachi from '../../assets/Osinachi.jpeg';
import Victor from '../../assets/Victor.jpeg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Abel} alt="Anthony" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
