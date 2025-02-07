import React from 'react';
import Carousel from './Carousel.jsx';
import SocialNav from './SocialNav.jsx'; // Importa el componente SocialNav.jsx';
import '../styles/global.css';

const Hero = () => {
  return (
    <section className="pt-4 relative w-full lg:h-[80vh] md:h-[40vh] h-[30vh] bg-black flex items-center justify-center ">
        
        {/* Componente de Slider */}
        <Carousel />
        <SocialNav />

    </section>
  );
};

export default Hero;