import Button from "components/Button";
import Input from "components/Input";
import { Homework22Wrapper, LoginCard, ParagraphStyles } from "./styles";
import { CSSProperties } from "react";


function Homework22() {
  return (
    <Homework22Wrapper>
      <LoginCard>
        <ParagraphStyles>Welcome Back</ParagraphStyles>
        <Input placeholder="Email" disabled={true}/>
        <Input placeholder="Password"/>
        <Button name="LogIn" onClick={() => console.log("Login Action")} />
      </LoginCard>
    </Homework22Wrapper>
  );
}

export default Homework22;
