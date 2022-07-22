import React from "react";
import {
  Contact,
  Container,
  Icons,
  IconWrapper,
  Logo,
  LogoImg,
  Menu,
  Service,
} from "./Style";
import logo from "../../assets/HomePageImg/NavbarImg/Img/LogoFooter.png";
import youtube from "../../assets/Footer/Youtube.png";
import instagram from "../../assets/Footer/Insta.png";
import naver from "../../assets/Footer/Naver.png";

const Footer = () => {
  return (
    <Container>
      <Logo className="logo">
        <LogoImg src={logo} />
      </Logo>
      <Service className="service">
        <h3>Services</h3>
        <p>Camping</p>
        <p>Lodging</p>
        <p>Harbor</p>
        <p>Day Use</p>
      </Service>
      <Menu className="menu">
        <h3>Menu</h3>
        <p>About</p>
        <p>Services</p>
        <p>Booking</p>
        <p>Blog</p>
      </Menu>
      <Contact className="contact">
        <h3>Contact</h3>
        <IconWrapper>
          <Icons src={youtube} />
          <Icons src={instagram} />
          <Icons src={naver} />
        </IconWrapper>
        <p>021 Korea Seul, LA</p>
        <p>camper@example.com</p>
        <p>(021) 345-6789-99</p>
      </Contact>
      <IconWrapper className="icon">
        <Icons src={youtube} />
        <Icons src={instagram} />
        <Icons src={naver} />
      </IconWrapper>
    </Container>
  );
};

export default Footer;
