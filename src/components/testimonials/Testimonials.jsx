import React from 'react';
import './testimonials.css';
import Abel from '../../assets/Abel.jpeg';
import Obinna from '../../assets/Obinna.jpeg';
import Osinachi from '../../assets/Osinachi.jpeg';
import Victor from '../../assets/Victor.jpeg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: Abel,
    name: 'Abel Morara',
    review:
      "I had the privilege of working closely with Anthony during our time together in a software development program, and I must say that he is an exceptional software engineer. Anthony's meticulous attention to detail and thorough approach to his work made collaborating with him an absolute delight.",
  },
  {
    image: Obinna,
    name: 'Obinna Anorue',
    review:
      "I had the pleasure of collaborating with Anthony on the development of a two-player platformer, and I must say that he is truly one of the most talented software developers I've ever had the opportunity to work with. Anthony's level of commitment and determination throughout the project was nothing short of exceptional.",
  },
  {
    image: Osinachi,
    name: 'Osinachi .J. Nwannah',
    review:
      'Anthony Tom is an outstanding software engineer whose meticulous approach adds a delightful touch to our business.He developed our e-commerce website and we are very pleased with the results. We highly recommend him to anyone looking for a professional software engineer.',
  },
  {
    image: Victor,
    name: 'Victor Umunnakwe',
    review:
      'Anthony has an impressive proficiency in utilizing modern technologies and frameworks, especially React and Redux. Throughout our projects, He consistently demonstrated his ability to create web applications that are not just robust in their functionality but also focus heavily on user experience and aesthetic appeal. His mastery of HTML and CSS allowed him to create immersive and dynamic user interfaces, further elevating our final products.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
