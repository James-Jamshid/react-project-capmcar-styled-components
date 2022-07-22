import React from "react";
import { Container, Img, Left, Right } from "./BlogsStyle";
import img1 from "../../assets/MotorImg/Blogs/img1.png";
import img2 from "../../assets/MotorImg/Blogs/img2.png";
import img3 from "../../assets/MotorImg/Blogs/img3.png";
import img4 from "../../assets/MotorImg/Blogs/img4.png";
import img5 from "../../assets/MotorImg/Blogs/img5.png";
import img6 from "../../assets/MotorImg/Blogs/img6.png";

const Blogs = () => {
  return (
    <Container>
      <Left>
        <h1>Camper</h1>
        <h3>@camper_1</h3>
        <p>
          Camping truly is for everyone, from your oldest <br /> family member
          to little campers just trekking <br /> out for the first time. Whether
          your plan is to <br /> relax, explore or reconnect, CAMPER <br />{" "}
          campgrounds are a great place to create <br /> memories with those you
          love.
        </p>
      </Left>
      <Right>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img3} />
        <Img src={img4} />
        <Img src={img5} />
        <Img src={img6} />
      </Right>
    </Container>
  );
};

export default Blogs;
