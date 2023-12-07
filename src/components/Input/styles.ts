import styled from "styled-components";

interface InputComponentProps {
  $error: string | undefined;
}


export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;
  /* border: 1px solid ${({ disabled }) => (disabled ? "#ccc" : "blue")}; */
  /* border: none; */
  border: ${({ $error }) => (!!$error ? "1px solid red" : "1px solid black")};  border-bottom: 3px solid gray;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  color: ${({ disabled }) => (disabled ? "#777" : "black")};
  background-color: ${({ disabled }) => (disabled ? "#eee" : "white")};
  cursor: ${({disabled}) => (disabled ? "not-allowed" : "default")};
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: fit-content;
  color: red;
`;

export const LabelComponent = styled.label`
  margin-left: 8px;
  font-size: 16px;
  font-family: "YourFontFamily", sans-serif;
  color: #555;
`;
