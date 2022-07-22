import React from "react";
import VideoPlayer from "react-video-js-player";
import img1 from "../../assets/MotorImg/Img1.png";
import img2 from "../../assets/MotorImg/Img2.png";
import img3 from "../../assets/MotorImg/Img3.png";
import img4 from "../../assets/MotorImg/Img4.png";
import car from "../../assets/MotorImg/car.mp4";
import { Container } from "./VideoStyle";
// import data from "../../Data/DataMotorVideo";

const VideoPage = () => {
  const videoSrc = car;

  const poster = img1;
  const poster2 = img2;
  const poster3 = img3;
  const poster4 = img4;
  // "https://media.istockphoto.com/photos/camper-van-summer-trip-picture-id1023079358?k=20&m=1023079358&s=612x612&w=0&h=osq1jeZMvFbEqL3Zep2q_F5qxOausXQisYPve0ECL6M=";

  return (
    <Container>
      <VideoPlayer
        src={videoSrc}
        poster={poster}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc}
        poster={poster2}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc}
        poster={poster3}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc}
        poster={poster4}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
    </Container>
  );
};

export default VideoPage;
