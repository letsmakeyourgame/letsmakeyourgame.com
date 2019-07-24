import * as React from 'react';
import cx from 'classnames';

import './Header.css';

export interface IProps {
  className?: string;
}

export default function Header({ className }: IProps) {
  return (
    <header className={cx('Header', className)}>
      <div className="logo">
        <a href="#top">
          <span>Lets</span>MakeYourGame<span>.com</span>
        </a>
      </div>
      <a href="#about">About</a>
      <a href="#info">Info</a>
      <a href="#faq">F.A.Q.</a>
      <a href="#contact">Contact</a>
    </header>
  );
}
