import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch } from "react-redux";

import "./CardWeatherMini.scss";
import "../../weather-icons/css/weather-icons.min.css";
import "../../weather-icons/css/weather-icons-wind.min.css";
export default function CardWeatherMini() {
  const [dataWeather, setDataWeather] = useState({});
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const fetchDataWeather = () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&%20exclude={part}&appid=2a5a281a8096a8e7c005608442b3ac7f"
      );
      setDataWeather(res.data.current);
      setCity(res.data.timezone);
      setWeather(res.data.current.weather);
    });
  };

  useEffect(() => {
    fetchDataWeather();
  }, []);
  // Replace "/"
  const regex = /_/g;
  const findIndex = city.indexOf("/");
  let cutString = city.slice(findIndex + 1);
  const newCity = cutString.replace(regex, " ");

  // Time now
  const timeNow = Date(dataWeather.dt);
  let weatherTime = moment(timeNow).format("MMMM DD YYYY, h:mm a");
  // Status weather
  const statusWeather = weather[0] && weather[0].main;
  const idWeather = weather[0] && weather[0].id;
  // Exchange celsius
  const celsiusTemp = dataWeather.temp - 273.15;
  const celsiusTempToFixed = celsiusTemp && celsiusTemp.toFixed();
  const selsiusFeelsLike = dataWeather.feels_like - 273.15;
  const selsiusFeelsLikeToFixed =
    selsiusFeelsLike && selsiusFeelsLike.toFixed();
  // wind_speed
  const windSpeed = dataWeather.wind_speed;
  const windSpeedToFixed = windSpeed && windSpeed.toFixed();

  return (
    <div className="container-weather-mini">
      <div className="header-weather-mini">
        <h3>
          <i className="fas fa-map-marker"></i> {newCity}
        </h3>
        <span>{weatherTime}</span>
      </div>
      <div className="main-weather-mini">
        <div className="status-weather">
          <div className="status">
            <i className={"wi wi-owm-" + idWeather}></i>
            <span>{statusWeather}</span>
          </div>
          <div className="wind">
            <i className={"wi wi-wind-beaufort-" + windSpeedToFixed}></i>
            <span>{windSpeed} m/s</span>
          </div>
        </div>
        <div className="tem-weather">
          <div className="temperture">
            <span>{celsiusTempToFixed}</span>
            <i className="wi wi-celsius"></i>
          </div>
          <div className="feel-tem">
            <span>
              Feels like: {selsiusFeelsLikeToFixed} <sup>o</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
