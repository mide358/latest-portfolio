import React from 'react';

import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';
import carousel4 from '../assets/images/carousel4.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide about-carousel "
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carousel2}
              className="d-block w-100 h-70"
              alt="colorful background"
            />
            <div className="caption-wrap">
              <div className="carousel-caption  d-block about-carousel">
                <h1>A little about me</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carousel3}
              className="d-block w-100 h-70"
              alt="art work"
            />
            <div className="carousel-caption  d-block about-carousel">
              <h1>A little about me</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carousel4}
              className="d-block w-100 "
              alt="sunset over water"
            />
            <div className="carousel-caption  d-block about-carousel">
              <h1>A little about me</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="section-two">
        <p>
          I am a passionate and dedicated Frontend Developer, with a focus on
          creating responsive and user-friendly applications. <br /> My journey
          in the tech world began a few years ago. Prior to this, I enjoyed a
          career in business administration, accounting and customer service.
          <br />
          However, my love for technology led me to transition into software
          development.
        </p>
        <p>
          I have had the privilege of building software applications for an open
          source organisation, some startups, and organisations. <br />
          <br />
          For some years, I have also constantly volunteered as a frontend
          development training facilitator.
          <br />
          <br /> Every experience has been different and I am enthralled at the
          endless possibilities of constant learning, development and passing
          knowledge.
          <br />
          <br />
          Asides creating beautiful user experiences, I enjoy cooking, solving
          puzzles, reading and seeing new places.
        </p>
      </div>
    </div>
  );
};

export default About;
