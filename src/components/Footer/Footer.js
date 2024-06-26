import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <div className="foot">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mide358"
          className="github foot"
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/iyimide-adegunloye/"
          className="linkedin foot"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:iyimide.adegunloye@gmail.com"
          className="email foot"
        >
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/cuteiyimi"
          className="twitter foot"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
      </div>

      <div className="foot copyright">
        <p>
          Iyimide Adegunloye <FontAwesomeIcon icon={faCopyright} size="1x" />
          {date.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
