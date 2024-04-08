import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../assets/images/banner1.jpeg'
import Banner2 from '../assets/images/banner2.jpeg'
import Banner3 from '../assets/images/banner3.jpeg'

const images = [Banner1, Banner2, Banner3];


export const CarouselComponent = () => {


  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <Carousel style={{ maxHeight:'50%' }}>
        {images.map((image, index) => (
          <Carousel.Item key={index} style={{ maxHeight:'50%' }}>
            <img
              className="d-block w-100 h-200"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ objectFit: 'contain', maxHeight:'950px'   }}
            />
          
          </Carousel.Item>
        ))}
      </Carousel>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};