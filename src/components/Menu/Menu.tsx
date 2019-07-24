import * as React from 'react';
import cx from 'classnames';

import './Menu.css';

export interface IProps {
  className?: string;
}

export default function Menu({ className }: IProps) {
  return (
    <nav className={cx('Menu', className)}>
      <ul className="links">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="generic.html">Generic</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
    </nav>
  );
}
