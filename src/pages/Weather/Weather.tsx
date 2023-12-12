import { WeatherWrapper, HeaderWeather, HeaderH1, Main, SearchWrapper } from "./styles";

import InputWeather from "components/InputWeather";
import ButtonWeather from "components/ButtonWeather";
import WeatherInfo from "./components/WeatherInfo";

import {useState} from "react"

function Weather() {
  // const [weatherState, setWeatherState] = useState<объект | undefined>(undefined)
  return (
    <WeatherWrapper>
      <HeaderWeather>
        <HeaderH1>Weather app</HeaderH1>
      </HeaderWeather>
      <Main id="main">
        <SearchWrapper>
          <InputWeather placeholder="Enter city name"/>
          <ButtonWeather onClick={() => {}}/>
        </SearchWrapper>
        <WeatherInfo />
        <div id="error-container">
          <p id="error-cod">ERROR</p>
          <p id="error-city">Error city</p>
        </div>
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
