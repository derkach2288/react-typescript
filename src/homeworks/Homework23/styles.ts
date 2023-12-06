import styled from "styled-components";

import { colors } from "styles/colors";

export const Homework23Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  margin: 20px;
  width: fit-content;
  height: fit-content;
  min-height: 400px;
  min-width: 360px;
  background-color: white;
  border-radius: 8px;
  gap: 20px;
`;

export const EmployeeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px;
  width: fit-content;
  height: fit-content;
  min-height: 360px;
  min-width: 360px;
  background-color: white;
  border-radius: 8px;
  gap: 10px;
`;

export const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 5px;
  width: 100%;
  height: fit-content;
  gap: 5px;
`;


export const ParagraphStylesTitle = styled.p`
  display: flex;
  justify-content: start;
  font-size: 14px;
  color: #555;
  font-family: "YourFontFamily", sans-serif;
`;

export const ParagraphStylesBody = styled.p`
  display: flex;
  justify-content: start;
  font-size: 16px;
  color: #555;
  border-bottom: 3px solid gray;
  padding-bottom: 5px;
  width: 100%;
  font-weight: bold;
  font-family: "YourFontFamily", sans-serif;
`;

