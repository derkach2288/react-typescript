import { useState, ChangeEvent } from "react";

import Button from "components/Button";
import Input from "components/Input";
import { Homework22Wrapper, LoginCard, ParagraphStyles } from "./styles";
import { CSSProperties } from "react";

function Homework22() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const onChangeEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmailValue(event.target.value);
  };

  const onChangePasswordValue = (event: any) => {
    setPasswordValue(event.target.value);
  };

  return (
    <Homework22Wrapper>
      <LoginCard>
        <ParagraphStyles>Welcome Back</ParagraphStyles>
        <Input
          value={emailValue}
          onChange={onChangeEmailInput}
          name="email"
          labelName="Email"
          placeholder="Enter Email"
        />
        {emailValue}
        <Input
          type="password"
          value={passwordValue}
          onChange={onChangePasswordValue}
          name="password"
          labelName="Password"
          placeholder="Enter Password"
        />
        {passwordValue}
        <Button name="LogIn" onClick={() => {
          console.log("Login Action")
          console.log(`Post data`, {email: emailValue, password: passwordValue})

        }} />
      </LoginCard>
    </Homework22Wrapper>
  );
}

export default Homework22;
