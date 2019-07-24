import * as React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSlash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

export interface IProps {
  className?: string;
}

export default function Footer({ className }: IProps) {
  return (
    <footer className={cx('Footer', className)}>
      <div className="copyright">
        <ul className="icons">
          <li>
            <a href="https://twitter.com/IMakeYourGame">
              <Icon icon={faTwitter} />
              <span className="label">@IMakeYourGame</span>
            </a>
          </li>
          <li>
            <a href="mailto:info@letsmakeyourgame.com">
              <Icon icon={faEnvelope} />
              <span className="label">info@LetsMakeYourGame.com</span>
            </a>
          </li>
        </ul>
        <p>
          <span className="copy">&nbsp;\</span>
          <span className="copy">&copy;</span>
          <span>&nbsp;&nbsp;Uncopyrighted. No rights reserved.</span>
        </p>
        <p>
          <span>
            {' '}
            Page styling based on{' '}
            <a
              href="https://templated.co/urban"
              target="_blank"
              rel="noopener noreferrer"
            >
              Urban by TEMPLATED
            </a>
            .
          </span>
        </p>
      </div>
    </footer>
  );
}
