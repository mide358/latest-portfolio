import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container mx-auto">
      <div className="row row-cols-1  row-cols-md-2">
        <div className="col">
          <div className="contact-title">
            <h2>
              Get in <span>Touch</span>
            </h2>
          </div>
        </div>

        <div className="col" id="card-circle">
          <div className="card-body contact-card-body card-circle">
            <h4 className="card-title">Email:</h4>
            <p className="">
              iyimide.adegunloye@gmail.com / geekymide@gmail.com
            </p>
            <h4 className="card-title">Phone:</h4>
            <p className="card-text">+447377201986</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mide358"
            >
              <FontAwesomeIcon icon={faGithub} /> &nbsp; My Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
