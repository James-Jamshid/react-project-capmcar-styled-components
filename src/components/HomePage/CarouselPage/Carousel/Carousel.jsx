import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from "../../../assets/HomePageImg/NavbarImg/CarouselImg/Carousel.png";
import carousel2 from "../../../assets/HomePageImg/NavbarImg/CarouselImg/Carousel1.jpg";
import carousel3 from "../../../assets/HomePageImg/NavbarImg/CarouselImg/Carousel2.png";

const CarouselPage = () => {
  return (
    <Carousel>
      <div>
        <img id="CarouselImg" src={carousel1} alt="" />
      </div>
      <div>
        <img id="CarouselImg" src={carousel2} alt="" />
      </div>
      <div>
        <img id="CarouselImg" src={carousel3} alt="" />
      </div>
    </Carousel>
  );
};

export default CarouselPage;
