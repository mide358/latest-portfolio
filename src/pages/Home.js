import React from 'react';
import { useState, useEffect } from 'react';
import image1 from '../assets/images/image1.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* <h1>hello there</h1> */}
      {/* <div className="box"></div> */}
      <div className="border-wrap">
        <div className="home-wrap">
          <div className="home-left">
            <p id="first-text">Hi, my name is</p>
            <h1 className="home-title">
              <span>Iyimide Adegunloye</span>
            </h1>{' '}
            <p id="welcome"> Welcome to my website</p>
            <p id="second-text">
              I am a frontend developer who creates beautiful and exceptional
              applications!
              {/* I am a Front-End developer who specializes in creating exceptional
            and dynamic user experiences, responsive web pages and web
            applications. I work with JavaScript and React JS, Bootstrap, HTML
            and CSS. */}
            </p>
          </div>
          <div className="home-right">
            <img src={image1} alt="tech img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
