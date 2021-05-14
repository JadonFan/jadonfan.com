import { useEffect, useState } from 'react';
import { ScrollIcon } from '../component/ScrollButton';

const ScrollButton = () => {
  const [scrollX, setScrollX] = useState(window.scrollX);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const onScroll = (e) => {
      setScrollX(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollX]);

  if (scrollX > 80) {
    return (
      <ScrollIcon
        name='arrow alternate circle up'
        size='huge'
        onClick={scrollToTop}
      />
    );
  } else {
    return <> </>;
  }
};

export default ScrollButton;
