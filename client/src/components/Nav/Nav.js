import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
//scss
import "../../assets/weather-icons/css/weather-icons.min.css";
import "./Nav.scss";
//icon
import ImageFinance from "../../assets/images/finance.png";
import LogoForDarkMode from "../../assets/images/time.png";
//components
import Dawer from "../Dawer/Dawer";
// AIP
import apiWeather from "../../services/apiOtherServies/apiWeather";
import apiNav from "../../services/apiClientAxios/";

export default function Nav(props) {
  const dark = JSON.parse(localStorage.getItem("dark"));
  const [darkMode, setDarkMode] = useState(dark || false);
  const [dataWeatherCurrent, setDataWeatherCurrent] = useState({});
  const [dataWeather, setDataWeather] = useState({});

  const { isBlur, blurHome } = props;

  const CheckLogin = useSelector((state) => state.CheckLogin);
  const Blur = useSelector((state) => state.Blur);
  const dispatch = useDispatch();
  let history = useHistory();

  //handle Dark Mode
  const handleDarkMode = (event) => {
    let value = event.target.checked;
    setDarkMode(value);
    dispatch({
      type: "DARK_MODE",
      action: value,
    });
    localStorage.setItem("dark", JSON.stringify(value));
  };
  //handle SignOut
  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/user/login");
    window.location.reload();
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      apiWeather.getWeather(latitude, longitude).then((res) => {
        setDataWeatherCurrent(res.data.current);
        setDataWeather(res.data.current.weather);
      });
    });
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
          <Link style={{ display: "flex" }} to="/">
            <img
              src={darkMode ? LogoForDarkMode : ImageFinance}
              id="logo-nav"
              alt=""
            />
            <h1 className={darkMode ? "dart-logo-dark" : null}>money</h1>
          </Link>
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
