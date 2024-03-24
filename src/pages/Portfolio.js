import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import weather from '../assets/images/weather.png';
import chaoss from '../assets/images/chaoss.png';
import movie from '../assets/images/movie.png';
import dei from '../assets/images/dei.png';
import hv from '../assets/images/hv.png';
import recipe from '../assets/images/recipe2.png';

const Portfolio = () => {
  return (
    <div className="container portfolio-container mx-auto">
      <p className="portfolio-title">
        {' '}
        A show case of a few projects built over the years. You can see more on
        <a target="_blank" rel="noreferrer" href="https://github.com/mide358">
          &nbsp;my Github Account&nbsp;
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </p>
      <hr className="hr-line" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4 portfolio">
        <div className="col card-col">
          <div className="card h-100">
            <img
              src={chaoss}
              className="card-img-top portfolio-img"
              alt="website snapshot"
            />
            <div className="card-body">
              <h5 className="card-title">Chaoss Slack Bot</h5>
              <p className="card-text">
                This is slack bot built with Bolt for JavaScript.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/chaoss/chaoss-slack-bot"
                className="portfolio-link"
              >
                Link to project <FontAwesomeIcon icon={faHandPointRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="col card-col">
          <div className="card h-100">
            <img
              src={weather}
              className="card-img-top portfolio-img"
              alt="weather app screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">A weather app built with react js</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://weatherappbymide.netlify.app/"
                className="portfolio-link"
              >
                Link to project <FontAwesomeIcon icon={faHandPointRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="col card-col">
          <div className="card h-100">
            <img
              src={movie}
              className="card-img-top portfolio-img"
              alt="movie app snapshot"
            />
            <div className="card-body">
              <h5 className="card-title">Movie Watchlist App</h5>
              <p className="card-text">
                This is a movie watchlist app that allows you search and save
                your watchlist
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/mide358/movie-watchlist"
                className="portfolio-link"
              >
                Link to project <FontAwesomeIcon icon={faHandPointRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="col card-col">
          <div className="card h-100">
            <img
              src={dei}
              className="card-img-top portfolio-img"
              alt="dei project badging screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">DEI Project Badging</h5>
              <p className="card-text">
                A CHAOSS open source project to award badges to open-source
                projects that demonstrate diversity and inclusion.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/badging/badging"
                className="portfolio-link"
              >
                Link to project <FontAwesomeIcon icon={faHandPointRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="col card-col">
          <div className="card h-100">
            <img
              src={hv}
              className="card-img-top portfolio-img"
              alt="healthcare website snapshot"
            />
            <div className="card-body">
              <h5 className="card-title">An healthcare website</h5>
              <p className="card-text">
                This website was built with wordpress.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://hvhealthcare.co.uk/"
                className="portfolio-link"
              >
                Link to project <FontAwesomeIcon icon={faHandPointRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="col card-col">
          <div className="card h-100">
            <img
              src={recipe}
              className="card-img-top portfolio-img"
              alt="recipe app snapshot"
            />
            <div className="card-body">
              <h5 className="card-title">A recipe app</h5>
              <p className="card-text">
                This recipe app was built with Javascript.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://hvhealthcare.co.uk/"
                className="portfolio-link"
              >
                Link to project <FontAwesomeIcon icon={faHandPointRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
