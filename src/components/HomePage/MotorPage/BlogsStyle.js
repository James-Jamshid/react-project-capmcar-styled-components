import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "a a";
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
// export const LeftInner = styled.div``;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  gap: 10px;
  h3 {
    color: #ff7a00;
  }
`;
export const Right = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  gap: 10px;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: grid;
    grid-template-areas: "a a";
    justify-content: center;
  }

  /* flex: 1; */
`;
export const Img = styled.img`
  width: 258px;
  height: 258px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    transition: all 500ms ease;
    transform: scale(1.1);
  }
`;
