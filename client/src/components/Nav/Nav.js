import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "../../weather-icons/css/weather-icons.min.css";

import "./Nav.scss";
import ImageFinance from "../../images/finance.png";
import LogoForDarkMode from "../../images/time.png";
import Dawer from "../Dawer/Dawer";

export default function Nav(props) {
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const dark = JSON.parse(localStorage.getItem("dark"));

  const [darkMode, setDarkMode] = useState(dark || false);
  const [dataWeatherCurrent, setDataWeatherCurrent] = useState({});
  const [dataWeather, setDataWeather] = useState({});
  const Blur = useSelector((state) => state.Blur);

  const { isBlur, blurHome } = props;

  const dispatch = useDispatch();
  let history = useHistory();

  const handleDarkMode = (event) => {
    let value = event.target.checked;
    setDarkMode(value);
    dispatch({
      type: "DARK_MODE",
      action: value,
    });
    localStorage.setItem("dark", JSON.stringify(value));
  };
  const handleValueDarkModeLocal = () => {
    dispatch({
      type: "DARK_MODE",
      action: dark,
    });
  };

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
      setDataWeatherCurrent(res.data.current);
      setDataWeather(res.data.current.weather);
    });
  };

  //handle SignOut
  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/user/login");
    window.location.reload();
  };
  useEffect(() => {
    handleValueDarkModeLocal();
    fetchDataWeather();
  }, []);
  const id = dataWeather[0] && dataWeather[0].id;
  // Exchange celsius

  const celsiusTemp = dataWeatherCurrent.temp - 273.15;
  const celsiusTempToFixed = celsiusTemp && celsiusTemp.toFixed();

  return (
    <nav
      className={darkMode ? "nav dark-nav" : "nav"}
      id={isBlur || blurHome || Blur ? "blur-nav" : null}
    >
      <div className="container-nav ">
        <div className="logo-signup logo-nav">
          <img
            src={darkMode ? LogoForDarkMode : ImageFinance}
            id="logo-nav"
            alt=""
          />
          <h1 className={darkMode ? "dart-logo-dark" : null}>money</h1>
        </div>

        <div className="container-link-nav">
          <Link className="link-nav" to="/" id="link-nav-preponsive">
            Home
          </Link>
          <div className="container-profile" id="link-nav-preponsive">
            <Link className="link-nav" to="/user/profile">
              <div
                className="avatar-nav"
                id={darkMode ? "dark-avatar-nav" : null}
                style={{
                  backgroundImage: `url(${
                    CheckLogin.data && CheckLogin.data.avatarUrl
                  })`,
                }}
              ></div>
            </Link>
            <Link className="link-nav" to="/user/profile">
              <span>{CheckLogin.data && CheckLogin.data.name}</span>
            </Link>
            <span onClick={handleSignOut} className="span-sign-out">
              {" "}
              / Sign Out
            </span>
          </div>
          <div
            className={
              darkMode ? "weather-nav dark-weather-nav" : "weather-nav"
            }
          >
            <i className={"wi wi-owm-" + id} id="icon-weather-nav"></i>
            <span>{celsiusTempToFixed}</span>{" "}
            <i className="wi wi-celsius" id="icon-celsius-nav"></i>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="chk"
              onChange={handleDarkMode}
              checked={darkMode}
            />
            <label className="label" for="chk">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball"></div>
            </label>
          </div>
          <Dawer />
        </div>
      </div>
    </nav>
  );
}
