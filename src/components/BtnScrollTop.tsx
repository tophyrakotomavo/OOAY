// components/ScrollToTopButton.tsx
import { useState, useEffect } from 'react';
import { ScrollAnimation } from './ScrollAnimation';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 1500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 750,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <ScrollAnimation/>
      <button className={`fixed bottom-4 right-4 bg-orange-700 btn-circle btn btn-xs sm:btn-sm md:btn-md lg:btn-lg 
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={scrollToTop}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
