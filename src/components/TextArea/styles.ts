import styled from "styled-components";

interface TextAreaComponentProps {
  $error: string | undefined;
}

export const TextAreaComponent = styled.textarea<TextAreaComponentProps>`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;
  border: ${({ $error }) => (!!$error ? "1px solid red" : "1px solid black")};
  border-bottom: 3px solid gray;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  color: ${({ disabled }) => (disabled ? "#777" : "black")};
  background-color: ${({ disabled }) => (disabled ? "#eee" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  resize: vertical; /* разрешаем вертикальное изменение размеров */
  min-height: 100px; /* минимальная высота */
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
