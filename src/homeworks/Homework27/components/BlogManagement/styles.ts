import { styled } from "styled-components";
import { colors } from "styles/colors";


export const Homework27Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
`;

export const TestAreaForm = styled.form`
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
