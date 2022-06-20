import React from "react";
import {
  Container,
  LoginWrapper,
  Logo,
  MenuWrapper,
  NavBars,
  NavLink,
} from "./Styled";
import logo from "../../assets/HomePageImg/NavbarImg/Img/Logo.png";

const NavbarPage = () => {
  return (
    <Container>
      <NavBars>
        <NavLink to="/">
          <Logo src={logo} alt="" />
        </NavLink>
        <MenuWrapper>
          <NavLink to="/OurStory">
            <div>Our Story</div>
          </NavLink>
          <NavLink to="/Blog">
            <div>Blog</div>
          </NavLink>
          <NavLink to="/Contact">
            <div>Contact</div>
          </NavLink>
          <NavLink to="/Pricing">
            <div>Pricing</div>
          </NavLink>
        </MenuWrapper>
        <LoginWrapper>
          <NavLink to="/Login">
            <button id="login">Log in</button>
          </NavLink>
          <NavLink to="/TryIt">
            <button id="try">Try for free</button>
          </NavLink>
        </LoginWrapper>
      </NavBars>
    </Container>
  );
};

export default NavbarPage;
