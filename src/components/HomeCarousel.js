
import React from 'react';

import Carousel from "react-bootstrap/Carousel";
import image1 from '../images/1.jpg'
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import {  } from "react-bootstrap";


const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            height="650"
          />
          <Carousel.Caption>
            <h3>We Care about your fitness...</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            height="650"
          />

          <Carousel.Caption>
            <h3>Eat healty food...</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            height="650"
          />

          <Carousel.Caption>
            <h3>Track your calories</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;