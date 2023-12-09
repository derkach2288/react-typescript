import { styled } from "styled-components";
import { colors } from "styles/colors";

export const KorneylukWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TexrContent = styled.p`
  display: flex;
  font-size: 20px;
`;

export const KorneylukImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100px;
`;
