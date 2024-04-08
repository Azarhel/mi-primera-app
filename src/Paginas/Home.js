import React from 'react';
import {  CarouselComponent } from '../components/CarouselComponent';
import Contact from '../components/Contact';
import PhotographerServices from '../components/PhotographerServices';
import About from './About';





const Home = () => {
  return (
    <div id='home' className='bg-black' >
        <br></br>
        <br></br>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">OS-CAR FOTOGRAFÍA</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600">Expande tu visión a través del mejor lente de fotos.</p>
        </div>


      {/* Otro contenido de la página de inicio */}
      <CarouselComponent />
      <PhotographerServices/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
