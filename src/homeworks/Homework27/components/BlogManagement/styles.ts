import { styled } from "styled-components";
import { colors } from "styles/colors";


export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
`;

export const TextAreaForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  margin-top: 20px;
  width: fit-content;
  height: fit-content;
  min-height: 150px;
  min-width: 600px;
  background-color: white;
  border-radius: 8px;
  gap: 20px;
`;
