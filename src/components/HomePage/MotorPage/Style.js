import styled from "styled-components";

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 230px;
    height: 40px;
    color: white;
    background: #006dab;
    border-radius: 10px;
    font-size: large;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
  }
  button:hover {
    background-color: #004167;
  }
`;
export const Container = styled.div`
  height: 100%;
  padding-top: 50px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;

  gap: 60px;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "a a a a";

  justify-content: space-evenly;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: grid;
    grid-template-areas: "a a";
  }
`;
export const Family = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
`;
export const Child = styled.div`
  overflow: hidden;
  height: 100%;
  box-shadow: 0 0 30px #fff;
`;
export const Img = styled.img``;
