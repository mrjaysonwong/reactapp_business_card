import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const twitter = 'https://twitter.com/thestaxdev_jw';
const facebook = 'https://www.facebook.com/thestaxdev/';
const instagram = 'https://www.instagram.com/thestaxdev/';
const github = 'https://github.com/thestaxdev';

export default function Footer() {
  return (
    <div className="footer">
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
      </a>
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
      </a>
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={faGithubSquare} />
      </a>
    </div>
  );
}
