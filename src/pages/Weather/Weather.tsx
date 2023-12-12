import { useState, ChangeEvent, useEffect } from "react";

import {
  WeatherWrapper,
  HeaderWeather,
  HeaderH1,
  Main,
  SearchWrapper,
} from "./styles";

import InputWeather from "components/InputWeather";
import ButtonWeather from "components/ButtonWeather";
import WeatherInfo from "./components/WeatherInfo";
import ErrorInfo from "./components/ErrorInfo";

interface WeatherData {
  temp: string;
  city: string;
  weatherLogo?: string;
}

interface WeatherError {
  errorCod: string;
  message: string;
}

function Weather() {
  const [inputCity, setInputCity] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  // const [error, seetError] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );
  const [weatherError, setWeatherError] = useState<WeatherError | undefined>(
    undefined
  );

  const APP_ID: string = "3b16a96f6bb02d14c6afbe8fbbfafbcf";

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputCity(event.target.value);
  };

  const handlerButtonWeather = () => {
    if (inputCity.trim().length > 0) {
      setCityName(inputCity.trim());
    } else {
      return alert("Please enter a city name");
    }
  };

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`
      );
      console.log(response);

      if (response.ok) {
        // seetError(false);
        setWeatherError(undefined);
        const data = await response.json();
        console.log(data);
        setWeatherData({
          temp: `${Math.round(data.main.temp - 273.15)}°`,
          city: data.name,
          weatherLogo: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        })

      } else {
        // seetError(true);
        setWeatherData(undefined);
        // setWeatherError({
        //   errorCod: data.cod,
        //   message: data.message,
        // })
      }
    };
    if (cityName.length > 0) {
      getWeather();
    }
  }, [cityName]);

  return (
    <WeatherWrapper>
      <HeaderWeather>
        <HeaderH1>Weather app</HeaderH1>
      </HeaderWeather>
      <Main id="main">
        <SearchWrapper>
          <InputWeather
            value={inputCity}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              onChangeInput(event);
            }}
            placeholder="Enter city name"
            name="input-city"
          />
          <ButtonWeather onClick={handlerButtonWeather} />
        </SearchWrapper>
        {weatherData && <WeatherInfo weatherData={weatherData} />}
        <ErrorInfo />
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
// ERROR_COD.textContent = result.cod;
// ERROR_CITY.textContent = result.message;
