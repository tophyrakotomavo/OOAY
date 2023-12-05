import { useState, useEffect } from 'react';

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
      <svg onClick={scrollToTop} className={`fixed bottom-4 right-4 btn-circle bg-[#271718] border-none btn  sm:btn-sm md:btn-md  shadow-2xl
      ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486 512.039">
          <path fill="white" d="M314.455 238.459l19.809 256.515c.722 9.348-7.689 17.065-17.062 17.065H168.798c-9.373 0-17.784-7.705-17.062-17.065l19.809-256.515h-.369l-100.967 35.32c-51.215 19.781-91.88-12.189-57.444-49.591L204.418 24.191c32.257-32.255 45.762-32.255 78.016 0l191.652 199.997c32.434 36.276-6.228 69.372-57.441 49.591l-100.969-35.32h-1.221z"/>
      </svg>
    </div>
  );
};

export default ScrollToTopButton;
