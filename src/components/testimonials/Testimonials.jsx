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
            <img src={Abel} alt="Abel Morara" />
            <h5 className="client__name">Abel Morara</h5>
            <small className="client__review">
              I had the privilege of working closely with Anthony during our
              time together in a software development program, and I must say
              that he is an exceptional software engineer. Anthony's meticulous
              attention to detail and thorough approach to his work made
              collaborating with him an absolute delight.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Abel} alt="Abel Morara" />
            <h5 className="client__name">Abel Morara</h5>
            <small className="client__review">
              I had the privilege of working closely with Anthony during our
              time together in a software development program, and I must say
              that he is an exceptional software engineer. Anthony's meticulous
              attention to detail and thorough approach to his work made
              collaborating with him an absolute delight.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Abel} alt="Abel Morara" />
            <h5 className="client__name">Abel Morara</h5>
            <small className="client__review">
              I had the privilege of working closely with Anthony during our
              time together in a software development program, and I must say
              that he is an exceptional software engineer. Anthony's meticulous
              attention to detail and thorough approach to his work made
              collaborating with him an absolute delight.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={Abel} alt="Abel Morara" />
            <h5 className="client__name">Abel Morara</h5>
            <small className="client__review">
              I had the privilege of working closely with Anthony during our
              time together in a software development program, and I must say
              that he is an exceptional software engineer. Anthony's meticulous
              attention to detail and thorough approach to his work made
              collaborating with him an absolute delight.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
