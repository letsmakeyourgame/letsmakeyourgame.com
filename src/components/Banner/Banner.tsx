import * as React from 'react';
import cx from 'classnames';

import './Banner.css';
import bannerImg from '../../assets/img/banner2.jpg';

export interface IProps {
  className?: string;
}

export default function Banner({ className }: IProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="top"
      className={cx('Banner', className)}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className={cx('inner', mounted && 'fadeIn')}>
        <header>
          <h1>Let's make your game... together.</h1>
          <p>I want to help you turn your game idea into reality.</p>
          <p>No cost. No commitment. No risk.</p>
        </header>
        <a href="#about" className="button big scrolly">
          Learn More
        </a>
      </div>
      <div className={cx('cover', mounted && 'fadeOut')} />
    </section>
  );
}
