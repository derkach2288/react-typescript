import styled from "styled-components";

interface ButtonComponentProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 10px;
  outline: none;
  cursor: pointer;
  /* background-color: ${(props) => props.disabled ? 'grey' : 'blue'}; */
  background-color: ${({disabled}) => disabled ? 'grey' : 'rgb(24, 203, 132)'};
  color: ${({$isRedFont}) => $isRedFont ? "red" : "white"};
  font-size: 16px;
  border-radius: 5px;
`;
