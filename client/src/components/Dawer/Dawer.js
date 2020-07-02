import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "../../weather-icons/css/weather-icons.min.css";

import "./Dawer.scss";
import "../Nav/Nav.scss";

import Logo from "../../images/finance.png";
import DarkLogo from "../../images/time.png";

export default function Dawer() {
  const [visible, setVisible] = useState(false);

  const CheckLogin = useSelector((state) => state.CheckLogin);
  const darkMode = JSON.parse(localStorage.getItem("dark"));

  const [dataWeatherCurrent, setDataWeatherCurrent] = useState({});
  const [dataWeather, setDataWeather] = useState({});

  const dispatch = useDispatch();
  let history = useHistory();

  //handle SignOut
  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/user/login");
    window.location.reload();
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
  useEffect(() => {
    fetchDataWeather();
  }, []);
  const id = dataWeather[0] && dataWeather[0].id;
  // Exchange celsius
  const celsiusTemp = dataWeatherCurrent.temp - 273.15;
  const celsiusTempToFixed = celsiusTemp && celsiusTemp.toFixed();
  // Show dawer
  const showDrawer = () => {
    setVisible(true);
    dispatch({
      type: "BLUR_ON",
      action: true,
    });
  };
  const onClose = () => {
    setVisible(false);
    dispatch({
      type: "BLUR_OFF",
      action: false,
    });
  };
  const handleDeleteBlur = () => {
    dispatch({
      type: "BLUR_OFF",
      action: false,
    });
  };
  return (
    <div className="container-dawer">
      <button type="button" onClick={showDrawer} className="bt-bar">
        <i className="fas fa-bars"></i>
      </button>
      <Drawer
        title={
          <div
            className={
              darkMode ? "dawer-header dark-header-dawer" : "dawer-header"
            }
          >
            <img src={darkMode ? DarkLogo : Logo} alt="" />
            money
          </div>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        drawerStyle={darkMode ? { backgroundColor: "#141414" } : null}
        headerStyle={
          darkMode
            ? { backgroundColor: "#141414", borderColor: "#333333" }
            : null
        }
      >
        <div className="container-body-dawer">
          <Link
            className="link-nav link-dawer"
            to="/"
            onClick={handleDeleteBlur}
          >
            <div>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
            </div>
            Home
          </Link>

          <div className="dawer-container-profile">
            <div className="weather-and-signout-dawer">
              <button
                onClick={handleSignOut}
                className="span-sign-out bt-sign-out"
                id={darkMode ? "bt-dark-dawer" : null}
              >
                Sign Out
              </button>
              <div
                className={
                  darkMode ? "weather-nav dark-weather-nav" : "weather-nav"
                }
              >
                <i className={"wi wi-owm-" + id} id="icon-weather-nav"></i>
                <span>{celsiusTempToFixed}</span>{" "}
                <i className="wi wi-celsius" id="icon-celsius-nav"></i>
              </div>
            </div>

            <div
              className="container-profile dawr-profile"
              onClick={handleDeleteBlur}
            >
              <Link className="link-nav" to="/user/profile">
                <div
                  className="avatar-nav avatar-dawer"
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
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
