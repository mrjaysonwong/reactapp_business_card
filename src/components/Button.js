import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const email = 'mailto:jaysonwongf@gmail.com';
const linkedin = 'https://www.linkedin.com/in/thestaxdev/';

export default function Button() {
  return (
    <div className="button">
      <a href={email} target="_blank" rel="noopener noreferrer">
        <button className="email">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          Email
        </button>
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <button className="linkedin">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
          LinkedIn
        </button>
      </a>
    </div>
  );
}
