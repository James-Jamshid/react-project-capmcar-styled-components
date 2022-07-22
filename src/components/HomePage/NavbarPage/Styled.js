import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  .toggle {
    display: none;
  }
  .links {
    ul {
      display: none;
      gap: 3rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: black;
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;
    .account-info {
      display: none;
    }
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .toggle {
      padding-right: 1rem;
      display: block;

      z-index: 1;
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: var(--primary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: white;
          }
        }
      }
    }
  }
`;
// export const NavBars = styled.div`
//   width: 100%;
//   height: 90px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 80px;
//   background: rgba(255, 255, 255, 0.92);
//   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
// `;
export const Logo = styled.img`
  width: 157px;
  height: 46px;
  cursor: pointer;
`;
export const LogoWrapper = styled.div`
  /* @media (min-width: 600px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: block;
  } */
`;
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  #motor {
    width: 113px;
    height: 40px;
    background: rgba(0, 109, 171, 0.05);
    border-radius: 10px;
  }
  button {
    border: none;
    background-color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: "Montserrat";
    font-style: normal;
    /* font-weight: 600; */
    /* line-height: 20px; */
  }
  button:hover {
    color: #006dab;
    /* transform: scale(1.1); */
    transition: all 200ms ease;
  }
`;
export const DropdownWrapper = styled.div`
  position: absolute;
  left: 310px;
  top: 80px;
`;
export const DropdownCaravan = styled.div`
  position: absolute;
  left: 430px;
  top: 80px;
`;
export const DropdownTuning = styled.div`
  position: absolute;
  left: 540px;
  top: 80px;
`;
export const DropdownCar = styled.div`
  position: absolute;
  left: 650px;
  top: 80px;
`;
export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15%;
  /* border: 1px solid black; */
  button {
    border: none;
    background-color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: "Montserrat";
    font-style: normal;
    /* font-weight: 600; */
    /* line-height: 20px; */
  }
  button:hover {
    color: grey;
    /* transform: scale(1.1); */
    transition: all 200ms ease;
  }
`;

export const Icon = styled.img``;

export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  color: black;
`;
