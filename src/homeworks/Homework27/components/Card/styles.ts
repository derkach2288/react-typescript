import { styled } from "styled-components";
import { colors } from "styles/colors";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  margin: 20px;
  height: fit-content;
  min-height: 150px;
  width: 600px;
  background-color: white;
  border-radius: 8px;
  gap: 20px;
`;

export const ParagraphStylesTitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: #555;
  padding-bottom: 5px;
  width: 100%;
  font-weight: bold;
  font-family: "YourFontFamily", sans-serif;
`;
