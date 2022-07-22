import React, { useState, useReducer } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Container,
  DropdownCar,
  DropdownCaravan,
  DropdownTuning,
  DropdownWrapper,
  Icon,
  LoginWrapper,
  Logo,
  LogoWrapper,
  MenuWrapper,
  // NavBars,
  NavLink,
} from "./Styled";
import logo from "../../assets/HomePageImg/NavbarImg/Img/Logo.png";
import basket from "../../assets/HomePageImg/NavbarImg/Basket.png";
import profil from "../../assets/HomePageImg/NavbarImg/Profil.png";
import Dropdown from "../../Dropdown/NavbarDropdown/Dropdown";

const reducer = (state, action) => {
  switch (action.type) {
    case "motor":
      return {
        showMotor: !state.showMotor,
        showTable: false,
      };
    case "caravan":
      // if (state.count === 0) return state;
      return {
        showCaravan: !state.showCaravan,
        showTable: false,
      };
    case "tuning":
      return {
        showTuning: !state.showTuning,
        showTable: false,
      };
    case "car":
      return {
        showCar: !state.showCar,
        showTable: false,
      };
    default:
      return state;
  }
};
const NavbarPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [state, ditpatch] = useReducer(reducer, {
    showMotor: false,
    showCaravan: false,
    showTuning: false,
    showCar: false,
  });
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Container state={isNavOpen ? 1 : 0}>
      {/* <NavBars> */}
      {/* left  */}
      <LogoWrapper className="brand">
        <NavLink to="/">
          <Logo src={logo} alt="" />
        </NavLink>
      </LogoWrapper>
      {/* center */}
      <MenuWrapper className="account-info">
        <button
          id="motor"
          onClick={() => {
            ditpatch({ type: "motor" });
          }}
        >
          <span>Motor</span>
          <RiArrowDropDownLine />
        </button>

        <button
          onClick={() => {
            ditpatch({ type: "caravan" });
          }}
        >
          <span>Caravan</span>
          <RiArrowDropDownLine />
        </button>
        <button
          onClick={() => {
            ditpatch({ type: "tuning" });
          }}
        >
          <span>Tuning</span>
          <RiArrowDropDownLine />
        </button>
        <button
          onClick={() => {
            ditpatch({ type: "car" });
          }}
        >
          <span>Used Car</span>
          <RiArrowDropDownLine />
        </button>

        <NavLink to="/Pricing">
          <button>Camping Place</button>
        </NavLink>
      </MenuWrapper>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#motor">Motor</a>
          </li>
          <li>
            <a href="#caravan"> Caravan</a>
          </li>
          <li>
            <a href="#tuning">Tuning</a>
          </li>
          <li>
            <a href="#used car">Used Car</a>
          </li>
          <li>
            <a href="#camping car">Camping Pace</a>
          </li>
        </ul>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      {/* right */}
      <LoginWrapper className="account-info">
        {/* <IconWrapper> */}
        <NavLink to="/Basket">
          <Icon src={basket} alt="" />
        </NavLink>
        <NavLink to="/Login">
          <Icon src={profil} alt="" />
        </NavLink>
        {/* </IconWrapper> */}
        {/* <Language> */}
        <button id="motor">
          <span>Eng</span>
          <RiArrowDropDownLine />
        </button>
        {/* </Language> */}
      </LoginWrapper>
      {/* </NavBars> */}
      <DropdownWrapper>{state.showMotor && <Dropdown />}</DropdownWrapper>

      <DropdownCaravan>{state.showCaravan && <Dropdown />}</DropdownCaravan>
      <DropdownTuning>{state.showTuning && <Dropdown />}</DropdownTuning>
      <DropdownCar>{state.showCar && <Dropdown />}</DropdownCar>
    </Container>
  );
};

export default NavbarPage;
