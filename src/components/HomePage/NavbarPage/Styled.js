import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  position: sticky;
`;
export const NavBars = styled.div`
  position: sticky;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
export const Logo = styled.img`
  width: 80px;
  height: 20px;
  cursor: pointer;
`;
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  div {
    cursor: pointer;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  div:hover {
    color: grey;
    transform: scale(1.1);
    transition: all 200ms ease;
  }
`;
export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  #login {
    box-sizing: border-box;
    width: 91px;
    height: 44px;
    height: 44px;
    border: 2px solid #162e3c;
    border-radius: 64px;
    background-color: white;
    cursor: pointer;
  }
  #login:hover {
    background-color: grey;
    transition: all 200ms ease;
  }
  #try {
    box-sizing: border-box;
    background: #162e3c;
    border: 2px solid #162e3c;
    border-radius: 64px;
    width: 130px;
    height: 44px;
    color: white;
    cursor: pointer;
  }
  #try:hover {
    background-color: grey;
    transition: all 200ms ease;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  color: black;
`;
