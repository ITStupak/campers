import { useState, useEffect } from 'react';
import { ArrowUpIcon } from 'lucide-react';
import css from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setIsVisible(true); // Показываем кнопку только если пользователь скроллит вниз
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${css.scroll_btn} ${isVisible ? css.visible : css.hidden}`}
    >
      <ArrowUpIcon size={26} />
    </button>
  );
};

export default ScrollToTop;
