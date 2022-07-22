import React, { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
  Container,
  FormRadio,
  FormRadioLeft,
  FormRadioRight,
  FormOr,
  Socials,
  SocialsImg,
  FormButtonLower,
} from "./FormStyles";
// import { Container } from "../../globalStyle";
import validateForm from "./validateForm";
import naver from "../../src/components/assets/Form/Vector1.svg";
import google from "../../src/components/assets/Form/Vector-2.svg";
import kakao from "../../src/components/assets/Form/Vector-3.svg";
import { Link } from "react-router-dom";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, password, confirmPass });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError("incorrect, please try again!");
    // setSuccess("succeeded!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    // {
    //   label: "Name",
    //   value: name,
    //   onChange: (e) => setName(e.target.value),
    //   type: "text",
    // },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
    // {
    //   label: "Confirm Password",
    //   value: confirmPass,
    //   onChange: (e) => setConfirmPass(e.target.value),
    //   type: "password",
    // },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Sign in</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={` Your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
              <FormRadio>
                <FormRadioLeft>
                  <input type="checkbox" />
                  <p>keep me logged in</p>
                </FormRadioLeft>
                <FormRadioRight>
                  <p>Forget your password?</p>
                </FormRadioRight>
              </FormRadio>
              <FormButton type="submit"> SIGN IN</FormButton>
              <FormOr>
                <p>OR</p>
              </FormOr>
              <Socials>
                <div className="naver">
                  <SocialsImg src={naver} />
                </div>
                <div className="google">
                  <SocialsImg src={google} />
                </div>
                <div className="kakao">
                  <SocialsImg src={kakao} />
                </div>
              </Socials>

              <Link to="/register">
                <FormButtonLower type="submit"> CREATE ACCOUNT</FormButtonLower>
              </Link>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {/* {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )} */}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default FormPage;
