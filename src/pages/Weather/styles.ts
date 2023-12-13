import { styled } from "styled-components";
import { WeatherImg } from "assets";

export const WeatherWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background: url(${WeatherImg}) no-repeat center / cover;
`;

export const HeaderWeather = styled.header`
  display: flex;
  width: 100vw;
  height: 80px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-bottom: 1px solid #d2d2d2;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(8.899999618530273px);
`;

export const HeaderH1 = styled.h1`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Main = styled.main`
  display: flex;
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const SearchWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  width: 600px;
  align-items: flex-start;
  gap: 14px;
`;

export const LoadingContainer = styled.div`
display: flex;
text-align: center;
height: 30px;
`;


export const Loading = styled.div`
  color: #fff;
  font-size: 25px;
`;
