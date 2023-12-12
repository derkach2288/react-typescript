import {
  WeatherInfoWrapper,
  TempContainer,
  WeatherTemp,
  WeatherCity,
  ImgContainer,
  Image,
} from "./styles";

function WeatherInfo() {
  return (
    <WeatherInfoWrapper>
      <TempContainer>
        <WeatherTemp>Temp</WeatherTemp>
        <WeatherCity>City Name</WeatherCity>
      </TempContainer>
      <ImgContainer>
        <Image id="weather-icon" src="" alt="weather-icon" />
      </ImgContainer>
    </WeatherInfoWrapper>
  );
}

export default WeatherInfo;
