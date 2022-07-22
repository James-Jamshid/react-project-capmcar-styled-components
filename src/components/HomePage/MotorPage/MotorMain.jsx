import React from "react";
import CarouselPage from "../CarouselPage/Carousel/Carousel";
import MultiCarouselPage from "../CarouselPage/MultiCarouselPage/MultiCarouselPage";
import Blogs from "./Blogs";
import { Title } from "./MotorMainStyle";
import Pagination from "./Pagination";
import VideoPage from "./VideoPage";

const MotorMain = () => {
  return (
    <div>
      <Pagination />
      <CarouselPage />
      <Title>
        <h1>Recommend</h1>
      </Title>
      <MultiCarouselPage />
      <Title>
        <h1>Videos</h1>
      </Title>
      <VideoPage />
      <Title>
        <h1>Blogs</h1>
      </Title>
      <Blogs />
    </div>
  );
};

export default MotorMain;
