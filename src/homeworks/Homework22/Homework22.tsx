import Button from "components/Button";
import Input from "components/Input";
import { Homework22Wrapper, LoginCard, ParagraphStyles } from "./styles";
import { CSSProperties } from "react";


function Homework22() {
  return (
    <Homework22Wrapper>
      <LoginCard>
        <ParagraphStyles>Welcome Back</ParagraphStyles>
        <Input name="email" labelName="Email" placeholder="Enter Email" disabled={true}/>
        <Input name="password" labelName="Password" placeholder="Enter Password"/>
        <Button name="LogIn" onClick={() => console.log("Login Action")} />
      </LoginCard>
    </Homework22Wrapper>
  );
}

export default Homework22;
