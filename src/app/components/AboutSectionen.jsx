import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Carousel from "./CarouselSlide";
import './AboutSection.css';

const AboutSectionen = () => {
  return (
    <section className="about-container">
      <h2 id="about" className="about-title">What is EJF?</h2>
      
      <div className="about-content">
        <div className="about-carousel">
          <Carousel />
        </div>

        <div className="about-text">
          <p>
          The Engineering Job Fair is an event that brings together ambitious young people and leading companies to build strong connections and explore new opportunities. We believe in the career potential of students and create a space where they can reach their full potential!

          </p>
          <p>
          For 17 years, the Engineering Job Fair has brought together thousands of students and dozens of companies to change the future together. So we invite you to become a part of the event and make history.

          </p>
          <p className="about-goal">
            <span className="goal-highlight">The goal </span> is to become a catalyst for the development of students and companies, to ensure the formation of a new generation of successful young people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionen;