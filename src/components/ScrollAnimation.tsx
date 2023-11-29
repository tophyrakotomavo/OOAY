import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css'

export const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
}
