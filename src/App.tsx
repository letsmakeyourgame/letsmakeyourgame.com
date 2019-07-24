import * as React from 'react';
import cx from 'classnames';
import { Banner, Footer, Header } from './components';
import { Main } from './routes';

const SCROLL_TOP_THRESHOLD = 25;

export default function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const onScroll = (scrolled: boolean) =>
    scrolled
      ? () => {
          const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop || 0;

          if (scrollTop < SCROLL_TOP_THRESHOLD) {
            setIsScrolled(false);
          }
        }
      : () => {
          const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop || 0;

          if (scrollTop > SCROLL_TOP_THRESHOLD) {
            setIsScrolled(true);
          }
        };

  React.useEffect(() => {
    const handler = onScroll(isScrolled);

    document.body.addEventListener('touchmove', handler);
    document.addEventListener('scroll', handler);
    return () => {
      document.removeEventListener('scroll', handler);
      document.body.removeEventListener('touchmove', handler);
    };
  }, [isScrolled]);

  return (
    <div className={cx('App', isScrolled && 'scrolled')}>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}
