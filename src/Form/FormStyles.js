import styled from "styled-components";
import { motion } from "framer-motion";

export const FormSection = styled.div`
  /* color: #fff; */
  padding: 160px 0;
  /* background: ${({ inverse }) => (inverse ? "#101522" : "#fff")}; */
  background: #101522;
`;

export const FormTitle = styled.h1`
  margin-bottom: 24px;
  /* font-size: 48px; */
  /* line-height: 1.1; */
  /* font-weight: 600; */
  /* margin-right: 470px; */
  width: 90px;

  height: 37px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 37px;
  /* identical to box height */

  /* text */
  color: #373737;
`;

export const FormContainer = styled.div`
  display: flex;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const FormColumn = styled.div`
  /* margin-bottom: 15px; */
  padding: 50px;
  background: white;
  border: 20px;
  /* padding: ${({ small }) => (small ? "0 50px" : "0 15px")}; */
  flex: 1;
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
  }

  img {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormWrapper = styled.form`
  /* max-width: 540px; */
  padding-top: 0;
  width: 100%;
`;

export const FormMessage = styled(motion.div)`
  color: ${({ error }) => (error ? "red" : "green")};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;

  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;
export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  /* border-bottom: 1px solid #cfcfcf; */
  font-size: 1rem;
  color: rgba(55, 55, 55, 0.8);

  background: rgba(55, 55, 55, 0.1);
  border-radius: 10px;
`;

export const FormRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(55, 55, 55, 0.8);
`;
export const FormRadioLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 23px;
    height: 22px;
    background: rgba(55, 55, 55, 0.15);
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const FormRadioRight = styled.div`
  p {
    cursor: pointer;
  }
  p:hover {
    color: #006dab;
    /* transform: scale(1.1); */
    transition: all 200ms ease;
  }
`;
export const FormOr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    position: relative;
    margin: 20px auto;
    text-align: center;
    width: 20px;
    height: 19px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #6d6d6d;
  }
  p:before {
    content: "";
    display: block;
    width: 120px;
    height: 2px;
    background-color: rgba(55, 55, 55, 0.15);
    position: absolute;
    left: 30px;

    top: 50%;
  }
  p:after {
    content: "";
    display: block;
    width: 120px;
    height: 2px;
    background-color: rgba(55, 55, 55, 0.15);
    position: absolute;
    right: 30px;
    top: 50%;
  }
`;
export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  .naver {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    /* box-shadow: 0 0 5px #000; */

    background: #039600;
  }
  .naver:hover {
    transition: all 200ms ease;
    /* background-color: #004167; */
    transform: scale(1.1);
  }
  .google {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    /* box-shadow: 0 0 5px #000; */
    background: #bc0000;
  }
  .google:hover {
    transition: all 200ms ease;
    /* background-color: #004167; */
    transform: scale(1.1);
  }
  .kakao {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    /* box-shadow: 0 0 5px #000; */
    background: #ffc700;
  }
  .kakao:hover {
    transition: all 200ms ease;
    /* background-color: #004167; */
    transform: scale(1.1);
  }
`;
export const SocialsImg = styled.img``;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: black;
  color: rgba(55, 55, 55, 0.8);
`;
export const FormImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const FormImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const FormButton = styled.button`
  border-radius: 10px;
  background: #006dab;
  margin-top: 1.5rem;
  white-space: nowrap;
  /* color: #fff; */
  outline: none;
  width: 100%;
  color: white;
  font-size: large;
  height: 50px;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: #004167;
  }
`;
export const FormButtonLower = styled.button`
  margin-top: 1.5rem;
  white-space: nowrap;
  /* color: #fff; */
  outline: none;
  width: 100%;
  color: #006dab;
  font-size: large;
  height: 50px;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 1 0px;
  border: 2px solid #006dab;

  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: #004167;
  }
`;
