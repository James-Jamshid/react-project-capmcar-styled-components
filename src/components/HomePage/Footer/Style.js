import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #006dab;
  height: 350px;
  color: white;
  .icon {
    display: none;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    .service {
      display: none;
    }
    .menu {
      display: none;
    }
    .contact {
      display: none;
    }
    .icon {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`;
export const Logo = styled.div`
  /* padding-bottom: 80px; */
  display: flex;
`;
export const Service = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    padding-bottom: 10%;
  }
`;
export const Menu = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  h3 {
    padding-bottom: 10%;
  }
`;
export const Contact = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  h3 {
    padding-bottom: 10%;
  }
`;
export const LogoImg = styled.img`
  height: 49px;
  width: 166px;
`;
export const Icons = styled.img`
  cursor: pointer;
  &:hover {
    transition: all 200ms ease;
    transform: scale(1.3);
    border-radius: 50%;
    box-shadow: 0 0 5px #000;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
